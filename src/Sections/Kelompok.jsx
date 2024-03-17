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
           <embed style={{ margin: 'auto',alignItems:'center',justifyContent:'center' }} src={pdfFile} type="application/pdf" width="60%" height="600px" />
         </div>
      </div>
    </div>

 



</div>

  );
}

export default Kelompok;
