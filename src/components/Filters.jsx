

export const Filters = (props) => {

  const handleChange = (ev) => {
    const value = ev.target.value;

    // Ejecutamos la función para filtrar personajes

    // Ejecutamos la función para establecer el mensaje de error en el buscador
    props.setNoCharaMsg(`No existe ningún personaje llamado ` + value);
    
    props.setValueInput(value);
  }

  const handleKeyDown = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
    }
  }

  return (
      <input type="text" id="name" onChange={handleChange} onKeyDown={handleKeyDown} value={props.valueInput} />   
  )
}

export default Filters