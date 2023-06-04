import LogoImg from "@/public/images/logo-dark.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="py-8 md:py-32 ">
          <div className="flex items-center">
            <span className="block bg-[#d1d3cd] h-[1px] w-[39%] rounded-full"></span>
            <div className="mx-6">
              <Image
                src={LogoImg}
                alt="temp"
                width={175}
                style={{ objectFit: "cover" }}
              />
            </div>
            <span className="block bg-[#d1d3cd] h-[1px] w-[39%] rounded-full"></span>
          </div>
          <p className="text-center text-xl font-medium font-montreal mt-10">
            Labyrinth is a highly vetted membership community for entrepreneurs,
            founders and CEOs.
          </p>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8">
          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href="#0"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-lg font-montreal mr-4">
            &copy; 2023 Labyrinth. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
