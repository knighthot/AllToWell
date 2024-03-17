import React from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';

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
        allowfullscreen
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
      style={{
        width: '100%',
        border: '1px solid black',
        cursor: 'pointer',
        marginBottom: 20,
        background: backgroundColor,
        borderRadius: '25px',
        transition: 'all 0.6s',
        height: isExpanded ? 'auto' : '70px',
        padding: isExpanded ? '30px' : '20px',
      }}
      onClick={handleToggleExpand}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: isExpanded ? 1 : 0, borderColor: 'black', paddingBottom: isExpanded ? 10 : 0 }}>
        {isExpanded ? number && <h3 style={{ marginLeft: 30, fontSize: 24, fontWeight: 'bold', color: '#555' }}> <span style={{ color: 'black' }}>{Nama}</span></h3> : number && <h3 style={{ marginLeft: 30, fontSize: 24, fontWeight: 'bold', color: '#555' }}>0{number}. <span style={{ color: 'black' }}>{Nama}</span></h3>  }
        {isExpanded ? <IoIosArrowDropup size={30} /> : <IoIosArrowDropdown size={30} />}
      </div>
      {isExpanded && (
        <div> 
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} > 
            {pdfLink.map((link, index) => (
              <div key={index} style={{ marginBottom: 50,backgroundColor:'white',width:800,justifyContent:'center',display: 'flex', flexDirection: 'column', alignItems: 'center',borderRadius:20,marginTop:50 }}>
                <h4 style={{margin:20,color:'black',textDecoration:'underline'}}>{namatugas[index]}</h4>
                <embed style={{ margin: 'auto' }} src={link} type="application/pdf" width="50%" height="600px" />
              </div>
            ))}
            {/* Render videos */}
            {videoLink && <Video source={videoLink} />}
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
        "Tugas Database"
      ],
      pdfLink: [
        "https://drive.google.com/file/d/1aXM5WfzF4GB8M8a5DbAmiANLh8uA49tW/preview",
        'https://drive.google.com/file/d/1d8lm4qarrlhSe9ptGkXdYaP4aGy2eoHj/preview'
      ],
      videoLink: "https://drive.google.com/file/d/1YdTHMP51M-Ck0Zfcs9tUbrDd_xW6D7D2/preview" // Add your video link here
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
      videoLink: "https://drive.google.com/file/d/1sYR3SM_U3D5IHQhhDN2ye8Wxk8HI4Bxg/preview" // Add your video link here
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
      videoLink: "https://drive.google.com/file/d/1WVeILMJcgsh6li0K9AEr19vrVAnMnGeQ/preview" // Add your video link here
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
      videoLink: "https://drive.google.com/file/d/1HU8pqjBTs31lwdnsuD0F3-BV00uJYdHr/preview" // Add your video link here
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
