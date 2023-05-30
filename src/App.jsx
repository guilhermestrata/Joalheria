import './App.css';
import Home from './pages/home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Sobre from './pages/sobre';
import Contato from './pages/contato';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;