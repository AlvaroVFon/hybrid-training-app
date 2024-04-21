import { getTrainingRegister } from '@/lib/actions/getResgister'
export const RegisterList = async ({ fecha }) => {
  const registers = await getTrainingRegister()
  console.log(registers)
  return (
    <div>
      <h1>Registros</h1>
      <ul>
        {registers.map((register) => (
          <li key={register.id}>
            <span>{register.fecha}</span>
            <span>{register.entrenamiento}</span>
            <span>{register.ejercicio}</span>
            <span>{register.peso}</span>
            <span>{register.repeticiones}</span>
            <span>{register.series}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
