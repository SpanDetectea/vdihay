import { signOut } from "firebase/auth";
import { auth } from "../../../javaScript/firebase";
import Button from "../../common/Button/Button"

function LogoutButton() {
  const handleLogout = async () => {
    await signOut(auth);
  };
return <Button onClick={handleLogout} text = "Выйти"/>
}

export default LogoutButton;
