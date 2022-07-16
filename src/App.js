import Nav from "./Nav";
import "./App.css";
import { useState } from "react";
function App() {
  const [logo, setLogo] = useState("LOGO");
  const update = () => {
    if (logo == "LOGO") {
      setLogo("NEW LOGO");
    } else {
      setLogo("LOGO");
    }
  };
  return (
    <>
      <Nav
        newLogo={logo}
        updateLogo={() => {
          update();
        }}
      />
    </>
  );
}

export default App;
