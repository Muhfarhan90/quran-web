import { Surah } from "../../types/surah";

type DetailSurahInfoProps = {
  surah: Surah;
};

function DetailSurahInfo({
  surah
}: DetailSurahInfoProps) {
  return (
    <div className="relative bg-[url('./assets/AyatBackground.png')] bg-no-repeat bg-cover h-[183px] rounded-3xl flex flex-col text-white">
      <div className="py-5 px-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold">{surah.namaLatin}</h1>
          <p className="text-sm">{surah.arti}</p>
        </div>
        <hr className="text-xl text-white/15 border my-3" />
        <p className="text-sm font-normal">
          {surah.tempatTurun} • {surah.jumlahAyat} Ayat
        </p>
      </div>
      <button className="absolute z-10 bottom-0 flex justify-between items-center bg-[#6C8EFF66] w-full px-4 py-1 rounded-b-3xl cursor-pointer">
        <p className="text-sm">Tentang surah {surah.namaLatin}</p>
        <span>➡️</span>
      </button>
    </div>
  );
}

export default DetailSurahInfo;
