import React from 'react';
import styled from '@emotion/styled';

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  border-radius: 10px;
  width: 100%;
  color: #FFF;

  &:hover {
    background-color: #326AC0;
    cursor: pointer;
    transition: background-color .3s ease;
  }
`;


const Formulario = () => {
  return (
    <form>
      <Boton
        type="submit"
        value="Calcular"
      />
    </form>
  )
}

export default Formulario