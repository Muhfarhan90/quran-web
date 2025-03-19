import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Surah } from "../../types/surah";
import DetailSurah from "./DetailSurah";

function DetailSurahContainer() {
  // Mengambil nilai parameter surahId dari URL menggunakan useParams
  const { surahId } = useParams<{ surahId: string }>();
  // Menyimpan data surah yang diambil dari API
  const [surah, setSurah] = useState<Surah | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // Set default reciter & audioPlaying state
  const [currentReciter, setCurrentReciter] = useState("01");
  const [audioPlaying, setAudioPlaying] = useState(false);
  // Membuat referensi untuk elemen audio HTML. Ini digunakan untuk mengontrol pemutaran audio.
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Ini adalah fungsi yang berjalan saat komponen pertama kali dimuat atau saat surahId berubah:
  useEffect(() => {
    const fetchSurah = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://equran.id/api/v2/surat/${surahId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch surah data");
        }
        const data = await response.json();
        setSurah(data.data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchSurah();
  }, [surahId]);
  // Ini berfungsi untuk membersihkan pemutaran audio saat komponen tidak lagi ditampilkan (unmount).
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        audioRef.current.src = "";
      }
    };
  }, []);

  // Fungsi ini dipanggil saat pengguna mengganti pembaca Al-Quran:
  const changeReciter = (reciterId: string) => {
    setCurrentReciter(reciterId);
    //   jika audio sedang diputar, maka akan dihentikan terlebih dahulu, kemudian akan diputar kembali dengan pembaca yang baru.
    if (audioPlaying) {
      handlePauseAudio();
      // Menunggu 100ms agar audio yang sedang diputar berhenti sebelum memainkan audio baru.
      setTimeout(() => {
        handlePlayFullSurah();
      }, 100);
    }
  };
  // Fungsi ini dipanggil saat tombol play ditekan:
  const handlePlayFullSurah = () => {
    if (!surah) return;

    if (audioRef.current) {
      audioRef.current.pause();
    }

    audioRef.current = new Audio(surah.audioFull[currentReciter]);
    audioRef.current.onended = () => {
      setAudioPlaying(false);
    };

    audioRef.current.play();
    setAudioPlaying(true);
  };

  // Fungsi ini dipanggil saat tombol pause ditekan:
  const handlePauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setAudioPlaying(false);
  };

  // Menampilkan pesan loading jika data sedang diambil, atau pesan error jika terjadi masalah.
  if (loading) {
    return <div className="p-5 text-center">Loading...</div>;
  }
  if (error || !surah) {
    return (
      <div className="p-5 text-center text-red-500">
        Error: {error || "Surah tidak ditemukan"}
      </div>
    );
  }
  // Jika data sudah siap, menampilkan komponen DetailSurah dengan semua data dan fungsi yang diperlukan.
  return (
    <DetailSurah
      surah={surah}
      currecntReciter={currentReciter}
      changeReciter={changeReciter}
      onPause={handlePauseAudio}
      onPlaying={handlePlayFullSurah}
      audioPlaying={audioPlaying}
    />
  );
}

export default DetailSurahContainer;
