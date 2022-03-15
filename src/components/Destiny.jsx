/* eslint-disable no-alert */
import React from 'react';

const cities = [
  { value: 'buenos aires', label: 'Buenos Aires' },
  { value: 'sydney', label: 'Sydney' },
  { value: 'praga', label: 'Praga' },
  { value: 'boston', label: 'Boston' },
  { value: 'tokio', label: 'Tokio' },
];
function Destinity() {
  const handleDensityChange = (e) => {
    console.log(e);
    console.log(e.target.value);
    if (e.target.value !== 'hide') {
      alert(`Destino de viaje es ${e.target.value}`);
    }
  };
  return (
    <div>
      <select name="destinity" onChange={handleDensityChange}>
        <option value="hide">Selecciona una opción</option>
        {
          cities.map(
            (item) => <option key={item.value} value={item.value}>{item.label}</option>,
          )
        }
      </select>
    </div>
  );
}

export default Destinity;
