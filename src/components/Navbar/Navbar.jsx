import "./Navbar.css";
import { useDate,useAuth } from "../../context";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {

  const {destination,dateDispatch,checkinDate,checkoutDate,guests} = useDate();

  const { authDispatch,accessToken } = useAuth();
  const location = useLocation();
 

  const handleSearchClick = () =>{
      dateDispatch({
          type:"OPEN_SEARCH_MODAL"
      })
  }

  const handleAuthClick = () => {
    if (accessToken) {
      authDispatch({
        type: "SHOW_DROP_DOWN_OPTIONS"
      })
    } else {
      authDispatch({
        type: "SHOW_AUTH_MODAL",
      });
    }

  };

  
  const formattedCheckinDate = checkinDate ? new Date(checkinDate).toLocaleDateString("en-US", { day: "numeric", month: "short" }) : null;
  const formattedCheckoutDate = checkoutDate ? new Date(checkoutDate).toLocaleDateString("en-US", { day: "numeric", month: "short" }) : null;

  return (
    <header className="heading d-flex align-center">
      <h1 className="heading-1">
        <Link className="link" to="/">
          TravelO
        </Link> 
      </h1>
      {
        location.pathname !== "wishlist" && 
      <div className="form-container d-flex align-center cursor-pointer shadow " onClick={handleSearchClick}>
        <span className="form-option">{destination || "Any Where"}</span>
        <span className="border-right-1px"></span>
        <span className="form-option">{formattedCheckinDate && formattedCheckoutDate 
            ? `${formattedCheckinDate} - ${formattedCheckoutDate}` 
            : "Any Week"}</span>
        <span className="border-right-1px"></span>
        <span className="form-option">{location.pathname !== "home" &&  guests > 0 ? `${guests} guests`:"Add Guests"}</span>
        <span className="search material-icons-outlined">search</span>
      </div>
}
      <nav className="d-flex align-center gap-large" onClick={handleAuthClick}>
        <div className="nav d-flex align-center cursor-pointer">
          <span className="material-icons-outlined profile-option menu">
            menu
          </span>
          <span className="material-icons-outlined profile-option person">
            person_2
          </span>
         </div>
      </nav>
    </header>
  );
};
