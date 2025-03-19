// import DetailSurah from "../components/DetailSurah/DetailSurah";
import { Link } from "react-router-dom";
import DetailSurahContainer from "../components/DetailSurah/DetailSurahContainer";

function DetailSurahPage() {
  return (
    <div className="bg-background max-w-[600px] mx-auto min-h-screen px-4 pb-6">
      <Link to="/home">
        <div className="text-white flex items-center gap-2 py-5"><span>⬅</span>Daftar Surah</div>
      </Link>
      <DetailSurahContainer />
    </div>
  );
}

export default DetailSurahPage;
