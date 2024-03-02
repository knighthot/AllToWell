// Informasi.js
import React from 'react';
import { TiLightbulb } from 'react-icons/ti';
import '../components/Informasi.css';

const Informasi = () => {
  return (
    <div className='row'>
      <div className='informasi-container'>
        <h1 className='informasi-title'>
          Info <TiLightbulb className='icon' size={30} />
           <p className='informasi-title'>Blog ini dibuat untuk memenuhi tugas yang di berikan oleh dosen pengampu Wan Hendra M.SI</p>
        </h1>
        
      </div>
    </div>
  );
}

export default Informasi;
