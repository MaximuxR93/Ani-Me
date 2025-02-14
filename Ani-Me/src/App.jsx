import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Library from "./components/library";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </Router>
  );
}

export default App;
