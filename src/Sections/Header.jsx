import React from 'react'
import '../components/Header.css'
import logo from '../assets/logo.png'
import Footer from './Footer'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
      <div className='logo' > 
        <img src={logo} alt='Logo' />
      </div>
      <div className='name'>
       All to Well
      </div>
    </div>
  )
}

export default Header