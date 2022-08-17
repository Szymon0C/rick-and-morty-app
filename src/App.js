import { useState } from "react";
import Nav from "./Nav";
import "./App.css";

function App() {
  const [logo, setLogo] = useState("LOGO");
  const update = () => {
    setLogo(logo === "LOGO" ? "NEW LOGO" : "LOGO");
  };

  return (
    <>
      <Nav newLogo={logo} updateLogo={update} setLogo={setLogo} />
    </>
  );
}

export default App;
