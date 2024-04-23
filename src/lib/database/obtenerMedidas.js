import { sql } from '@vercel/postgres'
export const obtenerMedidas = async (userID = 1) => {
  const { rows } =
    await sql`SELECT * from caracteristicas WHERE userid = 1 ORDER BY fechaCreacion DESC`
  console.log(rows)
  return rows
}
