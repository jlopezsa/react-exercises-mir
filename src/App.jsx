import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import ExerOnionHater from './pages/ExerOnionHater';
import ExerDestinity from './pages/ExerDestinity';
import ExerPokemon from './pages/ExerPokemon';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ExerOnionHater">OnionHater</Link></li>
          <li><Link to="/ExerDestinity">ExerDestinity</Link></li>
          <li><Link to="/ExerPokemon">ExerPokemon</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ExerOnionHater" element={<ExerOnionHater />} />
        <Route path="/ExerDestinity" element={<ExerDestinity />} />
        <Route path="/ExerPokemon" element={<ExerPokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
