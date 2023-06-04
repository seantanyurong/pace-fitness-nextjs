"use client";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="bg-blue-500">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between pt-10 h-16 md:h-24">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-blue-500 bg-brown-400 hover:text-gray-900 py-2 flex items-center transition duration-150 ease-in-out px-8 rounded-lg font-montreal"
                >
                  APPLY
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="font-medium btn-sm text-brown-400 bg-blue-500 border-1 border-brown-400 hover:bg-gray-800 ml-3 font-montreal rounded-lg px-8"
                >
                  <span>LOGIN</span>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
