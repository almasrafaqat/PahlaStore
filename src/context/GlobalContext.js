import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    dropdown: false,
    megaMenu: false,
  });
  /** For Slider */

  const [slideIndex, setSlideIndex] = useState(0);

  const SlideHandler = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
    console.log("slideIndex:", slideIndex);
  };

  const value = {
    isMenuOpen,
    setIsMenuOpen,
    isDropdownOpen,
    setIsDropdownOpen,
    slideIndex,
    SlideHandler,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
