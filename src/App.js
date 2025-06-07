import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Insurances from './components/pages/Insurances';
import Contact from './components/pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='verified'>
        <a href="https://www.psychologytoday.com/profile/1270828" target="_blank" rel="noopener noreferrer">
          <img src={require('./images/verified.png')} alt='Verified by Psychology Today' />
        </a>
      </div>
      <div className='content'>

        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/insurances' element={<Insurances />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
      <Navbar />
    </Router>

  );
}

export default App;
