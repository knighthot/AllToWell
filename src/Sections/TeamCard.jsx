import React from 'react';
import { useSpring, animated } from 'react-spring';
import Baskara from '../assets/Baskara.png';
import Fikram from '../assets/Fikram.png';
import Ayung from '../assets/Ayung.png';
import Alida from '../assets/Alida.png';

const TeamCard = ({ imgSrc, name, nim, role }) => {
  const props = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'rotate(10deg)' });
        await next({ transform: 'rotate(-10deg)' });
      }
    },
    config: { duration: 100 }, // Adjust the duration as needed
  });

  return (
    <div style={styles.card}>
      <div style={styles.content}>
        <animated.img src={imgSrc} alt={`Team ${name}`} style={{ ...styles.image, ...props }} />
        <div style={styles.textInfo}>
          <h3>{name}</h3>
          <p>{nim}</p>
        </div>
      </div>
      <p style={styles.role}>{role}</p>
    </div>
  );
};

const TeamCardsContainer = () => {
  return (
    <div style={styles.container}>
      <TeamCard
        imgSrc={Baskara}
        nim="1221029"
        name="Baskara Dwipa Raharja"
        role="Executor dalam pembuat makalah yang terkait tugas yang diberikan"
      />
      <TeamCard
        imgSrc={Fikram}
        name="Fikramul Bizli"
        nim="1221050"
        role="Web Blog Developer "
      />
      <TeamCard
        imgSrc={Alida}
        nim='1221019'
        name="Khalidah Nur Djamil"
        role="Menganalisis materi terkait tugas yang diberikan "
      />
      <TeamCard
        imgSrc={Ayung}
        nim="1221003"
        name="M. Syahrul Iman"
        role="UI / UX Designer"
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  card: {
    width: '500px',
    borderRadius: '25px',
    marginBottom: '60px',
    padding: '50px',
    backgroundColor: '#f0f0f0',
    border: '2px solid black',
    cursor: 'pointer',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '20px',
    borderBottom: '1px solid black',
    paddingBottom: 30,
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginRight: '15px',
  },
  textInfo: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  role: {
    marginTop: '30px',
    fontSize: '20px',
  },
};

export default TeamCardsContainer;
