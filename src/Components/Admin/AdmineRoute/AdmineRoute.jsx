import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Preloader from "../../common/Preloader/Preloader";

const AdminRoute = ({ children }) => {
  const { isAuth, user } = useSelector((state) => state.auth);


  if (!isAuth || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default AdminRoute;
