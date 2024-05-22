import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

export const CharacterDetail = ({getCharaData}) => {

  // Con useParams averiguamos el name del personaje de la ruta dinámica
  const {name} = useParams();

  // Guardamos los datos del personaje en una variable usando la función getCharaData
  const data = getCharaData(name);

  return (
    <>
    <article>
      <img src={data.image} />
      <p>{data.name}</p>
      <p>Status: {data.status}</p>
      <p>Species: {data.species}</p>
      <p>Origin: {data.origin}</p>
      <p>Episodes: {data.episodes}</p>
    </article>
    <Link to="/">
      <p>Volver</p>
    </Link>
    </>
  )
}

export default CharacterDetail