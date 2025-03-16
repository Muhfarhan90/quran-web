type CardSurahProps = {
  nomor: number;
  namaLatin: string;
  nama: string;
  arti: string;
  tempatTurun: string;
  jumlahAyat: number;
};

function CardSurah({
  nomor,
  namaLatin,
  nama,
  arti,
  tempatTurun,
  jumlahAyat,
}: CardSurahProps) {
  return (
    <div className="flex justify-between gap-3 text-white bg-[#111E4E] w-[320px] rounded-lg p-4">
      <div className="flex items-start gap-3">
        <div className="bg-[#A0BBFF33] rounded-full px-2 py-2 flex items-center justify-center">
          <p className="font-bold text-center text-sm">{nomor}</p>
        </div>
        <div className="flex flex-col gap-[6px]">
          <p>{namaLatin}</p>
          <div className="text-white/50">
            <p>{arti}</p>
            <p>
              {tempatTurun} • {jumlahAyat} Ayat
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-2xl text-purple-400">{nama}</p>
      </div>
    </div>
  );
}

export default CardSurah;
