import { signOut } from "firebase/auth";
import { auth } from "../../../javaScript/firebase";

function LogoutButton() {
  const handleLogout = async () => {
    await signOut(auth);
    alert("Вы вышли из аккаунта!");
  };

  return <button onClick={handleLogout}>Выйти</button>;
}

export default LogoutButton;
