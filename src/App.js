import './styles/App.css';
import Pokedex from './pokedex/pokedex.js'
import {thePokemon} from './pokedex/pokemon.js'

function App() {
  return (
    <div className="App" >
      <Pokedex pokemon= {thePokemon}
      />
    </div>
  );
}

export default App;
