import React from 'react';
import LeftImage from '../assets/logo.png';
import RightImage1 from '../assets/kanan1.png';
import RightImage2 from '../assets/kanan2.png';
import '../components/Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='leftContent'>
        <img src={LeftImage} alt="Left" className='leftImage' />
        
        <div className='leftText'>
          <p className='all'>All to Well</p>
          <p className='well'>THANKYOU!!</p>
        </div>
      </div>
      <div className='rightContent'>
        <img src={RightImage2} alt="Right 1" className='rightImage1' />
        <img src={RightImage1} alt="Right 2" className='rightImage' />
      </div>
    </div>
  );
};



export default Footer;
