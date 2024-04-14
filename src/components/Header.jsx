'use client'
import { useState } from 'react'
import Image from 'next/image'
export const Header = () => {
  const [isLogged, setIsLogged] = useState(false)
  return (
    <header className='flex justify-between items-center p-5'>
      <p className='flex flex-col max-w-[90px]'>
        {isLogged ? (
          <span>
            Welcome back, <span>User</span>
          </span>
        ) : (
          <span className=''>
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
          </span>
        )}
      </p>
      <a href='/'>
        <Image src='/logo.png' width={100} height={100} alt='logo' />
      </a>
      <button>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='50'
          height='50'
          viewBox='0 0 24 24'
        >
          <path fill='#ffffff' d='M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z' />
        </svg>
      </button>
    </header>
  )
}
