import { sql } from '@vercel/postgres'
export const insertUser = async (
  nombre,
  apellido,
  email,
  password,
  rol = 'usuario'
) => {
  const userId = await sql`select max("userID") from usuarios`.then((res) => {
    return res.rows[0].max + 1
  })
  const user =
    await sql`INSERT INTO usuarios ("userID",nombre,apellido,email,password,rol) VALUES (${userId},${nombre},${apellido},${email}, ${password},${rol})`
  return user
}
