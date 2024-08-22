// import Link from 'next/link'
// // import Logo from './logo'
// import MobileMenu from './mobile-menu'

// export default function Header() {
//   return (
//     <header className=" absolute  z-30 bg-white  rounded-md  top-5 shadow-sm">
//       <div className="  px-4 sm:px-6 ml-auto">
//         <div className="flex items-center justify-between h-16 md:h-20">

//           {/* Site branding */}
//           {/* <div className="flex-1">
//             <Logo />
//           </div> */}

//           {/* Desktop navigation */}
//           <nav className="hidden md:flex md:grow">

//             {/* Desktop menu links */}
//             <ul className="flex grow justify-center flex-wrap items-center">
//               <li>
//                 <Link  className="font-medium text-sm text-gray-500 border-b-2 border-transparent hover:border-b-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="#">HOME</Link>
//               </li>
//               <li>
//                 <Link className="font-medium text-sm text-gray-500 border-b-2 border-transparent hover:border-b-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="#">ABOUT ME</Link>
//               </li>
//               <li>
//                 <Link className="font-medium text-sm text-gray-500 border-b-2 border-transparent hover:border-b-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/pricing">PROJECT</Link>
//               </li>
//               <li>
//                 <Link className="font-medium text-sm text-gray-500 border-b-2 border-transparent hover:border-b-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/customers">CONTACT ME</Link>
//               </li>

//             </ul>

//           </nav>

//           <MobileMenu />

//         </div>
//       </div>
//     </header>
//   )
// }
import Link from "next/link";
import MobileMenu from "./mobile-menu"; // Ensure this component is properly imported
import Image from "next/image";
import logo from "@/public/images/logo.png"

const Header = () => {
  return (
    <header className="fixed z-30 backdrop-blur bg-white/30 border-b rounded-md top-0 shadow-sm w-full">
      <div className="px-4 sm:px-6 mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
        <Image
          src={logo}
          className="  h-14 w-14 "
          alt="Author Picture"
        />
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:ml-auto">
            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link
                  className="font-medium text-sm text-gray-500 border-b-2 border-transparent hover:border-b-blue-500 mx-4 lg:mx-5 transition duration-350 ease-in-out group-hover:w-full translate-[width] ease duration-300"
                  href="#"
                >
                  HOME
                </Link>
              </li>
              <div className="flex mt-2">
                <li>
                  <Link
                    className="font-medium text-sm text-gray-500 border-b-2 border-transparent hover:border-b-blue-500 pr-1  transition duration-150 ease-in-out"
                    href="#"
                  >
                    ABOUT ME
                  </Link>
                </li>
                <li className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="32"
                    fill="#B3BEB7"
                    viewBox="0 0 256 256"
                  >
                    <path d="M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z"></path>
                  </svg>
                </li>
              </div>
              <li>
                <Link
                  className="font-medium text-sm text-gray-500 border-b-2 border-transparent hover:border-b-blue-500 mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="#"
                >
                  PROJECT
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-gray-500 border-b-2 border-transparent hover:border-b-blue-500 mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="#"
                >
                  CONTACT ME
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-gray-500 border-b-2 border-transparent  mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#B2BEB5"
                    viewBox="0 0 256 256"
                  >
                    <path d="M136,24V232a8,8,0,0,1-16,0V24a8,8,0,0,1,16,0Z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-gray-500 border-b-2 border-transparent hover:border-b-white mx-6 pl-5 transition duration-150 ease-in-out"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-gray-500 border-b-2 border-transparent hover:border-b-white mx-4 pr-10 lg:mx-6 transition duration-150 ease-in-out"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
