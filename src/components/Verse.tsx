type VerseProps = {
  verse: string;
  surah: string;
};

function Verse({
  verse = "“He said: ‘Therein you shall live, and therein you shall die, and from it you shall be brought out (i.e. resurrected).’”",
  surah = "Al-A'raaf (7:25)",
}: VerseProps) {
  return (
    <div className="min-h-[155px] max-w-[580px] bg-[url(./assets/VerseBackground.png)] bg-no-repeat bg-cover flex flex-col justify-between py-3 px-4 rounded-3xl">
      <div className="flex flex-col gap-2 rounded-3xl">
        <p className="text-[12px] text-white/60">📖 Your daily verse</p>
        <h2 className="text-sm font-bold text-white text-wrap">{verse}</h2>
      </div>
      <p className="text-[12px] text-white/70">{surah}</p>
    </div>
  );
}

export default Verse;
