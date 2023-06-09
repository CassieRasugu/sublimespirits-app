import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Drinks from "./pages/Drinks/Drinks";
import Cocktails from "./pages/Cocktails/Cocktails";
import CocktailForm from "./pages/Cocktails/CocktailForm";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "drinks" element = {<Drinks />} />
          <Route path = "cocktails" element = {<Cocktails />} />
          <Route path = "form" element = {<CocktailForm />} />
        <Route path = "about" element = {<About />} />
        </Route>
</Routes>
</BrowserRouter>
  </React.StrictMode>
);


