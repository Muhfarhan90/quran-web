import DetailSurahInfo from "../components/DetailSurahInfo";

function DetailSurah() {
  return (
    <div className="absolute min-h-screen w-[360px] bg-[#001140] py-10 px-5">
        <DetailSurahInfo namaLatin="Al-A'raf" arti="Tempat Tertinggi" tempatTurun="Mekah" jumlahAyat={206}/>
      </div>
  );
}

export default DetailSurah;
