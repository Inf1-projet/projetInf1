import React from 'react';
import './index.css';
import Home from './routes/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from 'react-dom';
import Game from './routes/Game';
import Detail from './routes/Detail';
import Header from './component/Header/Header';

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
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
