'use client'
import Image from 'next/image'
import { Button } from './Button'
export const Header = () => {
  const toggleMenu = () => {
    const menu = document.querySelector('nav')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
  }
  return (
    <header className='relative flex justify-between items-center p-5 '>
      <p className='flex flex-col max-w-[90px]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          viewBox='0 0 256 256'
        >
          <path
            fill='#ffffff'
            d='M234.38 210a123.36 123.36 0 0 0-60.78-53.23a76 76 0 1 0-91.2 0A123.36 123.36 0 0 0 21.62 210a12 12 0 1 0 20.77 12c18.12-31.32 50.12-50 85.61-50s67.49 18.69 85.61 50a12 12 0 0 0 20.77-12M76 96a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52'
          />
        </svg>
      </p>
      <a href='/'>
        <Image src='/logo.png' width={100} height={100} alt='logo' priority />
      </a>

      <Button
        handleClick={toggleMenu}
        label={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 24 24'
          >
            <path fill='#ffffff' d='M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z' />
          </svg>
        }
        className=''
      />
      <nav className='hidden flex-col absolute w-full h-screen items-center top-0 left-0 gap-8 bg-[#202020] pt-[50px] font-light'>
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
            <path d='M18 6l-12 12' />
            <path d='M6 6l12 12' />
          </svg>
        </a>
        <a href='/entrenamientos'>Entrenamientos</a>
        <a href='/registros'>Registros</a>
        <a href='/medidas'>Medidas</a>
        <a href='/perfil'>Perfil</a>
        <a href='/logout'>Logout</a>
      </nav>
    </header>
  )
}
