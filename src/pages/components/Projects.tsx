import ecommercePic from "../../assets/e-commerce@x1.jpg";
import face2unePic from "../../assets/face2une@x1.jpg";
import studentInvestPic from "../../assets/student-invest@x1.jpg";
import { Typography } from "../../components/Typography";
import graphQLIcon from "../../assets/graphql-icon.svg";
import nextJSIcon from "../../assets/nextjs-icon.svg";
import mongoDBIcon from "../../assets/mongodb-icon.svg";
import reactIcon from "../../assets/reactjs-icon.svg";
import supaBaseIcon from "../../assets/supabase-icon.svg";
import expressIcon from "../../assets/expressjs-icon.svg";
import postgresIcon from "../../assets/postgresql-icon.svg";
import nestIcon from "../../assets/nestjs-icon.svg";

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

        <div className="grid flex-col gap-2 md:grid-cols-2 md:grid-rows-2 lg:flex lg:flex-row lg:justify-around">
          <div className="mb-3 max-w-sm rounded-lg border border-gray-200 bg-white shadow lg:mb-0 lg:mr-2">
            <img
              className="h-[275px] rounded-t-lg"
              src={ecommercePic.src}
              alt="E-commerce project"
              width="382px"
            />

            <div className="flex h-[460px] flex-col justify-between p-3">
              <div>
                <Typography
                  as="h3"
                  size="md"
                  className="mb-[12px] text-start font-bold text-gray-900"
                >
                  eCommerce Website
                </Typography>
                <Typography
                  as="p"
                  size="base"
                  className="mb-2 font-light text-gray-500"
                >
                  Modern solutions, delivering seamless shopping experiences
                  with back-end systems to support inventory, user management,
                  and secure payment processing.
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
                href="https://github.com/Sterioboy/ecommerce-graphQL-nextJS"
                className="text-sm mt-3 w-[200px]"
                target="_blank"
                rel="noopener"
              >
                <button
                  type="button"
                  className="flex w-full items-center rounded-lg bg-blue-700 px-5 py-1 font-medium text-white hover:bg-blue-800 focus:outline-none"
                >
                  Github
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
            <img
              className="h-[275px] rounded-t-lg"
              src={face2unePic.src}
              alt="Face2Une CRM project"
              width="382px"
            />

            <div className="flex h-[460px] flex-col justify-between p-3">
              <div>
                <Typography
                  as="h3"
                  size="md"
                  className="mb-[12px] text-start font-bold text-gray-900"
                >
                  Face2une CRM
                </Typography>
                <Typography
                  as="p"
                  size="base"
                  className="mb-2 font-light text-gray-500"
                >
                  Scalable CRM system, designed to manage customer interactions
                  effectively, facilitate data analysis, and promote business
                  growth through improved customer relationship management.
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
                href="https://facestellar.com/"
                className="text-sm mt-3 w-[200px]"
                target="_blank"
                rel="noopener"
              >
                <button
                  type="button"
                  className="flex w-full items-center rounded-lg bg-blue-700 px-5 py-1 font-medium text-white hover:bg-blue-800 focus:outline-none"
                >
                  Website
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

          <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
            <img
              className="h-[275px] rounded-t-lg"
              src={studentInvestPic.src}
              alt="Student Invest project"
              width="382px"
            />

            <div className="flex h-[460px] flex-col justify-between p-3">
              <div>
                <Typography
                  as="h3"
                  size="md"
                  className="mb-[12px] text-start font-bold text-gray-900"
                >
                  Student Invest
                </Typography>
                <Typography
                  as="p"
                  size="base"
                  className="mb-2 font-light text-gray-500"
                >
                  Social network for students and investors. Connects creative
                  minds with Angel investors, that help them unlock their
                  potential.
                </Typography>

                <div className="mb-2 flex h-[50px] justify-start">
                  <img
                    src={expressIcon.src}
                    alt="Express Icon"
                    className="mr-2"
                  />
                  <img
                    src={postgresIcon.src}
                    alt="PostgreSQL Icon"
                    className="mr-2"
                  />
                  <img src={reactIcon.src} alt="React Icon" />
                </div>
              </div>

              <a
                href="https://github.com/Sterioboy/Student-Invest"
                className="text-sm mt-3 w-[200px]"
                target="_blank"
                rel="noopener"
              >
                <button
                  type="button"
                  className="flex w-full items-center rounded-lg bg-blue-700 px-5 py-1 font-medium text-white hover:bg-blue-800 focus:outline-none"
                >
                  GitHub
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
