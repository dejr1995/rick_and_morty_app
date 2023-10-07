import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {

  const [key, setKey] = useState("name");
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [filter, setFilter] = useState("");

  const initialUrl = "https://rickandmortyapi.com/api/character";
  const filterUrl = `${initialUrl}?${key}=${filter}`;

  const selectMale = () => {
    setKey("gender");
    setFilter("Male");
  };

  const selectFemale = () => {
    setKey("gender");
    setFilter("Female");
  };

  const fetchCharacters = (filterUrl) => {
    fetch(filterUrl)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    try {
      if(filter !== ''){
        fetchCharacters(initialUrl);
      }else{
        fetchCharacters(initialUrl);
      }
    } catch (error) {
      alert("Error loading page");
    }
  }, [filter]);

  useEffect(() => {
    fetch(filterUrl)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, [filter]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const reset = () => {
    setFilter('');
  }

  return (
    <>
      <Navbar
        brand="Rick and Morty App"
        filter={filter}
        handleFilterChange={handleFilterChange}
        selectMale={selectMale}
        selectFemale={selectFemale}
        reset={reset}
      />
      <div className="m-6">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Pagination />
      </div>
    </>
  );
}

export default App;
