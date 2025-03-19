import Hero from "../components/Hero";
import SurahContainer from "../components/Surah/SurahContainer";

function Homepage() {
  return (
    <div className="bg-[#001140]">
      <Hero />
      <div className="pt-16 flex items-center justify-center mx-auto max-w-[800px] px-4">
        <SurahContainer />
      </div>
    </div>
  );
}

export default Homepage;
