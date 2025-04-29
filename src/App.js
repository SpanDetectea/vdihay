import { Route, Routes } from "react-router";
import "./App.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Auth from "./Components/Auth/Auth";
import Preloader from "./Components/common/Preloader/Preloader";
import { useSelector } from "react-redux";

function App() {
  const isLoading = useSelector((state) => state.auth.isLoading);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      {isLoading && <Preloader />}
      {/* <Preloader /> */}
    </div>
  );
}

export default App;
