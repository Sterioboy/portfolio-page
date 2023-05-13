import { Typography } from "../../components/Typography";
import profilePic from "../../assets/profile-pic@x1.jpg";
import { Header } from "./Header";

export function Hero() {
  return (
    <div>
      <section className="flex h-full w-full flex-col items-center justify-center bg-[url('/images/hero-bg.jpg')] bg-cover bg-top bg-no-repeat">
        <Header />

        <div className="relative top-5 flex h-[575px] max-w-[375px] flex-col items-center justify-center rounded-md border border-gray-400 bg-white  p-2 px-3 transition duration-500 hover:drop-shadow-xl lg:top-8">
          <div className="mb-2">
            <img
              src={profilePic.src}
              alt="Profile Image"
              className="h-[300px] w-[300px] rounded-full p-1 ring ring-[#cbc7c7] hover:ring-4"
            />
          </div>

          <Typography
            as="h1"
            size="lg"
            className="mb-[12px] text-center font-bold text-black"
          >
            Kirill Bondarenko
          </Typography>
          <Typography as="h2" size="base" className="text-center text-black">
            Full Stack Developer
          </Typography>

          <hr className="bg-black-500 my-1 w-full border border-black" />

          <Typography as="h3" size="base" className="text-center text-black">
            Toronto, CA | Moscow, RU
          </Typography>

          <a
            href="https://drive.google.com/file/d/1hHKN3PVmuA2tzNWgZe0hbWE-yLuNDLep/view?usp=sharing"
            target="_blank"
            rel="noopener"
            className="text-sm mt-3"
          >
            <button
              type="button"
              className="rounded-lg bg-blue-700 px-5 py-1 font-medium text-white hover:bg-blue-800 focus:outline-none"
            >
              Résumé
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
