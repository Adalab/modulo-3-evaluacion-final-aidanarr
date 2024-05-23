import CharacterCard from "./CharacterCard"

export const CharacterList = (props) => {

  // Ordenamos el array alfabeticamente

  props.filterCharas.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

    // Map que renderiza el componente CharacterCard con cada elemento del array de personajes

  return (
    <section>
      {props.filterCharas.map((chara) => <CharacterCard key={chara.id} chara={chara} />)}
    </section>
  )
}

export default CharacterList