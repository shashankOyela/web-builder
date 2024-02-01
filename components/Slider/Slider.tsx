import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
import "swiper/css";

const Slider = () => {
  return (
    <div className="swiper-wrapper">
      <Swiper spaceBetween={10} loop={true} slidesPerView={1}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
