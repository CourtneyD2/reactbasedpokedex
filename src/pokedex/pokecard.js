import React from 'react';
import PokeDisplay from './pokedisplay.js'
import PokeInfo from './pokeinfo'
import '../styles/pokecard.css';
// const Poke_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  
function Pokecard (props) {   
    return (
      <div className="Pokecard">
        {(props.cardType==="PD-Top") ? 
          <PokeDisplay id={props.pokeBall.id} name ={props.pokeBall.name}/>
          :<PokeInfo info={props.pokeBall.info} stats={props.pokeBall.stats} screen={props.screen} />} 
  
      </div> 

     
    );
  }

export default Pokecard;