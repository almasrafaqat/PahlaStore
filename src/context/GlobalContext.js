import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

  /**Open Sidebar for Mobile View */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /** Active color on dropdown */
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    dropdown: false,
    megaMenu: false,
  });

  /** Slider Arrow Left & Right best selling proudcts  */
  const [slider, setSliderRef] = useState(null);

  /** Slider Arrow Left & Right deal of the week product  */
  const [slide, setSlideRef] = useState(null);
  
  /** Dropdown Height */
  const DropMenuHandler = (event) => {
    event.preventDefault();
    const UL = event.target.nextElementSibling;
    const name = event.target.name;

    if (UL.style.maxHeight) {
      UL.style.maxHeight = null;
      if (name === "dropdown") {
        setIsDropdownOpen({ dropdown: false });
      }
      if (name === "mega-menu") {
        setIsDropdownOpen({ megaMenu: false });
      }
    } else {
      UL.style.maxHeight = UL.scrollHeight + "px";

      if (name === "dropdown") {
        setIsDropdownOpen({ dropdown: true });
      }
      if (name === "mega-menu") {
        setIsDropdownOpen({ megaMenu: true });
      }
    }
  };

  /** For Slider */

  const [slideIndex, setSlideIndex] = useState(0);

  const SlideHandler = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const value = {
    isMenuOpen,
    setIsMenuOpen,
    isDropdownOpen,
    setIsDropdownOpen,
    slideIndex,
    SlideHandler,
    DropMenuHandler,
    slider,
    setSliderRef,
    slide,
    setSlideRef,


  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
