import PlayIcon from "../../assets/PlayIcon.svg";
import PauseIcon from "../../assets/PauseIcon.svg";

type AudioControlProps = {
  currentReciter: string;
  audioPlaying: boolean;
  changeReciter: (reciterId: string) => void;
  onPlay: () => void;
  onPause: () => void;
};

function AudioControl({
  currentReciter,
  audioPlaying,
  changeReciter,
  onPlay,
  onPause,
}: AudioControlProps) {
  const reciters = [
    {
      id: "01",
      name: "Abdullah Al-Juhany",
    },
    {
      id: "02",
      name: "Abdul Muhsin Al-Qasim",
    },
    {
      id: "03",
      name: "Abdurrahman as-Sudais",
    },
    {
      id: "04",
      name: "Ibrahim Al-Dossari",
    },
    {
      id: "05",
      name: "Misyari Rasyid Al-Afasi",
    },
  ];

  return (
    <div className="flex gap-3 items-center my-3">
      <select
        value={currentReciter}
        onChange={(e) => changeReciter(e.target.value)}
        className="bg-dark text-light p-3 w-full rounded-lg"
      >
        {reciters.map((reciter) => {
          return (
            <option value={reciter.id} key={reciter.id}>
              {reciter.name}
            </option>
          );
        })}
      </select>

      <div
        className="bg-primary w-9 h-9 rounded-full flex flex-col justify-center items-center"
        onClick={audioPlaying ? onPause : onPlay}
      >
        {audioPlaying ? (
          <img src={PauseIcon} alt="Pause Icon" className="w-fit h-fit" />
        ) : (
          <img src={PlayIcon} alt="Play Icon" className="w-fit h-fit" />
        )}
      </div>
    </div>
  );
}

export default AudioControl;
