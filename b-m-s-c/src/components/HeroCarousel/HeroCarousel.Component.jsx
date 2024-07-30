import React,{useState} from 'react';
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from './Arrows.Component';

const HeroCarousel = () => {

  const [images, setImages] = useState([]);

  const settingsLG = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    dots: true,
    autoPlay: true,
    autoPlaySpeed: 2000,
    cssEase:"linear",
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };
  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    dots: true,
    autoPlay: true,
    autoPlaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((images) => (
            <div className="w-full h-56 md:h-80 py-3">
              <img
                src="{`https://images.tmdb.org/t/p/originals${images.backdrop_path}`}"
                alt="heroBanner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((images) => (
            <div className="w-full h-56 md:h-80 py-3">
              <img
                src="{`https://images.tmdb.org/t/p/originals${images.backdrop_path}`}"
                alt="heroBanner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
}

export default HeroCarousel;