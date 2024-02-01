"use client";

import Header from "@/components/Header/Header";
import "./form.css";
import { useState } from "react";
import Footer from "@/components/Footer/Footer";
import Slider from "@/components/Slider/Slider";
import Banner from "@/components/Banner/Banner";

const page = () => {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [showLogo, setShowLogo] = useState<boolean>(true);
  const [showBanner, setShowBanner] = useState<boolean>(true);
  const [showSlider, setShowSlider] = useState<boolean>(true);
  const [header, setHeader] = useState<any>({
    logoUrl:
      "https://public-oyela-cms-prod.s3.ap-south-1.amazonaws.com/7_bce21bf9e3.jpg",
    showLogo: true,
  });
  const [slider, setSlider] = useState<any>({});
  const [banner, setBanner] = useState<any>({});
  const [showFooter, setShowFooter] = useState<boolean>(true);
  const [footer, setFooter] = useState<any>({});

  const handleHeaderChange = (e: any) => {
    e.preventDefault();
    const name = e.target.name;
    setHeader({
      ...header,
      [name]: e.target.value,
    });
  };

  const handleFooterChange = (e: any) => {
    e.preventDefault();
    const name = e.target.name;
    setFooter({
      ...footer,
      [name]: e.target.value,
    });
  };

  const handleSliderChange = (e: any) => {
    e.preventDefault();
    const name = e.target.name;
    setSlider({
      ...slider,
      [name]: e.target.value,
    });
  };

  const handleBannerChange = (e: any) => {
    e.preventDefault();
    const name = e.target.name;
    setBanner({
      ...banner,
      [name]: e.target.value,
    });
  };

  return (
    <main className="page-wrapper">
      <div className="left">
        <p className="section-heading">Header Configuration</p>
        <form className="form-container">
          <div className="form-label">
            <div>
              <label>Header : </label>
              <input
                type="checkbox"
                onChange={() => setShowHeader(!showHeader)}
                name="showHeader"
                checked={showHeader}
              />{" "}
              Show/Hide
            </div>
          </div>
          <div className="form-label">
            <div>
              <label>Logo : </label>
              <input
                type="checkbox"
                onChange={() => setShowLogo(!showLogo)}
                name="showLogo"
                checked={showLogo}
              />{" "}
              Show/Hide
            </div>
          </div>
          <div className="form-label">
            <label>Enter Logo url : </label>
            <input
              onChange={handleHeaderChange}
              placeholder="Enter Header content"
              name="logoUrl"
              value={header?.logoUrl}
            />
          </div>
          <div className="form-label-wrapper">
            <p>Menus</p>
            <div className="form-label">
              <label>Menu Item 1</label>
              <input
                value={header?.menuItem1}
                placeholder="text"
                onChange={handleHeaderChange}
                name="menuItem1"
              />
              <input
                value={header?.menuItem1Val}
                placeholder="link"
                onChange={handleHeaderChange}
                name="menuItem1Val"
              />
            </div>
            <div className="form-label">
              <label>Menu Item 2</label>
              <input
                value={header?.menuItem2}
                placeholder="text"
                onChange={handleHeaderChange}
                name="menuItem2"
              />
              <input
                value={header?.menuItem2Val}
                placeholder="link"
                onChange={handleHeaderChange}
                name="menuItem2Val"
              />
            </div>
            <div className="form-label">
              <label>Menu Item 3</label>
              <input
                value={header?.menuItem3}
                placeholder="text"
                onChange={handleHeaderChange}
                name="menuItem3"
              />
              <input
                value={header?.menuItem3Val}
                placeholder="link"
                onChange={handleHeaderChange}
                name="menuItem3Val"
              />
            </div>
            <div className="form-label">
              <label>Menu Item 4</label>
              <input
                value={header?.menuItem4}
                placeholder="text"
                onChange={handleHeaderChange}
                name="menuItem4"
              />
              <input
                value={header?.menuItem4Val}
                placeholder="link"
                onChange={handleHeaderChange}
                name="menuItem4Val"
              />
            </div>
          </div>
        </form>

        <p className="section-heading">Slider Configuration</p>
        <form className="form-container">
          <div className="form-label">
            <div>
              <label>Slider : </label>
              <input
                type="checkbox"
                onChange={() => setShowSlider(!showSlider)}
                name="showFooter"
                checked={showSlider}
              />{" "}
              Show/Hide
            </div>
          </div>
          <div className="form-label">
            <label>Slide Duration(in ms)</label>
            <input
              value={slider?.slideDuration}
              placeholder="slide Duration"
              type="number"
              onChange={handleSliderChange}
              name="slideDuration"
            />
          </div>
          <div className="form-label-wrapper">
            <p>Slides</p>
            <div className="form-label">
              <label>Slide 1</label>
              <input
                value={slider?.slide1Heading}
                placeholder="text"
                onChange={handleSliderChange}
                name="slide1Heading"
              />
              <input
                value={slider?.slide1Image}
                placeholder="slideImage"
                onChange={handleSliderChange}
                name="slide1Image"
              />
              <input
                value={slider?.slide1Link}
                placeholder="slideLink"
                onChange={handleSliderChange}
                name="slide1Link"
              />
            </div>
            <div className="form-label">
              <label>Slide 2</label>
              <input
                value={slider?.slide2Heading}
                placeholder="text"
                onChange={handleSliderChange}
                name="slide2Heading"
              />
              <input
                value={slider?.slide2Image}
                placeholder="slideImage"
                onChange={handleSliderChange}
                name="slide2Image"
              />
              <input
                value={slider?.slide2Link}
                placeholder="slideLink"
                onChange={handleSliderChange}
                name="slide2Link"
              />
            </div>
            <div className="form-label">
              <label>Slide 3</label>
              <input
                value={slider?.slide3Heading}
                placeholder="text"
                onChange={handleSliderChange}
                name="slide3Heading"
              />
              <input
                value={slider?.slide3Image}
                placeholder="slideImage"
                onChange={handleSliderChange}
                name="slide3Image"
              />
              <input
                value={slider?.slide3Link}
                placeholder="slideLink"
                onChange={handleSliderChange}
                name="slide3Link"
              />
            </div>
            <div className="form-label">
              <label>Slide 4</label>
              <input
                value={slider?.slide4Heading}
                placeholder="text"
                onChange={handleSliderChange}
                name="slide4Heading"
              />
              <input
                value={slider?.slide4Image}
                placeholder="slideImage"
                onChange={handleSliderChange}
                name="slide4Image"
              />
              <input
                value={slider?.slide4Link}
                placeholder="slideLink"
                onChange={handleSliderChange}
                name="slide4Link"
              />
            </div>
          </div>
        </form>

        <p className="section-heading">Banner Configuration</p>
        <form className="form-container">
          <div className="form-label">
            <div>
              <label>Banner : </label>
              <input
                type="checkbox"
                onChange={() => setShowBanner(!showBanner)}
                name="showBanner"
                checked={showBanner}
              />{" "}
              Show/Hide
            </div>
          </div>
          <div className="form-label-wrapper">
            <div className="form-label">
              <label>Banner Image</label>
              <input
                name="bannerImage"
                type="text"
                value={banner?.bannerImage}
                onChange={handleBannerChange}
              />
            </div>
            <div className="form-label">
              <label>Banner Heading</label>
              <input
                type="text"
                name="bannerHeading"
                value={banner?.heading}
                onChange={handleBannerChange}
              />
            </div>
          </div>
        </form>

        <p className="section-heading">Footer Configuration</p>
        <form className="form-container">
          <div className="form-label">
            <div>
              <label>Footer : </label>
              <input
                type="checkbox"
                onChange={() => setShowFooter(!showFooter)}
                name="showFooter"
                checked={showFooter}
              />{" "}
              Show/Hide
            </div>
          </div>
          <div className="form-label-wrapper">
            <p>Footer Links</p>
            <div className="form-label">
              <label>Link 1</label>
              <input
                value={footer?.link1}
                placeholder="text"
                onChange={handleFooterChange}
                name="link1"
              />
              <input
                value={footer?.link1Val}
                placeholder="link"
                onChange={handleFooterChange}
                name="link1Val"
              />
            </div>
            <div className="form-label">
              <label>Link 2</label>
              <input
                value={footer?.link2}
                placeholder="text"
                onChange={handleFooterChange}
                name="link2"
              />
              <input
                value={footer?.link2Val}
                placeholder="link"
                onChange={handleFooterChange}
                name="link2Val"
              />
            </div>
            <div className="form-label">
              <label>Link 3</label>
              <input
                value={footer?.link3}
                placeholder="text"
                onChange={handleFooterChange}
                name="link3"
              />
              <input
                value={footer?.link3Val}
                placeholder="link"
                onChange={handleFooterChange}
                name="link3Val"
              />
            </div>
            <div className="form-label">
              <label>Link 4</label>
              <input
                value={footer?.link4}
                placeholder="text"
                onChange={handleFooterChange}
                name="link4"
              />
              <input
                value={footer?.link4Val}
                placeholder="link"
                onChange={handleFooterChange}
                name="link4Val"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="right">
        <div className="right-container">
          {showHeader && <Header data={header} showLogo={showLogo} />}
          {showSlider && <Slider data={slider} />}
          {showBanner && <Banner data={banner} />}
          {showFooter && (
            <div className="footer-wrapper">
              <Footer
                data={footer}
                showLogo={showLogo}
                logo={header?.logoUrl}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default page;
