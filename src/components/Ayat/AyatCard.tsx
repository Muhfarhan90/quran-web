import type { Ayat } from "../../types/surah";
import Number from "../Number";

type AyatCardProps = {
  ayat: Ayat;
};

function AyatCard({ ayat }: AyatCardProps) {
  return (
    <div className="flex flex-col gap-3 text-white bg-dark rounded-lg p-4 cursor-pointer w-full">
      <div className="flex justify-between gap-4">
        <Number nomor={ayat.nomorAyat} />
        <p className="text-xl text-white/80 arab text-right w-full font-bold">{ayat.teksArab}</p>
      </div>

      <div className="flex flex-col gap-[6px] text-light mt-2">
        <p>{ayat.teksLatin}</p>
        <p className="text-sm text-subtle">{ayat.teksIndonesia}</p>
      </div>
    </div>
  );
}

export default AyatCard;
