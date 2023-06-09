import './App.css';
import './styles/Rockets.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navigation from './components/Navigation';
import Missions from './components/Missons';
import Rockets from './components/Rockets';
import { getMissions } from './redux/missions/missonSlice';
import Profile from './components/Profile';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Navigation />
      <hr className="hori-line" />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
