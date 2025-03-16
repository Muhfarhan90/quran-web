import { Link } from "react-router-dom";

function Splashscreen() {
  return (
    <div className="min-h-screen w-[360px] mx-auto bg-[url('./assets/Splashscreen.png')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center my-auto">
      <div className="flex flex-col items-center gap-3 w-1/2 text-center">
        <h1 className="text-2xl font-bold text-white">Qur'anKu App</h1>
        <p className="text-white/80 text-md">
          Learn Quran and Recite once everyday
        </p>
      </div>
      <Link
        to={"/home"}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-[calc(100%-40px)] bg-white text-[#001140] py-3 rounded-full mt-4 font-bold text-lg"
      >
        Get Started
      </Link>
    </div>
  );
}

export default Splashscreen;
