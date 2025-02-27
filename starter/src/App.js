import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";

function App() {

  return (
    <div className="app">
      <Routes>
        <Route exact path={"/"} element={<HomePage />} />
        <Route path={"/search"} element={<Search />} />
      </Routes>

    </div>
  );
}

export default App;
