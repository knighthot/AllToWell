import React from 'react';
import '../components/Summary.css'; // Pastikan nama file CSS sesuai
import gerak from '../assets/gerak.gif';

const pdfFile = "https://drive.google.com/file/d/1rU6Cfb_NGjx_5knUABrd3QuRYpbFplQM/preview";

const Kelompok = () => {
  return (
    <div>
    <div className="sistem-card">
      <div className="sistem-content">
        <div className="sistem-text">
          <h2 id='Title'>Penipuan Phising</h2>
          <div className="embedded-pdf-container">
            <embed className="embedded-pdf" src={pdfFile} type="application/pdf" />
          </div>

         </div>
      </div>
    </div>

 



</div>

  );
}

export default Kelompok;
