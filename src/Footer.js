import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import Paragraph from "./Paragraph";
import * as S from "./style.js";
export default function Footer() {
  return (
    <S.Footer>
      <Paragraph content="Made by Szymon" />
      <S.IconWrapper>
        <FacebookIcon />
        <GitHubIcon />
      </S.IconWrapper>
    </S.Footer>
  );
}
