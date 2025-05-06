import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Preloader from "../../common/Preloader/Preloader";

const AdminRoute = ({ children }) => {
  const { isAuth, user, isLoading } = useSelector((state) => state.auth);
  if (isLoading) {
    return <Preloader />;
  }

  if (!isAuth || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default AdminRoute;
