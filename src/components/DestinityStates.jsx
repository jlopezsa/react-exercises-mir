import React from "react";
import { useState } from "react";

const cities = [
    {value: 'buenos aires', label:'Buenos Aires'},
    {value: 'sydney', label:'Sydney'},
    {value: 'praga', label:'Praga'},
    {value: 'boston', label:'Boston'},
    {value: 'tokio', label:'Tokio'}
]

const DestinityStates = () =>{
    const [destinity, setDestinity] = useState('');
    const handleDensityChange = (e) => {
        console.log(e)
        console.log(e.target.value);
        setDestinity(e.target.value)        
        if(e.target.value !== "hide"){
            /*alert(`Tu destino de viaje es ${e.target.value}`)*/
        }
    }

    return(
        <div>
            <select name="destinity" onChange={handleDensityChange}>
                <option value="hide">Selecciona una opción</option>
                {
                    cities.map((item,idx)=>
                        <option key={item.value} value={item.value}>{item.label}</option>
                    )
                }              
            </select>
            <h2>Tu destino de viaje es {destinity}</h2>
        </div>
    )
}

export default DestinityStates;