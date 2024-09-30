import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-noise" >
      <Navbar />
      <div className='flex-grow p-6 bg-[#7c98a2]  bg-noise bg-noise-pattern bg-opacity'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
