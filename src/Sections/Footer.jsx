import React from 'react';
import LeftImage from '../assets/logo.png';
import RightImage1 from '../assets/kanan1.png';
import RightImage2 from '../assets/kanan2.png';

const Footer = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.leftContent}>
        <img src={LeftImage} alt="Left" style={styles.leftImage} />
        
        <div style={styles.leftText}>
          <p style={{ fontSize: 40, color: '#B9FF66', fontWeight: 'bold',marginBottom:'50px' }}>All to Well</p>
          <p style={{ backgroundColor: '#B9FF66', marginTop: "100px",color:'#333',borderRadius:25,fontSize:28,width:'14%',padding:"10px",fontWeight: 'bold',position:'absolute',marginRight:'100px',left:'100px'}}>THANKYOU!!</p>
        </div>
      </div>
      <div style={styles.rightContent}>
        <img src={RightImage2} alt="Right 1" style={styles.rightImage1} />
        <img src={RightImage1} alt="Right 2" style={styles.rightImage} />
      </div>
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15rem',
  },
  leftContent: {
    display: 'flex',
    alignItems: 'center',
  },
  leftImage: {
    width: '120px',
    height: '120px',
    marginLeft: '30px',
    borderRadius: '50%',
    marginBottom: '90px',
  },
  leftText: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft  : '30px',
  },
  rightContent: {
    display: 'flex',
  },
  rightImage: {
    width: '100%',
    height: '230px',
  marginTop: '	10px',
    borderRadius: '50%',
  },

  rightImage1: {
    width: '100%',
    height: '180px',
    marginRight: '100px',
    borderRadius: '50%',
    marginTop: '60px'
    
  },
};

export default Footer;
