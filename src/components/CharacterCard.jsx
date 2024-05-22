

export const CharacterCard = ({chara}) => {

  return (
    <article>
      <img src={chara.image} />
      <p>{chara.name}</p>
      <p>{chara.species}{chara.status === "Dead" ? " 💀" : null}</p>
    </article>
  )
}

export default CharacterCard