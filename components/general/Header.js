// import { Link } from "react-router-dom";
import Link from "next/link";
import LogoImg from "public/images/Logo.webp";
import Image from "next/image";
import Button from "../ui/Button";
import BlueLink from "../ui/BlueLink";
import SectionWrapper from "../ui/SectionWrapper";

function Header() {
  return (
    <SectionWrapper
      topMargin={false}
      sectionClassName="md:bg-opacity-90 transition duration-300 ease-in-out pt-8 pb-8 sm:pb-20 bg-highlight-eggshell"
    >
      <div className="z-99 flex-col sm:flex-row flex items-center justify-between md:h-20 relative">
        {/* Site branding */}
        <div className="shrink-0 mr-4 ">
          {/* Logo */}
          <Link href="/" className="flex items-center relative">
            <Image
              src={LogoImg}
              alt="temp"
              width={80}
              style={{ objectFit: "cover" }}
            />
            {/* <AdvancedImage
              className="mx-auto h-20"
              cldImg={myImage}
              plugins={[responsive({ steps: 200 })]}
              alt="logo"
            /> */}
            {/* <div className="whitespace-nowrap -rotate-2 absolute bg-gradient-to-r from-highlight-orange to-highlight-sunlight py-1 px-4 rounded-md text-sm text-white font-extrabold tracking-widest flex items-center mx-auto -left-[125px] sm:-left-[20px] -bottom-[45px]">
              {[...Array(5)].map((x, i) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ffcd05"
                  className="w-4 h-4"
                  key={i}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <span className="ml-1"> "NO.1 FITNESS COMMUNITY"</span>
            </div> */}
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="z-99 flex grow pt-6 sm:pt-0">
          <ul className="flex grow justify-end flex-wrap items-center">
            <li className="mr-4">
              <a
                className="flex justify-center items-center text-white bg-highlight-orange hover:bg-highlight-sunlight rounded-full transition duration-150 ease-in-out"
                href="https://t.me/pacefitness"
                target="_blank"
                aria-label="Telegram"
              >
                <svg
                  className="w-10 h-10 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.968 10.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045s-14.019 5.038-14.82 5.596c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.354a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622s2.561-10.275 2.646-11.658c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z" />
                </svg>
              </a>
            </li>
            <li className="mr-4">
              <a
                className="flex justify-center items-center text-white bg-highlight-orange hover:bg-highlight-sunlight rounded-full transition duration-150 ease-in-out"
                href="https://www.facebook.com/pacefitnessglobal/"
                target="_blank"
                aria-label="Facebook"
              >
                <svg
                  className="w-10 h-10 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
            <li className="mr-4">
              <a
                className="flex justify-center items-center text-white bg-highlight-orange hover:bg-highlight-sunlight rounded-full transition duration-150 ease-in-out"
                href="https://www.facebook.com/pacefitnessglobal/"
                target="_blank"
                aria-label="Instagram"
              >
                <svg
                  className="w-10 h-10 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.145" cy="11.892" r="1" />
                  <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                  <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                </svg>
              </a>
            </li>

            {/* <li>
              <BlueLink
                addClassName="px-3"
                link="#features"
                primaryText="Check out what we do!"
                size="small"
              />
            </li> */}
            <li>
              <Button size="small" primaryText="Our Events" link="#features" />
            </li>
          </ul>
        </nav>
      </div>
    </SectionWrapper>
  );
}

export default Header;
