import { useState } from "react";
import AboutMe from "./AboutMe";
import CharactersList from "./CharactersList";
import Todo from "./Todo";
import Contact from "./Contact";

function Nav(parent) {
  const [choice, setChoice] = useState(null);

  const arr = ["About Me", "Characters list", "Todo", "Contact"];

  const choosenButton = (e) => {
    setChoice(e.target.innerHTML);
  };

  return (
    <>
      <div className="logo">{parent.newLogo}</div>
      <div className="nav-div">
        <div className="nav-buttons">
          {arr.map((text) => {
            return (
              <button onClick={choosenButton} key={text}>
                {text}
              </button>
            );
          })}
        </div>

        <div className="subpage">
          {choice === arr[0] && (
            <div className="about-me-div">{<AboutMe />}</div>
          )}
          {choice === arr[1] && (
            <div className="characters-list">{<CharactersList />}</div>
          )}
          {choice === arr[2] && (
            <div className="todo">
              {
                <Todo
                  changeLogo={() => {
                    parent.test();
                  }}
                />
              }
            </div>
          )}
          {choice === arr[3] && <div className="contact">{<Contact />}</div>}
        </div>
      </div>
    </>
  );
}

export default Nav;
