'use client'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-24 items-center justify-center h-[60vh]'
    >
      <div className='flex flex-col gap-3'>
        <label htmlFor='username' className='text-xl text-left'>
          User name:{' '}
        </label>
        <input
          type='text'
          name='username'
          {...register('username', {
            required: 'This is a required field',
            minLength: {
              value: 4,
              message: 'This field must have at least 4 characters',
            },
          })}
          className='bg-transparent border-b-2 border-gray-400 focus:outline-none w-80'
        />
        {errors.username && (
          <span className='text-red-400'>{errors.username.message}</span>
        )}
      </div>
      <div className='flex flex-col gap-3'>
        <label htmlFor='password' className='text-xl'>
          Password:{' '}
        </label>
        <input
          type='password'
          name='password'
          {...register('password', {
            required: 'This is a required field',
            minLength: {
              value: 4,
              message: 'This field must have at least 4 characters',
            },
          })}
          className='bg-transparent border-b-2 border-gray-400 focus:outline-none w-80'
        />
        {errors.password && (
          <span className='text-red-400'>{errors.password.message}</span>
        )}
      </div>
      <div className='flex gap-16 items-center'>
        <Link href='/signup' className='italic px-4 py-2'>
          Sign up
        </Link>
        <button className='bg-white text-black px-4 py-2 rounded-lg'>
          Login
        </button>
      </div>
    </form>
  )
}
