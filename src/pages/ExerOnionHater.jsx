import React from "react";
import {Link} from 'react-router-dom'
import OnionHater from '../components/OnionHater'
const About = (props)=>{
    return(
        <div>
            <h1>Ejercicio OnionHater</h1>
            <OnionHater />
            <><br /></>
            <Link to='/'>Regresar al índice</Link>
        </div>
    )
}

export default About;
