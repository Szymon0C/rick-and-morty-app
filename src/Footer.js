import { useContext } from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

import { SloganContext } from "./contexts/SloganContext";

import Paragraph from "./Paragraph";
import * as S from "./style.js";

export default function Footer() {
  const { slogan, hideSlogan } = useContext(SloganContext);
  return (
    <S.Footer>
      <Paragraph content="Made by Szymon" />
      <S.Button onClick={hideSlogan}>{slogan}</S.Button>
      <S.IconWrapper>
        <FacebookIcon />
        <GitHubIcon />
      </S.IconWrapper>
    </S.Footer>
  );
}
