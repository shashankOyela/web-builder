"use client";

import Header from "@/components/Header/Header";
import "./form.css";
import { useReducer } from "react";
import Footer from "@/components/Footer/Footer";
import Slider from "@/components/Slider/Slider";
import Banner from "@/components/Banner/Banner";

enum Cases {
  toggleShowHeader = "toggleShowHeader",
  toggleShowLogo = "toggleShowLogo",
  handleHeaderChange = "handleHeaderChange",
  handleFooterChange = "handleFooterChange",
  toggleShowFooter = "toggleShowFooter",
  toggleShowSlider = "toggleShowSlider",
  handleSliderChange = "handleSliderChange",
  toggleShowBanner = "toggleShowBanner",
  handleBannerChange = "handleBannerChange",
  addMenu = "addMenu",
  removeMenu = "removeMenu",
  handleMenuChange = "handleMenuChange",
  handleFooterLinkChange = "handleFooterLinkChange",
  addFooterLink = "addFooterLink",
  removeFooterLink = "removeFooterLink"
}

const initialFormValues = {
  showHeader: true,
  showLogo: true,
  showSlider: true,
  showFooter: true,
  showBanner: true,
  header: {
    logoUrl:
      "https://public-oyela-cms-prod.s3.ap-south-1.amazonaws.com/7_bce21bf9e3.jpg",
    showLogo: true,
  },
  footer: {},
  banner: {},
  slider: {},
  menus: [
    {
      label: "First Menu",
      name: "first",
      value: "",
      linkValue: "",
      linkName: "l1"
    },
    {
      label: "Second Menu",
      name: "second",
      value: "",
      linkValue: "",
      linkName: "l2"
    },
  ],
  footerLinks: [
    {
      name: "name0",
      linkName: "link0",
      label: "Link 1",
      link: "link",
      value: "",
      linkValue: "",
    },
  ],
};

const page = () => {
  const formReducer = (form: any, action: any) => {
    switch (action?.type) {
      case Cases.toggleShowHeader: {
        return {
          ...form,
          showHeader: action.checked,
        };
      }
      case Cases.toggleShowLogo: {
        return { ...form, showLogo: action.checked };
      }
      case Cases.handleHeaderChange: {
        const name = action.event.target.name;
        const value = action.event.target.value;
        return { ...form, header: { ...form.header, [name]: value } };
      }
      case Cases.handleFooterChange: {
        const name = action.event.target.name;
        const value = action.event.target.value;
        return { ...form, footer: { ...form.footer, [name]: value } };
      }
      case Cases.toggleShowFooter: {
        return {
          ...form,
          showFooter: action.checked,
        };
      }
      case Cases.toggleShowSlider: {
        return {
          ...form,
          showSlider: action.checked,
        };
      }
      case Cases.handleSliderChange: {
        const name = action.event.target.name;
        const value = action.event.target.value;
        return { ...form, slider: { ...form.slider, [name]: value } };
      }
      case Cases.toggleShowBanner: {
        return {
          ...form,
          showBanner: action.checked,
        };
      }
      case Cases.handleBannerChange: {
        const name = action.event.target.name;
        const value = action.event.target.value;
        return { ...form, banner: { ...form.banner, [name]: value } };
      }
      case Cases.handleMenuChange: {
        const copiedArray = [...form.menus];
        const menuToEdit = form.menus.filter(
          (menu: any) => menu.name === action.name
        )[0];
        if (action.change === "text") {
          const editedMenu = { ...menuToEdit, value: action.event.target.value };
          copiedArray.splice(action.index, 1, editedMenu);
        } else if (action.change === "link") {
          const editedMenu = { ...menuToEdit, linkValue: action.event.target.value };
          copiedArray.splice(action.index, 1, editedMenu);
        }
       
        return {
          ...form,
          menus: [...copiedArray],
        };
      }
      case Cases.addMenu: {
        return {
          ...form,
          menus: [
            ...form.menus,
            {
              label: "Menu",
              name: "second",
              value: "",
              link: "",
            },
          ],
        };
      }
      case Cases.removeMenu: {
        const copiedArray = [...form.menus];
        copiedArray.splice(action.index, 1);
        return {
          ...form,
          menus: [...copiedArray],
        };
      }
      case Cases.handleFooterLinkChange: {
        const copiedArray = [...form.footerLinks];
        const linkToEdit = form.footerLinks.filter(
          (footerLink: any) => footerLink.name === action.name
        )[0];
        if (action.change === "text") {
          const editedLink = {
            ...linkToEdit,
            value: action.event.target.value,
          };
          copiedArray.splice(action.index, 1, editedLink);
        } else if (action.change === "link") {
          const editedLink = {
            ...linkToEdit,
            linkValue: action.event.target.value,
          };
          copiedArray.splice(action.index, 1, editedLink);
        }
        return {
          ...form,
          footerLinks: [...copiedArray],
        };
      }

      case Cases.addFooterLink: {
        return {
          ...form,
          footerLinks: [
            ...form.footerLinks,
            {
              name: "name10",
              linkName: "link10",
              label: "Link 1",
              link: "link",
              value: "",
              linkValue: "",
            },
          ],
        };
      }

      case Cases.removeFooterLink : {
        const copiedArray = [...form.footerLinks];
        copiedArray.splice(action.index, 1);
        return {
          ...form,
          footerLinks: [...copiedArray],
        };
      }
    }
  };

  const [form, dispatch] = useReducer(formReducer, initialFormValues);

  console.log("form!!", form);

  return (
    <form>
      <main className="page-wrapper">
        <div className="left">
          <p>Header Configuration</p>
          <div className="form-label">
            <div>
              <label>Header : </label>
              <input
                type="checkbox"
                onChange={(e) =>
                  dispatch({
                    type: Cases.toggleShowHeader,
                    checked: e.target.checked,
                  })
                }
                name="showHeader"
                checked={form.showHeader}
              />{" "}
              Show/Hide
            </div>
          </div>
          <div className="form-label">
            <div>
              <label>Logo : </label>
              <input
                type="checkbox"
                onChange={(e) =>
                  dispatch({
                    type: Cases.toggleShowLogo,
                    checked: e.target.checked,
                  })
                }
                name="showLogo"
                checked={form.showLogo}
              />{" "}
              Show/Hide
            </div>
          </div>
          <div className="form-label">
            <label>Enter Logo url : </label>
            <input
              onChange={(e) =>
                dispatch({
                  type: Cases.handleHeaderChange,
                  event: e,
                })
              }
              //   onChange={handleHeaderChange}
              placeholder="Enter Header content"
              name="logoUrl"
              value={form.header?.logoUrl}
            />
          </div>
          <div className="form-label-wrapper">
            <p>Menus</p>
            <div className="form-label">
              {form?.menus?.map(
                ({ label, name, value, linkValue , linkName}: any, index: number) => {
                  return (
                    <div className="flex a-center menuItem">
                      <div className="flex flex-col">
                        <label>{label}</label>
                        <input
                          value={value}
                          placeholder="text"
                          onChange={(e) =>
                            dispatch({
                              type: Cases.handleMenuChange,
                              event: e,
                              name,
                              index,
                              change: "text",
                            })
                          }
                          name={name}
                        />
                        <input
                        value={linkValue}
                        placeholder="link"
                        onChange={(e) =>
                          dispatch({
                            type: Cases.handleMenuChange,
                            event: e,
                            index,
                            change: "link",
                            name,
                          })
                        }
                        name={linkName}
                      />
                      </div>
                      <div
                        className="pointer"
                        onClick={() =>
                          dispatch({
                            type: Cases.removeMenu,
                            index,
                          })
                        }
                      >
                        -
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <div
              className="pointer"
              onClick={() =>
                dispatch({
                  type: Cases.addMenu,
                })
              }
            >
              +
            </div>
          </div>

          <p className="section-heading">Slider Configuration</p>
          <div className="form-label">
            <div>
              <label>Slider : </label>
              <input
                type="checkbox"
                onChange={(e) =>
                  dispatch({
                    type: Cases.toggleShowSlider,
                    checked: e.target.checked,
                  })
                }
                name="showFooter"
                checked={form?.showSlider}
              />{" "}
              Show/Hide
            </div>
          </div>
          <div className="form-label">
            <label>Slide Duration(in ms)</label>
            <input
              value={form?.slider?.slideDuration}
              placeholder="slide Duration"
              type="number"
              onChange={(e) =>
                dispatch({
                  type: Cases.handleSliderChange,
                  event: e,
                })
              }
              name="slideDuration"
            />
          </div>
          <div className="form-label-wrapper">
            <p>Slides</p>
            <div className="form-label">
              <label>Slide 1</label>
              <input
                value={form?.slider?.slide1Heading}
                placeholder="text"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleSliderChange,
                    event: e,
                  })
                }
                name="slide1Heading"
              />
              <input
                value={form?.slider?.slide1Image}
                placeholder="slideImage"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleSliderChange,
                    event: e,
                  })
                }
                name="slide1Image"
              />
              <input
                value={form?.slider?.slide1Link}
                placeholder="slideLink"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleSliderChange,
                    event: e,
                  })
                }
                name="slide1Link"
              />
            </div>
            <div className="form-label">
              <label>Slide 2</label>
              <input
                value={form?.slider?.slide2Heading}
                placeholder="text"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleSliderChange,
                    event: e,
                  })
                }
                name="slide2Heading"
              />
              <input
                value={form?.slider?.slide2Image}
                placeholder="slideImage"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleSliderChange,
                    event: e,
                  })
                }
                name="slide2Image"
              />
              <input
                value={form?.slider?.slide2Link}
                placeholder="slideLink"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleSliderChange,
                    event: e,
                  })
                }
                name="slide2Link"
              />
            </div>
            <div className="form-label">
              <label>Slide 3</label>
              <input
                value={form?.slider?.slide3Heading}
                placeholder="text"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleSliderChange,
                    event: e,
                  })
                }
                name="slide3Heading"
              />
              <input
                value={form?.slider?.slide3Image}
                placeholder="slideImage"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleSliderChange,
                    event: e,
                  })
                }
                name="slide3Image"
              />
              <input
                value={form?.slider?.slide3Link}
                placeholder="slideLink"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleSliderChange,
                    event: e,
                  })
                }
                name="slide3Link"
              />
            </div>
            <div className="form-label">
              <label>Slide 4</label>
              <input
                value={form?.slider?.slide4Heading}
                placeholder="text"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleSliderChange,
                    event: e,
                  })
                }
                name="slide4Heading"
              />
              <input
                value={form?.slider?.slide4Image}
                placeholder="slideImage"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleSliderChange,
                    event: e,
                  })
                }
                name="slide4Image"
              />
              <input
                value={form?.slider?.slide4Link}
                placeholder="slideLink"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleSliderChange,
                    event: e,
                  })
                }
                name="slide4Link"
              />
            </div>
          </div>

          <p className="section-heading">Banner Configuration</p>

          <div className="form-label">
            <div>
              <label>Banner : </label>
              <input
                type="checkbox"
                onChange={(e) =>
                  dispatch({
                    type: Cases.toggleShowBanner,
                    checked: e.target.checked,
                  })
                }
                name="showBanner"
                checked={form?.showBanner}
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
                value={form?.banner?.bannerImage}
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleBannerChange,
                    event: e,
                  })
                }
              />
            </div>
            <div className="form-label">
              <label>Banner Heading</label>
              <input
                type="text"
                name="bannerHeading"
                value={form?.banner?.heading}
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleBannerChange,
                    event: e,
                  })
                }
              />
            </div>
          </div>

          <p>Footer Configuration</p>
          <div className="form-label">
            <div>
              <label>Footer : </label>
              <input
                type="checkbox"
                onChange={(e) =>
                  dispatch({
                    type: "toggleShowFooter",
                    checked: e.target.checked,
                  })
                }
                name="showFooter"
                checked={form?.showFooter}
              />{" "}
              Show/Hide
            </div>
          </div>
          <div className="form-label-wrapper">
            <p>Footer Links</p>
            {form?.footerLinks?.map(
              (
                { name, link, value, label, linkName, linkValue }: any,
                index: number
              ) => {
                return (
                  <div className="flex">
                    <div
                      className="pointer"
                      onClick={() =>
                        dispatch({
                          type: Cases.removeFooterLink,
                          index
                        })
                      }
                    >
                      -
                    </div>
                    <div className="form-label">
                      <label>{label}</label>
                      <input
                        value={value}
                        placeholder="text"
                        onChange={(e) =>
                          dispatch({
                            type: Cases.handleFooterLinkChange,
                            event: e,
                            index,
                            change: "text",
                            name,
                          })
                        }
                        name={name}
                      />
                      <input
                        value={linkValue}
                        placeholder="link"
                        onChange={(e) =>
                          dispatch({
                            type: Cases.handleFooterLinkChange,
                            event: e,
                            index,
                            change: "link",
                            name,
                          })
                        }
                        name={linkName}
                      />
                    </div>
                  </div>
                );
              }
            )}
            <div
              className="pointer"
              onClick={() =>
                dispatch({
                  type: Cases.addFooterLink,
                })
              }
            >
              +
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-container">
            {form.showHeader && (
              <Header
                data={form?.header}
                showLogo={form.showLogo}
                menus={form?.menus}
              />
            )}
            {form?.showSlider && <Slider data={form?.slider} />}
            {form?.showBanner && <Banner data={form?.banner} />}
            {form?.showFooter && (
              <div className="footer-wrapper">
                <Footer
                  data={form?.footer}
                  showLogo={form.showLogo}
                  logo={form?.header?.logoUrl}
                  links={form?.footerLinks}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </form>
  );
};

export default page;
