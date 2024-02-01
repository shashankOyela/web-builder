import Image from "next/image";
import "./banner.css";

const Banner = ({ data }: any) => {
  return (
    <div className="banner-wrapper">
      <div className="banner-container">
        {data?.bannerHeading && (
          <h3 className="banner-heading">{data?.bannerHeading}</h3>
        )}
        {data?.bannerImage && (
          <Image
            className="banner-image"
            src={data?.bannerImage}
            alt=""
            fill={true}
          />
        )}
      </div>
    </div>
  );
};

export default Banner;
