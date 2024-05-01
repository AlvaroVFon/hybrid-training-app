import { obtenerEjercicios } from '@/lib/database/obtenerEjercicios'
async function SelectEjercicios({ name }) {
  const ejercicios = await obtenerEjercicios()
  return (
    <select
      name={name}
      id='ejercicios'
      className='bg-transparent border-b p-3 focus:outline-none'
    >
      <option value='' selected disabled>
        Selecciona un ejercicio
      </option>
      {ejercicios.map((ejercicio) => (
        <option
          key={ejercicio.ejercicioID}
          value={ejercicio.ejercicioID}
          name='ejercicioId'
          className='bg-[#202020] text-white'
        >
          {ejercicio.nombre}
        </option>
      ))}
    </select>
  )
}
export default SelectEjercicios
