import { useState } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router"
import { api } from "../../api/api"
import { useAuth } from "../../context/AuthContext"

function Login() {
  const navigate = useNavigate()
  const { loginUser } = useAuth()

  const [role, setRole] = useState("Farmer")
  const [emailOrMobile, setEmailOrMobile] = useState("")
  const [password, setPassword] = useState("")
const handleLogin = async (e) => {
  e.preventDefault()

  console.log("API BASE URL:", import.meta.env.VITE_API_BASE_URL)
  if (!role || !emailOrMobile.trim() || !password.trim()) {
    return
  }

  try {
    const data = await api("/auth/login", {
      method: "POST",
      body: JSON.stringify({
        emailOrMobile: emailOrMobile.trim(),
        password,
        role,
      }),
    })

    console.log("Login successful:", data)
    loginUser(data.user)

    // Navigate according to role
    if (role === "Farmer") {
      navigate("/farmer/home")
    } else if (role === "Procurement Officer") {
      navigate("/officer/procurement")
    } else if (role === "Government Officer") {
      navigate("/government/dashboard")
    }

  } catch (error) {
    console.error("Login error:", error)
    alert(error.message)
  }
}

  return (
    <div className="min-h-screen bg-[#f7f4ea] flex items-center justify-center px-4">
      <form
  onSubmit={handleLogin}
  className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border border-[#d5ddd3]"
>

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#174d35]">
            KrishiSarthi
          </h1>

          <p className="mt-2 text-sm text-[#6b776f]">
            Smart Procurement Ecosystem
          </p>
        </div>

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#183328]">
            Welcome Back
          </h2>

          <p className="mt-1 text-sm text-[#6b776f]">
            Login to continue
          </p>
        </div>

        {/* Role */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-[#183328]">
            Login as
          </label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-lg border border-[#d5ddd3] bg-white px-4 py-3 outline-none focus:border-[#174d35]"
          >
            <option>Farmer</option>
            <option>Procurement Officer</option>
            <option>Government Officer</option>
          </select>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-[#183328]">
            Email / Mobile Number
          </label>

          <input
            type="text"
            value={emailOrMobile}
            onChange={(e) => setEmailOrMobile(e.target.value)}
            required
            placeholder="Enter email or mobile number"
            className="w-full rounded-lg border border-[#d5ddd3] px-4 py-3 outline-none focus:border-[#174d35]"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-[#183328]">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
            className="w-full rounded-lg border border-[#d5ddd3] px-4 py-3 outline-none focus:border-[#174d35]"
          />
        </div>

        {/* Login */}
        <button
  type="submit"
          className="w-full rounded-lg bg-[#174d35] py-3 font-medium text-white transition hover:bg-[#123c2a]"
        >
          Login
        </button>


        <p className="mt-6 text-center text-sm text-[#6b776f]">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#174d35] hover:underline"
            >
              Register
            </Link>
          </p>

      
    </form>


    </div>
  )
}

export default Login
