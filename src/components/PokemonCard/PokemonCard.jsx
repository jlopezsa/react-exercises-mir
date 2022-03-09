import React from "react"
import './PokemonCardStyles.scss'


const PokemonCard = (props) => {
    console.log("Verificando que tiene props", props)
    console.log("Verificando keys", Object.keys(props))
    
    const { animal } = props; // Destructuración
    
    return (
        <div>
            <h1 className="titulo">
                {animal.name}
            </h1>
            <h2>{animal.order}</h2> 
            <h2>{animal.stats[0].name}</h2>            
            <h2>{animal.stats[0].base_stat}</h2>            
        </div>
    );
}

export default PokemonCard