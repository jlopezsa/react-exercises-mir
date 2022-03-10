import React from "react";

const cities = [
    {value: 'buenos aires', label:'Buenos Aires'},
    {value: 'sydney', label:'Sydney'},
    {value: 'praga', label:'Praga'},
    {value: 'boston', label:'Boston'},
    {value: 'tokio', label:'Tokio'}
]
const Destinity = () =>{
    const handleDensityChange = (e) => {
        console.log(e)
        console.log(e.target.value);
        if(e.target.value !== "hide"){
            alert(`Tu destino de viaje es ${e.target.value}`)        
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
                {/*
                    <option value="buenos aires">Buenos Aires</option>
                    <option value="sydney">Sydney</option>
                    <option value="praga">Praga</option>
                    <option value="boston">Boston</option>
                    <option value="tokio">Tokio</option>
                */}                
            </select>
        </div>
    )
}

export default Destinity;