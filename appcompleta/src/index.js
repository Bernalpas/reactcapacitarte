import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';


//1. Importamos al administrador de las rutas (tener instalado react-router-dom)
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //2. Encerramos la aplicación principal en el administrador de rutas
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


