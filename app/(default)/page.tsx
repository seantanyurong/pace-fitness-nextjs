export const metadata = {
  metadataBase: new URL("https://joinlabyrinth.vercel.app/"),
  title: "Labyrinth",
  description: "The private network for restaurant, cafe and bar owners.",
  openGraph: {
    images: "/og-image.png",
  },
};

import Hero from "@/components/home-page/hero";
import Features from "@/components/home-page/features";
import Introduction from "@/components/home-page/introduction";
import FeatureBlocks from "@/components/home-page/feature-blocks";
import Companies from "@/components/home-page/companies";
import Conclusion from "@/components/home-page/conclusion";
import Cta from "@/components/home-page/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Introduction />
      <FeatureBlocks />
      <Companies />
      <Conclusion />
      <Cta />
    </>
  );
}
