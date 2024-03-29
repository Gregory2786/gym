import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer>
      <div className='container-footer'>
        <h4>CONTATOS</h4>
        <ul className='Icones-footer'>
          <li className='icone'><a href="https://github.com/JoaoPauloSouzaSilva/Taurus-GYM" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
          <li className='icone'><a href="https://mail.google.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a></li>
          <li className='icone'><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
        </ul>
      </div>

      <p>&copy; 2024 TAURUS GYM. Todos os direitos reservados.</p>

    </footer>
  );
};

export default Footer;
