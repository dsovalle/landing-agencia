import React from 'react'
import './Header.css';
import Paisaje_1 from '../../assets/pictures/paisajes.png';

function Header() {
  return (
    <div className='cont-info'>
      
        <div className='col-info-text'>
            <h1 className='title'>We Take Care Of Your Brand</h1>
            <p className='paragraph'>Use This Section To Describe Your Company And The Products Your Offer. Your Could Share Your Company's Story And Details About Why You Are In Bussines.</p>
            <input type="text" placeholder='Enter Your Email' className='input-email' />
            <a href="" className='btn-email'>Lest Talk</a>
        </div>

        <div className='col-info-img'>
            <img src={Paisaje_1} alt="pasaije" className='paisaje' />
        </div>
    </div>
  )
}

export default Header