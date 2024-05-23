import "../styles/App.scss"
import { Route, Routes } from "react-router-dom";
import Filters from "./Filters.jsx"
import CharacterList from "./CharacterList.jsx"
import CharacterDetail from "./CharacterDetail.jsx"
import { useState, useEffect } from "react";
import fetchData from "../services/fetchData.js";
import NotFound from "./NotFound.jsx";
import FilterStatus from "./FilterStatus.jsx";
import FilterSpecies from "./FilterSpecies.jsx";

function App() {

  // Variables de estado
  const [charaList, setCharaList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [noCharaMsg, setNoCharaMsg] = useState(null);
  const [valueInput, setValueInput] = useState("");
  const [valueStatus, setValueStatus] = useState("");
  const [valueSpecies, setValueSpecies] = useState("");

  // useEffect para sacar los datos del fetch y meterlos en la variable de estado al cargar la página
  useEffect(() => {
    fetchData().then((data) => setCharaList(data));
  }, []);

  // otro fetch para meter los mismos datos en filteredData
  useEffect(() => {
    fetchData().then((data) => setFilteredData(data));
  }, []);

  // Función para filtrar personajes: del array de personajes filtramos aquellos que incluyan el valor del input (en minúscula) y luego lo metemos en filteredData
  const filterCharas = charaList.filter((chara) => valueInput ? chara.name.toLowerCase().includes(valueInput.toLowerCase()) : true).filter((chara) => valueStatus ? valueStatus === chara.status : true).filter((chara) => valueSpecies ? valueSpecies === chara.species : true)

  
  const getCharaData = (parameter) => {
    // Buscamos el personaje que coincida dentro del array original
    const clickedChara = charaList.find((chara) => chara.id === parseInt(parameter));
    return clickedChara
  }


  return (
    <>
    <main>
      <Routes>
        <Route path="/" element={
          <>
            <form>
            <Filters valueInput={valueInput} setValueInput={setValueInput} setNoCharaMsg={setNoCharaMsg} filterCharas={filterCharas} />
            <FilterStatus valueStatus={valueStatus} setValueStatus={setValueStatus} />
            <FilterSpecies valueSpecies={valueSpecies} setValueSpecies={setValueSpecies} />
            </form>
            <CharacterList noCharaMsg={noCharaMsg} filteredData={filteredData} filterCharas={filterCharas} charaList={charaList}/>
          </>
        }/>
        <Route path="/detail/:id" element={<CharacterDetail getCharaData={getCharaData} />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Nos renderiza el texto de error en la búsqueda si el array del filtro está vacío */}
    {filterCharas.length === 0 ? <p>{noCharaMsg}</p> : null}
    </main>
    
    </>
  )
}

export default App
