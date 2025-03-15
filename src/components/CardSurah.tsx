type CardSurahProps = {
  namaLatin: string;
  nama: string;
  arti: string;
  tempatTurun: string;
  jumlahAyat: number;
};

function CardSurah({
  namaLatin,
  nama,
  arti,
  tempatTurun,
  jumlahAyat,
}: CardSurahProps) {
  return (
    <div className="text-white mt-16">
      <p>{namaLatin}</p>
      <p>{nama}</p>
      <p>{arti}</p>
      <p>{tempatTurun}</p>
      <p>{jumlahAyat}</p>
    </div>
  );
}

export default CardSurah;
