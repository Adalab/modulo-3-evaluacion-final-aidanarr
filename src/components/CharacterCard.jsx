import { Link } from "react-router-dom"

export const CharacterCard = ({chara}) => {

  return (
    <>
    <Link to={`/detail/${chara.id}`}>
      <article>
        <img src={chara.image} />
        <p>{chara.name}</p>
        <p>{chara.species}{chara.status === "Dead" ? " 💀" : null}</p>
      </article>
    </Link>

    </>
  )
}

export default CharacterCard