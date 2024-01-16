import { Typography } from "../../components/Typography";
import astroIcon from "../../assets/astro-icon.svg";

export function Footer() {
  return (
    <div>
      <section className="mt-1 flex w-full items-center justify-center px-2 py-2 lg:mt-3 lg:px-5">
        <Typography as="p" size="base" className="text-center">
          Developed by Kirill Bondarenko 2024
        </Typography>
        <div className="ml-1 hidden h-[20px] justify-start lg:flex">
          <img src={astroIcon.src} alt="AstroJS Icon" className="mr-2" />
        </div>
      </section>
    </div>
  );
}
