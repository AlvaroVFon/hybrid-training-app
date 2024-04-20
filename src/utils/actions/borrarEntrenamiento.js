'use server'
import { sql } from '@vercel/postgres'

export async function borrarEntrenamiento(id) {
  await sql`DELETE FROM entrenamientos WHERE id = ${id};`
}
