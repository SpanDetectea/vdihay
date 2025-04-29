import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../javaScript/firebase";
import "./SignUp.scss";
import Button from "../../common/Button/Button";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: name,
      });
    } catch (error) {
      console.error(error.message);
      alert("Ошибка регистрации");
    }
  };
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  return (
    <div className="signUp">
      <div className="signUp__wrapper">
        <h2 className="signUp-title">Регистрация</h2>
        <input
          type="text"
          placeholder="Введите имя"
          onChange={handleName}
          className="input signUp__wrapper-input"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleEmail}
          className="input signUp__wrapper-input"
        />
        <input
          type="password"
          placeholder="Пароль"
          onChange={handlePassword}
          className="input signUp__wrapper-input"
        />
      </div>
      <Button
        onClick={handleSignUp}
        text="Зарегистрироваться"
      />
    </div>
  );
}

export default SignUp;
