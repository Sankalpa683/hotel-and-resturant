// import React from "react";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="relative w-full h-[40rem] md:h-[40rem] sm:h-screen" >
//       {/* Background Video */}
//       <div className="absolute inset-0">
//         <video
//           src="/chefvideo.mp4"
//           autoPlay
//           loop
//           muted
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
//         <h1 className="text-4xl md:text-6xl  text-white">
//           Welcome to <span className="text-orange-500 font-bold">Hotel k1 & Restaurant</span>
//         </h1>
//         <p className="mt-4 text-md md:text-xl text-gray-200">
//         Probably the Hotel which gives luxury Experience and comfort like <span className="text-orange-300 font-medium">never before</span> in Nepal.
//         </p>
//         <div className="mt-6">
//           <a
//             href=""
//             className="px-6 py-3 text-lg font-medium text-white bg-orange-400 rounded-lg hover:bg-orange-600 transition"
//           >
//             Our Menu
//           </a>
//           <a
//             href=""
//             className="px-6 py-3 mx-5 border-2 border-orange-400 text-md text-white rounded-lg"
//           >
//             About Us
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { FaStar, FaSearch, FaPlayCircle } from 'react-icons/fa';

const Hero = () => {
  const avatarUrls = [
    "https://images.unsplash.com/photo-1590206122247-226d3f388d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhhcHB5JTIwY3VzdG9tZXJ8ZW58MHwxfHx8MTY5NzM1MDE3OQ&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1590206122270-3ecfb91c430e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhhcHB5JTIwY3VzdG9tZXJ8ZW58MHwxfHx8MTY5NzM1MDE4MA&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1590206122252-46d60a2a0f87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhhcHB5JTIwY3VzdG9tZXJ8ZW58MHwxfHx8MTY5NzM1MDE4MQ&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1590206122255-5c11b1f0845d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhhcHB5JTIwY3VzdG9tZXJ8ZW58MHwxfHx8MTY5NzM1MDE4Mg&ixlib=rb-1.2.1&q=80&w=1080",
  ];

  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Discover the Elegance of <span className="text-yellow-400">Hotel K1 & Restaurant</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8">
          Indulge in luxury and comfort with exquisite dining and impeccable service in the heart of Nepal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a href="/menu" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-full flex items-center transition-colors duration-300">
            <FaSearch className="mr-2" /> Explore Our Menu
          </a>
          <a href="/about" className="bg-transparent hover:bg-gray-800 text-white font-semibold py-3 px-6 border-2 border-white rounded-full flex items-center transition-colors duration-300">
            <FaPlayCircle className="mr-2" /> Learn More About Us
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-white">
          <div className="flex -space-x-2 mb-4">
            {avatarUrls.map((url, index) => (
              <img key={index} className="w-12 h-12 rounded-full border-2 border-gray-800" src={url} alt={`Happy customer ${index + 1}`} />
            ))}
          </div>
          <div className="text-center sm:text-left">
            <p className="font-semibold text-lg mb-2">Over 5000 Happy Customers</p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
