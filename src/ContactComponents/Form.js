import { useState } from "react";
import Paragraph from "../Paragraph";
import * as S from "../style";
function Form() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [user, setUser] = useState(null);
  const saveUser = () => {
    setUser({ email: email, password: password });
  };
  return (
    <>
      <form>
        <Paragraph content="Sign in" />
        <Paragraph content="Fill in the fields below to sign into your account" />
        <S.ContactInput
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.ContactInput
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <S.Button onClick={saveUser} type="button">
          Sign in
        </S.Button>
        <div>
          <Paragraph content="Don't have an account, yet? Sign up here!" />
        </div>
      </form>
      {user && (
        <S.ContactResults>
          <div>
            <Paragraph content={"email:" + user.email} />
          </div>
          <div>
            <Paragraph content={"password:" + user.password} />
          </div>
        </S.ContactResults>
      )}
    </>
  );
}
export default Form;
