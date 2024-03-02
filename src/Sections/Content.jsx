import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../components/Content.css';
import right from '../assets/right.png';

const Content = () => {
  const propsUpDown = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'rotate(5deg)' });
        await next({ transform: 'rotate(-5deg)' });
      }
    },
    config: { duration: 1000 }, // Adjust the duration as needed
  });


  return (
    <div className="content-container">
      <div className="left-side">
        <h2 className='Title'>Welcome!</h2>
        <p className='SubTitle'>Kumpulan Tugas Sistem Pengamanan Komputer</p>
      </div>
      {/* Animasi dari atas ke bawah dan sebaliknya */}
      <animated.div className="right-side" style={propsUpDown}>
        <img src={right} alt="Gambar Ukuran Besar" />
      </animated.div>
    </div>
  );
}

export default Content;
