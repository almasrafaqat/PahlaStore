import { createContext, useContext, useState } from "react";

const EventsContext = createContext();

export const EventsContextProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <EventsContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </EventsContext.Provider>
  );
};

export const UserEventContext = () => {
  return useContext(EventsContext);
};
