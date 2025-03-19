import type { Surah } from "../../types/surah";
import DetailSurahInfo from "./DetailSurahInfo";
import AudioControl from "../audio/AudioControl";
import AyatList from "../Ayat/AyatList";

type DetailSurahProps = {
  surah: Surah;
  currecntReciter: string;
  changeReciter: (reciter: string) => void;
  onPlaying: () => void;
  onPause: () => void;
  audioPlaying: boolean;
};

function DetailSurah({
  surah,
  currecntReciter,
  changeReciter,
  onPlaying,
  onPause,
  audioPlaying,
}: DetailSurahProps) {
  return (
    <div>
      <DetailSurahInfo surah={surah} />
      <AudioControl
        currentReciter={currecntReciter}
        changeReciter={changeReciter}
        audioPlaying={audioPlaying}
        onPlay={onPlaying}
        onPause={onPause}
      />
      <AyatList ayats={surah.ayat} />
    </div>
  );
}

export default DetailSurah;
