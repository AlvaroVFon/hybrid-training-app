import { sql } from '@vercel/postgres'

export const getEntrenamientoID = async () => {
  const { rows } = await sql`
  SELECT max("entrenamientoID") FROM "entrenamientos";
  `
  return rows
}
