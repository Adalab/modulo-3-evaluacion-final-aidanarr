import "../styles/App.scss"
import { Route, Routes } from "react-router-dom";
import Filters from "./Filters.jsx"
import CharacterList from "./CharacterList.jsx"
import CharacterDetail from "./CharacterDetail.jsx"
import { useState, useEffect } from "react";
import fetchData from "../services/fetchData.js";

function App() {

  // Variables de estado
  const [charaList, setCharaList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [noCharaMsg, setNoCharaMsg] = useState(null);

  // useEffect para sacar los datos del fetch y meterlos en la variable de estado al cargar la página
  useEffect(() => {
    fetchData().then((data) => setCharaList(data));
  }, []);

  // otro fetch para meter los mismos datos en filteredData
  useEffect(() => {
    fetchData().then((data) => setFilteredData(data));
  }, []);

  // Función para filtrar personajes: del array de personajes filtramos aquellos que incluyan el valor del input (en minúscula) y luego lo metemos en filteredData
  const filterCharas = (value) => {
    const filter = charaList.filter((chara) => chara.name.toLowerCase().includes(value));
    setFilteredData(filter)
  };

  
  const getCharaData = (name) => {
    // Buscamos el personaje que coincida dentro del array original
    const clickedChara = charaList.find((chara) => chara.name === name);
    return clickedChara
  }


  return (
    <>
    <main>
      <Routes>
        <Route path="/" element={
          <>
            <Filters setNoCharaMsg={setNoCharaMsg} filterCharas={filterCharas} />
            <CharacterList noCharaMsg={noCharaMsg} filteredData={filteredData} charaList={charaList}/>
          </>
        }/>
        <Route path="/:name" element={<CharacterDetail getCharaData={getCharaData} />}/>
      </Routes>
      {/* Nos renderiza el texto de error en la búsqueda si el array del filtro está vacío */}
    {filteredData.length === 0 ? <p>{noCharaMsg}</p> : null}
    </main>
    
    </>
  )
}

export default App
