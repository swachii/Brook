import './App.css';
import Bookcards from './components/Bookcards';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Explore from './components/Explore'; // Import the Explore component
import Footer from './components/Footer'; // Assuming you have the Footer component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/explore" element={<Explore />} /> {/* Add the Explore route */}
            {/* Add more routes as necessary */}
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </>
    </Router>
  );
}

const Home = () => (
  <>
    <Carousel />
    <Bookcards />
  </>
);

export default App;
