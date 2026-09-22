import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

const { Pool } = pg

console.log(
  "DATABASE HOST:",
  process.env.DATABASE_URL
    ? new URL(process.env.DATABASE_URL).hostname
    : "DATABASE_URL NOT FOUND"
)

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export default pool
