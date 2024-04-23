import { obtenerMedidas } from '@/lib/database/obtenerMedidas'
async function MedidasList() {
  const medidas = await obtenerMedidas()
  return (
    <div className='flex flex-col items-center justify-center mt-28 pb-8'>
      {medidas.length === 0 && <p>No hay medidas para esta fecha</p>}
      {medidas.map((medida, index) => (
        <div key={index} className='flex flex-col gap-3 font-thin'>
          <div className='flex flex-col border-b p-3'>
            <p className='font-semibold'>
              {medida.fechacreacion.toISOString().split('T')[0]}
            </p>
          </div>
          <div className='flex flex-col'>
            <div className='flex gap-3'>
              <span>Peso: </span>
              <p>{medida.peso}kg</p>
            </div>
            <div className='flex gap-3'>
              <span>Altura: </span>
              <p>{medida.altura}cm</p>
            </div>
            <div className='flex gap-3'>
              <span>Porcentaje Graso: </span>
              <p>{medida.porcentajeGraso}%</p>
            </div>
            <div className='flex gap-3'>
              <span>IMC: </span>
              <p>
                {(medida.peso / Math.pow(medida.altura / 100, 2)).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default MedidasList
