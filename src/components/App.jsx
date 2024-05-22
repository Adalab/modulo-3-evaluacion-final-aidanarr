import "../styles/App.scss"
import { Route, Routes } from "react-router-dom";
import Filters from "./Filters.jsx"
import CharacterList from "./CharacterList.jsx"
import { useState, useEffect } from "react";
import fetchData from "../services/fetchData.js";

function App() {

  // Variables de estado
  const [charaList, setCharaList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // useEffect para sacar los datos del fetch y meterlos en la variable de estado al cargar la página
  useEffect(() => {
    fetchData().then((data) => setCharaList(data));
  }, []);

  // Función para filtrar personajes: del array de personajes filtramos aquellos que incluyan el valor del input (en minúscula) y luego lo metemos en filteredData
  const filterCharas = (value) => {
    const filter = charaList.filter((chara) => chara.name.toLowerCase().includes(value));
    setFilteredData(filter)
  };
  

  return (
    <>
    <main>
      <Routes>
        <Route path="/" element={
          <>
            <Filters filterCharas={filterCharas} />
            <CharacterList filteredData={filteredData} charaList={charaList}/>
          </>
        }/>
      </Routes>
    </main>
    </>
  )
}

export default App
