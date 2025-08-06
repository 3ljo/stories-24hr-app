import "./globals.css";
import { Lobster } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "@/components/layout/Footer/page";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Stories24 App",
  description: "Share your stories that disappear in 24 hours",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${lobster.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
