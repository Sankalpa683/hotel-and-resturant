import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactUs() {
  return (
    <section className="bg-white py-16 px-4 md:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact <span className="text-orange-500">Us</span></h2>
        <div className="grid grid-cols-1 gap-12">
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">We'd love to hear from you. Please fill out this form or use our contact information below.</p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
              </div>
              <button type="submit" className="bg-orange-500 w-full text-white px-6 py-3 rounded-md hover:bg-orange-600 transition">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}