import React from 'react';
import './index.css';
import Home from './routes/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from 'react-dom';
import Game from './routes/Game/Game';
import Detail from './routes/Details/Detail';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>

      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
      <Route path='/game' element={<Game />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

