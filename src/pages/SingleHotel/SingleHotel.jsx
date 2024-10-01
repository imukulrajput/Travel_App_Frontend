import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HotelImages, Navbar,HotelDetails,FinalPrice,AuthModal,ProfileDropDown,SearchStayWithDate,Alert } from "../../components";
import { useAuth,useDate,useAlert } from "../../context";
import "./SingleHotel.css";

export const SingleHotel = () =>{
     
   const {id } = useParams();
   const [singleHotel,setSingleHotel] = useState({});
   
   const { isAuthModalOpen, isDropDownModalOpen } = useAuth();
   const { isSearchModalOpen } = useDate();
   const { alert } = useAlert();

   useEffect(()=>{
       (async()=>{
            try{
                  const { data } = await axios.get(`https://travel-app-8a1c.onrender.com/api/hotels/${id}`);
                   setSingleHotel(data);
               }catch(err){
                console.log(err);
            }
       })()
   },[id])

   const {name , state} = singleHotel;

   return (
     <Fragment>
       <Navbar/>
         <main className="single-hotel-page">
           <span className="hotel-name-add">{name} , {state}</span>
               <HotelImages singleHotel={singleHotel}/>
               <div className="d-flex ">
                  <HotelDetails singleHotel={singleHotel}/>
                  <FinalPrice singleHotel={singleHotel}/>
               </div>
         </main>
         {isSearchModalOpen && <SearchStayWithDate />}
      {isDropDownModalOpen && <ProfileDropDown />}
      {isAuthModalOpen && <AuthModal />}
      {alert.open && <Alert />}
     </Fragment>);
}