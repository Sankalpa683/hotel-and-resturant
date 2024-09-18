import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-[40rem] md:h-[40rem] sm:h-screen" >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="/chefvideo.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl  text-white">
          Welcome to <span className="text-orange-500 font-bold">Hotel k1 & Restaurant</span>
        </h1>
        <p className="mt-4 text-md md:text-xl text-gray-200">
        Probably the Hotel which gives luxury Experience and comfort like <span className="text-orange-300 font-medium">never before</span> in Nepal.
        </p>
        <div className="mt-6">
          <a
            href=""
            className="px-6 py-3 text-lg font-medium text-white bg-orange-400 rounded-lg hover:bg-orange-600 transition"
          >
            Our Menu
          </a>
          <a
            href=""
            className="px-6 py-3 mx-5 border-2 border-orange-400 text-md text-white rounded-lg"
          >
            About Us
          </a>
        </div>
      </div>
    </div>
  );
}
