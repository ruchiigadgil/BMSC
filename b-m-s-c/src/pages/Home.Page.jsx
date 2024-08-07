import React, { useEffect, useState } from 'react'
import axios from 'axios'
//Layouts
import DefaultLayoutHoc from '../layouts/Default.Layout';

//Components
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies]=useState([])
  const [premierMovies, setPremierMovies] = useState([]);
  const [OnlineStreamEvents, setOnlineStreamEvents] = useState([]);
  
  useEffect(()=>{
    const requestTopRatedMovies = async ()=>{
      const getTopRatedMovies = await axios.get("/movie/top_rated")
      setRecommendedMovies(getTopRatedMovies.data.results);
    }
    requestTopRatedMovies()
  },[])

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get(
        "/movie/popular"
      );
      setPremierMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []); 

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get(
        "/movie/upcoming"
      );
      setOnlineStreamEvents(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);
 return (
   <>
     <HeroCarousel />

     <div className="container mx-auto px-4 md:px-12 my-8">
       <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
         The Best Of Entertainment
       </h1>
       <EntertainmentCardSlider />
     </div>

     <div className="container mx-auto px-4 md:px-12 my-8">
       <PosterSlider
         title="Recommended Movies"
         subtitle="List of Recommended Movies"
         posters={recommendedMovies}
         isDark={false}
       />
     </div>

     <div className="py-12">
       {/* Dark background section for Premier Movies */}
       <div
         className="bg-premier-800"
         style={{
           backgroundImage:
             "linear-gradient(90deg,rgba(43,49,73,255) 100%, rgba(43,49,73,255) 100%, rgba(43,49,73, 0.04) 100%, rgba(43,49,73,255) 100%)",
         }}
       >
         <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
           <div className="hidden md:flex bg-premier-800">
             <img
               src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
               alt="rupay"
               className="w-full h-full"
             />
           </div>
           <PosterSlider
             title="Premiers"
             subtitle="Brand new release every Friday"
             posters={premierMovies}
             isDark={true}
           />
         </div>
       </div>

       {/* Light background section for Online Streaming Events */}
       <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
         <PosterSlider
           title="Online Streaming Events"
           subtitle="Online Streaming Events"
           posters={OnlineStreamEvents}
           isDark={false}
         />
       </div>
     </div>
   </>
 );
};

export default DefaultLayoutHoc(HomePage);    