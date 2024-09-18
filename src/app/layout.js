import localFont from "next/font/local";
import "./globals.css";

// Import local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Hotel K1 & Restaurant - Best Dining & Stay in Your City",
  description: "Enjoy a luxurious stay and gourmet dining at Hotel K1 & Restaurant. The perfect destination for relaxation, dining, and events. Book your stay today.",
  openGraph: {
    title: "Hotel K1 & Restaurant",
    description: "Luxurious dining and stay at Hotel K1 & Restaurant. Experience the best in comfort and gourmet food. Book your room or table today.",
    url: "https://www.hotelk1andrestaurant.com",
    siteName: "Hotel K1 & Restaurant",
    images: [
      {
        url: "https://www.hotelk1andrestaurant.com/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel K1 & Restaurant Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@HotelK1Restaurant",
    title: "Hotel K1 & Restaurant - Luxury Stay & Gourmet Dining",
    description: "Book a luxurious stay or gourmet dining experience at Hotel K1 & Restaurant.",
    image: "https://www.hotelk1andrestaurant.com/cover.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Essential Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* SEO Meta Tags */}
        <meta name="title" content="Hotel K1 & Restaurant - Best Dining & Stay in Your City" />
        <meta name="description" content="Enjoy a luxurious stay and gourmet dining at Hotel K1 & Restaurant. The perfect destination for relaxation, dining, and events. Book your stay today." />
        <meta name="keywords" content="Hotel, Restaurant, Luxury Stay, Dining, Hotel K1, Best Hotel in City, Gourmet Food, Book Hotel, Hotel Deals" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Hotel K1 & Restaurant" />
        <meta name="rating" content="General" />

        {/* Open Graph (OG) Meta Tags for social sharing */}
        <meta property="og:title" content="Hotel K1 & Restaurant - Luxury Stay & Dining" />
        <meta property="og:description" content="Book a luxurious stay or gourmet dining experience at Hotel K1 & Restaurant." />
        <meta property="og:url" content="/" />
        <meta property="og:site_name" content="Hotel K1 & Restaurant" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/cover.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card for sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HotelK1Restaurant" />
        <meta name="twitter:title" content="Hotel K1 & Restaurant - Luxury Stay & Gourmet Dining" />
        <meta name="twitter:description" content="Book a luxurious stay or gourmet dining experience at Hotel K1 & Restaurant." />
        <meta name="twitter:image" content="/cover.jpg" />

        {/* Canonical link */}
        <link rel="canonical" href="/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Import Google Font (Lexend) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
        style={{ fontFamily: "Lexend, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
