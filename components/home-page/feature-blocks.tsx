import Image from "next/image";
import Five from "@/public/images/five.png";

export default function Introduction() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-6">
            <h2 className="h3 mb-4">Member Benefits</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center justify-center p-10 bg-white rounded shadow-xl h-full">
              <Image src={Five} alt="temp" style={{ objectFit: "cover" }} />
            </div>
            {/* 2nd item */}
            <div className="relative flex flex-col items-left text-left p-8 bg-white rounded shadow-xl h-full">
              <h4 className="text-2xl font-bold mb-1">
                Monthly Mastermind Groups
              </h4>
              <p className="text-xl font-montreal leading-snug">
                A group of 8 founders with an executive facilitator, who leads
                discussion where advice and critical feedback is shared to help
                accelerate your business growth.
              </p>
            </div>
            <div className="relative flex flex-col items-left text-left p-8 bg-white rounded shadow-xl h-full">
              <h4 className="text-2xl font-bold mb-1">Digital Community</h4>
              <p className="text-xl font-montreal leading-snug">
                Access to a digital and highly engaged community of founders who
                provide helpful advice, a dedicated digital concierge, and
                weekly newsletter.
              </p>
            </div>{" "}
            <div className="relative flex flex-col items-left text-left p-8 bg-white rounded shadow-xl h-full">
              <h4 className="text-2xl font-bold mb-1">In-Person Community</h4>
              <p className="text-xl font-montreal leading-snug">
                Our in-person event strategy is focused around three pillars:
                monthly member dinners, annual retreats, and local adventures.
              </p>
            </div>{" "}
            <div className="relative flex flex-col items-left text-left p-8 bg-white rounded shadow-xl h-full">
              <h4 className="text-2xl font-bold mb-1">
                Speaker Series & Education
              </h4>
              <p className="text-xl font-montreal leading-snug">
                We know how important it is to have access to the best and
                brightest. So, we host unique workshops and bring in experts
                across a variety of topics.
              </p>
            </div>{" "}
            <div className="relative flex flex-col items-left text-left p-8 bg-white rounded shadow-xl h-full">
              <h4 className="text-2xl font-bold mb-1">Exclusive Perks</h4>
              <p className="text-xl font-montreal leading-snug">
                We’ve secured exclusive discounts with the most popular software
                companies, tools, and apps. We also have a robust preferred
                vendor database.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
