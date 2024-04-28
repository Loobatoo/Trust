import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Inicial from './Components/App/Inicial';
import './index.css';
import Cotacao from './Components/FormCotacao/Cotacao';
import Area from './Components/Area/Area';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/Cotacao" element={<Cotacao />} />
        <Route path="/area" element={<Area />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
