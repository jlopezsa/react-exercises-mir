import PokemonCard from './components/PokemonCard/PokemonCard';
import Body from './components/Body';

import './App.css';

const animalPoke = {
  "name": "bulbasaur",
  "order": 1,
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
  "stats": [{
      "name": "hp",
      "base_stat": 45
  },
  {
      "base_stat": 49,
      "name": "attack"
  },
  {
      "base_stat": 49,
      "name": "defense"
  },
  {
      "base_stat": 65,
      "name": "special-attack"
  }
  ],
  "weight": 69
}


function App() {
  return (
    <div className='App'>
      <div className='showcase'>
        <PokemonCard animal={animalPoke}/>
        <Body content="Texto que el usuario quiere inresar"/>
      </div>
    </div>
  );
}

export default App;
