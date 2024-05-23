

const FilterStatus = (props) => {

    const handleChange = (ev) => {
        const value = ev.target.value;
        props.setValueStatus(value);
    }

  return (
     <label htmlFor="status">Status: 
      <select name="status" id="status" value={props.valueStatus} onChange={handleChange}>
        <option value="">all</option>
        <option value="Alive">Alive 🕊️</option>
        <option value="Dead">Dead 💀</option>
        <option value="unknown">Unknown ❓</option>
      </select>
      </label>
  )
}

export default FilterStatus