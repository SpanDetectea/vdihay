import { Route, Routes } from "react-router";
import "./App.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Auth from "./Components/Auth/Auth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
