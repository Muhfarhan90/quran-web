type AyatCardProps = {
  nomorAyat: number;
  nama: string;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
};

function AyatCard({
  nomorAyat,
  nama,
  teksArab,
  teksLatin,
  teksIndonesia,
}: AyatCardProps) {
  return (
    <div className="flex justify-between gap-3 text-white bg-[#111E4E] w-[320px] rounded-lg p-4 cursor-pointer">
      <div className="flex items-start gap-3">
        <div className="bg-[#A0BBFF33] rounded-full px-2 py-2 flex items-center justify-between">
          <p className="font-bold text-center text-sm">{nomorAyat}</p>
          <p>{teksArab}</p>
        </div>
        <div className="flex flex-col gap-[6px]">
          <p>{teksLatin}</p>
          <p>{teksIndonesia}</p>
        </div>
      </div>
      <div>
        <p className="text-2xl text-purple-400">{nama}</p>
      </div>
    </div>
  );
}

export default AyatCard;
