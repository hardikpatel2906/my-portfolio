import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-grow p-6 bg-[#88BDBC]'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
