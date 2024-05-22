import CharacterCard from "./CharacterCard"

export const CharacterList = (props) => {
  return (
    <section>
      {props.charaList.map((chara) => <CharacterCard key={chara.id} chara={chara} />)}
    </section>
  )
}

export default CharacterList