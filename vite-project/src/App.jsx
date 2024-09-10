import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/disconnectedpage";
import LogIn from "./Components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LogIn/>} />
      </Routes>
    </Router>
  );
}

export default App;
