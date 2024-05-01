import { register } from '@/lib/actions/register'
function SignupForm() {
  return (
    <form
      action={register}
      className='flex flex-col w-full h-screen items-center justify-center gap-16'
    >
      <input
        type='text'
        name='nombre'
        placeholder='Nombre'
        className='bg-[#202020] border-b p-3 focus:outline-none'
        required
      />{' '}
      <input
        type='text'
        name='apellido'
        placeholder='apellido'
        className='bg-[#202020] border-b p-3 focus:outline-none'
        required
      />
      <input
        type='text'
        name='email'
        placeholder='Email'
        className='bg-[#202020] border-b p-3 focus:outline-none'
        required
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        className='bg-[#202020] border-b p-3 focus:outline-none'
        required
      />
      <button className='border p-2 rounded-md'>Signup</button>
    </form>
  )
}
export default SignupForm
