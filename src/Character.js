import { useEffect, useState } from "react";
import Paragraph from "../src/Paragraph";
function Character({ link }) {
  let [character, setCharacter] = useState({
    name: null,
    gender: null,
    species: null,
    status: null,
    imgSrc: null,
  });
  useEffect(() => {
    let data = fetch(link)
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
    <div className="character">
      <img src={character.imgSrc} alt="jpg" />
      <div className="character-paragrahps">
        <Paragraph content={`name:${character.name}`} />
        <Paragraph content={`gender:${character.gender}`} />
        <Paragraph content={`species:${character.species}`} />
        <Paragraph content={`status:${character.status}`} />
      </div>
    </div>
  );
}
export default Character;
