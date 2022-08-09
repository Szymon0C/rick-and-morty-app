import { useEffect, useState } from "react";
import Paragraph from "../src/Paragraph";
import * as S from "./style";
function Character({ link }) {
  let [character, setCharacter] = useState({
    name: null,
    gender: null,
    species: null,
    status: null,
    imgSrc: null,
  });
  useEffect(() => {
    fetch(link)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setCharacter({
            name: res.name,
            gender: res.gender,
            species: res.species,
            status: res.status,
            imgSrc: res.image,
          });
        }
      });
  }, []);

  return (
    <S.CharacterWrapper>
      <S.StyledImg src={character.imgSrc} alt="jpg" />
      <S.CharacterInfo>
        <Paragraph content={`name:${character.name}`} />
        <Paragraph content={`gender:${character.gender}`} />
        <Paragraph content={`species:${character.species}`} />
        <Paragraph content={`status:${character.status}`} />
      </S.CharacterInfo>
    </S.CharacterWrapper>
  );
}
export default Character;
