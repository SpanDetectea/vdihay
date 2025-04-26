import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../javaScript/firebase";
import "./SignUp.scss";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, {
      displayName: name
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
      <h2>Регистрация</h2>
      <input type="text" placeholder="Введите имя" onChange={handleName} />
      <input type="email" placeholder="Email" onChange={handleEmail} />
      <input type="password" placeholder="Пароль" onChange={handlePassword} />
      <button onClick={handleSignUp}>Зарегистрироваться</button>
    </div>
  );
}

export default SignUp;
