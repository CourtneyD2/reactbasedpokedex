import React, { Component} from 'react'
import Pokecard from './pokecard'
import CircularSlider from '@fseehawer/react-circular-slider';

import '../styles/pokedex.css'


const firstScreen = 1;
const lastScreen = 2;

class Pokedex extends Component{
  constructor(props){
    super(props);
    this.state ={
      current: 0,
      screen: 1,
      value: 0.6
    };
    this.changePokemon = this.changePokemon.bind(this);
    this.changeScreen = this.changeScreen.bind(this);
  }

   handleChange = (x, y) => {
     this.setState({ value: y })
   };
  


  changePokemon(e){
      let x =  parseInt(e.target.value);
      let len = this.props.pokemon.length-1;       
      let GoLower = (x<0 && (this.state.current <= len && this.state.current>0)); //determine if decrementing and can do so
      let GoHigher = (x>0&& (this.state.current >=0 && this.state.current<(len)));//determine if increment and can do so    
      this.setState(
        function (st) {
          let newVal = 0;
          if (GoHigher || GoLower){newVal = st.current + x} 
          else if (x<0 && this.state.current === 0){newVal =len}
          return ({current: newVal})
        }
      );
  }

  changeScreen(e){//implemented this way incase in future more screen are need else could use just booleans
    let x =  parseInt(e.target.value);
    let goToLast = (x<0 && (this.state.screen === firstScreen));
    let goToFirst = (x>0&& (this.state.screen === lastScreen));
    this.setState(
      function (st) {
        let newVal = firstScreen; //default value if no changes always go to first scree
        if ((goToLast)){newVal = lastScreen;}
        else if (!goToFirst){newVal = st.screen+x}
        return ({screen: newVal})
      }
    );
  }

  buttonPad(){
    return(
      <div className="Pokedex-buttons-container">
        <button className="Pokedex-Button up" onClick={this.changePokemon} value={1}></button>
        <button className="Pokedex-Button left" onClick={this.changeScreen} value={-1}></button>
        <button className="Pokedex-Button right" onClick={this.changeScreen} value={1}></button>
        <button className="Pokedex-Button down" onClick={this.changePokemon} value={-1}></button>
      </div>
    );
  }

  render(){
    let prefix = this.props.pokemon;
    let inProp =false;
    return(
    <div className="Pokedex">
      <div className="Pokedex-cards top">

          <Pokecard key={prefix[this.state.current].id} cardType="PD-Top" pokeBall={prefix[this.state.current]}/>
 
      </div>
      <div className= "Pokedex-btm">
        {this.buttonPad()}
        <div className="Pokedex-cards btm">
          <Pokecard key={prefix[this.state.current].id} cardType="PD-Btm" pokeBall={prefix[this.state.current]} screen={this.state.screen} />
        </div> 
        <div className="slider">
        <CircularSlider 
    width={120}
    label=""
    min={0}
    max={this.props.pokemon.length-1}
    dataIndex={0}
    labelColor="#005a58"
    hideLabelValue={true} 
    knobColor="#005a58" 
    knobSize={32}
    progressColorFrom="#00bfbd"
    progressColorTo="#005a58"
    progressSize={12}
    trackColor="#555"
    trackSize={24}
    onChange={ value => { this.setState({current: value}) }}
/></div>

      </div>
    </div>
    );
  }
}

export default Pokedex;