import type { Ayat } from "../../types/surah";

type AyatCardProps = {
  ayat: Ayat;
};

function AyatCard({
  ayat
}: AyatCardProps) {
  return (
    <div className="flex justify-between gap-3 text-white bg-[#111E4E] w-[320px] rounded-lg p-4 cursor-pointer">
      <div className="flex items-start gap-3">
        <div className="bg-[#A0BBFF33] rounded-full px-2 py-2 flex items-center justify-between">
          <p className="font-bold text-center text-sm">{ayat.nomorAyat}</p>
          <p>{ayat.teksArab}</p>
        </div>
        <div className="flex flex-col gap-[6px]">
          <p>{ayat.teksLatin}</p>
          <p>{ayat.teksIndonesia}</p>
        </div>
      </div>
    </div>
  );
}

export default AyatCard;
