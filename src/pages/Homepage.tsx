import Profile from "../components/Profile";
import Photo from "../assets/Photo.png";
import CardSurah from "../components/CardSurah";
import { useEffect, useState } from "react";

interface Surah {
  nomor: number;
  namaLatin: string;
  nama: string;
  arti: string;
  tempatTurun: string;
  jumlahAyat: number;
}

function Homepage() {
  const [data, setData] = useState<Surah[]>([]);
  function fetchDataQuran() {
    fetch("https://equran.id/api/v2/surat")
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }
  useEffect(() => {
    fetchDataQuran();
  }, []);

  console.log(data);
  return (
    <div className="absolute max-h-screen w-[360px] mx-auto bg-[#001140] overflow-y-scroll">
      <Profile greeting="Good Morning" name="Farhan" avatar={Photo} />
      <div className="my-16 flex flex-col gap-3 justify-center items-center">
        {data.map((data) => {
          return (
            <CardSurah
              nomor={data.nomor}
              namaLatin={data.namaLatin}
              nama={data.nama}
              arti={data.arti}
              tempatTurun={data.tempatTurun}
              jumlahAyat={data.jumlahAyat}
            />
          );
        })}
      </div>

      {/* <CardSurah
        namaLatin="Al-Fatihah"
        nama="Surah Al-Fatihah"
        arti="Pembukaan"
        tempatTurun="Mekkah"
        jumlahAyat={7}
      /> */}
    </div>
  );
}

export default Homepage;
