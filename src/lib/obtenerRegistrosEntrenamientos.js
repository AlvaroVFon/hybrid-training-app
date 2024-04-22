'use server'
import { sql } from '@vercel/postgres'
export const obtenerRegistrosEntrenamientos = async (date, userID) => {
  const { rows } =
    await sql`SELECT re."entrenamientoID",re."ejercicioID",ej.nombre, re.series, re.repeticiones, re.peso, ent."nombreEntrenamiento" FROM "registros_entrenamientos" re
    INNER JOIN ejercicios ej on re."ejercicioID" = ej."ejercicioID"
    INNER JOIN entrenamientos ent on re."entrenamientoID" = ent."entrenamientoID"
    INNER JOIN usuarios u on ent."userID" = u."userID" where re."fechaCreacion" = ${date} and u."userID" = ${userID};`
  return rows
}
