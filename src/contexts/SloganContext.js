import { useState, createContext } from "react";

export const SloganContext = createContext({});

export const SloganProvider = ({ children }) => {
  const [slogan, setSlogan] = useState("Wczoraj działało");
  const hideSlogan = () => {
    setSlogan(slogan === "Wczoraj działało" ? "" : "Wczoraj działało");
  };
  return (
    <SloganContext.Provider value={{ slogan, setSlogan, hideSlogan }}>
      {children}
    </SloganContext.Provider>
  );
};
