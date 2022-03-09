import React from "react"
import './PokemonCardStyles.scss'

const PokemonCard = (props) => {
    console.log("Verificando que tiene props", props)
    console.log("Verificando keys", Object.keys(props))

    const { animal } = props; // Destructuración
    const keys = Object.keys(animal);

    return (
        <div className="containerCard">
            <h1 className="titulo">
                {keys[0] + ': ' + animal.name}
            </h1>
            <h2>{keys[1] + ': ' + animal.order}</h2>
            <img src={animal.image} className="imagem"/>
            {
                animal.stats.map((item, idx) => {
                    return <h3>{item.name +': '+ item.base_stat}</h3>
                })
            }
            <h3>{keys[4] + ': ' + animal.weight}</h3>

        </div>
    );
}
/*
<h2>{animal.stats[0].name + ': '+ animal.stats[0].base_stat}</h2>
<h2>{animal.stats[1].name + ': '+ animal.stats[1].base_stat}</h2>
<h2>{animal.stats[2].name + ': '+ animal.stats[2].base_stat}</h2>
<h2>{animal.stats[3].name + ': '+ animal.stats[3].base_stat}</h2>
*/
export default PokemonCard