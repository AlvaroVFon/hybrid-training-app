import { obtenerMedidas } from '@/lib/obtenerMedidas'
async function MedidasList() {
  const medidas = await obtenerMedidas(1)
  console.log(medidas)
  return (
    <div>
      <h1>Medidas</h1>
      <p>Formulario para añadir un registro de medidas</p>
    </div>
  )
}
export default MedidasList
