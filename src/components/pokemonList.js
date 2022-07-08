import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonDetails from "./pokemonDetails";

function PokemonList() {
  // a state keep the information from the api and to map trought the pokemon list 
  const [pokeList, setPokeList] = useState([]);
  // a state to check the current page and use information to navigate properly 
  const [currentPage, setCurrentPage] = useState(0);
  
  useEffect(() => {
    //axios was used to get information from the api
    axios
    // concatenation of the api adress and the currentPage used to get the next 10 pokemons when next button is clicked 
      .get(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=" + currentPage * 10
      )
      .then(function(response) {
        // handle success
        console.log(response.data.results);

        setPokeList(response.data.results);
      })
      .catch(function(error) {
        // handle error

        console.log(error).send(404);
      });
  }, [currentPage]);

  //functions for the actions of the buttons using the useState 

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }
  function previousPage() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className="poke-list">
      <h1 className="header-center">Lista de pokemons</h1>
      {/* map( ) method is used to render all the information from the state   */}
      {pokeList.map((pokemon) => (
        <PokemonDetails pokeInfo={pokemon} />
      ))}
      {/* a toggle is used to show or hide the button previous. the button show after the next button is used */}
      {currentPage ? <button className="button-previous" onClick={previousPage}>previous</button> : ""}

      <button className="button-next" onClick={nextPage}>next </button>
    </div>
  );
}

export default PokemonList;
