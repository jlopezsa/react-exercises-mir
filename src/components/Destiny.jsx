import React from "react";

const Destinity = () =>{
    const handleDensityChange = (e) => {
        console.log(e.target.value);
    }
    return(
        <div>
            <select name="" onChange={handleDensityChange}>
                <option value="">Selecciona una opción</option>
                <option value="buenos aires">Buenos Aires</option>
                <option value="sydney">Sydney</option>
            </select>
        </div>
    )
}

export default Destinity;