import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Animasi.css'; // Import your CSS file
import baskoroImage from '../assets/Baskoro.jpg'; 
import baskoroVideo from '../assets/Baskara.mp4';
import FikramImage from '../assets/FIkrom.jpg' 
import FikramVideo from '../assets/Fikrom.mp4'
import AlidaVidio from '../assets/Alido.mp4' 
import Alidaimage from '../assets/Alido.jpg'
import AyungImage from '../assets/Ayong.jpg'
import AyungVideo from '../assets/Ayong.mp4'

const AnimeHoverEffect = () => {
  useEffect(() => {
    const mainContainer = document.querySelector(".main-container");
    const imagePreview = mainContainer.querySelectorAll(".image-preview");
    const images = mainContainer.querySelectorAll(".image-preview img");
    const video = mainContainer.querySelectorAll("video");

    mainContainer.addEventListener('mouseenter', () => {
      images.forEach((image) => {
        image.style.opacity = 0.5;
      });
    });

    mainContainer.addEventListener('mouseleave', () => {
      images.forEach((image) => {
        image.style.opacity = 1;
      });
    });

    let t1 = gsap.timeline();

    t1.to(imagePreview, {
      duration: 1,
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      stagger: 0.1
    });

    imagePreview.forEach((image, index) => {
      image.addEventListener('mouseenter', () => {
        video[index].play();
      });

      image.addEventListener('mouseleave', () => {
        video[index].pause();
      });
    });
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  return (
    <div className="main-container">
      {/* Repeat this block for each image-preview */}
      <div className="image-preview">
        <img src={baskoroImage} alt="baskoro" />
        <video
          paused
          loop
          muted
          playsInline
          aria-hidden="true"
          src={baskoroVideo}
          type="video/mp4"
        ></video>
        <span className="overlay">
          <div className="deskripsi">
            <h1 style={{ fontSize: 20,fontWeight: 'bold',color: 'white',opacity:0.8}}>Baskara - 1221029</h1>
            <p style={{ fontSize: 15,fontWeight: 'bold',color: 'white',opacity:0.8}}>
            Executor dalam pembuat makalah yang terkait tugas yang diberikan
            </p>
          </div>
        </span>
      </div>
      {/* End of image-preview block */}

      

       {/* Repeat this block for each image-preview */}
       <div className="image-preview">
        <img src={FikramImage} alt="fikram" />
        <video
          paused
          loop
          muted
          playsInline
          aria-hidden="true"
          src={FikramVideo}
          type="video/mp4"
        ></video>
        <span className="overlay">
          <div className="deskripsi">
            <h1 style={{ fontSize: 20,fontWeight: 'bold',color: 'white',opacity:0.8}}>Fikramul Bizli - 1221050</h1>
            <p style={{ fontSize: 15,fontWeight: 'bold',color: 'white',opacity:0.8}}>
            Web Blog Developer 
            </p>
          </div>
        </span>
      </div>
      {/* End of image-preview block */}

       {/* Repeat this block for each image-preview */}
       <div className="image-preview">
        <img src={Alidaimage} alt="baskoro" />
        <video
          paused
          loop
          muted
          playsInline
          aria-hidden="true"
          src={AlidaVidio}
          type="video/mp4"
        ></video>
        <span className="overlay">
          <div className="deskripsi">
            <h1 style={{ fontSize: 20,fontWeight: 'bold',color: 'white',opacity:0.8}}> Khalidah Nur Djamil - 1221019 </h1>
            <p style={{ fontSize: 15,fontWeight: 'bold',color: 'white',opacity:0.8}}>
            Menganalisis materi terkait tugas yang diberikan 
            </p>
          </div>
        </span>
      </div>
      {/* End of image-preview block */}

       {/* Repeat this block for each image-preview */}
       <div className="image-preview">
        <img src={AyungImage} alt="baskoro" />
        <video
          paused
          loop
          muted
          playsInline
          aria-hidden="true"
          src={AyungVideo}
          type="video/mp4"
        ></video>
        <span className="overlay">
          <div className="deskripsi">
            <h1 style={{ fontSize: 20,fontWeight: 'bold',color: 'white',opacity:0.8}}>M. Syahrul Iman - 1221003</h1>
            <p style={{ fontSize: 15,fontWeight: 'bold',color: 'white',opacity:0.8}}>
            UI / UX Designer
            </p>
          </div>
        </span>
      </div>
      {/* End of image-preview block */}
    </div>
  );
};

export default AnimeHoverEffect;
