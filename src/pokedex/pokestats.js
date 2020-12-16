import React from 'react';
import '../styles/pokeinfo.css';
import ProgressBar from './progress.js'
import '../styles/progress.css'
  
function Pokestats (props) {
    let stats = props.stats;
    return(
      <div className="Pokecard-data-container">
        
        <h4 className="Pokecard-title">Stat Info</h4>   
        <div className="Pokeinfo-data-stats-grid">
          <div className="Pokeinfo-row"> 
            <span className="Pokecard-data-title">HP: </span> 
            <span className="Pokecard-data-text">{stats.HP}</span> 
            <ProgressBar stat ={stats.HP}/>          
          </div>
          <div className="Pokeinfo-row"> 
            <span className="Pokecard-data-title">Attack: </span> 
            <span className="Pokecard-data-text">{stats.Attack}</span>
            <ProgressBar stat ={stats.Attack}/>
          </div>
          <div className="Pokeinfo-row">
            <span className="Pokecard-data-title">Defense: </span>
            <span className="Pokecard-data-text">{stats.Defense}</span>
            <ProgressBar stat ={stats.Defense}/>
            </div>
          <div className="Pokeinfo-row">
            <span className="Pokecard-data-title">S-Attack: </span> 
            <span className="Pokecard-data-text">{stats.S_Attack}</span>
            <ProgressBar stat ={stats.S_Attack}/>
            </div>
          <div className="Pokeinfo-row">
            <span className="Pokecard-data-title">S-Defense: </span> 
            <span className="Pokecard-data-text"> {stats.S_Defense}</span>
            <ProgressBar stat ={stats.S_Defense}/>
          </div>
          <div className="Pokeinfo-row">
            <span className="Pokecard-data-title">Speed: </span>
            <span className="Pokecard-data-text">{stats.Speed}</span>
            <ProgressBar stat ={stats.Speed}/>
          </div>
        </div>
      </div>
      );
  
}

export default Pokestats;