import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import StarshipList from './components/StarshipList';
import StarshipDetail from './components/StarshipDetail';
import Logo  from './images/logo.png'
import './App.css';

function Header({ searchTerm, onSearchChange }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="App-header">
      <div className="header-content">
        <Link to="/" className="logo-container">
          <img src={Logo} alt="Star Wars Logo" className="logo" />
        </Link>
        {isHomePage ? (
          <div className="search-container">
            <div className="search-input-wrapper">
              <i className="fa-brands fa-searchengin search-icon"></i>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={onSearchChange}
                className="search-input"
              />
            </div>
          </div>
        ) : (
          <div className="header-right">
            <Link to="/" className="back-button">← Back to List</Link>
          </div>
        )}
      </div>
    </header>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 50;
      const y = (clientY / window.innerHeight - 0.5) * 50;
      
      document.body.style.setProperty('--mouse-x', `${x}px`);
      document.body.style.setProperty('--mouse-y', `${y}px`);
      
      const beforeElement = document.body;
      if (beforeElement) {
        beforeElement.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<Header searchTerm={searchTerm} onSearchChange={handleSearch} />} />
        </Routes>
        <main>
          <Routes>
            <Route path="/" element={<StarshipList searchTerm={searchTerm} />} />
            <Route path="/starship/:id" element={<StarshipDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;