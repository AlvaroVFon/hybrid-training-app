import { obtenerEjerciciosEntrenamiento } from '@/lib/database/obtenerEjerciciosEntrenamiento'
async function AddEjerciciosForm({ searchParams }) {
  const { select } = await searchParams
  const ejercicios = await obtenerEjerciciosEntrenamiento(select)
  return (
    <form className='flex flex-col items-center pb-5'>
      {ejercicios.map((ejercicio, index) => (
        <div className='p-10' key={index}>
          <label htmlFor='' className='text-xl'>
            {ejercicio.nombre}
          </label>
          <div
            key={ejercicio.ejercicioID}
            className='flex flex-col items-center justify-center gap-3 font-light '
          >
            <input
              type='text'
              name='peso'
              placeholder='Peso'
              className='bg-transparent border-b p-1 focus:outline-none'
            />
            <input
              type='text'
              name='series'
              placeholder='Series'
              className='bg-transparent border-b p-1 focus:outline-none'
            />
            <input
              type='text'
              name='repeticiones'
              placeholder='Repeticiones'
              className='bg-transparent border-b p-1 focus:outline-none'
            />
          </div>
        </div>
      ))}
      {select && (
        <button className='p-3 border rounded-lg hover:bg-orange-300 hover:text-black  '>
          Guardar
        </button>
      )}
    </form>
  )
}
export default AddEjerciciosForm
