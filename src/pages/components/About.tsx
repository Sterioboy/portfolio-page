import { Typography } from "../../components/Typography";

export function About() {
  return (
    <div>
      <section className="mt-10 flex h-full w-full flex-col justify-center px-2 py-2 lg:flex-row lg:px-5">
        <div className="flex w-full flex-col justify-start pr-2 lg:w-[70%] mb-2 lg:mb-0">
          <Typography
            as="h3"
            size="lg"
            className="mb-2 text-start font-bold text-black"
          >
            About me
          </Typography>
          <div>
            <Typography as="p" size="base">
              Hello there 👋
            </Typography>
            <Typography as="p" size="base">
              I'm a passionate Full Stack Developer with a knack for crafting
              seamless digital experiences. Combining my expertise in frontend
              and backend technologies, I strive to create intuitive,
              responsive, and high-performance web applications that delight
              users and drive business success.
            </Typography>
            <Typography as="p" size="base">
              Feel free to DM me!
            </Typography>
          </div>
        </div>
        <div className="flex w-full flex-col justify-start lg:w-[30%]">
          <Typography
            as="h3"
            size="lg"
            className="mb-2 text-start font-bold text-black"
          >
            Contact
          </Typography>

          <div className="mb-[5px] hover:text-[#70b5f9]">
            <a
              href="https://www.linkedin.com/in/sterio/"
              target="_blank"
              rel="noopener"
              className="flex items-center"
            >
              <i className="fa-brands fa-linkedin mr-1 text-lg"></i>
              <Typography as="p" size="base" className="hover:underline">
                LinkedIn
              </Typography>
            </a>
          </div>
          <div className="mb-[5px] hover:text-[#ec775c]">
            <a
              href="https://github.com/Sterioboy"
              target="_blank"
              rel="noopener"
              className="flex items-center"
            >
              <i className="fa-brands fa-github mr-1 text-lg"></i>
              <Typography as="p" size="base" className="hover:underline">
                GitHub
              </Typography>
            </a>
          </div>
          <div className="mb-[5px] hover:text-[#1c93e3]">
            <a
              href="https://t.me/k_sterio"
              target="_blank"
              rel="noopener"
              className="flex items-center"
            >
              <i className="fa-brands fa-telegram mr-1 text-lg"></i>
              <Typography as="p" size="base" className="hover:underline">
                Telegram
              </Typography>
            </a>
          </div>
          <div className="hover:text-black-500">
            <a
              href="mailto:bondarenkokirill.jobs@gmail.com"
              className="flex items-center"
            >
              <i className="fa-solid fa-envelope mr-1 text-lg"></i>
              <Typography as="p" size="base" className="hover:underline">
                Email
              </Typography>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
