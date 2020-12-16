import React, {Component} from 'react';
import '../styles/pokeinfo.css';

  
function Pokestats (props) {
    let stats = props.stats;
    return(
      <div className="Pokecard-data-container">
        <h4 className="Pokecard-title">Stat Info</h4>   
        <div className="Pokeinfo-data-stats-grid">
          <div className="Pokeinfo-row"> 
            <span className="Pokecard-data-title">HP: </span> 
            <span className="Pokecard-data-text">{stats.HP}</span> 
            <progress className="Pokeinfo-stat-bar" value={stats.HP} max="15"></progress>
          </div>
          <div className="Pokeinfo-row"> 
            <span className="Pokecard-data-title">Attack: </span> 
            <span className="Pokecard-data-text">{stats.Attack}</span>
            <progress className="Pokeinfo-stat-bar" value={stats.Attack} max="15"></progress>
          </div>
          <div className="Pokeinfo-row">
            <span className="Pokecard-data-title">Defense: </span>
            <span className="Pokecard-data-text">{stats.Defense}</span>
            <progress className="Pokeinfo-stat-bar" value={stats.Defense} max="15"></progress>
            </div>
          <div className="Pokeinfo-row">
            <span className="Pokecard-data-title">S-Attack: </span> 
            <span className="Pokecard-data-text">{stats.S_Attack}</span>
            <progress className="Pokeinfo-stat-bar" value={stats.S_Attack} max="15"></progress>
            </div>
          <div className="Pokeinfo-row">
            <span className="Pokecard-data-title">S-Defense: </span> 
            <span className="Pokecard-data-text"> {stats.S_Defense}</span>
            <progress className="Pokeinfo-stat-bar" value={stats.S_Defense} max="15"></progress>
          </div>
          <div className="Pokeinfo-row">
            <span className="Pokecard-data-title">Speed: </span>
            <span className="Pokecard-data-text">{stats.Speed}</span>
            <progress className="Pokeinfo-stat-bar" value={stats.Speed} max="15"></progress>
          </div>
        </div>
      </div>
      );
  
}

export default Pokestats;