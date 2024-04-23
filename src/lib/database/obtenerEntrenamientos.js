'use server'
import { sql } from '@vercel/postgres'
export const obtenerEntrenamientos = async (userID) => {
  const { rows } =
    await sql`SELECT ent."nombreEntrenamiento", ent."entrenamientoID" from entrenamientos ent
    INNER JOIN usuarios u on ent."userID" = u."userID" where u."userID" = ${userID}
    ;`
  return rows
}
