/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import Destinity from '../components/Destiny';
import DestinityStates from '../components/DestinityStates';

function About() {
  return (
    <div>
      <h1>Ejercicio Destinity (mensaje de alerta)</h1>
      <Destinity />
      <h1>Exercise Destinity exercise with state variable: crea un select con un listado de ciudades e imprimir en la misma web.</h1>
      <DestinityStates />
      <Link to="/">Regresar al índice</Link>
    </div>
  );
}

export default About;
