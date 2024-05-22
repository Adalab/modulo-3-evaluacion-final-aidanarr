import CharacterCard from "./CharacterCard"

export const CharacterList = (props) => {
  // Map que renderiza el componente CharacterCard con cada elemento del array de personajes

  // Hay un condicional que hace que si el array de datos filtrados está vacío, nos renderice las tarjetas con los datos del array original. En caso contrario, renderiza el array de datos filtrados

  return (
    <section>
      {props.filteredData.length === 0 ? props.charaList.map((chara) => <CharacterCard key={chara.id} chara={chara} />) : props.filteredData.map((chara) => <CharacterCard key={chara.id} chara={chara} />)}
    </section>
  )
}

export default CharacterList