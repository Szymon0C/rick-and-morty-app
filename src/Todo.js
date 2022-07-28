import { useState } from "react";
import * as S from "./style";
function Todo(props) {
  let id = -1;
  const [element, setElement] = useState(null);
  const [list, setList] = useState([]);
  const update = () => {
    setList([...list, element]);
  };
  const remove = (e) => {
    let index = e.target.id.substring(2);
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <>
      <S.Input onChange={(e) => setElement(e.target.value)} />
      <S.Button onClick={update}>Accept</S.Button>
      <ul>
        {list.map((element) => {
          id++;
          return (
            <li key={"key" + id} onClick={remove} id={"id" + id}>
              {element}
            </li>
          );
        })}
      </ul>
      <S.Button
        onClick={() => {
          props.changeLogo();
        }}
      >
        Change logo
      </S.Button>
    </>
  );
}
export default Todo;
