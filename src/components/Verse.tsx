function Verse() {
  return (
    <div className="absolute top-28 z-99 h-[155px] w-[320px] bg-[url(./assets/VerseBackground.png)] bg-no-repeat">
      <div className="flex flex-col gap-2 px-4 py-3 rounded-3xl">
        <p className="text-[12px] text-white/60">📖 Your daily verse</p>
        <h2 className="text-sm font-bold text-white text-wrap">
          “He said: ‘Therein you shall live, and therein you shall die, and from
          it you shall be brought out (i.e. resurrected).’”
        </h2>
        <p className="text-[12px] text-white/70">Al-A'raaf (7:25)</p>
      </div>
    </div>
  );
}

export default Verse;
