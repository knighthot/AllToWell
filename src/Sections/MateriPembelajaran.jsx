// MateriPembelajaran.js
import React from 'react';
import '../components/MateriPembelajaran.css'; // Mengimport file CSS

const MateriPembelajaran = () => {
  return (
    <div className="materi-pembelajaran-container"> {/* Menggunakan kelas CSS */}
      <h1 className="materi-pembelajaran-title">MATERI PEMBELAJARAN</h1> {/* Menggunakan kelas CSS */}
      <p className="materi-pembelajaran-text">Apa saja yang di pelajari dalam mata kuliah ini?</p> {/* Menggunakan kelas CSS */}
    </div>
  );
}

export default MateriPembelajaran;
