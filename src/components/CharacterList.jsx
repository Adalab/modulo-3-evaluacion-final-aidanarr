import CharacterCard from "./CharacterCard"

export const CharacterList = (props) => {
  // Map que renderiza el componente CharacterCard con cada elemento del array de personajes

  return (
    <section>
      {props.filteredData.map((chara) => <CharacterCard key={chara.id} chara={chara} />)}
    </section>
  )
}

export default CharacterList