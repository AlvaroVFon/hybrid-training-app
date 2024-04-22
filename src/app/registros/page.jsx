import RegisterForm from '@/components/RegisterForm'
import { RegisterList } from '@/components/RegisterList'

function EntrenamientosPage({ searchParams }) {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <RegisterForm />
        <RegisterList searchParams={searchParams} />
      </div>
    </>
  )
}
export default EntrenamientosPage
