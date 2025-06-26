import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import './Carousel.css';

function Carousel(){

    const videos = [
    "/assets/vids/854701-hd_1920_1080_24fps.mp4",
    "/assets/vids/3191859-uhd_3840_2160_25fps.mp4",
    "/assets/vids/3209298-uhd_3840_2160_25fps.mp4",
    "/assets/vids/3578984-uhd_3840_2160_30fps.mp4",
    "/assets/vids/4717657-hd_1920_1080_25fps.mp4",
    "/assets/vids/5866268-uhd_3840_2160_25fps.mp4"
    ];

    return(
        <>
            <div className="carousel">
      {/* Video Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="video-swiper"
      >
        {videos.map((videoSrc, index) => (
          <SwiperSlide key={index}>
            <div className="video-container">
              <video autoPlay muted loop playsInline>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </>
    )
} 

export default Carousel;