import { Link } from "react-router-dom";
import type { Surah } from "../../types/surah";
import Number from "../Number";
type SurahCardProps = {
  surah: Surah;
};

function SurahCard({ surah }: SurahCardProps) {
  return (
    <Link
      to={`/surah/${surah.nomor}`}
      className="flex justify-between gap-3 text-white bg-dark rounded-lg p-4 cursor-pointer w-full"
    >
      <div className="flex items-start gap-3">
        <Number nomor={surah.nomor} />
        <div className="flex flex-col gap-[6px] text-light">
          <p>{surah.namaLatin}</p>
          <div className="text-sm text-subtle">
            <p>{surah.arti}</p>
            <p>
              {surah.tempatTurun} • {surah.jumlahAyat} Ayat
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xl text-purple-400 arab">{surah.nama}</p>
      </div>
    </Link>
  );
}

export default SurahCard;
