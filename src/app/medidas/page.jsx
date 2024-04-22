import MedidasList from '@/components/MedidasList'
import RegisterForm from '@/components/RegisterForm'

function MedidasPage({ searchParams }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <RegisterForm />
      <MedidasList />
    </div>
  )
}
export default MedidasPage
