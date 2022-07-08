import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonDetails from "./pokemonDetails";

function PokemonList() {
  const [pokeList, setPokeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  console.log(currentPage);

  useEffect(() => {
    axios
      .get(
        "https://pokeapi.co/api/v2/pokemon?limit=9&offset=" + currentPage * 9
      )
      .then(function(response) {
        // handle success
        console.log(response.data.results);

        setPokeList(response.data.results);
      })
      .catch(function(error) {
        // handle error

        console.log(error);
      });
  }, [currentPage]);

  //ONCLICK FUNCTION

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }
  function previousPage() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className="poke-list">
      <h1 className="header-center">Lista de pokemons</h1>

      {pokeList.map((pokemon) => (
        <PokemonDetails pokeInfo={pokemon} />
      ))}

      {currentPage ? <button onClick={previousPage}>previous</button> : ""}

      <button onClick={nextPage}>next </button>
    </div>
  );
}

export default PokemonList;
