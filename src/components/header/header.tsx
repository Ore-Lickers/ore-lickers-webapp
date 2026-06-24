"use client";

import { useUIStore } from "@/store/uiStore";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";

export default function Header() {
  const { isNavigationOpen, toggleNavigation, closeNavigation } = useUIStore();
  return (
    <header className="fixed top-0 w-full z-1000">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto container">
          <Link href="/" className="flex items-center">
            <img
              src="/ore-lickers-logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Ore Lickers logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Ore Lickers
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <div className="mr-20" />
            <button
              onClick={toggleNavigation}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="w-6 h-6" />
            </button>
          </div>
          <div
            className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
              isNavigationOpen ? "" : "hidden"
            }`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/"
                  className="block py-2 pr-4 pl-3 border-b lg:border-0 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700"
                  onClick={closeNavigation}
                >
                  Home
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/how-to"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={closeNavigation}
                >
                  How to
                </Link>
              </li> */}
              <li>
                <Link
                  href="/buyback"
                  className="block py-2 pr-4 pl-3 border-b lg:border-0 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700"
                  onClick={closeNavigation}
                >
                  Buyback
                </Link>
              </li>
              <li>
                <Link
                  href="/recruitment"
                  className="block py-2 pr-4 pl-3 border-b lg:border-0 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700"
                  onClick={closeNavigation}
                >
                  Recruitment
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 pr-4 pl-3 lg:border-0 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent"
                  onClick={closeNavigation}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
