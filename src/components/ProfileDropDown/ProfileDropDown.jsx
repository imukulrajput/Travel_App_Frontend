import "./ProfileDropDown.css";
import {
  useAuth,
  useDate,
  useFilter,
  useWishlist,
  useAlert,
} from "../../context";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export const ProfileDropDown = () => {
  const { username,authDispatch } = useAuth();
  const { dateDispatch } = useDate();
  const { filterDispatch } = useFilter();
  const { wishlistDispatch } = useWishlist();
  const { setAlert } = useAlert();

  const navigate = useNavigate();
  const dropDownRef = useRef(null);
  const resultRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target) &&  resultRef.current && 
      !resultRef.current.contains(event.target)) {
        authDispatch({
          type: "SHOW_DROP_DOWN_OPTIONS", 
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [authDispatch]);

  const handleWishlistClick = () => {
    authDispatch({
      type: "SHOW_DROP_DOWN_OPTIONS",
    });
    navigate("/wishlist");
  };

  const handleLogoutClick = () => {
   
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");

    authDispatch({
      type: "CLEAR_USER_DATA",
    });
    authDispatch({
      type: "CLEAR_CREDENTIALS",
    });
    authDispatch({
      type: "SHOW_DROP_DOWN_OPTIONS",
    });
    dateDispatch({
      type: "CLEAR_INPUTS",
    });
    filterDispatch({
      type: "CLEAR_ALL",
    });
    wishlistDispatch({
      type: "CLEAR_WISHLIST",
    });
    navigate("/");
    setAlert({
      open: true,
      message: "Logged out successfully",
      type: "success",
    });
  };

  const handleBookedHotelClick = () =>{
      navigate("/booked-hotel");
  }
  

  return (
    <div className="drop-down-container shadow d-flex direction-column absolute" ref={resultRef}>
      <span className="option-span user cursor-pointer d-flex align-center gap-small" ref={dropDownRef} >
        <span className="material-icons-outlined">account_circle</span>
         { localStorage.getItem("username").toUpperCase() }
      </span>
      <span
        className="option-span wishlist-span cursor-pointer d-flex align-center gap-small"
        onClick={handleWishlistClick}
      >
        <span className="material-icons-outlined">favorite_border</span>
        Wishlist
      </span>
      <span
        className="option-span wishlist-span cursor-pointer d-flex align-center gap-small"
        onClick={handleBookedHotelClick}
      >
        <span className="material-icons-outlined">hotel</span>
          History
      </span>
      <span
        className="option-span logout cursor-pointer d-flex align-center gap-small"
        onClick={handleLogoutClick}  
      >
        <span className="material-icons-outlined">logout</span>
        Logout
      </span>
    </div>
  );
};
