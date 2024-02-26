import React, { useState } from 'react';
import './styles.css';


const CapaMusculo = ({onPressCallback}) => {
  return (
    <div className ='container-capa'>
      <button className ='btn-capa' onClick={() => onPressCallback('OMBRO')}>
        OMBRO
      </button>

      <button className ='btn-capa' onClick={() => onPressCallback('PEITO')}>
        PEITO
      </button>

      <button className ='btn-capa' onClick={() => onPressCallback('BRACO')}>
        BRAÇO
      </button>

      <button className ='btn-capa' onClick={() => onPressCallback('ABDOMEN')}>
        ABDÓMEN
      </button>

      <button className ='btn-capa' onClick={() => onPressCallback('COSTAS')}>
        COSTAS
      </button>

      <button className ='btn-capa' onClick={() => onPressCallback('PERNA')}>
        PERNA
      </button>

    </div>
  );
};

export default CapaMusculo;
