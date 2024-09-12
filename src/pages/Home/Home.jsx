import { Fragment, useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { Navbar, HotelCard,Categories,SearchStayWithDate} from "../../components";
import { useCategory,useDate,useFilter } from "../../context";
import { Filter } from "../../components";
import {getHotelsByPrice, getHotelsByRoomsAndBeds,getHotelsByPropertyType,getHotelsByRatings,getHotelsByCancelation} from "../../utils";

export const Home = () => {

  const [hasMore,setHashMore] = useState(true);
  const [currentIndex,setCurrentIndex] = useState(16);
  const [testData,setTestData] = useState([]);
  const [hotels, setHotels] = useState([]);
  const {hotelCategory} = useCategory();
  const {isSearchModalOpen} = useDate();
  const {isFilterModalOpen,priceRange,noOfBathrooms,noOfBedrooms,noOfBeds,propertyType,traveloRating,isCancelable} = useFilter();


  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://travel-app-8a1c.onrender.com/api/hotels?category=${hotelCategory}`
        );
        setTestData(data);
        setHotels(data ? data.slice(0,16):[]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelCategory]);
  
  
  const fetchMoreData = () =>{
      if(hotels.length >= testData.length){
         setHashMore(false)
         return
      }
      setTimeout(()=>{
         if(hotels && hotels.length > 0){
          setHotels(hotels.concat(testData.slice(currentIndex,currentIndex+16)));
          setCurrentIndex(prev => prev+16);
         }else{
          setHotels([])
         }
      },1000)
  }

 const filteredHotelByPrice = getHotelsByPrice(hotels,priceRange);
 const filteredHotelsByBedsAndRooms = getHotelsByRoomsAndBeds(filteredHotelByPrice,noOfBathrooms,noOfBedrooms,noOfBeds);
 const filteredHotelsByPropertyType = getHotelsByPropertyType(filteredHotelsByBedsAndRooms,propertyType)
 const filteredHotelByRatings = getHotelsByRatings(filteredHotelsByPropertyType,traveloRating)
const filteredHotelByCancelation = getHotelsByCancelation(filteredHotelByRatings,isCancelable);
  return (
    <div className="relative">
      <Navbar />
       <Categories />
          {
            hotels && hotels.length > 0 ? (
              <InfiniteScroll 
              dataLength={hotels.length}
               next={fetchMoreData}
               hasMore={hasMore}
               loader={hotels.length > 0 && <h3 className="alert-text">Loading...</h3>
                
               }
               endMessage={<p className="alert-text">You have seen it all!</p>} 
              >
                 <main className="main d-flex align-center wrap gap-larger">
                  {
                  filteredHotelByCancelation && filteredHotelByCancelation.map(hotel => <HotelCard key={hotel._id} hotel={hotel}/>)
                  }
                 </main>
              </InfiniteScroll>
            ) : (<></>)
          }
       {
        isSearchModalOpen && <SearchStayWithDate></SearchStayWithDate>
       }
       {
         isFilterModalOpen && <Filter/>
       }
    </div>
  );
};
