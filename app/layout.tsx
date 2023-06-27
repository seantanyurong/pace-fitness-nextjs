import "./css/style.css";

import { Montserrat } from "next/font/google";
// import localFont from "next/font/local";
import Banner from "@/components/general/Banner";
import Header from "@/components/general/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Pace Fitness",
  description:
    "At Pace Fitness, we provide a safe and inclusive space where women can connect, find inspiration, and receive the mental health support they need. Together, we'll redefine what it means to be fit, strong, and confident.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Banner />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
