import { sql } from '@vercel/postgres'
export const obtenerEjerciciosEntrenamiento = async (entrenamientoID) => {
  const { rows } = await sql`SELECT ej."nombre" from ejercicios ej
    INNER JOIN ejercicios_entrenamientos ee on ej."ejercicioID" = ee."ejercicioID"
    INNER JOIN entrenamientos ent on ee."entrenamientoID" = ent."entrenamientoID" where ent."entrenamientoID"= ${entrenamientoID};`
  return rows
}
