"use client";

import Header from "@/components/Header/Header";
import "./form.css";
import { useReducer } from "react";
import Footer from "@/components/Footer/Footer";
import Slider from "@/components/Slider/Slider";

enum Cases {
    toggleShowHeader = "toggleShowHeader",
    toggleShowLogo = "toggleShowLogo",
    handleHeaderChange = "handleHeaderChange",
    handleFooterChange = "handleFooterChange",
    toggleShowFooter = "toggleShowFooter",
    toggleShowSlider = "toggleShowSlider"
}

const initialFormValues = {
  showHeader: true,
  showLogo: true,
  showSlider: true,
  header: {
    logoUrl:
      "https://public-oyela-cms-prod.s3.ap-south-1.amazonaws.com/7_bce21bf9e3.jpg",
    showLogo: true,
  },
  footer: {},
  showFooter: true,
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
    }
  };

  const [form, dispatch] = useReducer(formReducer, initialFormValues);

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
              <label>Menu Item 1</label>
              <input
                value={form?.header?.menuItem1}
                placeholder="text"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleHeaderChange,
                    event: e,
                  })
                }
                name="menuItem1"
              />
              <input
                value={form?.header?.menuItem1Val}
                placeholder="link"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleHeaderChange,
                    event: e,
                  })
                }
                name="menuItem1Val"
              />
            </div>
            <div className="form-label">
              <label>Menu Item 2</label>
              <input
                value={form?.header?.menuItem2}
                placeholder="text"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleHeaderChange,
                    event: e,
                  })
                }
                name="menuItem2"
              />
              <input
                value={form?.header?.menuItem2Val}
                placeholder="link"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleHeaderChange,
                    event: e,
                  })
                }
                name="menuItem2Val"
              />
            </div>
            <div className="form-label">
              <label>Menu Item 3</label>
              <input
                value={form?.header?.menuItem3}
                placeholder="text"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleHeaderChange,
                    event: e,
                  })
                }
                name="menuItem3"
              />
              <input
                value={form?.header?.menuItem3Val}
                placeholder="link"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleHeaderChange,
                    event: e,
                  })
                }
                name="menuItem3Val"
              />
            </div>
            <div className="form-label">
              <label>Menu Item 4</label>
              <input
                value={form?.header?.menuItem4}
                placeholder="text"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleHeaderChange,
                    event: e,
                  })
                }
                name="menuItem4"
              />
              <input
                value={form?.header?.menuItem4Val}
                placeholder="link"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleHeaderChange,
                    event: e,
                  })
                }
                name="menuItem4Val"
              />
            </div>
          </div>

          <p>Slider Configuration</p>
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
          <div className="form-label-wrapper">
            <p>Slides</p>
            <div className="form-label">
              <label>Slide 1</label>
              <input
                value={form?.footer?.link1}
                placeholder="text"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleFooterChange,
                    event: e,
                  })
                }
                name="link1"
              />
              <input
                value={form?.footer?.link1Val}
                placeholder="link"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleFooterChange,
                    event: e,
                  })
                }
                name="link1Val"
              />
            </div>
            <div className="form-label">
              <label>Slide 2</label>
              <input
                value={form?.footer?.link2}
                placeholder="text"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleFooterChange,
                    event: e,
                  })
                }
                name="link2"
              />
              <input
                value={form?.footer?.link2Val}
                placeholder="link"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleFooterChange,
                    event: e,
                  })
                }
                name="link2Val"
              />
            </div>
            <div className="form-label">
              <label>Slide 3</label>
              <input
                value={form?.footer?.link3}
                placeholder="text"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleFooterChange,
                    event: e,
                  })
                }
                name="link3"
              />
              <input
                value={form?.footer?.link3Val}
                placeholder="link"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleFooterChange,
                    event: e,
                  })
                }
                name="link3Val"
              />
            </div>
            <div className="form-label">
              <label>Slide 4</label>
              <input
                value={form?.footer?.link4}
                placeholder="text"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleFooterChange,
                    event: e,
                  })
                }
                name="link4"
              />
              <input
                value={form?.footer?.link4Val}
                placeholder="link"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleFooterChange,
                    event: e,
                  })
                }
                name="link4Val"
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
            <div className="form-label">
              <label>Link 1</label>
              <input
                value={form?.footer?.link1}
                placeholder="text"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleFooterChange,
                    event: e,
                  })
                }
                name="link1"
              />
              <input
                value={form?.footer?.link1Val}
                placeholder="link"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleFooterChange,
                    event: e,
                  })
                }
                name="link1Val"
              />
            </div>
            <div className="form-label">
              <label>Link 2</label>
              <input
                value={form?.footer?.link2}
                placeholder="text"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleFooterChange,
                    event: e,
                  })
                }
                name="link2"
              />
              <input
                value={form?.footer?.link2Val}
                placeholder="link"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleFooterChange,
                    event: e,
                  })
                }
                name="link2Val"
              />
            </div>
            <div className="form-label">
              <label>Link 3</label>
              <input
                value={form?.footer?.link3}
                placeholder="text"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleFooterChange,
                    event: e,
                  })
                }
                name="link3"
              />
              <input
                value={form?.footer?.link3Val}
                placeholder="link"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleFooterChange,
                    event: e,
                  })
                }
                name="link3Val"
              />
            </div>
            <div className="form-label">
              <label>Link 4</label>
              <input
                value={form?.footer?.link4}
                placeholder="text"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleFooterChange,
                    event: e,
                  })
                }
                name="link4"
              />
              <input
                value={form?.footer?.link4Val}
                placeholder="link"
                onChange={(e) =>
                  dispatch({
                    type: Cases.handleFooterChange,
                    event: e,
                  })
                }
                name="link4Val"
              />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-container">
            {form.showHeader && (
              <Header data={form?.header} showLogo={form.showLogo} />
            )}
            {form?.showSlider && <Slider />}
            {form?.showFooter && (
              <div className="footer-wrapper">
                <Footer
                  data={form?.footer}
                  showLogo={form.showLogo}
                  logo={form?.header?.logoUrl}
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
