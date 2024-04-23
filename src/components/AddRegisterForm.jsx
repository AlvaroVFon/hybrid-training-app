import { obtenerEntrenamientos } from '@/lib/database/obtenerEntrenamientos'
import styles from '@/styles/AddEntrenamiento.module.css'

async function AddRegisterForm() {
  const entrenamientos = await obtenerEntrenamientos(1)
  return (
    <>
      <form className='flex flex-col items-center justify-center'>
        <select name='select' className={styles.slct}>
          <option value='' selected disabled className={styles.opt}>
            Selecciona un entrenamiento
          </option>
          {entrenamientos.map((entrenamiento) => (
            <option
              key={entrenamiento.entrenamientoID}
              value={entrenamiento.entrenamientoID}
              className={styles.opt}
            >
              {entrenamiento.nombreEntrenamiento}
            </option>
          ))}
        </select>
        <button className='p-5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-square-rounded-plus'
            width='44'
            height='44'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#ffffff'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z' />
            <path d='M15 12h-6' />
            <path d='M12 9v6' />
          </svg>
        </button>
      </form>
    </>
  )
}
export default AddRegisterForm
