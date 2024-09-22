import "./BookedHotelComp.css"
import { useHotel } from "../../context"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";

export const BookedHotelComp = () =>{

  const { hotel } = useHotel();
  const navigate = useNavigate();
  const { authDispatch } = useAuth();

  const { orderId, name, image, city, state, checkInDate, checkOutDate} = hotel;

  const handleContinueBookingClick = () => {
     navigate("/"); 
     authDispatch({  
      type:"SHOW_DROP_DOWN_OPTIONS"
   })
 }
     return( 
    
    <div className="os-container d-flex direction-column shadow gap">
      <div className="d-flex align-center justify-space-between br-bottom pd-small">
          <h2>History</h2>
          <button className="button btn-auth btn-close cursor-pointer d-flex align-center justify-center">
              <span className="material-icons-outlined">
                  close
              </span>
          </button>
      </div>
      <span className="span-md">Booking ID: {orderId}</span>
      <div className="d-flex align-center justify-space-between br-bottom pd-small">

          <div className="d-flex direction-column hoteldetails">
              <span className="fs-md">{name}</span>
              <span className="span-md">{city}, {state}</span>
          </div>
          <div>
              <img className="img" src={image} alt={name} />
          </div>
      </div>
      <div className="d-flex direction-column gap">
          <div className="d-flex direction-column">
              <span className="span-md">Check In</span>
              <p className="fs-md">{checkInDate}, 11:00 AM</p>
          </div>
          <div className="d-flex direction-column">
              <span className="span-md">Check Out</span>
              <p className="fs-md"> {checkOutDate}, 11:00 AM</p>
          </div>
      </div>
            <div>
                <button className="button btn-primary btn-reserve cursor" onClick={handleContinueBookingClick}>Continue Booking</button>
            </div>

  </div>
  
 
     )
}