import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import Home from './pages/Home/Home';
import Contact from "./pages/Contact/Contact";
import Drinks from "./pages/Drinks/Drinks";
import Cocktails from "./pages/Cocktails/Cocktails"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "contact" element = {<Contact />} />
          <Route path = "drinks" element = {<Drinks />} />
          <Route path = "cocktails" element = {<Cocktails />} />
        </Route>
</Routes>
</BrowserRouter>
  </React.StrictMode>
);


