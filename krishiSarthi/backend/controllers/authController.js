import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import pool from "../config/db.js"

export const register = async (req, res) => {
  try {
    const {
      fullName,
      mobile,
      email,
      password,
    } = req.body

    if (!fullName || !mobile || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      })
    }

    const existingEmail = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    )

    if (existingEmail.rows.length > 0) {
      return res.status(409).json({
        message: "Email already registered",
      })
    }

    const existingMobile = await pool.query(
      "SELECT id FROM users WHERE mobile = $1",
      [mobile]
    )

    if (existingMobile.rows.length > 0) {
      return res.status(409).json({
        message: "Mobile number already registered",
      })
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const result = await pool.query(
      `
      INSERT INTO users
      (full_name, mobile, email, password_hash, role)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, full_name, mobile, email, role, created_at
      `,
      [
        fullName,
        mobile,
        email,
        passwordHash,
        "farmer",
      ]
    )

    return res.status(201).json({
      message: "Farmer registered successfully",
      user: result.rows[0],
    })

  } catch (error) {
    console.error("Registration error:", error)

    return res.status(500).json({
      message: "Internal server error",
    })
  }
}


// LOGIN
export const login = async (req, res) => {
  try {
    const {
      emailOrMobile,
      password,
      role,
    } = req.body

    if (!emailOrMobile || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
      })
    }

    // Find user by email OR mobile
    const result = await pool.query(
      `
      SELECT *
      FROM users
      WHERE email = $1 OR mobile = $1
      `,
      [emailOrMobile]
    )

    if (result.rows.length === 0) {
      return res.status(401).json({
        message: "Invalid email/mobile or password",
      })
    }

    const user = result.rows[0]

    // Check role
    const selectedRole = role.toLowerCase()

    if (user.role !== selectedRole) {
      return res.status(403).json({
        message: "Invalid role for this account",
      })
    }

    // Compare password with bcrypt hash
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password_hash
    )

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email/mobile or password",
      })
    }

    // Generate JWT
    const token = jwt.sign(
      {
        userId: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    )

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        fullName: user.full_name,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
      },
    })

  } catch (error) {
    console.error("Login error:", error)

    return res.status(500).json({
      message: "Internal server error",
    })
  }
}