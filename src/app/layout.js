import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/providers/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "BanglaBuzz - Discover Stories from Bangladesh",
    template: "%s | BanglaBuzz",
  },
  description: "Your gateway to discovering authentic stories, vibrant culture, and diverse perspectives from Bangladesh and beyond. Read engaging articles on food, travel, culture, lifestyle, and more.",
  keywords: ["Bangladesh", "blog", "stories", "culture", "travel", "food", "lifestyle", "BanglaBuzz", "Bangladeshi writers", "articles"],
  authors: [{ name: "BanglaBuzz Team" }],
  creator: "BanglaBuzz",
  publisher: "BanglaBuzz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <nav>
            <Navbar></Navbar>
          </nav>
          <main className="min-h-screen">{children}</main>
          <footer>
            <Footer></Footer>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
