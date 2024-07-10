import Image from "next/image";

import Link from "next/link";

import bg from "@/public/images/Hexagon (2).svg";
import pc from"@/public/images/author-01.jpg";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="absolute mt-20">
        <div className="animate-color-change">
          <Image src={bg} alt="Picture of the author" />
        </div>
      </div>

      <div
        className="absolute inset-0 rounded-bl-[100px] bg-gray-50 pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 items-center justify-center flex">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
            <div className="mt-12 ">
            {/* <div className="flex justify-center items-center  ">

            <Image src={pc} className="rounded- w-60" alt="Picture of the author" />
            </div> */}
              {/* Copy */}
              <div className="flex justify-center items-center">
                <h1
                  className="   text-3xl font-gaMaamli mb-36 text-black  "
                  data-aos=""
                  data-aos-delay="100"
                >
                  I <span className="text-blue-500  text-4xl">'</span>m{" "}
                </h1>
                <h1
                  className="text-9xl mb-6 relative inline-flex justify-center font-gaMaamli text-black"
                  data-aos-delay="100"
                >
                  Victor Ezeabikwa
                </h1>
              </div>

              <p
                className="text-xl text-gray-500 mb-10 flex max-w-[80%] mx-auto text-center "
                data-aos=""
                data-aos-delay="200"
              >
                Are you looking to build an innovative product, feature, or
                website? Look no further! With my extensive experience and
                proven track record, I can help turn your ideas into tangible,
                successful projects.
              </p>
              {/* Buttons */}
              <div
                className="flex justify-center mx-auto "
                data-aos="f"
                data-aos-delay="300"
              >
                <div className="">
                  <Link
                    className="btn text-white mr-8 bg-blue-500 hover:bg-blue-600   p-4 shadow-md rounded-md"
                    href="#"
                  >
                    Checkout my work
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn text-white bg-black hover:bg-blue-100 hover:text-blue-600 w-full shadow-md rounded-md "
                    href="#"
                  >
                    Resume
                    <svg
                    className="pl-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#FAFAFA"
                      viewBox="0 0 256 256"
                    >
                      <path d="M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H72a8,8,0,0,1,0,16H32v64H224V136H184a8,8,0,0,1,0-16h40A16,16,0,0,1,240,136Zm-117.66-2.34a8,8,0,0,0,11.32,0l48-48a8,8,0,0,0-11.32-11.32L136,108.69V24a8,8,0,0,0-16,0v84.69L85.66,74.34A8,8,0,0,0,74.34,85.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
