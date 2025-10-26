import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import MusicHome from './pages/MusicHome';
import LoginScreen from './pages/LoginScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<MusicHome />} />
      </Routes>
    </Router>
  );
}

export default App;
