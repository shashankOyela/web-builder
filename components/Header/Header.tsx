import React from "react";
import "./header.css";
import Image from "next/image";

const Header = ({ data, showLogo , menus}: any) => {
  return (
    <div className="header">
      <div className="left-menu">left Menu</div>
      <div className="menus">
        {menus?.map(({value , link } : any) => <a className="menu-item" href={link}>
          {value}
        </a> )}
      </div>
      {showLogo && (
        <div className="logo-wrapper">
          <div className="logo">
            <Image
              className="logo_image"
              fill={true}
              src={data?.logoUrl}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
