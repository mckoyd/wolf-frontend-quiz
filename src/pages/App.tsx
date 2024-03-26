import React from 'react';
import { Route, Routes } from 'react-router-dom';

import StartMenu from './StartMenu';

import { useScreenSizeUpdate } from '../hooks/useScreenSizeUpdate';

import '../styles/App.css';

const App: React.FC = () => {
  const screenSize = useScreenSizeUpdate();
  return (
    <div className="app-section">
      <Routes>
        <Route path="/" element={<StartMenu />} />
      </Routes>
    </div>
  );
};

export default App;
