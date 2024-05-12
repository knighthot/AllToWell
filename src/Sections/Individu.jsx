import React from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
import '../components/Individu.css';
// Video component to render videos
const Video = ({ source }) => {
  return (
    <div>
      <iframe
        title="video"
        width="560"
        height="315"
        src={source}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const Individu = ({ number, Nama, backgroundColor, namatugas, pdfLink, videoLink }) => {
  const [isExpanded, setExpanded] = React.useState(false);

  const handleToggleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div
    className="individu-container"
    style={{
      background: backgroundColor,
      height: isExpanded ? 'auto' : '70px',
      padding: isExpanded ? '30px' : '20px',
    }}
    onClick={handleToggleExpand}
  >
    <div className="individu-details">
      {number && (
        <h3 className="individu-number">
          {isExpanded ? `${number}.` : `0${number}.`}{' '}
          <span className="individu-name">{Nama}</span>
        </h3>
      )}
      <div className="individu-toggle">
        {isExpanded ? <IoIosArrowDropup className="individu-toggle-icon" size={30} /> : <IoIosArrowDropdown className="individu-toggle-icon" size={30} />}
      </div>
    </div>
    {isExpanded && (
      <div className="individu-expanded">
        <div className="pdf-container">
          {pdfLink.map((link, index) => (
            <div className="pdf-item" key={index}>
              <h4>{namatugas[index]}</h4>
              <div className="pdf-link">
                <embed src={link} type="application/pdf" />
              </div>
            </div>
          ))}
         {videoLink.map((video, index) => (
        <div className="video-item" key={index}>
          <h4>{namatugas[index]}</h4>
          <Video source={video} />
        </div>
      ))}
        </div>
      </div>
    )}
  </div>
  );
}

const App = () => {
  const pdfs = [
    {
      Nama: "Baskara Dwipa Raharja - 1221029",
      backgroundColor: "#B9FF66",
      namatugas: [
        "Tugas Artikel",
        "Tugas Database",
        "Tugas Kriptografi"
      ],
      pdfLink: [
        "https://drive.google.com/file/d/1aXM5WfzF4GB8M8a5DbAmiANLh8uA49tW/preview",
        "https://drive.google.com/file/d/1d8lm4qarrlhSe9ptGkXdYaP4aGy2eoHj/preview"
      ],
      videoLink: [
        "https://www.youtube.com/embed/R0T4a3jpKfk?si=pJNaqdFQRkoXyjkF",
        "https://drive.google.com/file/d/1YdTHMP51M-Ck0Zfcs9tUbrDd_xW6D7D2/preview",
        "https://drive.google.com/file/d/1YdTHMP51M-Ck0Zfcs9tUbrDd_xW6D7D2/preview" // Add more video URLs here
      ]
    },

    // Add more PDF data objects here as needed


    {
      Nama: "Fikramul Bizli - 1221050",
      backgroundColor: "#B9FF66",
      namatugas: [
        "Tugas Artikel",
        "Tugas Database"
      ],
      pdfLink: [
        "https://drive.google.com/file/d/1jyRAeBfJDMMlM17IR8XLg-Fzh_oQhdC5/preview",
        'https://drive.google.com/file/d/1dbe71yHRHPNVlm31llbnXQt4z7HCXs4q/preview'
      ],
      videoLink: [
        "https://www.youtube.com/embed/R0T4a3jpKfk?si=pJNaqdFQRkoXyjkF",
         "https://drive.google.com/file/d/1sYR3SM_U3D5IHQhhDN2ye8Wxk8HI4Bxg/preview",
        "https://www.youtube.com/embed/R0T4a3jpKfk?si=pJNaqdFQRkoXyjkF",
       
        
      ]// Add your video link here
    },

    {
      Nama: "Khalidah Nur Djamil - 1221019",
      backgroundColor: "#B9FF66",
      namatugas: [
        "Tugas Artikel",
        "Tugas Database"
      ],
      pdfLink: [
        "https://drive.google.com/file/d/1MW2sY-tMxS9Z0CBsyxNLF1y78ZiBleSy/preview",
        'https://drive.google.com/file/d/1WoNiTvW0HfaRSgv4ZWd-hRZiNtIMntIP/preview'
      ],
      videoLink:[ 
        "https://www.youtube.com/embed/R0T4a3jpKfk?si=pJNaqdFQRkoXyjkF",
        "https://drive.google.com/file/d/1WVeILMJcgsh6li0K9AEr19vrVAnMnGeQ/preview",
        "https://www.youtube.com/embed/R0T4a3jpKfk?si=pJNaqdFQRkoXyjkF",
        
    ]// Add your video link here
    },

    {
      Nama: "M Syahrul Iman - 1221003",
      backgroundColor: "#B9FF66",
      namatugas: [
        "Tugas Artikel",
        "Tugas Database"
      ],
      pdfLink: [
        "https://drive.google.com/file/d/1mEqENpXsXo1n9YyKX4ik3IQP-MjA_bCy/preview",
        'https://drive.google.com/file/d/1e0eLtpyQyjTkO4Q73OSIJSnlAG9S09yr/preview'
      ],
      videoLink: [
      "https://www.youtube.com/embed/R0T4a3jpKfk?si=pJNaqdFQRkoXyjkF",
      "https://drive.google.com/file/d/1HU8pqjBTs31lwdnsuD0F3-BV00uJYdHr/preview",
      "https://www.youtube.com/embed/R0T4a3jpKfk?si=pJNaqdFQRkoXyjkF",
       ]// Add your video link here
    },
  ];

  return (
    <div>
      {pdfs.map((pdf, index) => (
        <Individu
          key={index}
          number={index + 1}
          Nama={pdf.Nama}
          content={pdf.content}
          backgroundColor={pdf.backgroundColor}
          namatugas={pdf.namatugas}
          pdfLink={pdf.pdfLink}
          videoLink={pdf.videoLink}
        />
      ))}
    </div>
  );
}

export default App;
