import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import CocktailList from './pages/Cocktails/CocktailList';
import CocktailForm from './pages/Cocktails/CocktailForm';
import CocktailDetails from './pages/Cocktails/CocktailDetails';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="cocktails" element={<CocktailList />} />
          <Route path="cocktails/form" element={<CocktailForm />} />
          <Route path="cocktails/:id" element={<CocktailDetails />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

