const { default: styled } = require("styled-components");

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

const NavDiv = styled.div`
  height: 70px;
  display: flex;
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
const AboutMe = styled.div`
  display: flex;
`;
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
export {
  Input,
  Button,
  Logo,
  NavDiv,
  NavDivButtons,
  SubPage,
  AboutMe,
  AboutMeContent,
  Image,
  AboutMeButton,
};
