import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Splashscreen from "./pages/Splashscreen";

function App() {
  return (
    <div className="min-h-screen w-[360px] mx-auto">
      <Routes>
        <Route path="/" element={<Splashscreen />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
