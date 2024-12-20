import { Typography } from "../../components/Typography";
import graphQLIcon from "../../assets/graphql-icon.svg";
import nextJSIcon from "../../assets/nextjs-icon.svg";
import mongoDBIcon from "../../assets/mongodb-icon.svg";
import reactIcon from "../../assets/reactjs-icon.svg";
import supaBaseIcon from "../../assets/supabase-icon.svg";
import expressIcon from "../../assets/expressjs-icon.svg";
import postgresIcon from "../../assets/postgresql-icon.svg";
import nestIcon from "../../assets/nestjs-icon.svg";
import tonIcon from "../../assets/ton-icon.svg";
import strapiIcon from "../../assets/strapi-icon.svg";
import metatune from "../../assets/meta-tune@2x.png";
import hundred2one from "../../assets/hundred-2-one@2x.png";

export function Projects() {
  return (
    <div>
      <section className="mt-3 flex h-full w-full flex-col px-2 py-2 lg:px-5">
        <Typography
          as="h3"
          size="lg"
          className="mb-[24px] text-start font-bold text-gray-900"
        >
          Projects
        </Typography>

        <div className="grid flex-col gap-2 md:grid-cols-2 md:grid-rows-2 lg:flex lg:flex-row lg:flex-wrap lg:justify-around">
          <div className="mb-3 max-w-sm rounded-lg border border-gray-200 bg-white shadow lg:mb-0 lg:mr-2">
            <img
              className="h-[275px] rounded-t-lg object-fill"
              src="https://res.cloudinary.com/do6yo1hx8/image/upload/v1705399939/Tontune_Banner_jthb6a.png"
              alt="Tontune"
            />

            <div className="flex h-[460px] flex-col justify-between p-3">
              <div>
                <Typography
                  as="h3"
                  size="md"
                  className="mb-[12px] text-start font-bold text-gray-900"
                >
                  Tontune (Founder)
                </Typography>
                <Typography
                  as="p"
                  size="base"
                  className="mb-2 font-light text-gray-500"
                >
                  <a
                    href="https://dorahacks.io/buidl/11413"
                    className="font-bold text-gray-900 underline hover:text-blue-700"
                    target="_blank"
                    rel="noopener"
                  >
                    The Open League Hackathon Semi Finalist
                  </a>
                  <br />
                  <br />
                  Music streaming platform that integrates the TON blockchain to
                  transform the way artists connect with their audience and
                  monetize their music.
                </Typography>

                <div className="mb-2 flex h-[50px] justify-start">
                  <img
                    src={strapiIcon.src}
                    alt="Strapi Icon"
                    className="mr-2"
                  />
                  <img src={tonIcon.src} alt="TON Icon" className="mr-2" />
                  <img src={reactIcon.src} alt="React Icon" />
                </div>
              </div>

              <a
                href="https://dorahacks.io/buidl/11413"
                className="text-sm mt-3 w-[200px]"
                target="_blank"
                rel="noopener"
              >
                <button
                  type="button"
                  className="flex w-full items-center rounded-lg bg-blue-700 px-5 py-1 font-medium text-white hover:bg-blue-800 focus:outline-none"
                >
                  Project
                  <svg
                    aria-hidden="true"
                    className="-mr-1 ml-2 h-2 w-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>

          <div className="mb-3 max-w-sm rounded-lg border border-gray-200 bg-white shadow lg:mb-0 lg:mr-2">
            <div className="flex h-[275px] items-center justify-center">
              <img
                className="h-[275px] rounded-t-lg object-cover object-center"
                src={metatune.src}
                alt="MetaTune"
              />
            </div>

            <div className="flex h-[460px] flex-col justify-between p-3">
              <div>
                <Typography
                  as="h3"
                  size="md"
                  className="mb-[12px] text-start font-bold text-gray-900"
                >
                  MetaTune
                </Typography>
                <Typography
                  as="p"
                  size="base"
                  className="mb-2 font-light text-gray-500"
                >
                  <a
                    href="https://ethglobal.com/showcase/metatune-muizg"
                    className="font-bold text-gray-900 underline hover:text-blue-700"
                    target="_blank"
                    rel="noopener"
                  >
                    MetaMask - Best Mobile-ready Dapp
                  </a>
                  <br />
                  <br />
                  Meta Tune is an Artist to Fans Engagement Platform to help
                  with discoverability of upcoming artists
                </Typography>

                <div className="mb-2 flex h-[50px] justify-start">
                  <img
                    src={graphQLIcon.src}
                    alt="GraphQL Icon"
                    className="mr-2"
                  />
                  <img
                    src={mongoDBIcon.src}
                    alt="MongoDB Icon"
                    className="mr-2"
                  />
                  <img src={nextJSIcon.src} alt="NextJS Icon" />
                </div>
              </div>

              <a
                href="https://ethglobal.com/showcase/metatune-muizg"
                className="text-sm mt-3 w-[200px]"
                target="_blank"
                rel="noopener"
              >
                <button
                  type="button"
                  className="flex w-full items-center rounded-lg bg-blue-700 px-5 py-1 font-medium text-white hover:bg-blue-800 focus:outline-none"
                >
                  Project
                  <svg
                    aria-hidden="true"
                    className="-mr-1 ml-2 h-2 w-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>

          <div className="mb-3 max-w-sm rounded-lg border border-gray-200 bg-white shadow lg:mb-0 lg:mr-2">
            <div className="flex h-[275px] items-center justify-center">
              <img
                className="h-[275px] rounded-t-lg object-cover object-center"
                src={hundred2one.src}
                alt="Hundred-2-One"
              />
            </div>

            <div className="flex h-[460px] flex-col justify-between p-3">
              <div>
                <Typography
                  as="h3"
                  size="md"
                  className="mb-[12px] text-start font-bold text-gray-900"
                >
                  Hundred-2-One
                </Typography>
                <Typography
                  as="p"
                  size="base"
                  className="mb-2 font-light text-gray-500"
                >
                  <a
                    href="https://ethglobal.com/showcase/hundred2one-7gznc"
                    className="font-bold text-gray-900 underline hover:text-blue-700"
                    target="_blank"
                    rel="noopener"
                  >
                    Flow Foundation - Most Killer App Potential 2nd place
                  </a>
                  <br />
                  <br />
                  Swipe to vote on questions, predict vote percentages, and
                  create shareable opinion graphics—all within a Telegram mini
                  app. Make opinions interactive and community-driven!
                </Typography>

                <div className="mb-2 flex h-[50px] justify-start">
                  <img src={nestIcon.src} alt="NestJS Icon" className="mr-2" />
                  <img
                    src={supaBaseIcon.src}
                    alt="SupaBase Icon"
                    className="mr-2"
                  />
                  <img src={reactIcon.src} alt="React Icon" />
                </div>
              </div>

              <a
                href="https://ethglobal.com/showcase/hundred2one-7gznc"
                className="text-sm mt-3 w-[200px]"
                target="_blank"
                rel="noopener"
              >
                <button
                  type="button"
                  className="flex w-full items-center rounded-lg bg-blue-700 px-5 py-1 font-medium text-white hover:bg-blue-800 focus:outline-none"
                >
                  Project
                  <svg
                    aria-hidden="true"
                    className="-mr-1 ml-2 h-2 w-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
