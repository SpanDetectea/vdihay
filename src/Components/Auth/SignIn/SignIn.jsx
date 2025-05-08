import "./SignIn.scss";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../javaScript/firebase";
import Button from "../../common/Button/Button";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../Slices/authSlice";
import { useLocation, useNavigate } from "react-router";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || "/";

  const handleSignIn = async () => {
    try {
      dispatch(setLoading(true));
      await signInWithEmailAndPassword(auth, email, password);

      navigate(from, { replace: true });
    } catch (error) {
      console.error(error.message);
      setError("Введены неккоретные данные!");
    } finally {
      dispatch(setLoading(false));
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSignIn();
    }
  };

  return (
    <div className="signIn">
      <h2 className="signIn-title">Вход</h2>
      <input
        className="signIn-email input"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="signIn-password input"
        type="password"
        placeholder="Пароль"
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      {error && <div className="error"> {error}</div>}
      <Button onClick={handleSignIn} text="Войти" />
    </div>
  );
}

export default SignIn;
