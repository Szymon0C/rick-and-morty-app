import Switch from "@mui/material/Switch";
import { style } from "@mui/system";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
`;

const Input = styled.input`
  height: 35px;
  border-radius: 5px;
  border: 1px solid #05386b;
  background-color: #8ee4af;
`;

const Button = styled.button`
  border-radius: 5px;
  margin-left: 10px;
  height: 40px;
  width: 90px;
  border: 0;
  background-color: #379683;
  color: #05386b;
  font-size: 15px;
  font-weight: 700;
  margin-right: 60px;
  margin-top: 15px;
`;
const Logo = styled.div`
  position: absolute;
  top: 25px;
  left: 20px;
`;

const NavDiv = styled(FlexDiv)`
  height: 70px;
  flex-direction: column;
  background-color: #379683;
  border-radius: 5px;
`;
const NavDivButtons = styled.div`
  margin-left: 450px;
`;
const SubPage = styled.div`
  margin-top: 90px;
  margin-left: 40px;
`;
const AboutMe = styled(FlexDiv)``;

const AboutMeContent = styled(AboutMe)`
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 450px;
  height: 380px;
`;
const AboutMeButton = styled(Button)`
  position: absolute;
  top: 485px;
  left: 720px;
`;
const AboutMeInput = styled(Input)`
  position: absolute;
  top: 500px;
  left: 530px;
`;
const Footer = styled(FlexDiv)`
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(5, 56, 107, 0.5);
  border-radius: 5px;
  color: #fff;
`;
const Paragraph = styled.p`
  margin-left: 15px;
`;
const IconWrapper = styled.div`
  margin-right: 15px;
`;
const StyledSwitch = styled(Switch)`
  .MuiSwitch-thumb {
    color: #ffeb3b;
    border-radius: 5px;
  }
`;
const CharacterWrapper = styled(FlexDiv)`
  margin-bottom: 15px;
  background-color: #8ee4af;
  border-radius: 5px;
`;
const StyledImg = styled.img`
  border-radius: 5px;
  margin-right: 15px;
`;
const CharacterInfo = styled(FlexDiv)`
  flex-direction: column;
  justify-content: center;
`;
const ContactInput = styled(Input)`
  margin-right: 10px;
`;
const ContactResults = styled(FlexDiv)`
  background-color: #8ee4af;
  border-radius: 5px;
  justify-content: space-evenly;
  width: 80vw;
  margin-left: 110px;
`;
export {
  Input,
  Button,
  Logo,
  NavDiv,
  NavDivButtons,
  SubPage,
  AboutMe,
  AboutMeContent,
  AboutMeInput,
  AboutMeButton,
  Footer,
  Image,
  IconWrapper,
  StyledSwitch,
  Paragraph,
  CharacterWrapper,
  StyledImg,
  CharacterInfo,
  ContactInput,
  ContactResults,
};
