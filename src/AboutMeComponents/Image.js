import image from "./imgs/me.png";
import * as S from "../style";
function Image() {
  return (
    <div>
      <S.Image src={image} alt="me.png" />
    </div>
  );
}
export default Image;
