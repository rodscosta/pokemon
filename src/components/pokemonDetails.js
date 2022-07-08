import React from "react";



function PokemonDetails(props) {
  let pokeNumber = props.pokeInfo.url.split("/");
  let pokeIndex = pokeNumber[6];
  

  return (
    
    <div className="poke-container">
    <div className="pokemon-card">

      <p className="poke-name-text">{props.pokeInfo.name} </p>

      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`}
        alt="pokephoto"
      />
      
    </div>
    </div>
  );
}

export default PokemonDetails;
