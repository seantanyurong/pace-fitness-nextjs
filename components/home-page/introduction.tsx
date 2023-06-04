import IntroductionImg from "@/public/images/introduction.png";
import Image from "next/image";

export default function Introduction() {
  return (
    <section className="relative">
      <div className="py-12 md:py-20">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-6 gap-y-16 sm:gap-16 w-full">
            {/* Left column - introduction */}
            <div className="col-span-6 lg:col-span-3 font-financier">
              <h2 className="h3 mb-5">Starting a food business is lonely.</h2>
              <p className="mb-3 text-lg font-montreal">
                We are on a mission to create something truly special – a
                women's fitness community that goes beyond workouts and embraces
                the power of sisterhood.
              </p>
              <p className="mb-3 text-lg font-montreal">
                Too often, we encountered judgment, unrealistic standards, and a
                sense of inadequacy that left us feeling discouraged and
                disconnected in our fitness journeys.
              </p>
              <p className="mb-3 text-lg font-montreal">
                Starting Pace Fitness has been a labour of love, born out of a
                desire to provide a space where women can thrive, support each
                other, and prioritise their mental health alongside their
                physical well-being. In this community, we uplift and inspire
                one another, celebrating our unique strengths and journeys so
                that each individual can grow at her own pace.
              </p>

              <p className="mb-3 text-lg font-montreal">
                Pace Fitness is not just about fitness; it's about fostering a
                sense of belonging, empowerment, and growth. Together, we are
                redefining what it means to be a strong and united community of
                women.
              </p>
            </div>

            {/* Right column - submenu */}
            <div className="col-span-6 lg:col-span-3">
              <Image src={IntroductionImg} alt="temp" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
