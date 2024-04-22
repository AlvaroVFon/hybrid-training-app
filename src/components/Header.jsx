'use client'
import { Button } from './Button'
import { useRouter } from 'next/navigation'
export const Header = () => {
  const date = new Date().toISOString().split('T')[0]
  const router = useRouter()
  const toggleMenu = () => {
    const menu = document.querySelector('nav')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
  }
  return (
    <header className='relative flex justify-between items-center p-5 z-50'>
      <a href='/'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='80'
          height='80'
          viewBox='0 0 24 24'
        >
          <path
            fill='#fb923c'
            d='m8.985 7.443l-2.94-.354c-.686-.082-1.028-.124-1.313-.053c-.38.095-.703.326-.899.642c-.147.236-.192.554-.28 1.188c-.09.635-.134.952-.057 1.216c.102.351.351.65.692.832c.256.136.966.222 1.651.304l-.883 6.298c-.685-.082-1.396-.168-1.68-.096c-.38.094-.703.325-.9.64c-.146.238-.19.555-.28 1.19c-.089.634-.133.951-.057 1.215c.103.351.352.65.693.832c.255.137.598.178 1.283.26l2.94.354c.686.082 1.028.124 1.313.052a1.47 1.47 0 0 0 .899-.64c.147-.238.192-.555.28-1.19c.09-.634.134-.95.057-1.215a1.393 1.393 0 0 0-.692-.832c-.256-.136-.966-.222-1.651-.304l.883-6.298c.685.082 1.396.168 1.68.096c.38-.094.703-.325.9-.64c.146-.238.19-.555.28-1.19c.089-.634.133-.951.057-1.215a1.393 1.393 0 0 0-.693-.832c-.255-.137-.598-.178-1.283-.26'
            opacity='.5'
          />
          <path
            fill='#ffffff'
            d='m20.286 16.083l-2.712.7c-.632.163-.947.244-1.224.209a1.416 1.416 0 0 1-.93-.517c-.17-.213-.255-.517-.424-1.125c-.17-.608-.254-.912-.218-1.179c.049-.355.242-.677.537-.895c.222-.164.877-.333 1.508-.496l-1.68-6.036c-.632.163-1.286.332-1.563.297a1.416 1.416 0 0 1-.93-.517c-.17-.213-.255-.517-.424-1.125c-.17-.608-.254-.912-.218-1.179a1.34 1.34 0 0 1 .538-.895c.221-.164.537-.245 1.168-.408l2.712-.7c.632-.163.947-.244 1.224-.209c.37.047.704.233.93.517c.17.213.255.517.424 1.125c.17.608.254.912.218 1.179a1.341 1.341 0 0 1-.537.895c-.222.164-.877.333-1.508.496l1.68 6.036c.631-.163 1.286-.332 1.563-.297c.37.047.704.233.93.517c.17.213.255.517.424 1.125c.17.608.254.912.218 1.179a1.34 1.34 0 0 1-.538.895c-.221.164-.537.245-1.169.408'
          />
        </svg>
      </a>

      <Button handleClick={toggleMenu} className=''>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='50'
          height='50'
          viewBox='0 0 24 24'
        >
          <path fill='#ffffff' d='M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z' />
        </svg>
      </Button>
      <nav className='hidden flex-col absolute w-full h-screen items-center top-0 left-0 gap-16 bg-[#202020] pt-[50px] font-light text-xl'>
        <a href='#' onClick={toggleMenu}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-x'
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
            <path d='M18 6l-12 12' stroke='#fb923c' />
            <path d='M6 6l12 12' stroke='#fb923c' />
          </svg>
        </a>
        <a href='/entrernamientos'>Entrenamientos</a>
        <a href={`/registros?date=${date}`}>Registros</a>
        <a href={`/medidas?date=${date}`}>Medidas</a>
        <a href='/perfil'>Perfil</a>
        <a href='/logout'>Logout</a>
      </nav>
    </header>
  )
}
