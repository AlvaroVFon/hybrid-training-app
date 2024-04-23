import AddEjerciciosForm from '@/components/AddEjerciciosForm'
import AddRegisterForm from '@/components/AddRegisterForm'
async function RegisterAddPage({ searchParams }) {
  return (
    <div>
      <AddRegisterForm />
      <AddEjerciciosForm searchParams={searchParams} />
    </div>
  )
}
export default RegisterAddPage
