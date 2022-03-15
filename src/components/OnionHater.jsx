/* eslint-disable no-alert */
import React from 'react';

function OnionHater() {
  const handleChangeOnion = (event) => {
    if (event.target.value.includes('cebolla')) {
      alert('Odio la cebolla');
      console.log('cebolla paila');
    }
  };

  return (
    <textarea name="textInput" cols="20" rows="5" onChange={handleChangeOnion} />
  );
}

export default OnionHater;
