import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <h1>Ejercicios usando componentes en React</h1>
            <ol>
                <li>Ejercicio que identifica cuando el usuario ingresa la palabra "cebolla" en un TextArea: <Link to="/ExerOnionHater">Ir al ejercicio</Link></li>
                <li>Ejercicio Destinity, crea un select con un listado de ciudades. <Link to="/ExerDestinity">Ir al ejercicio</Link></li>
                <li>Ejercicio que crea tarjetas a partir de objetos que se reciben desde un vector de objetos: <Link to="ExerPokemon">Ir al ejercicio</Link></li>
            </ol>
        </div>
    );
}


export default Home;