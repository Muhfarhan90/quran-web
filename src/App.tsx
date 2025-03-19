import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Splashscreen from "./pages/Splashscreen";
import DetailSurah from "./pages/DetailSurahPage";

function App() {
  return (
    <div className="bg-background">
      <div className="min-h-screen max-w-[600px] container mx-auto">
        <Routes>
          <Route path="/" element={<Splashscreen />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/surah/:id" element={<DetailSurah />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
