import React, {  useEffect, useState } from 'react';
import './styles.css';
import {getFuncion} from '../../services/APIservices';

const TelaOmbro = ({onPressCallback}) => {
  const [dados, setDados] = useState(null);
  useEffect(() => {
    async function carregarDados() {
      try {
        const dadosRecebidos = await getFuncion('ombro');
        setDados(dadosRecebidos);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    }
  
    carregarDados();
  }, []);
  return (
    <div id='divExercicios'>
        <div id='divVoltar'>
        <button className='btn-voltar' title='VOLTAR' onClick={() => onPressCallback('')}>
          <img  className="img-voltar" src="https://cdn-icons-png.flaticon.com/128/507/507257.png" alt="voltar" /> 
          VOLTAR
        </button>
         </div>
         <h1 className='titulo-ombro'>OMBRO</h1> 
         <div className='Exercicio-area'>
         <div className='Exercicio'>
          
        {dados && (// Verifica se a variável 'dados' está definida e não é nula
      
        //Abre uma lista não ordenada
        <ul>
          {dados.map(exercises => ( // Mapeia sobre cada item na matriz 'dados'; 'exercises' representa cada item individualmente
            <li key={exercises.muscle}>{exercises.name}<img src={exercises.img_url} alt='Imagem Exercicio'></img>{exercises.description}</li>
          ))}
        </ul>// Fecha a lista não ordenada
      )}
        </div>
      </div>
    </div>
  );
};

export default TelaOmbro;
