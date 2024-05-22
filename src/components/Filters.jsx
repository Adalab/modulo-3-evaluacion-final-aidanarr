

export const Filters = (props) => {

  const handleChange = (ev) => {
    const value = ev.target.value;
    props.filterCharas(value.toLowerCase())
  }

  return (
    <form>
      <input type="text" onChange={handleChange} />
    </form>
  )
}

export default Filters