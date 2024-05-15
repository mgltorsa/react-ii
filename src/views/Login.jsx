import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const LoginView = () => {
  const { login } = useContext(UserContext);

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => login()}>Login</button>
    </div>
  );
};

export default LoginView;
