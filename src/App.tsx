import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Fantasy from './pages/Fantasy';
import Squad from './pages/Squad';
import About from './pages/About';
import Contact from './pages/Contact';
import Squad2 from './pages/Squad2';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fantasy" element={<Fantasy />} />
          <Route path="/squad" element={<Squad />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/squad2" element={<Squad2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;