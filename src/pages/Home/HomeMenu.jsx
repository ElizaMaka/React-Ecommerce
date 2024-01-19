import React, { useContext } from 'react'
import Slider from "react-slick";
import { JsonContext } from '../../context/JsonServerContext';
import Category from '../../components/Category/Category';

const HomeMenu = () => {
  const { windowWidth, categories } = useContext(JsonContext);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='home-menu'>
      <div className='home-menu-title'>
        <h1>Things We Offer</h1>
      </div>
      {
        windowWidth > 976 ?
          (
            <Category categories={categories}/>
          ) : (
            <div className='home-menu-mobile'>
              <Slider {...settings}>
                {
                  categories.map(item => (
                    <div className='menu-content' key={item.id} style={{padding:"5px"}}>
                      <img src={item.image} alt="img" className='menu-image' />
                      <div className='overlay-text'>
                        <h3>{item.name}</h3>
                      </div>
                    </div>
                  ))
                }
              </Slider>
            </div>
          )
      }

    </div>
  )
}

export default HomeMenu
