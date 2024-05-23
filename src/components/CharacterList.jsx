import CharacterCard from "./CharacterCard"

export const CharacterList = (props) => {
  // Map que renderiza el componente CharacterCard con cada elemento del array de personajes

  props.filteredData.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

  return (
    <section>
      {props.filteredData.map((chara) => <CharacterCard key={chara.id} chara={chara} />)}
    </section>
  )
}

export default CharacterList