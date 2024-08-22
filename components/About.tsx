import React from "react";
import Image from "next/image";
import pc from "@/public/images/testimonial-01.jpg";

function About() {
  return (
    <div className="mb-20">

    <div className="container mx-auto px-4 py-8">
        <h1 className="flex  justify-center bold text-2xl mb-5 text-blue-500">ABOUT ME</h1>
      <div className="flex flex-col md:flex-row items-center  rounded-lg p-6">
        <div className="w-80 h-80 rounded-md overflow-hidden  border-black mb-6 md:mb-0 md:mr-6">
          <Image
            src={pc}
            alt="Profile Picture"
            width={260}
            height={260}
            className="object-cover border-black"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-xl  mb-2">introduction</h1>
          <p className="text-gray-700 mb-4">
            my name is victor Ezeabikwa I'm a{" "}
            <span className="font-semibold">software Developer</span> (front-end
            heavy) based in Nigeria. I spend most of my time designing graphics,
            coding up things for the web, and learning algorithms.
          </p>
          <p className="text-gray-700 mb-4">
            My goal is to deliver, through code, unique and innovative solutions
            to complex problems. If my portfolio interests you, or you need an
            enthusiastic developer on your team,{" "}
            <a href="#" className="text-blue-500 underline">
              I am available for hire.
            </a>
          </p>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-semibold mb-2">
                Languages & Technologies
              </h2>
              <ul className="list-none space-y-1">
                <li>• JavaScript</li>
                <li>• TypeScript</li>

                <li>• React</li>
                <li>• Next.js</li>

                <li>• Firebase</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Tools & Methods</h2>
              <ul className="list-none space-y-1">
                <li>• Git / Github</li>
                <li>• Figma</li>
              
                <li>• Vercel</li>
                <li>• Responsive Development</li>
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
