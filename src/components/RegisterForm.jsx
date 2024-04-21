import styles from '@/styles/calendar.module.css'
export const RegisterForm = () => {
  return (
    <form className='flex flex-col items-center p-10 gap-10'>
      <button href='/registros/add' className='flex items-center gap-3'>
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
        <span>Añadir registro</span>
      </button>
      <div className='flex justify-center items-center'>
        <input type='date' name='date' className={styles.calendar} />
      </div>
    </form>
  )
}
