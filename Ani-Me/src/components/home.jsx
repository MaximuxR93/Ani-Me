import { Link } from "react-router-dom"; // Ensure proper import
import "./home.css"; // Ensure this file exists

const Home = () => {
  return (
    <div className="wrapper">
      <h1 className="title">Ani.ME</h1>
      <p className="subtitle">Dive into the Ocean of Infinite Possibilities</p>

      {/* Link to navigate to Library */}
      <Link className="btn" to="/library">Dive In</Link> 

      <div className="socials">
        <div className="card">
          {/* Instagram */}
          <a className="socialContainer containerOne" href="javascript:void(0);">
            <svg viewBox="0 0 16 16" className="socialSvg instagramSvg">
              <path d="M8 0C5.829 0 5.556.01 4.703..." />
            </svg>
          </a>

          {/* Twitter */}
          <a className="socialContainer containerTwo" href="javascript:void(0);">
            <svg viewBox="0 0 16 16" className="socialSvg twitterSvg">
              <path d="M5.026 15c6.038 0 9.341-5.003..." />
            </svg>
          </a>

          {/* LinkedIn */}
          <a className="socialContainer containerThree" href="javascript:void(0);">
            <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">
              <path d="M100.28 448H7.4V148.9h92.88..." />
            </svg>
          </a>

          {/* WhatsApp */}
          <a className="socialContainer containerFour" href="javascript:void(0);">
            <svg viewBox="0 0 16 16" className="socialSvg whatsappSvg">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627..." />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
