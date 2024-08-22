import Link from 'next/link';
import React from 'react';

// function MyWorks() {
//   const projects = [
//     {
//       title: "NFT Collection Website",
//       description: "Discover A New Era Of Cool",
//       image: "images/carousel-02.jpg", // Replace with your image path
//       link: "#",
//       type: "Website Template",
//     },
//     {
//       title: "Fashion Studio Website",
//       description: "With Smooth Animations",
//       image: "images/carousel-02.jpg", // Replace with your image path
//       link: "#",
//       type: "Website",
//     },
//   ];

//   return (
//     <div className="container mx-auto max-w-[80%] px-4 py-8 mb-20">
//       <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


        
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="w-full bg-white  shadow-inner border-b-8 border-r-8 border-t-2 border-l-2 border-black p-2 rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
//           >
            
           

//             <div className="w-full p-4">
//               <img
//                 className="w-full h-48  rounded-md object-cover object-center"
//                 src={project.image}
//                 alt={project.title}
//               />
//             </div>
//             <div className="px-8 py-3">
//               <h2 className="text-xl font-semibold">{project.title}</h2>
//               <p className="text-gray-600">{project.description}</p>
//               <div className="mt-4">
//                 <a href={project.link} className="text-blue-500 hover:underline">
//                   Visit
//                 </a>
//               </div>
//             </div>
           
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MyWorks;


function MyWorks() {
  const projects = [
    {
      title: "Marbstore",
      description: "E-commerce website ",
      image: "images/Capture 1.png", // Replace with your image path
      link: "https://www.marbstores.com/",
      type: "Website",
    },
    {
      title: "OOCF",
      description: "NGO dedicated to helping little kids ",
      image: "images/Capture 2.png", // Replace with your image path
      link: "https://www.oluwoleoloruntobicarefoundation.org/",
      type: "Website",
    },
  ];

  return (
    <div className="container mx-auto max-w-[80%] px-4 py-8 mb-20 ">
      <h1 className="text-3xl font-bold text-center mb-12">Featured ptojects</h1>
      
      {/* Big Card */}
      <div className="relative p-6 bg-white rounded-xl shadow-lg border-b-8 border-r-8 border-t-2 border-l-2 border-black transform hover:scale-105 transition-transform duration-300 ease-in-out mb-8">
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-700 rounded-full transform -translate-x-6 -translate-y-6 rotate-45"></div>
        <div className="relative flex flex-col md:flex-row items-center ">
          <div className="w-full md:w-1/2 pr-4">
            <img
              className="w-full h-48 md:h-auto rounded-md object-cover object-center"
              src="images/Capture.png" // Replace with your image path
              alt="NFT Collection Website"
            />
          </div>
          <div className="w-full md:w-1/2 px-8 py-3">
            <h2 className="text-xl font-semibold">Infinity Gem</h2>
            <p className="text-gray-600">Ed-tech platform dedicated to helping early tech talent ,to  find a perfect and confortable ground in  the digital world  </p>
            <div className="mt-4">
              <Link
                href="https://ig.bluehouseng.com/" target='blank'
                className="inline-flex items-center px-4 py-2 bg-black text-white font-semibold rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                Visit Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Smaller Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-20">
        
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-full bg-white shadow-lg border-b-8 border-r-8 border-t-2 border-l-2 border-black p-3 rounded-xl  transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-700 rounded-full transform -translate-x-6 -translate-y-6 rotate-45"></div>
            
            <div className="relative w-full p-3">
              <img
                className="w-full h-48 rounded-md object-cover object-center"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="px-8 py-3">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              <div className="mt-4">
              <Link
                href="#"
                target='blank'
                className="inline-flex items-center px-4 py-2 bg-black text-white font-semibold rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                Visit Project
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className='bg-black rounded-md text-center border-2 border-white text-white mt-14 p-2 px-4 flex justify-center lg:ml-[45%]  ml-[30%]'>

      see more
      </button>
      </div>
  );
}

export default MyWorks;
