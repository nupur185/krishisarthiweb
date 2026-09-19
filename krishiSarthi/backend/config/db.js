// import pg from "pg"
import postgres from 'postgres'
import dotenv from "dotenv"

dotenv.config()

// const { Pool } = pg

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// })

// export default pool



const connectionString = process.env.DATABASE_URL
const sql = postgres(connectionString)

export default sql