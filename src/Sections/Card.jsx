import React, { useState } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';

const Card = ({ number, title, content, backgroundColor }) => {
  const [isExpanded, setExpanded] = useState(false);

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
        {isExpanded ? number && <h3 style={{ marginLeft: 30, fontSize: 24, fontWeight: 'bold', color: '#555' }}> <span style={{ color: 'black' }}>{title}</span></h3> : number && <h3 style={{ marginLeft: 30, fontSize: 24, fontWeight: 'bold', color: '#555' }}>0{number}. <span style={{ color: 'black' }}>{title}</span></h3>  }
        {isExpanded ? <IoIosArrowDropup size={30} /> : <IoIosArrowDropdown size={30} />}
      </div>
      {isExpanded && (
        <div>
          <p style={{ width: "60%", fontWeight: 500, color: 'black',marginTop:10 }}>{content}</p>
        </div>
      )}
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Card
       number={1}
        title="Pengamanan Sistem Komputer"
        content="Menjelaskan tentang apa itu keamanan komputer, apa itu sistem yang aman lalu tahapan-tahapan dalam penyerangan siber security"
        backgroundColor="#B9FF66"
      />
      <Card
        number={2}
        title="Coming Soon"
        content="Coming Soon!!"
        backgroundColor="#D3D3D3"
      />
      <Card
        number={3}
        title="Coming Soon"
        content="Coming Soon!!"
        backgroundColor="#D3D3D3"
      />
    </div>
  );
}

export default App;
