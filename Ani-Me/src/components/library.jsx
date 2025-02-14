import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider"; // Import the slider component
import "./library.css";

const Library = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="library-wrapper">
      {/* Logo */}
      <div className="logo">Ani.me</div>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/subbed">Subbed</Link></li>
          <li><Link to="/dubbed">Dubbed</Link></li>
          <li><Link to="/trending">Trending</Link></li>
          <li><Link to="/on-air">On Air</Link></li>
        </ul>
      </nav>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search anime..." />
        <button>🔍</button>
      </div>

      {/* Use the Slider Component */}
      <Slider />

      {/* Trending Anime Section */}
      <div className="trending-anime">
        <h2>Trending Anime</h2>
        <div className="anime-cards">
          <div className="anime-card">
            <img src="anime1.jpg" alt="Anime 1" />
            <p>Anime Title 1</p>
          </div>
          <div className="anime-card">
            <img src="anime2.jpg" alt="Anime 2" />
            <p>Anime Title 2</p>
          </div>
          {/* Add more anime cards */}
        </div>
      </div>
    </div>
  );
};

export default Library;
