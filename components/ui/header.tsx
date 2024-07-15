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

const Header = () => {
  return (
    <header className="fixed z-30 bg-inherit rounded-md top-0 shadow-sm w-full">
      <div className="px-4 sm:px-6 mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M196.12,128c24.65-34.61,37.22-70.38,19.74-87.86S162.61,35.23,128,59.88C93.39,35.23,57.62,22.66,40.14,40.14S35.23,93.39,59.88,128c-24.65,34.61-37.22,70.38-19.74,87.86h0c5.63,5.63,13.15,8.14,21.91,8.14,18.48,0,42.48-11.17,66-27.88C151.47,212.83,175.47,224,194,224c8.76,0,16.29-2.52,21.91-8.14h0C233.34,198.38,220.77,162.61,196.12,128Zm8.43-76.55c7.64,7.64,2.48,32.4-18.52,63.28a300.33,300.33,0,0,0-21.19-23.57A300.33,300.33,0,0,0,141.27,70C172.15,49,196.91,43.8,204.55,51.45ZM176.29,128a289.14,289.14,0,0,1-22.76,25.53A289.14,289.14,0,0,1,128,176.29a289.14,289.14,0,0,1-25.53-22.76A289.14,289.14,0,0,1,79.71,128,298.62,298.62,0,0,1,128,79.71a289.14,289.14,0,0,1,25.53,22.76A289.14,289.14,0,0,1,176.29,128ZM51.45,51.45c2.2-2.21,5.83-3.35,10.62-3.35C73.89,48.1,92.76,55,114.72,70A304,304,0,0,0,91.16,91.16,300.33,300.33,0,0,0,70,114.73C49,83.85,43.81,59.09,51.45,51.45Zm0,153.1C43.81,196.91,49,172.15,70,141.27a300.33,300.33,0,0,0,21.19,23.57A304.18,304.18,0,0,0,114.73,186C83.85,207,59.09,212.2,51.45,204.55Zm153.1,0c-7.64,7.65-32.4,2.48-63.28-18.52a304.18,304.18,0,0,0,23.57-21.19A300.33,300.33,0,0,0,186,141.27C207,172.15,212.19,196.91,204.55,204.55ZM140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"></path>
          </svg>
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:ml-auto">
            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link
                  className="font-medium text-sm text-gray-500 border-b-2 border-transparent hover:border-b-blue-500 mx-4 lg:mx-5 transition duration-150 ease-in-out"
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
