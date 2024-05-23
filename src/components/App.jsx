import "../styles/App.scss"
import { Route, Routes } from "react-router-dom";
import NameFilter from "./NameFilter.jsx"
import CharacterList from "./CharacterList.jsx"
import { useState, useEffect } from "react";
import fetchData from "../services/fetchData.js";

function App() {

  // Variables de estado
  const [charaList, setCharaList] = useState([]);

  // useEffect para sacar los datos del fetch y meterlos en la variable de estado al cargar la página
  useEffect(() => {
    fetchData().then((data) => setCharaList(data));
  }, []);

  
  return (
    <>
    <main>
      <Routes>
        <Route path="/" element={
          <>
            <NameFilter />
            <CharacterList charaList={charaList}/>
          </>
        }/>
      </Routes>

    </main>
      
    </>
  )
}

export default App
