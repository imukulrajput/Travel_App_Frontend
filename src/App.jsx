import './App.css'
import { Home,SingleHotel,SearchResult, Wishlist,Payment,OrderSummary,BookedHotel,CompanyDetails} from './pages'
import {Route,Routes} from "react-router-dom"
import { useAuth } from './context'
import { useEffect } from 'react'

function App() {
  
  const { authDispatch } = useAuth();

  useEffect(() => {
    // Check if accessToken is stored in localStorage
    const storedToken = localStorage.getItem("accessToken");
    const storedUsername = localStorage.getItem("username");

    if (storedToken && storedUsername) {
      // Restore the token and username in the auth context
      authDispatch({
        type: "SET_ACCESS_TOKEN",
        payload: storedToken,
      });
      authDispatch({
        type: "SET_USER_NAME",
        payload: storedUsername,
      });
    }
  }, [authDispatch]); 


  return (
    <Routes>
       <Route path="/" element={<Home></Home>}/>
       <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotel></SingleHotel>}></Route>
       <Route path="/hotels/:address" element={<SearchResult></SearchResult>}></Route>
       <Route path="/wishlist" element={<Wishlist></Wishlist>}/>
       <Route path="/confirm-booking/stay/:id" element={<Payment></Payment>}/>
       <Route path="/order-summary" element={<OrderSummary></OrderSummary>}/>
       <Route path="/booked-hotel" element={<BookedHotel></BookedHotel>}/>
       <Route path="/company-details" element={<CompanyDetails></CompanyDetails>}></Route>

    </Routes>
  )
}

export default App
