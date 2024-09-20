import "./Footer.css";
import { Link } from "react-router-dom";
import  logo1  from "../../assets/github.png"
import  logo2  from "../../assets/linkden.png"

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="/help">Help Centre</a></li>
            <li><a href="/aircover">AirCover</a></li>
            <li><a href="/anti-discrimination">Anti-discrimination</a></li>
            <li><a href="/disability-support">Disability support</a></li>
            <li><a href="/cancellation">Cancellation options</a></li>
            <li><a href="/report">Report neighbourhood concern</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Hosting</h3>
          <ul>
            <li><a href="/airbnb-your-home">TravelO your home</a></li>
            <li><a href="/aircover-hosts">AirCover for Hosts</a></li>
            <li><a href="/hosting-resources">Hosting resources</a></li>
            <li><a href="/community-forum">Community forum</a></li>
            <li><a href="/hosting-responsibly">Hosting responsibly</a></li>
            <li><a href="/join-class">Join a free Hosting class</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>TravelO</h3>
          <ul>
            <li><a href="/newsroom">Newsroom</a></li>
            <li><a href="/new-features">New features</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/investors">Investors</a></li>
            <li><a href="/emergency-stays">TravelO.org emergency stays</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span>© 2024 TravelO, Inc.</span>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/sitemap">Sitemap</a>
          <Link to="/company-details">Company Details</Link>
        </div>

        <div className="footer-social-icons">
        <Link to='https://github.com/imukulrajput' target='_blank'>
                    <img className='foot-logo' src={logo1} alt='github-logo' />
                </Link>
                <Link to='https://www.linkedin.com/in/imukulrajput1430' target='_blank'>
                    <img className='foot-logo' src={logo2} alt='linkedIn-Logo' />
                </Link>
        </div>
      </div>
    </footer>
  );
};
