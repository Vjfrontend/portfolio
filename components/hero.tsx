import Image from "next/image";

import Link from "next/link";

import bg from "@/public/images/Meteor 1.svg";
import pc from "@/public/images/testimonial-01.jpg";

// Skip existing imports

export default function Hero() {
  return (
    <section className="relative bg-[#FAFAFA]">
      <div className="absolute ">
        <div className="animate-color-change mt-20">
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
            <div className="-mt-8x ">
              <div className="flex justify-center items-center  ">
                <Image
                  src={pc}
                  className="rounded-full w-60"
                  alt="Picture of the author"
                />
              </div>
              {/* Copy */}
              <div className="flex justify-center items-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-gaMaamli lg:mb-4 md:mb-6  text-black lg:pb-28">
                  I{" "}
                  <span className="text-blue-500 text-4xl md:text-5xl lg:text-6xl">
                    '
                  </span>
                  m{" "}
                </h1>
                <h1 className="text-4xl md:text-6xl lg:text-8xl mb-2 md:mb-4 mt-16 lg:mt-0 relative inline-flex justify-center font-gaMaamli text-black">
                  Victor Ezeabikwa
                </h1>
              </div>

              <p className="text-sm md:text-xl lg:text-xl text-black mb-4 lg:-mt-10 md:mb-8 lg:mb-12 flex lg:max-w-[80%] mx-auto font-aboreto text-center">
                Are you looking to build an innovative product, feature, or
                website? Look no further! With my extensive experience and
                proven track record, I can help turn your ideas into tangible,
                successful projects.
              </p>
              {/* Buttons */}
              <div className="flex  justify-center mx-auto ">
                <div className="mb-4 md:mb-0 md:mr-4">
                  <Link
                    className="btn text-white bg-blue-500 hover:bg-blue-600 px-3 py-4 md:p-4 lg:p-5 shadow-md rounded-md mr-6"
                    href="#"
                  >
                    Checkout my work
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn text-white bg-black hover:bg-blue-100 hover:text-blue-600 px-3 md:p-4 lg:px-10 shadow-md rounded-md"
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
