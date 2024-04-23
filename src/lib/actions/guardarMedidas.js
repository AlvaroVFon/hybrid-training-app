'use server'
import { redirect } from 'next/navigation'
import { sql } from '@vercel/postgres'
export const guardarMedidas = async (formData) => {
  const peso = formData.get('peso')
  const altura = formData.get('altura')
  const porcentajeGraso = formData.get('porcentajeGraso')
  const fechaCreacion = formData.get('fechaCreacion')
  const idUsuario = 1

  const { rows } =
    await sql`INSERT INTO caracteristicas (userid,altura,peso,porcentajegraso,fechacreacion) VALUES (${idUsuario},${altura},${peso},${porcentajeGraso},${fechaCreacion})`

  redirect('/medidas')
}
