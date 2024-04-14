'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='h-screen flex flex-col items-center justify-center gap-12'>
      <div className='w-2/3 grid gap-6'>
        <h1 className='text-4xl font-bold text-center'>
          Welcome to Hybrid Training App
        </h1>
        <p className='text-lg text-center font-light'>
          Where you will find all you need to improve your fitness level
        </p>
      </div>
      <Image src='/logo.png' width={200} height={200} alt='logo' />
      <Link
        href='/login'
        className='rounded-md bg-slate-700 p-3 font-semibold hover:bg-slate-500'
      >
        Star now
      </Link>
    </main>
  )
}
