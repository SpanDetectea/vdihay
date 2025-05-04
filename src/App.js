import { Route, Routes } from "react-router";
import "./App.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Auth from "./Components/Auth/Auth";
import Preloader from "./Components/common/Preloader/Preloader";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Menu from "./Components/Menu/Menu";
import Admin from "./Components/Admin/Admin";
import { clearExpiredReservations } from "./Slices/reservationSlice";
import { useEffect } from "react";

function App() {
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearExpiredReservations());

    const interval = setInterval(() => {
      dispatch(clearExpiredReservations());
    }, 15 * 60 * 1000);

    return () => clearInterval(interval);
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {isLoading && <Preloader />}
      {/* <Preloader /> */}
      <Footer />
    </div>
  );
}

export default App;
