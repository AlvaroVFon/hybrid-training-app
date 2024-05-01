import { sql } from '@vercel/postgres'

export const getUser = async (email, password) => {
  const user =
    await sql`SELECT * FROM usuarios WHERE email = ${email} AND password = ${password}`.then(
      (res) => {
        if (res.rowCount === 0) {
          return false
        } else {
          return res.rows[0]
        }
      }
    )

  return user
}
