import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import ClienteHome from './pages/clienteHome';
import VeiculoHome from './pages/veiculoHome';
import LocacaoHome from './pages/locacaoHome';
import ConcluirLocacao from './pages/ConcluirLocacao';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ClienteHome /> } />
          <Route path='/veiculo' element={<VeiculoHome /> } />
          <Route path='/locacao' element={<LocacaoHome /> } />
          <Route path='/concluir/:idParam' element={<ConcluirLocacao /> } />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

