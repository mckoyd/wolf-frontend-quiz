import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Question from './Question';
import Results from './Results';
import StartMenu from './StartMenu';

import '../styles/App.css';

const App: React.FC = () => {
  return (
    <div className="app-section">
      <Routes>
        <Route path="/" element={<StartMenu />} />
        <Route path="/question/:subject/:index" element={<Question />} />
        <Route path="/results/:subject" element={<Results />} />
      </Routes>
    </div>
  );
};

export default App;
