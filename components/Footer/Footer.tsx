import Image from "next/image";
import "./footer.css";

const Footer = ({ logo, showLogo, data, links }: any) => {
  return (
    <div className="footer">
      <div className="footer-menu-wrapper">
        {links?.map(({ value, linkValue }: any) => (
          <a className="footer-menu-item" href={linkValue}>
            {value}
          </a>
        ))}
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
