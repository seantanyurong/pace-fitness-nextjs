import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Display1Img from "public/images/Display-1.png";
import Display2Img from "public/images/Display-2.png";
import Display3Img from "public/images/Display-3.png";
import Display4Img from "public/images/Display-4.png";
import Display5Img from "public/images/Display-5.png";
import Display6Img from "public/images/Display-6.png";

const Carousel = () => {
  const pictures = [
    {
      image: Display1Img,
    },
    {
      image: Display2Img,
    },
    {
      image: Display3Img,
    },
    {
      image: Display4Img,
    },
    {
      image: Display5Img,
    },
    {
      image: Display6Img,
    },
  ];

  return (
    <section className="mt-16">
      <Marquee direction="right" className="mb-[0.1rem]">
        {pictures.map((picture, index) => {
          return (
            <div className="col-span-9 lg:col-span-3" key={index}>
              <div className="drop-shadow-sm flex rounded-2xl max-w-xl overflow-hidden mx-2 h-full">
                <Image
                  loading="eager"
                  src={picture.image}
                  alt="temp"
                  width={350}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          );
        })}
      </Marquee>{" "}
    </section>
  );
};

export default Carousel;
