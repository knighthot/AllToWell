import React, { useState } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
import '../components/Card.css';
const Card = ({ number, title, content, backgroundColor }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div
    className="card-container" // Menambah kelas CSS untuk gaya Card
    style={{
      backgroundColor: backgroundColor
    }}
    onClick={handleToggleExpand}
    >
        <div className="card-header"> {/* Menambah kelas CSS untuk gaya header */}
        {isExpanded ? number && <h3 className="card-title">{title}</h3> : number && <h3 className="card-title">0{number}. {title}</h3>}
        {isExpanded ? <IoIosArrowDropup size={30} /> : <IoIosArrowDropdown size={30} />}
      </div>
      {isExpanded && (
        <div className="card-content"> {/* Menambah kelas CSS untuk gaya konten */}
          <p>{content}</p>
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
