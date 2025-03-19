import { useEffect, useState } from "react";
import type { Surah } from "../../types/surah";
import SurahList from "./SurahList";

function SurahContainer() {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch("https://equran.id/api/v2/surat");
        if (!response.ok) {
          throw new Error("Failed to fetch surahs");
        }
        const data = await response.json();
        setSurahs(data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
        setIsLoading(false);
      }
    };

    fetchSurahs();
  }, []);

  if (isLoading) {
    return <p className="text-white">Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="w-[560px] px-4">
      <SurahList surahs={surahs} />;
    </div>
  );
}

export default SurahContainer;
