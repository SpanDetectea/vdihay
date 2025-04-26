import "./SignIn.scss";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../javaScript/firebase";
import Button from "../../common/Button/Button";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Вы успешно вошли!");
    } catch (error) {
      console.error(error.message);
      alert("Ошибка входа");
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
      />
      {/* <button onClick={handleSignIn}>Войти</button> */}
      {/* <Button onCLick={handleSignIn}/> */}
      <Button onClick={handleSignIn}  text='Войти'/>
    </div>
  );
}

export default SignIn;
