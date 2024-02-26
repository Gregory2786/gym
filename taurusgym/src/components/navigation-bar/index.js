import React from 'react';
import './styles.css';


const NavigationBar = ({onPressCallback}) => {
  return (
    <div className ='container-nav-bar'>

      <div className='container-logo'>
        <img  onClick={() => onPressCallback('')} id='logo' src="/logo01.png" alt="logo" />
      </div>

      <div className='options'>
        <ul className='menu'>
          <li><button className='btn-nav' onClick={() => onPressCallback('OMBRO')}>OMBRO</button></li>
          <li><button className='btn-nav' onClick={() => onPressCallback('PEITO')}>PEITO</button></li>
          <li><button className='btn-nav' onClick={() => onPressCallback('BRACO')}>BRAÇO</button></li>
          <li><button className='btn-nav' onClick={() => onPressCallback('ABDOMEN')}>ABDÓMEN</button></li>
          <li><button className='btn-nav' onClick={() => onPressCallback('COSTAS')}>COSTAS</button></li>
          <li><button className='btn-nav' onClick={() => onPressCallback('PERNA')}>PERNA</button></li>
        </ul>
      </div>
      
    </div>
  );
};

export default NavigationBar;
