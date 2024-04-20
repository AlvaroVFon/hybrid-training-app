import { RegisterForm } from '@/components/RegisterForm'
import { RegisterList } from '@/components/RegisterList'

function EntrenamientosPage() {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <RegisterForm />
        <RegisterList />
      </div>
    </>
  )
}
export default EntrenamientosPage
