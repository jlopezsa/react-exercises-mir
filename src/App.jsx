import PokemonCard from './components/PokemonCard/PokemonCard';
import Body from './components/Body';

import './App.css';

const animalPoke = [
  {
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
  },
  {
    "name": "charmander",
    "order": 4,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
    "stats": [{
      "name": "hp",
      "base_stat": 39
      },
      {
        "base_stat": 52,
        "name": "attack"
      },
      {
        "base_stat": 43,
        "name": "defense"
      },
      {
        "base_stat": 60,
        "name": "special-attack"
      }
    ],
    "weight": 85
  },
  {
    "name": "squirtle",
    "order": 7,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
    "stats": [{
      "name": "hp",
      "base_stat": 44
      },
      {
        "base_stat": 48,
        "name": "attack"
      },
      {
        "base_stat": 65,
        "name": "defense"
      },
      {
        "base_stat": 50,
        "name": "special-attack"
      }
    ],
    "weight": 90
  }
]


function App() {
  return (
    <div className='App'>
      <div className='showcase'>
        <PokemonCard animal={animalPoke[0]}/>
        <Body content="Julián López"/>
      </div>
    </div>
  );
}

export default App;
