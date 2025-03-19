import Profile from "./Profile";
import Verse from "./Verse";
import Photo from "../assets/Photo.png";

function Hero() {
  function getWaktuHari() {
    const sekarang = new Date();
    const jam = sekarang.getHours();

    if (jam >= 5 && jam < 11) {
      return "Morning ☀️";
    } else if (jam >= 11 && jam < 15) {
      return "Afternoon 🌤️";
    } else if (jam >= 15 && jam < 19) {
      return "Evening 🌆";
    } else {
      return "Night 🌙";
    }
  }
  return (
    <div className="relative">
      <Profile greeting={getWaktuHari()} name="Farhan" avatar={Photo} />
      <div className="absolute top-27 left-5 right-5 justify-items-center flex max-w-[570px]">
        <Verse
          verse="“He said: ‘Therein you shall live, and therein you shall die, and from it you shall be brought out (i.e. resurrected).’”"
          surah="Al-A'raaf (7:25)"
        />
      </div>
    </div>
  );
}

export default Hero;
