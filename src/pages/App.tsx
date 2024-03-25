import React from 'react';
import { Route, Routes } from 'react-router-dom';

import FQToggleButton from '../components/FQToggleButton';

import '../styles/App.css';

const App: React.FC = () => {
  return (
    <div className="app-section">
      <Routes>
        <Route path="/" element={<h1>From Root</h1>} />
      </Routes>
    </div>
  );
};

export default App;
