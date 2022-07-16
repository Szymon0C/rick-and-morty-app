import Character from "./Character";
function CharactersList() {
  const BASE_URL = "https://rickandmortyapi.com/api/";

  return (
    <>
      <Character link={BASE_URL + "character/1"} />
      <Character link={BASE_URL + "character/2"} />
      <Character link={BASE_URL + "character/3"} />
      <Character link={BASE_URL + "character/4"} />
    </>
  );
}

export default CharactersList;
