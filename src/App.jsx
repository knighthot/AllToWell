import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Homepage/Home';
import Add from './AddData/AddData';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/AllToWell' element={<Home />} />
        <Route path='/AllToWell/add' element={<Add />} />
      </Routes>
    </Router>
  );
};

export default App;
