import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="bg-slate-950 min-h-screen text-white font-sans selection:bg-green-500 selection:text-black">
        <AnimatePresence mode="wait">
          {loading && <Preloader key="preloader" />}
        </AnimatePresence>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
