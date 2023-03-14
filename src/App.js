import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Rockets from './components/Rockets';
import Profile from './components/Profile';
import Missons from './components/Missons';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <hr className="hori-line" />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missons />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
