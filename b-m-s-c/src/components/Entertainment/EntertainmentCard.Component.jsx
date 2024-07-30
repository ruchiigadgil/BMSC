import React from 'react'
import Slider from 'react-slick';
const EntertainmentCard = () => {
  return (
    <>
      <div className="w-full h-30 px-2">
        <img src={props.src} alt="entertainment" className="w-full h-full rounded-lg"/>
      </div>
    </>
  );
};

const EntertainmentCardSlider =()=>{
  //Images
  const EntertainmentImage =[

  ];

  const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    dots: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return(
    <>
    <Slider {...settings}>
      {
        EntertainmentImage.map((image)=>(
          <EntertainmentCard src={image}/>
        ))
      }
    </Slider>
    </>
  )
}
export default EntertainmentCardSlider;