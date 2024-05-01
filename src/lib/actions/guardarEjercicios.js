'use server'
import { sql } from '@vercel/postgres'
import { redirect } from 'next/dist/server/api-utils'
export const guardarEjercicios = async (formData) => {
  const idUsuario = 1
  const nombreEntrenamiento = formData.get('nombreEntrenamiento')
  const fechaCreacion = new Date().toISOString().split('T')[0]
  const entrenamientoID = formData.get('entrenamientoID')

  const ejercicio1 = formData.get('ejercicio1')
  const ejercicio2 = formData.get('ejercicio2')
  const ejercicio3 = formData.get('ejercicio3')
  const ejercicio4 = formData.get('ejercicio4')
  const ejercicio5 = formData.get('ejercicio5')
  const ejercicio6 = formData.get('ejercicio6')

  console.log(nombreEntrenamiento, entrenamientoID)
  await sql`
    INSERT INTO entrenamientos ("entrenamientoID","userID","nombreEntrenamiento","fechaCreacion") VALUES (${entrenamientoID},${idUsuario},${nombreEntrenamiento},${fechaCreacion}) 
  `
  await sql`
      INSERT INTO ejercicios_entrenamientos ("entrenamientoID","ejercicioID") VALUES (${entrenamientoID},${ejercicio1}),
      (${entrenamientoID},${ejercicio2}),(${entrenamientoID},${ejercicio3}),(${entrenamientoID},${ejercicio4}),
      (${entrenamientoID},${ejercicio5}),(${entrenamientoID},${ejercicio6})
    `
  redirect('/entrenamientos')
}
