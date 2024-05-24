import { Link } from "react-router-dom"
import "../styles/CharacterCard.scss"

export const CharacterCard = ({chara}) => {

  return (
    <>
    <Link to={`/detail/${chara.id}`} className="link">
      <article className="card">
        <img src={chara.image} />
        <p className="card__name">{chara.name}</p>
        <p className="card__details">{chara.species}{chara.status === "Dead" ? " 💀" : null}</p>
      </article>
    </Link>

    </>
  )
}

export default CharacterCard