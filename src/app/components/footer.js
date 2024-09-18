import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8" id="footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Hotel K1 <span className="text-orange-500">& Restaurant</span></h3>
          <p className="text-gray-400">Experience luxury and comfort like never before in Nepal.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Menu</a></li>
            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400">Koteshwor, Kathmandu, Nepal</p>
          <p className="text-gray-400">Phone: +977 982-8055127</p>
          <p className="text-gray-400">Email: info@hotelk1.com</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/profile.php?id=61558396530307" target="_blank" className="text-gray-400 hover:text-orange-500 transition">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="https://www.instagram.com/hotelk1andrestaurant/" target="_blank" className="text-gray-400 hover:text-orange-500 transition">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="https://x.com/masculinmaster" target="_blank" className="text-gray-400 hover:text-orange-500 transition">
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2023 Hotel K1 & Restaurant. All rights reserved.</p>
      </div>
    </footer>
  )
}