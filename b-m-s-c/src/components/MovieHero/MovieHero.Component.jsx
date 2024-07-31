import React, { useContext } from 'react';
import { MovieContext } from '../../context/Movie.context';


const MovieHero = () => {
    const {movie}= useContext(MovieContext);
    const genres = movie.genres?.map(({name})=>name).join(",")
    // console.log(genres)
  return <>
    <div>
        {/* <mobile and tab screen size/> */}
        <div>
            <div className="lg:hidden w-full">
                <img src={`https://image.tmdb.org/t/p/original${movie}`} alt="cover poster" className="m-4 rounded"
                style={{width: "calc(100% -2rem"}} />
            </div>
            <div className="flex flex-col gap-3 lg:hidden">
            <div className="flex flex-col-reverse gap-3 px-4 my-3">
                <div className="text-black flex flex-col gap-2 md:px-4">
                    <h4>5k rating</h4>
                    <h4>Kannada, English, Hindi, Telugu</h4>
                    <h4>{movie.runtime} min | {genres}</h4>
                </div>
            </div>
            </div>
        </div>
    </div>
   </>
}

export default MovieHero