import Character from "./Character";
function CharactersList() {
  const BASE_URL = "https://rickandmortyapi.com/api/character/";
  const ARR = [1, 2, 3, 4, 5];
  return (
    <>
      {ARR.map((value) => {
        return <Character key={value} link={BASE_URL + value} />;
      })}
    </>
  );
}

export default CharactersList;
