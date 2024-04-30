import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Inicial from './Components/App/Inicial';
import './index.css';
import Cotacao from './Components/FormCotacao/Cotacao';
import LoginArea from './Components/LoginArea/LoginArea';
import AreadoCliente from './Components/AreaDoCliente/AreadoCliente';
import AreadoCorretor from './Components/AreaDoCorretor/AreadoCorretor';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/Cotacao" element={<Cotacao />} />
        <Route path="/area" element={<LoginArea />} />
        <Route path="/areadocliente" element={<AreadoCliente />} />
        <Route path="/areadocorretor" element={<AreadoCorretor />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
