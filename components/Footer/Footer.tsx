import Image from "next/image";
import "./footer.css";

const Footer = ({ logo, showLogo, data }: any) => {
  return (
    <div className="footer">
      <div className="footer-menu-wrapper">
        <div className="footer-menu">
          <a className="footer-menu-item" href={data?.link1Val}>
            {data?.link1}
          </a>
          <a className="footer-menu-item" href={data?.link2Val}>
            {data?.link2}
          </a>
        </div>
        <div className="footer-menu">
          <a className="footer-menu-item" href={data?.link3Val}>
            {data?.link3}
          </a>
          <a className="footer-menu-item" href={data?.link4Val}>
            {data?.link4}
          </a>
        </div>
      </div>
      {showLogo && (
        <div className="logo-wrapper">
          <div className="logo">
            <Image className="logo_image" fill={true} src={logo} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
