import { signup } from '@/actions/auth'

async function LoginForm() {
  return (
    <form
      action={signup}
      className='flex flex-col w-full h-screen items-center justify-center gap-16'
    >
      <input
        type='text'
        name='email'
        placeholder='Email'
        className='bg-[#202020] border-b p-3 focus:outline-none'
      />
      <div className=''>
        <input
          type='password'
          name='password'
          placeholder='Password'
          className='bg-[#202020] border-b p-3 focus:outline-none'
        />
      </div>
      <p>
        Don&apos;t have an account?{' '}
        <a href='/signup' className='font-semibold text-orange-400'>
          Sign up
        </a>
      </p>
      <button className='border p-3 rounded-md'>Submit</button>
    </form>
  )
}
export default LoginForm
