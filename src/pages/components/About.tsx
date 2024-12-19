import { Typography } from "../../components/Typography";

export function About() {
  return (
    <div>
      <section className="mt-10 flex h-full w-full flex-col justify-center px-2 py-2 lg:flex-row lg:px-5">
        <div className="mb-2 flex w-full flex-col justify-start pr-2 lg:mb-0 lg:w-[70%]">
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
              I am a Web3 Developer and Consultant with a strong focus on
              delivering innovative and scalable solutions for businesses in the
              web2/3 space.
              <br />
              <br />
              What I bring to the table:
              <br />
              • Web3 Expertise: Proficient in TON, EVM, wagmi, web3.js,
              WalletConnect, and MetaMask SDK, helping clients build and
              integrate decentralized applications.
              <br />• Front-End Development: Crafting responsive and
              high-performance high-performance user interfaces using modern
              JavaScript & TypeScript frameworks (React, Next.js) with a
              specialization in Telegram Mini Apps.
              <br />
              <br />
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
