import dataFetch from '@/utils/dataFetch'
import { Button } from './Button'
const entrenamientos = await dataFetch.entrenamientosPorUsuario(1)
const nombreEntrenamientos = await dataFetch.nombreEntrenamientosPorUsuario(1)
export const EntrenamientosList = () => {
  const handleDelete = async (entrenamientoId) => {
    'use server'
    await dataFetch.borrarEntrenamiento(entrenamientoId)
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-4xl p-6'>Entrenamientos</h1>
      <ul className='w-full flex flex-col items-start justify-center gap-10 p-20'>
        {nombreEntrenamientos.map((entrenamiento) => (
          <li key={entrenamiento.nombre_entrenamiento}>
            <h2 className='text-xl font-semibold border-b flex items-center gap-3'>
              <Button
                className='px-2 py-1'
                onClick={handleDelete(entrenamiento.id)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-trash-filled'
                  width='30'
                  height='30'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='#ffffff'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path
                    d='M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z'
                    strokeWidth='0'
                    fill='currentColor'
                  />
                  <path
                    d='M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z'
                    strokeWidth='0'
                    fill='currentColor'
                  />
                </svg>
              </Button>
              {entrenamiento.nombre_entrenamiento}
            </h2>
            <ul>
              {entrenamientos
                .filter(
                  (ent) =>
                    ent.nombre_entrenamiento ===
                    entrenamiento.nombre_entrenamiento
                )
                .map((ent) => (
                  <li key={ent.id_ejercicio} className='flex gap-5'>
                    <h3>{ent.nombre_ejercicio}</h3>
                    <span>-</span>
                    <p>{ent.disciplina}</p>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}