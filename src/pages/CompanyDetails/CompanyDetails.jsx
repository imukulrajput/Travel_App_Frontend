import "./CompanyDetails.css"
import { useNavigate } from "react-router-dom";

export const CompanyDetails = () =>{

  const  navigate  = useNavigate();

  const handleHomeClick = () =>{
      navigate("/");
  }

  return (
        <div className="company-details-container">
          <h1>This website is made by Mukul Rajput and Sharika Abrar.</h1>
          <h5>also Magan is contributed</h5>
           <button onClick={handleHomeClick}>Go to Home</button>
        </div>
     );
}