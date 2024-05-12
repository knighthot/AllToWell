import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Header from "../Sections/Header";
import Content from "../Sections/Content";
import Informasi from "../Sections/Informasi";
import Task from "../Sections/Task";
import Sistem from "../Sections/Sistem";
import MateriPembelajaran from "../Sections/MateriPembelajaran";
import Card from "../Sections/Card";
import Team from "../Sections/Team";
import Footer from '../Sections/Footer';
import TeamCardsContainer from "../Sections/TeamCard";
import Baskara from '../assets/Baskara.png';
import Fikram from '../assets/Fikram.png';
import Alida from '../assets/Alida.png';
import Ayung from '../assets/Ayung.png';
import Individu from '../Sections/Individu'
import AnimeHoverEffect from '../Sections/AnimeHoverEffect';
import TugasIndividu from '../Sections/TugasIndividu';
import TagSummary from '../Sections/TagSummary';
import Summary from '../Sections/Summary';
import TugasKelompok from '../Sections/TugasKelompok';
import Kelompok from '../Sections/Kelompok';
import '../App.css';

const images = [Baskara, Fikram, Alida, Ayung];

export default function Home() {
  const [rainItems, setRainItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setRainItems((prev) => [
        ...prev,
        { id: Date.now(), x: Math.random() * window.innerWidth, y: 0, image: randomImage },
      ]);
    }, 9000);

    const updatePositions = () => {
      setRainItems((prev) =>
        prev.map((item) => ({
          ...item,
          y: item.y + 1, // Sesuaikan dengan kecepatan jatuh yang diinginkan
        }))
      );
    };

    const updateInterval = setInterval(updatePositions, 50); // Sesuaikan interval sesuai dengan kecepatan

    return () => {
      clearInterval(interval);
      clearInterval(updateInterval);
    };
  }, []);

  const config = {
    mass: 1,
    tension: 250,
    friction: 20,
  };

  const rainAnimations = useSpring({
    from: { opacity: 0.2, transform: 'translateY(-100%)' },
    to: { opacity: 0.5, transform: 'translateY(0)' },
    config,
  });

  return (
    <div className="App">
      <div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
        <Header />

      </div>
      <div style={{ position: 'relative', overflow: 'hidden', height: 'auto' }}>
        <animated.div style={rainAnimations}>
          {rainItems.map((item) => (
            <animated.img
              key={item.id}
              src={item.image}
              alt={`Rain ${item.id}`}
              style={{
                position: 'absolute',
                top: item.y,
                left: item.x,
                pointerEvents: 'none',
                width: 30,
              }}
            />
          ))}
        </animated.div>
        <div className="content">
          <Content />
          <Informasi className="informasi-section" />
          <Task className="task-section" />
          <Sistem />
          <MateriPembelajaran />
          <Card />
          <Team />
          <AnimeHoverEffect style={{ flex: 1 }} />
    <TugasKelompok/>
          <Kelompok/>
          <TugasIndividu/>
          <Individu/>
          {/*  
         
         
          
          
          <TagSummary/>
          <Summary/>	 */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}