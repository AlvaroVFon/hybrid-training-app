import { guardarEjercicios } from '@/lib/actions/guardarEjercicios'
import { getEntrenamientoID } from '@/lib/database/getEntrenamientoID'
import SelectEjercicios from './SelectEjercicios'
async function AddEntrenamientoForm() {
  const entrenamientoID = await getEntrenamientoID()
  console.log(entrenamientoID[0].max)
  return (
    <form action={guardarEjercicios} className='flex flex-col items-center p-5'>
      <input
        type='text'
        placeholder='Nombre del entrenamiento'
        name='nombreEntrenamiento'
        className='bg-transparent border-b focus:outline-none p-3 mb-10'
        required
      />
      <div className='flex flex-col gap-8 items-center just'>
        <SelectEjercicios name='ejercicio1' />
        <SelectEjercicios name='ejercicio2' />
        <SelectEjercicios name='ejercicio3' />
        <SelectEjercicios name='ejercicio4' />
        <SelectEjercicios name='ejercicio5' />
        <SelectEjercicios name='ejercicio6' />
      </div>
      <input
        type='hidden'
        name='entrenamientoID'
        value={entrenamientoID[0].max + 1}
      />
      <button
        type='submit'
        className='bg-[#202020] text-white p-3 border rounded-lg mt-6'
      >
        Guardar
      </button>
    </form>
  )
}
export default AddEntrenamientoForm
