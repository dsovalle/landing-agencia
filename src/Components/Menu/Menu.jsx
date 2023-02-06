import React from 'react';
import Tema from '../Modo OscuroClaro/Tema';
import Menu_balck from '../../assets/icons/menu.png'
import './Menu.css';

function Menu() {

  return (

      <nav>
        <div className='barra-1'>
          <li><a href="">Embrace</a></li>
        </div>

        <div className="barra-2">

          <li><a href="">How It Works</a></li>
          <li><a href="">Our Work</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Abour Us</a></li>

        </div>
        <div className='barra-3'>
          <a href="#" className='btnNow'>Try It Now</a>
          <Tema />
          {/* <a href="" className="menu-btn" onClick={handleMenu}><img src={Menu_balck} alt="icons menu" /></a> */}
        </div>
      </nav>
  )
}

export default Menu;
