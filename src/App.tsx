import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Challenges from './pages/Challenges';
import Team from './pages/Team';
import Join from './pages/Join';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/team" element={<Team />} />
        <Route path="/join" element={<Join />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
