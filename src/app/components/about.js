"use client"
import { useState } from 'react'
import { Coffee, Utensils, Bed, Users } from "lucide-react"

export default function About() {
  const [activeTab, setActiveTab] = useState("story")

  const features = [
    { icon: Coffee, title: "Premium Coffee", description: "Start your day with our selection of gourmet coffees." },
    { icon: Utensils, title: "Exquisite Dining", description: "Savor local and international cuisines prepared by expert chefs." },
    { icon: Bed, title: "Luxurious Rooms", description: "Relax in our spacious, well-appointed rooms and suites." },
    { icon: Users, title: "Exceptional Service", description: "Our staff is dedicated to ensuring your stay is perfect." },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8" id='aboutus'>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
          About <span className="text-orange-500">Hotel K1 & Restaurant</span>
        </h1>

        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[30rem] mb-12">
          <img
            src="/bg.jpg"
            alt="Hotel K1 Lobby"
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
            <span className=''>Experience </span>Luxury & Comfort
            </p>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-8 text-center">
            <button
              onClick={() => setActiveTab("story")}
              className={`py-2 px-4 font-semibold ${
                activeTab === "story" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-700"
              }`}
            >
              Our Story
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`py-2 px-4 font-semibold ${
                activeTab === "mission" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-700"
              }`}
            >
              Our Mission
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`py-2 px-4 font-semibold ${
                activeTab === "features" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-700"
              }`}
            >
              Our Features
            </button>
          </div>

          <div className="mt-8">
            {activeTab === "story" && (
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-700 leading-relaxed">
                  Founded in 2010, Hotel K1 & Restaurant has been a beacon of hospitality in the heart of Nepal. 
                  Our journey began with a vision to create a space where luxury meets comfort, and where every guest 
                  feels at home. Over the years, we've grown and evolved, always keeping our commitment to exceptional 
                  service and unforgettable experiences at the forefront of everything we do.
                </p>
              </div>
            )}
            {activeTab === "mission" && (
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  At Hotel K1 & Restaurant, our mission is to provide an unparalleled hospitality experience that 
                  combines luxury, comfort, and authentic Nepali charm. We strive to create lasting memories for 
                  our guests, whether they're here for business or leisure. Our commitment to sustainability and 
                  supporting local communities is woven into every aspect of our operations.
                </p>
              </div>
            )}
            {activeTab === "features" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="p-6 bg-white shadow-lg rounded-lg flex items-start space-x-4">
                    <feature.icon className="w-8 h-8 text-orange-500" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        
        </div>
      </div>
    </section>
  )
}
