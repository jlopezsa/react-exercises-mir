import React from 'react';
import PropTypes from 'prop-types';
import './PokemonCardStyles.scss';

function PokemonCard(props) {
  console.log('Verificando que tiene props', props);
  console.log('Verificando keys', Object.keys(props));

  const { animal } = props; // Destructuración
  const keys = Object.keys(animal);

  return (

    <div className="containerCard">
      <h1 className="titulo">
        {`${keys[0]}: ${animal.name}`}
      </h1>
      <h2>{`${keys[1]}: ${animal.order}`}</h2>
      <img src={animal.image} className="imagem" alt="pokemon imagem" />
      {
        animal.stats.map((item) => <h3>{`${item.name}: ${item.base_stat}`}</h3>)
      }
      <h3>{`${keys[4]}: ${animal.weight}`}</h3>

    </div>
  );
}

PokemonCard.propTypes = {
  animal: PropTypes.shape({
    name: PropTypes.string,
    order: PropTypes.number,
    image: PropTypes.string,
    weight: PropTypes.number,
    stats: PropTypes.instanceOf(Array),
  }).isRequired,
};

export default PokemonCard;
