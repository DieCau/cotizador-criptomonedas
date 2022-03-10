import React, { Fragment, useState } from 'react';

const useMoneda = (label, stateInicial, opciones) => {

  // state de nuestro custom hook
  const [state, setState] = useState(stateInicial);

  const Seleccionar = ( )=> (
    <Fragment>
      <label>{label}</label>
      <select>
        <option value="">- Seleccione -</option>
        {opciones.map( opcion => (
          <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
        ))}
      </select>
    </Fragment>
  );

  // Retornar state, interfaz y fn que modifica nuestro state
  return [state, Seleccionar, setState];

}

export default useMoneda;
