import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  font-size: 1.2rem;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
`; 



const useCriptomoneda = (label, stateInicial, opciones) => {

  // state de nuestro custom hook
  const [state, setState] = useState(stateInicial);

  const SelectCripto = ( )=> (
    <Fragment>
      <Label>{label}</Label>
      <Select
        onChange={ e => setState(e.target.value) }
        value={state}
      >
        <option value="">- Seleccione -</option>
        {/* {opciones.map( opcion => (
          <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
        ))} */}
      </Select>
    </Fragment>
  );

  // Retornar state, interfaz y fn que modifica nuestro state
  return [state, SelectCripto, setState];

}

export default useCriptomoneda;

