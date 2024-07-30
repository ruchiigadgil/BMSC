import React from "react";
import MovieNavbar from "../components/Navbar/Movie.Navbar.Component";

const MovieLayoutHoc = 
(Component) => 
    ({...props}) => {
  return <div>
    <MovieNavbar/>
    <Component {...props}/>
    </div>;
};

export default MovieLayoutHoc;
