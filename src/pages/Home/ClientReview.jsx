import React, { useContext } from 'react'
import Slider from "react-slick";
import { JsonContext } from '../../context/JsonServerContext';

const ClientReview = () => {
    const { reviews, truncateText } = useContext(JsonContext);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        // autoplay: true,
        // speed: 2000,
        // autoplaySpeed: 2000,
        // cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='review'>
            <div className='review-title'>
                <h5>Testinomials</h5>
                <h1>Client Reviews</h1>
            </div>
            <Slider {...settings}>
                {
                    reviews.map(review => (
                        <div className='slider-main w-3/4 m-auto' key={review.id}>
                            <div className='mt-20'>
                                <div className='flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-front'>
                                            <div className='flip-card-image'>
                                                <p>{review.name}</p>
                                                <img src="/banner1.jpeg" alt="" />
                                            </div>
                                            <div className='flip-card-content'>
                                                <p>{review.date}</p>
                                                <p className='reviews'>{truncateText(review.description, 70)}</p>
                                            </div>
                                        </div>
                                        <div className='flip-card-back'>
                                            <p className='reviews'>{review.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </Slider>

        </div>
    )
}

export default ClientReview
