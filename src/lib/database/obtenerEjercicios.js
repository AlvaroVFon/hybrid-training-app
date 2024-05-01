'use server'
import { sql } from '@vercel/postgres'
export async function obtenerEjercicios() {
  const { rows } = await sql`
    SELECT ej."ejercicioID", ej.nombre FROM ejercicios ej
  `
  return rows
}
