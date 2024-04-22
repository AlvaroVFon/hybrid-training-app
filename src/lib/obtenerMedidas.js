import { sql } from '@vercel/postgres'
export const obtenerMedidas = async (userID) => {
  const { rows } =
    await sql`SELECT * from caracteristicas where "userID" = ${userID};`
  return rows
}
