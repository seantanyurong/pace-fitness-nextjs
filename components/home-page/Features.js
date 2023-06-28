import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import Feature from "../ui/Feature";
import Feature1Img from "public/images/Feature-1.webp";
import Feature2Img from "public/images/Feature-2.webp";
import Feature3Img from "public/images/Feature-3.webp";
import Button from "../ui/Button";

const Features = () => {
  const FeatureContent = [
    {
      primaryText: "Fitness",
      bodyText:
        "Be empowered and energised! Whether you’re a fitness enthusiast or just starting your journey, we welcome you!.",
      image: Feature1Img,
      link: "https://t.me/pacefitness",
    },
    {
      primaryText: "Mind Matters",
      bodyText:
        "Prioritise your mental wellness and nurture a positive mindset. Our online group therapy programme provides a safe space and supportive environment for healing and self-discovery.",
      image: Feature2Img,
      link: "https://t.me/pacefitness",
    },
    {
      primaryText: "Community",
      bodyText:
        "Grab your friends and your joyful spirit for our community outings! Experience the joy of building connections within our vibrant community of women.",
      image: Feature3Img,
      link: "https://t.me/pacefitness",
    },
  ];

  return (
    <SectionWrapper topMargin={true} id="features">
      <h2>Our Events!</h2>
      <div className="mt-8 grid grid-cols-9 gap-y-16 sm:gap-16 w-full">
        {FeatureContent.map((feature, index) => {
          return (
            <div className="col-span-9 lg:col-span-3">
              <Feature
                primaryText={feature.primaryText}
                bodyText={feature.bodyText}
                image={feature.image}
                link={feature.link}
              />
            </div>
          );
        })}
      </div>
      <Button
        size="large"
        primaryText="Join our Upcoming Events"
        // secondaryText="Embark on a transformative fitness journey with the support of our empowering community!"
        addClassName="justify-center mx-auto text-center mt-10"
        link="https://linktr.ee/pacefitnesscommunity"
      />
    </SectionWrapper>
  );
};

export default Features;
