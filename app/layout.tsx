import "./css/style.css";

// import { Inter } from "next/font/google";
// import localFont from "next/font/local";
import Banner from "@/components/general/Banner";
import Header from "@/components/general/Header";

// const financier = localFont({
//   src: [
//     {
//       path: "./css/font/test-financier-display-regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./css/font/test-financier-display-regular-italic.woff2",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "./css/font/test-financier-display-bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "././css/font/test-financier-display-bold-italic.woff2",
//       weight: "700",
//       style: "italic",
//     },
//   ],
//   variable: "--font-financier",
// });

// const montreal = localFont({
//   src: [
//     {
//       path: "./css/font/NeueMontreal-Bold.otf",
//       weight: "700",
//       style: "normal",
//     },

//     {
//       path: "./css/font/NeueMontreal-Medium.otf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "./css/font/NeueMontreal-Regular.otf",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-montreal",
// });

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

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
      <body className={`antialiased tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Banner />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
