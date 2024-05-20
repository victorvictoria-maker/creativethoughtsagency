import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Creative Thoughts Agency Webpage",
    template: "%s | Creative Thoughts Agency Webpage",
  },
  description: "Creative Thoughts Agency Webpage is here to give you the best",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container'>
          <Navbar />
          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
