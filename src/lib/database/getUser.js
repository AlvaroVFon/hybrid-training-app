import { sql } from '@vercel/postgres'

export const getUser = async (email, password) => {
  const user = await pool.query(
    sql`SELECT * FROM usuarios WHERE email = ${email} AND password = ${password}`
  )
  return user
}
