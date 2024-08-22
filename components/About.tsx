import React from "react";
import Image from "next/image";
import pc from "@/public/images/WhatsApp Image 2024-06-12 at 21.40.10_8a134e4b.jpg";
import Link from "next/link";

function About() {
  return (
    <div className="mb-20">

    <div className="container mx-auto px-4 py-8">
        <h1 className="flex  justify-center bold text-2xl mb-5 text-blue-500">ABOUT ME</h1>
      <div className="flex flex-col md:flex-row items-center  rounded-lg p-6">
        <div className="w-80 h-80 rounded-md overflow-hidden  border-black mb-6 md:mb-0 md:mr-6 ml-7">
          <Image
            src={pc}
            alt="Profile Picture"
            width={260}
            height={260}
            className="object-cover rounded-md border-black"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-xl  mb-2">Introduction</h1>
          <p className="text-gray-700 mb-4">
            My Name Is Victor Ezeabikwa I'm a{" "}
            <span className="font-semibold">Software Developer</span> (front-end
            heavy) based in Nigeria. I spend most of my time creating dynamic user interface
             for both web and mobile applications , learning algorithms.
          </p>
          <p className="text-gray-700 mb-4">
            My goal is to deliver, through code, unique and innovative solutions
            to complex problems. If my portfolio interests you, or you need an
            enthusiastic developer on your team,{" "}
            <Link href="#" className="text-blue-500 underline">
              I am available for hire.
            </Link>
          </p>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-semibold mb-2">
                Languages & Technologies
              </h2>
              <ul className="list-none space-y-1">
                <li> <span className="text-blue-500 pr-1">•</span> JavaScript</li>
                <li> <span className="text-blue-500 pr-1">•</span>TypeScript</li>

                <li> <span className="text-blue-500 pr-1">•</span> React</li>
                <li> <span className="text-blue-500 pr-1">•</span>Next.js</li>

                <li> <span className="text-blue-500 pr-1">•</span> Firebase</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Tools & Methods</h2>
              <ul className="list-none space-y-1">
                <li> <span className="text-blue-500 pr-1">•</span> Git / Github</li>
                <li> <span className="text-blue-500 pr-1">•</span>Figma</li>
              
                <li> <span className="text-blue-500 pr-1">•</span> Vercel</li>
                <li> <span className="text-blue-500 pr-1">•</span>Responsive Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default About;
