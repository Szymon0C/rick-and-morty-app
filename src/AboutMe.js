import Image from "./AboutMeComponents/Image";
import Paragraph from "./Paragraph";
import * as S from "./style";
function AboutMe(props) {
  let logo;
  return (
    <>
      <S.AboutMeContent>
        <Image />
        <Paragraph content="Szymon Cichonski" />
      </S.AboutMeContent>
      <Paragraph content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, modi! In, enim? Porro, culpa. Sunt optio impedit, facilis eligendi necessitatibus quae earum officiis, hic rerum laudantium commodi corporis molestiae blanditiis? Facilis error dolorem reprehenderit atque cupiditate consectetur tempore labore earum cum consequuntur fugiat assumenda dolorum voluptatum libero delectus, nam distinctio." />
      <S.Input
        placeholder="new logo"
        onChange={(e) => {
          logo = e.target.value;
        }}
      />
      <S.AboutMeButton
        onClick={() => {
          props.setNewLogo(logo);
        }}
      >
        Accept
      </S.AboutMeButton>
    </>
  );
}
export default AboutMe;
