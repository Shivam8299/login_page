"use client";

import { FaCoffee,  FaLock } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { RiRobot2Line } from "react-icons/ri";
import { BsStars } from "react-icons/bs";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 mt-60 sm:mt-20 md:mt-10 lg:mt-0 px-4 pt-20 pb-20">
      {/* Logo */}
      <div className="flex flex-col items-center text-center max-w-3xl">
        <div className=" w-16 h-15 bg-white p-1 rounded-xl">
            <div className="bg-indigo-900 text-white p-3 flex items-center justify-center rounded-xl shadow-lg mb-6">
          <span className="font-bold text-lg">qb</span>
        </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900">
          Organize Analyze Automate
        </h1>
        <p className="mt-3 text-lg md:text-xl font-medium text-gray-600">
          Powered by AI.
        </p>

        {/* Subtitle */}
        <p className="mt-4 text-gray-500 max-w-xl">
          Your journey to AI-powered tender management starts here
        </p>

        {/* Steps */}
        <ul className="mt-6 space-y-3 text-left text-gray-700">
          <li className="flex items-center text-sm text-gray-800 font-medium gap-2">
            <span className="w-[6px] h-[6px]  bg-indigo-900 rounded-full" />
            Booting up QuickBid Pro... (coffee not included <FaCoffee className=" hidden md:inline" />)
          </li>
          <li className="flex items-center text-sm text-gray-800 font-medium  gap-2">
            <span className="w-2 h-2 bg-indigo-900 rounded-full" />
            Sorting your documents...(because chaos isn’t a strategy<HiDocumentText className="hidden md:inline" />)
          </li>
          <li className="flex items-center text-sm text-gray-800 font-medium  gap-2">
            <span className="w-2 h-2  bg-indigo-900 rounded-full" />
            Warming up the analysis engine...(AI neurons stretching<RiRobot2Line className="md:inline hidden" />)
          </li>
          <li className="flex text-gray-800 font-medium items-center text-sm  gap-2">
            <span className="w-2 h-2 bg-indigo-900 rounded-full" />
            Powering automation... (your intern just got replaced <BsStars className="md:inline hidden " />)
          </li>

          {/* Muted items */}
          <li className="flex items-center text-gray-600 font-medium gap-2 text-sm  line-through">
            Manifesting your next tender win... ✨
          </li>
          <li className="flex items-center gap-2 text-sm  text-gray-600 font-medium line-through">
            All set! Time to outsmart tenders. 🚀
          </li>
        </ul>

        {/* Divider */}
        <div className="w-full h-1 bg-indigo-900 rounded-full mt-8 mb-6 max-w-lg"></div>

        {/* Bottom Section */}
        <div className="text-center">
          <h3 className="text-gray-800 font-medium">
            Transforming Tender Management
          </h3>
          <p className="text-gray-600 mt-2 flex flex-col items-center text-sm md:text-base">
            <span className="flex items-center gap-2 text-gray-700 text-sm font-medium">
              <FaLock className="text-gray-500" /> Your documents stay on your device
            </span>
            <span className="flex items-center gap-2 mt-1  text-gray-700 text-sm font-medium">
              🔐 Fully encrypted communication for complete confidentiality
            </span>
            <span className=" mt-1  text-gray-700 text-sm font-medium">
              💡 Cost-efficient • Secure • Powerful
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
