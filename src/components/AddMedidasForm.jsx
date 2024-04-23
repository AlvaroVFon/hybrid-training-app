import { guardarMedidas } from '@/lib/actions/guardarMedidas'
import styles from '@/styles/calendar.module.css'
const date = new Date().toISOString().split('T')[0]
const userId = '1'
function AddMedidasComp() {
  return (
    <form
      className='flex flex-col items-center justify-center mt-10'
      action={guardarMedidas}
    >
      <input
        type='date'
        className={styles.calendar}
        name='fechaCreacion'
        defaultValue={date}
        required
      />
      <div className='flex flex-col gap-8 items-end mt-10'>
        <input
          type='number'
          placeholder='Peso:'
          className='border-b bg-transparent p-3'
          name='peso'
          required
        />
        <input
          type='number'
          placeholder='Altura:'
          className='border-b bg-transparent p-3'
          name='altura'
          required
        />
        <input
          type='number'
          placeholder='Porcentaje Graso:'
          className='border-b bg-transparent p-3'
          name='porcentajeGraso'
          required
        />
        <input
          type='text'
          name='userId'
          value={userId}
          className='hidden'
          readOnly
        />
        <button className='border text-white p-2 rounded-md'>Guardar</button>
      </div>
    </form>
  )
}
export default AddMedidasComp
