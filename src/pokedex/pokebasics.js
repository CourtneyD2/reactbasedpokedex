import React from 'react';
import '../styles/pokeinfo.css';

  
function Pokebasics (props) {
  let info= props.info;
  let type = info.type;
  let weak = info.weakness;
  return(
  <div className="Pokecard-data-container">
    <h4 className="Pokecard-title">Basic Info</h4>   
    <div className="Pokecard-data-body">
    <span className="Pokecard-data-title">Type: </span> 
    {type.map(
      (intype , index)=>(
        <span  key={index} className="Pokecard-data-text">{ 
          (type.indexOf(intype) < (type.length-1)) ? (intype +", "):intype}</span>
      )
    )}
    </div>
    <div className="Pokecard-data-body">
    <div className="Pokecard-data-title">Weak Against </div> 
    {weak.map(
      (weakness , index)=>(
        <span  key={index} className="Pokecard-data-text">{ 
          (weak.indexOf(weakness) < (weak.length-1)) ? (weakness +", "):weakness}</span>
      )
    )}
    </div>
    <div className="Pokecard-data-body">
    <span className="Pokecard-data-title">Description: </span>
    <span className="Pokecard-data-text">{info.description}</span> 
    </div>
  </div>
  )
}

export default Pokebasics;