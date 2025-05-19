import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import Categorias from './pages/Categorias';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categorias" element={<Categorias />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App