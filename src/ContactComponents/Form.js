import { useState } from "react";
import Paragraph from "../Paragraph";
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
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={saveUser} type="button">
          Sign in
        </button>
        <div>
          <Paragraph content="Don't have an account, yet? Sign up here!" />
        </div>
      </form>
      {user && (
        <div className="results">
          <div className="email-div">
            <Paragraph content={"email:" + user.email} />
          </div>
          <div className="password-div">
            <Paragraph content={"password:" + user.password} />
          </div>
        </div>
      )}
    </>
  );
}
export default Form;
