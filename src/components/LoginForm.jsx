'use client'
import { login } from '@/lib/actions/login'
function LoginForm() {
  const onSubmit = async (e) => {
    e.preventDefault()
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    const res = await login(user.email, user.password)
    if (res) {
      const { rol } = res
      if (rol === 'admin') {
        window.location.href = '/admin'
      } else {
        window.location.href = '/user'
      }
      sessionStorage.setItem('user', JSON.stringify(user))
    } else {
      alert('Usuario o contraseña incorrectos')
      window.location.reload()
    }
  }
  return (
    <form
      onSubmit={onSubmit}
      className='flex flex-col w-full h-screen items-center justify-center gap-16'
    >
      <input
        type='text'
        name='email'
        placeholder='Email'
        className='bg-[#202020] border-b p-3 focus:outline-none'
        required
      />
      <div className=''>
        <input
          type='password'
          name='password'
          placeholder='Password'
          className='bg-[#202020] border-b p-3 focus:outline-none'
          required
        />
      </div>
      <p>
        Don&apos;t have an account?{' '}
        <a href='/signup' className='font-semibold text-orange-400'>
          Sign up
        </a>
      </p>
      <button onSubmit={onSubmit} className='border p-2 rounded-md'>
        Submit
      </button>
    </form>
  )
}
export default LoginForm
