import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Technology from './components/Technology';
import Education from './components/Education';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Project from './components/Project';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-noise" >
        <Navbar />
        <div className='flex-grow p-6 bg-[#ffffff]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/education" element={<Education />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
