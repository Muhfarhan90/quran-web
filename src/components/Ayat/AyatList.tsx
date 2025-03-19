import AyatCard from "./AyatCard";
import type { Ayat } from "../../types/surah";

type AyatListProps = {
  ayats: Ayat[];
};

function AyatList({ ayats }: AyatListProps) {
  return (
    <div className="flex flex-col gap-3">
      {ayats.map((ayat) => {
        return <AyatCard key={ayat.nomorAyat} ayat={ayat} />;
      })}
    </div>
  );
}

export default AyatList;
