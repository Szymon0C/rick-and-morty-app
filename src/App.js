import Nav from "./Nav";
import "./App.css";
import { useState } from "react";
function App() {
  const [logo, setLogo] = useState("LOGO");
  return (
    <>
      <Nav newLogo={logo} />
    </>
  );
}

export default App;
