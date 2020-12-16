import React from 'react';
import '../styles/pokedisplay.css'

const Poke_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

  
function PokeDisplay (props) {
    let imgSrc=`${Poke_API}${props.id}.png`;
    return (
      <div className="Pokecard PC-display">
         <h2 className="Pokecard-title">{props.name}</h2>     
         <img className="Pokecard-img" src={imgSrc} alt={props.name + " image"} />
        </div>     
    );
  }

export default PokeDisplay;