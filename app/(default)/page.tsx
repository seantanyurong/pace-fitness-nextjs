export const metadata = {
  title: "Home - Simple",
  description: "Page description",
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
