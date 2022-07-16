import { useState } from "react";

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
      <input onChange={(e) => setElement(e.target.value)}></input>
      <button onClick={update}>Accept</button>
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
      <button
        onClick={() => {
          props.changeLogo();
        }}
      >
        Change logo
      </button>
    </>
  );
}
export default Todo;
