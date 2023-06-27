export const metadata = {
  metadataBase: new URL("https://pacefitness.vercel.app/"),
  title: "Pace Fitness",
  description:
    "At Pace Fitness, we provide a safe and inclusive space where women can connect, find inspiration, and receive the mental health support they need. Together, we'll redefine what it means to be fit, strong, and confident.",
  openGraph: {
    images: "/og-image.png",
  },
};

import HeroBanner from "@/components/home-page/HeroBanner";
import Introduction from "@/components/home-page/Introduction";
import Features from "@/components/home-page/Features";
import GamesGallery from "@/components/home-page/GamesGallery";
import CTA from "@/components/home-page/CTA";
import Carousel from "@/components/home-page/Carousel";
import Team from "@/components/home-page/Team";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <Introduction />
      <Features />
      <GamesGallery />
      <Carousel />
      <Team />
      <CTA />
    </div>
  );
};

export default HomePage;
