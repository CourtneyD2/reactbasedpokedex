import React, {Component} from 'react';
import '../styles/pokeinfo.css';
import Pokestats from './pokestats.js'
import Pokebasics from './pokebasics.js'
  
class PokeInfo extends Component {
  constructor(props){
    super(props);
  }

  displayBasicInfo(){
    let info= this.props.info;
    let type = info.type;
    let weak = info.weakness;
    return(
    <div className="Pokecard-data-container">
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

  render(){
    let imgSrc=`${this.Poke_API}${this.props.id}.png`;
    return (
      <div className="Pokecard PI-display">       
        <div>
          {(this.props.screen === 1) ? <Pokebasics info= {this.props.info} /> : <Pokestats stats= {this.props.stats} />}
        </div>   
                
      </div>      
    );
  }
}

export default PokeInfo;