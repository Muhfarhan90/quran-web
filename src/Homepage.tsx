import Profile from "./components/Profile";
import Photo from "./assets/Photo.png";
import CardSurah from "./components/CardSurah";

function Homepage() {
  return (
    <div className="absolute min-h-screen w-[360px] mx-auto bg-[#001140]">
      <Profile greeting="Good Morning" name="Farhan" avatar={Photo} />
      <CardSurah
        namaLatin="Al-Fatihah"
        nama="Surah Al-Fatihah"
        arti="Pembukaan"
        tempatTurun="Mekkah"
        jumlahAyat={7}
      />
    </div>
  );
}

export default Homepage;
