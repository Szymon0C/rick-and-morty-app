import { useState } from "react";
import AboutMe from "./AboutMe";
import CharactersList from "./CharactersList";
import Todo from "./Todo";
import Contact from "./Contact";

function Nav(parent) {
  const [choice, setChoice] = useState(null);

  const ARR = ["About Me", "Characters list", "Todo", "Contact"];

  const choosenButton = (e) => {
    setChoice(e.target.innerHTML);
  };

  function showComponents() {
    if (choice === ARR[0]) {
      return (
        <div className="about-me-div">
          {
            <AboutMe
              setNewLogo={(value) => {
                parent.setNewLogo(value);
              }}
            />
          }
        </div>
      );
    } else if (choice === ARR[1]) {
      return <div className="characters-list">{<CharactersList />}</div>;
    } else if (choice === ARR[2]) {
      return (
        <div className="todo">
          {
            <Todo
              changeLogo={() => {
                parent.updateLogo();
              }}
            />
          }
        </div>
      );
    } else if (choice === ARR[3]) {
      return <div className="contact">{<Contact />}</div>;
    }
  }
  return (
    <>
      <div className="logo">{parent.newLogo}</div>
      <div className="nav-div">
        <div className="nav-buttons">
          {ARR.map((text) => {
            return (
              <button onClick={choosenButton} key={text}>
                {text}
              </button>
            );
          })}
        </div>

        <div className="subpage">{showComponents()}</div>
      </div>
    </>
  );
}

export default Nav;
