import React from 'react';
import '../components/Sistem.css'; // Pastikan nama file CSS sesuai
import gerak from '../assets/gerak.gif'
const Sistem = () => {
  return (
    <div className="sistem-cardd">
      <div className="sistem-contentt">
        <div className="sistem-textt">
          <h2 id='title'>Apa itu Sistem Pengamanan Komputer</h2>
          <p>Sistem pengaman komputer adalah kumpulan alat dan tindakan untuk melindungi komputer dan data dari serangan serta akses yang tidak sah. Ini termasuk perangkat lunak antivirus untuk melawan virus dan malware, firewall untuk mengatur lalu lintas jaringan, enkripsi data untuk menyembunyikan informasi sensitif, serta praktik keamanan seperti otentikasi multi-faktor dan pembaruan perangkat lunak secara teratur.Semua ini dirancang untuk mencegah serangan siber dan menjaga komputer dan data Anda aman. </p>
        </div>
        <div className="sistem-imagee">
          <img src={gerak} alt="Gambar Cardd" />
        </div>
      </div>
    </div>
  );
}

export default Sistem;
