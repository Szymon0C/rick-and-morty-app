import { useState, createContext } from "react";

export const MyThemeContext = createContext({});

export const MyThemeProvider = ({ children }) => {
  const [myTheme, setMyTheme] = useState("light");
  const changeMyTheme = () => {
    setMyTheme(myTheme === "light" ? "dark" : "light");
  };

  return (
    <MyThemeContext.Provider value={{ myTheme, setMyTheme, changeMyTheme }}>
      {children}
    </MyThemeContext.Provider>
  );
};
