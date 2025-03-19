// import AyatList from "../components/Ayat/AyatList";
import SurahInfo from "../components/Surah/SurahInfo";

function DetailSurahPage() {
  return (
    <div className="absolute min-h-screen w-[360px] bg-[#001140] py-10 px-5">
      <SurahInfo namaLatin="Al-A'raf" arti="Tempat Tertinggi" tempatTurun="Mekah" jumlahAyat={206} />
      {/* <AyatList /> */}
      </div>
  );
}

export default DetailSurahPage;
