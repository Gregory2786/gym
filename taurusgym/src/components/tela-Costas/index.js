import React, { useState } from 'react';
import './styles.css';
import {getFuncion} from '../../services/APIservices';

function getFuncionCostas(musculo){

  getFuncion(musculo) 
    .then(data => console.log(data))
    .catch(err => console.error(err));
  
}
const TelaCostas = ({onPressCallback}) => {
  return (
    <div>
      <button className='btn-voltar' title='VOLTAR' onClick={() => onPressCallback('')}>
        <img  className="img-voltar" src="https://cdn-icons-png.flaticon.com/128/507/507257.png" alt="voltar" /> 
        VOLTAR
      </button>
      <h1 className='titulo'>COSTAS</h1>

      <div className='Exercicio-area'>
        <div className='Exercicio' onLoad={getFuncionCostas('Costas')}>
          
          AQUI VAI FICAR O CONTEUDO

        </div>
      </div>
    </div>
  );
};

export default TelaCostas;
