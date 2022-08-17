import { useState } from "react";
import AboutMe from "./AboutMe";
import CharactersList from "./CharactersList";
import Todo from "./Todo";
import Contact from "./Contact";
import Footer from "./Footer";
import DialogComponent from "./Dialog";
import Components from "./Components";
import * as S from "./style";
function Nav(parent) {
  const [choice, setChoice] = useState(null);

  const ARR = [
    "About Me",
    "Characters list",
    "Todo",
    "Contact",
    "Dialog",
    "Components",
  ];

  const choosenButton = (e) => {
    setChoice(e.target.innerHTML);
  };

  function showComponents() {
    if (choice === ARR[0]) {
      return (
        <S.AboutMe>
          {
            <AboutMe
              setLogo={(value) => {
                parent.setLogo(value);
              }}
            />
          }
        </S.AboutMe>
      );
    } else if (choice === ARR[1]) {
      return <div>{<CharactersList />}</div>;
    } else if (choice === ARR[2]) {
      return (
        <div>
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
      return <div>{<Contact />}</div>;
    } else if (choice === ARR[4]) {
      return <DialogComponent />;
    } else if (choice === ARR[5]) {
      return <Components />;
    }
  }
  return (
    <>
      <S.Logo>{parent.newLogo}</S.Logo>
      <S.NavDiv>
        <S.NavDivButtons>
          {ARR.map((text) => {
            return (
              <S.Button onClick={choosenButton} key={text}>
                {text}
              </S.Button>
            );
          })}
        </S.NavDivButtons>

        <S.SubPage>{showComponents()}</S.SubPage>
      </S.NavDiv>
      <Footer />
    </>
  );
}

export default Nav;
