import "./CompanyDetails.css";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { Fragment } from "react";

export const CompanyDetails = () => {
  const navigate = useNavigate();

  const handleHomeClick = () =>{
     navigate("/")
  }

  return (
    <Fragment>
      <div className="company-details-container">
        <h1>Company Details</h1>
        <p><strong>Provider of the website:</strong><br />
          StaySavvy India <br />
          Premnagar<br />
          Dehradun 248007<br />
          India
        </p>
        <p><strong>Directors:</strong> Mukul Rajput and Sharika Abrar</p>
        <p><strong>VAT-ID:</strong> IE9827384L</p>
        <p><strong>Trade Register Number:</strong> (India Companies Registration Office) IE 511825</p>
        <p><strong>Contact us:</strong></p>
        <p>Email address: <a href="mukulrajput34@gmail.com">mukulrajput34@gmail.com</a></p>
        <p>StaySavvy support: <a href="https://www.airbnb.co.in/help/contact_us" target="_blank" rel="noopener noreferrer">https://www.india.co.in/help/contact_us</a></p>
        <p>If you have a complaint or concern, you may contact the India grievance officer:</p>
        <p><strong>Provider of the website:</strong><br />
          StaySavvy India <br />
          Premnagar<br />
          Dehradun 248007<br />
          India
        </p>
        <p>Email: <a href="mailto:grievance-officer-india@airbnb.com">grievance-officer-india@airbnb.com</a></p>

        <button onClick={handleHomeClick}>Go to Home</button>
      </div>
      
    </Fragment>
  );
};
