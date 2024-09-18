import React from "react";

export default function Services() {
  return (
    <div className="w-full bg-orange-400 h-auto" id="services">
      {/* Section Header */}
      <div className="py-16">
        <h1 className="text-center text-4xl md:text-5xl text-white font-bold">
          Services We Provide
        </h1>
        <p className="text-center text-lg md:text-xl text-gray-100 mt-4 px-4">
          Discover our range of services designed to provide you with a comfortable and luxurious stay.
        </p>
      </div>

      {/* Services Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">Luxurious Rooms</h2>
            <p className="text-lg text-gray-700">
              Our rooms are designed to provide the utmost comfort and luxury, with spacious interiors, modern decor, and top-tier amenities.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">Fine Dining</h2>
            <p className="text-lg text-gray-700">
              Enjoy a wide range of exquisite dishes from local Nepalese delicacies to international cuisines, all served in a beautiful setting.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">Event Hosting</h2>
            <p className="text-lg text-gray-700">
              Whether it’s a business conference, wedding, or celebration, we offer event spaces that cater to all your needs, ensuring a memorable experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
