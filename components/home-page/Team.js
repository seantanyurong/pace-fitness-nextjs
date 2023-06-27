import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import FounderImg from "public/images/Founders.webp";
import Image from "next/image";
// import Profile from "../ui/Profile";

// const FeatureContent = [
//   {
//     primaryText: "Vera Anne",
//     bodyText:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quo rerum, unde laboriosam sunt officia expedita repellat dolor voluptatibus laborum.",
//     image: "pace-fitness/placeholder",
//     subtitleText: "Co-Founder & CTO",
//     link: "https://www.linkedin.com/in/veraannelim/",
//   },
//   {
//     primaryText: "Chloe",
//     bodyText:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quo rerum, unde laboriosam sunt officia expedita repellat dolor voluptatibus laborum.",
//     image: "pace-fitness/placeholder",
//     subtitleText: "Co-Founder & CTO",
//     link: "https://www.linkedin.com/in/lim-yuxuan-chloe-esther-%E6%9E%97%E6%84%89%E7%92%87-a714361a8/",
//   },
// ];
const Team = () => {
  return (
    <SectionWrapper topMargin={true} divClassName="text-center" id="progress">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl">Meet the Founders.</h2>
        <p className="text-xl mt-4">
          Vera and Chloe met in university and bonded over their shared vision
          for inclusive women's fitness spaces that prioritise mental health and
          community support. Fueled by a desire to break free from the outdated
          norms and stereotypes, they embarked on a mission to create a
          sanctuary where women can thrive holistically.
        </p>
      </div>
      <Image
        src={FounderImg}
        alt="temp"
        className="my-8 mx-auto drop-shadow-3xl mb-10 rounded-lg w-6xl"
        style={{ objectFit: "cover" }}
        placeholder="blur"
      />
      <div className="max-w-4xl mx-auto">
        <p className="text-xl mt-4">
          They believe that mental well-being is the foundation for achieving
          overall fitness, and that's why they've cultivated an environment
          where empowerment, encouragement, and support are at the core. With
          their unwavering commitment to inclusivity, Vera and Chloe have built
          a community that celebrates diversity and embraces every woman's
          unique journey. Whether you're a seasoned fitness enthusiast or taking
          your first steps towards a healthier lifestyle, Pace Fitness is here
          to guide and uplift you every step of the way.
        </p>
      </div>
      {/* <div className="mt-8 grid grid-cols-8 gap-y-4 sm:gap-4 w-full">
        {" "}
        {FeatureContent.map((feature, index) => {
          return (
            <div className="col-span-8 lg:col-span-4">
              <Profile
                primaryText={feature.primaryText}
                subtitleText={feature.subtitleText}
                bodyText={feature.bodyText}
                image={feature.image}
                link={feature.link}
              />
            </div>
          );
        })}
      </div> */}
    </SectionWrapper>
  );
};

export default Team;
