import { obtenerRegistrosEntrenamientos } from '@/lib/obtenerRegistrosEntrenamientos'
export const RegisterList = async ({ searchParams }) => {
  const { date } = await searchParams
  const registros = await obtenerRegistrosEntrenamientos(date, 1)
  return (
    <div className='flex flex-col items-center mt-10'>
      {registros.length === 0 && <p>No hay registros para esta fecha</p>}
      <h1 className='font-bold p-3 text-xl'>
        {registros[0]?.nombreEntrenamiento}
      </h1>
      <ul>
        {registros.map((registro, index) => (
          <li key={index} className='flex flex-col gap-3 font-thin'>
            <div className='flex flex-col border-b p-3'>
              <p className='font-semibold'>{registro.nombre}</p>
            </div>
            <div className='flex flex-col'>
              <div className='flex gap-3'>
                <span>Peso: </span>
                <p>{registro.peso}kg</p>
              </div>
              <div className='flex gap-3'>
                <span>Series: </span>
                <p>{registro.series}</p>
              </div>
              <div className='flex gap-3'>
                <span>Repeticiones: </span>
                <p>{registro.repeticiones}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
