import { Link } from "react-router-dom";
import Button from "../components/common/Button";

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
        className="absolute  left-5 right-5 bottom-10 "
      >
        <Button name="Get Started" />
      </Link>
    </div>
  );
}

export default Splashscreen;
