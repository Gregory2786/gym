import React, {  useEffect, useState } from 'react';
import './styles.css';
import {getFuncion} from '../../services/APIservices';

const TelaAbdomen = ({onPressCallback}) => {
  const [dados, setDados] = useState(null);
  useEffect(() => {
    async function carregarDados() {
      try {
        const dadosRecebidos = await getFuncion('abdomem');
        setDados(dadosRecebidos);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    }
  
    carregarDados();
  }, []);
  return (
    <div>
      <button className='btn-voltar' title='VOLTAR' onClick={() => onPressCallback('')}>
        <img  className="img-voltar" src="https://cdn-icons-png.flaticon.com/128/507/507257.png" alt="voltar" /> 
        VOLTAR
      </button>
      <h1 className='titulo'>ABDÓMEN</h1>

      <div className='Exercicio-area'>
        <div className='Exercicio'>
          
        {dados && (
        <ul>
          {dados.map(exercises => (
            <li key={exercises.muscle}>{exercises.name}<img scr={exercises.img_url} alt='Imagem Exercicio'></img>{exercises.description}</li>
          ))}

        </ul>
      )}

        </div>
      </div>
    </div>
  );
};

export default TelaAbdomen;
