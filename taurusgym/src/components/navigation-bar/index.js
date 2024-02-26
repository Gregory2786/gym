import React, { useState } from 'react';
import './styles.css';

const NavigationBar = ({ onPressCallback }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOptionClick = (category) => {
    onPressCallback(category);
    setShowMenu(false); 
  };

  return (
    <div className='container-nav-bar'>

      <div className='container-logo'>
        <img onClick={() => onPressCallback('')} id='logo' src="/logo01.png" alt="logo" />
      </div>

      <div className='options'>
        <button className='btn-hamburger' onClick={() => setShowMenu(!showMenu)}>
          <div className='hamburger-line' />
          <div className='hamburger-line' />
          <div className='hamburger-line' />
        </button>
        <ul className={`menu ${showMenu ? 'show' : ''}`}>
          <li><button className='btn-nav' onClick={() => handleOptionClick('OMBRO')}>OMBRO</button></li>
          <li><button className='btn-nav' onClick={() => handleOptionClick('PEITO')}>PEITO</button></li>
          <li><button className='btn-nav' onClick={() => handleOptionClick('BRACO')}>BRAÇO</button></li>
          <li><button className='btn-nav' onClick={() => handleOptionClick('ABDOMEN')}>ABDÓMEN</button></li>
          <li><button className='btn-nav' onClick={() => handleOptionClick('COSTAS')}>COSTAS</button></li>
          <li><button className='btn-nav' onClick={() => handleOptionClick('PERNA')}>PERNA</button></li>
        </ul>
      </div>
      
    </div>
  );
};

export default NavigationBar;
