import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    dropdown: false,
    megaMenu: false,
  });

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
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};