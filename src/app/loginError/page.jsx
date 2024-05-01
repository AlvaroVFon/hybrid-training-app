'use client'
function LoginErrorPage() {
  {
    setTimeout(() => {
      window.location.href = '/login'
    }, 3000)
  }
  return (
    <div className='grid min-h-screen place-items-center'>
      <div className=''>
        <h1 className='text-4xl'>Error al iniciar sesión</h1>
        <p>Por favor, intentalo de nuevo</p>
      </div>
    </div>
  )
}
export default LoginErrorPage
