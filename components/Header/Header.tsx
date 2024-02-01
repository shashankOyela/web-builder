import React from "react";
import "./header.css";
import Image from "next/image";

const Header = ({ data, showLogo }: any) => {
  return (
    <div className="header">
      <div className="left-menu">left Menu</div>
      <div className="menus">
        <a className="menu-item" href={data?.menuItem1Val}>
          {data?.menuItem1}
        </a>
        <a className="menu-item" href={data?.menuItem2Val}>
          {data?.menuItem2}
        </a>
        <a className="menu-item" href={data?.menuItem3Val}>
          {data?.menuItem3}
        </a>
        <a className="menu-item" href={data?.menuItem4Val}>
          {data?.menuItem4}
        </a>
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
