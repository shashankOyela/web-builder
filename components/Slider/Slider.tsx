import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Slider = ({ data }: any) => {
  return (
    <Swiper
      spaceBetween={10}
      loop={true}
      slidesPerView={1}
      autoplay
      modules={[Autoplay]}
      speed={data?.slideDuration || 1000}
    >
      <SwiperSlide className="slide">
        <a href={data?.slide1Link} className="slide-link">
          {data?.slide1Heading && (
            <h3 className="heading">{data?.slide1Heading}</h3>
          )}
          {data?.slide1Image && (
            <Image
              className="slide-image"
              src={data?.slide1Image}
              fill={true}
              alt=""
            />
          )}
        </a>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <a href={data?.slide2Link} className="slide-link">
          {data?.slide2Heading && (
            <h3 className="heading">{data?.slide2Heading}</h3>
          )}
          {data?.slide2Image && (
            <Image
              className="slide-image"
              src={data?.slide1Image}
              fill={true}
              alt=""
            />
          )}
        </a>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <a href={data?.slide3Link} className="slide-link">
          {data?.slide3Heading && (
            <h3 className="heading">{data?.slide3Heading}</h3>
          )}
          {data?.slide3Image && (
            <Image
              className="slide-image"
              src={data?.slide3Image}
              fill={true}
              alt=""
            />
          )}
        </a>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <a href={data?.slide4Link} className="slide-link">
          {data?.slide4Heading && (
            <h3 className="heading">{data?.slide4Heading}</h3>
          )}
          {data?.slide4Image && (
            <Image
              className="slide-image"
              src={data?.slide4Image}
              fill={true}
              alt=""
            />
          )}
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
