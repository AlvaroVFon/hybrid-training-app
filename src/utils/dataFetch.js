import { sql } from '@vercel/postgres'
const dataFetch = {
  entrenamientosPorUsuario: async (id) => {
    //Queries
    const { rows } =
      await sql`SELECT ej.nombre as "nombre_ejercicio",ej.id as "id_ejercicio",e.nombre_entrenamiento, d.disciplina FROM entrenamientos e INNER JOIN usuarios u ON e.user_ID = u.id
    INNER JOIN ejercicios_entrenamientos ee ON ee.entrenamiento_id = e.id
    INNER JOIN ejercicios ej ON ej.id = ee.ejercicio_id
    INNER JOIN disciplina d ON d.id = ej.disciplina_id
    WHERE e.user_ID = ${id} ORDER BY e.fecha_creacion DESC;`
    return rows
  },

  caracteristicasPorUsuario: async (id, fechaCreacion) => {
    const { rows } =
      await sql`SELECT altura,peso, portenaje_graso FROM caracteristicas WHERE "user_ID" = ${id} and "fecha_creacion" = ${fechaCreacion};`
    return rows
  },
  //inserts

  //updates

  //deletes

  //auth
  login: async (email, password) => {
    const { rows } =
      await sql`SELECT * FROM usuarios WHERE email = ${email} AND password = ${password};`
    return rows
  },
}
export default dataFetch
