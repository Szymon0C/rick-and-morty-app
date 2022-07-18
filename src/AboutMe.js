import Image from "./AboutMeComponents/Image";
import Paragraph from "./Paragraph";

function AboutMe(props) {
  let logo;
  return (
    <>
      <div>
        <Image />
        <Paragraph content="Szymon Cichonski" />
      </div>
      <Paragraph content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, modi! In, enim? Porro, culpa. Sunt optio impedit, facilis eligendi necessitatibus quae earum officiis, hic rerum laudantium commodi corporis molestiae blanditiis? Facilis error dolorem reprehenderit atque cupiditate consectetur tempore labore earum cum consequuntur fugiat assumenda dolorum voluptatum libero delectus, nam distinctio." />
      <input
        placeholder="new logo"
        onChange={(e) => {
          logo = e.target.value;
        }}
      />
      <button
        onClick={() => {
          props.setNewLogo(logo);
        }}
      >
        Accept
      </button>
    </>
  );
}
export default AboutMe;
