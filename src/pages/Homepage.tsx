import Profile from "../components/Profile";
import Photo from "../assets/Photo.png";
import CardSurah from "../components/SurahCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    getWaktuHari();
  }, []);

  function getWaktuHari() {
    const sekarang = new Date();
    const jam = sekarang.getHours();

    if (jam >= 5 && jam < 11) {
      return "Morning ☀️";
    } else if (jam >= 11 && jam < 15) {
      return "Afternoon 🌤️";
    } else if (jam >= 15 && jam < 19) {
      return "Evening 🌆";
    } else {
      return "Night 🌙";
    }
  }

  console.log(data);
  return (
    <div className="absolute max-h-screen w-[360px] mx-auto bg-[#001140] overflow-y-scroll">
      <Profile greeting={getWaktuHari()} name="Farhan" avatar={Photo} />
      <div className="my-16 flex flex-col gap-3 justify-center items-center">
        {data.map((data) => {
          return (
            <Link to={`/detailsurah/${data.nomor}`} key={data.nomor}>
              <CardSurah
                nomor={data.nomor}
                namaLatin={data.namaLatin}
                nama={data.nama}
                arti={data.arti}
                tempatTurun={data.tempatTurun}
                jumlahAyat={data.jumlahAyat}
              />
            </Link>
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
