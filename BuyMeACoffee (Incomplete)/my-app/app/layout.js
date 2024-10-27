import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BuyMeACoffee",
  description: "A Website Made for Funding the Developer ehere fans can participate in the funding to developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="main-background">
        {children}
        </div>
        <Footer/>
        </body>
    </html>
  );
}
