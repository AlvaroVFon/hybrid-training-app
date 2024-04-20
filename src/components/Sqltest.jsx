import dataFetch from '@/utils/dataFetch'
const Sqltest = async () => {
  const entrenamientos = await dataFetch.entrenamientosPorUsuario(1)
  const date = '2024-04-17'
  const caracteristicas = await dataFetch.caracteristicasPorUsuario(1, date)
  console.log(caracteristicas, entrenamientos)
  return (
    <>
      {entrenamientos && (
        <div className=''>
          <h1 className='text-2xl'>
            Entrenamiento: {entrenamientos[0]?.nombre_entrenamiento}
          </h1>
          <ul>
            {entrenamientos.map((entrenamiento) => (
              <li key={entrenamiento.id}>
                {entrenamiento.nombre_ejercicio} | {entrenamiento.disciplina} {}
              </li>
            ))}
          </ul>
        </div>
      )}
      {caracteristicas && (
        <div>
          <h1 className='text-2xl'>Caracteristicas</h1>
          <ul>
            {caracteristicas.map((caracteristica) => (
              <>
                <li key={caracteristica.id}>
                  Altura: {caracteristica.altura} cm
                </li>
                <li key={caracteristica.id}>Peso: {caracteristica.peso} kg</li>
                <li key={caracteristica.id}>
                  Porcentaje graso:{caracteristica.portenaje_graso} %
                </li>
              </>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
export default Sqltest
