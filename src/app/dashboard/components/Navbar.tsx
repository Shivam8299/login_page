"use client";
import { FolderClosed, BarChart2, Zap, Bell, LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <div className=" max-w-[2000px] m-auto flex justify-between px-6 py-3 border-b border-gray-400 bg-[#F0F8FFE6] ">
      <div className="flex justify-between  gap-21 2xl:gap-25  ">
        <div className="flex items-center gap-2 ">
          <div className=" rounded-lg p-1 shadow-2xl bg-gradient-to-t from-blue-100 border border-gray-200 to-white ">
            <span className="bg-[linear-gradient(127deg,rgb(14,28,41)_-68%,rgb(50,61,104)_100%)] text-white w-6 h-6 rounded-lg flex items-center justify-center p-1 font-medium   text-sm">
              QB
            </span>
          </div>
          <span className="font-semibold text-lg 2xl:text-2xl">QuickBid</span>
        </div>
        <div className=" hidden lg:flex justify-center cursor-pointer items-center  gap-1 ">
          <div className="flex px-6 py-2  rounded-t-md border-b-2 border-white  gap-1 bg-[linear-gradient(127deg,rgb(14,28,41)_-68%,rgb(50,61,104)_100%)] text-white justify-center items-center " >
            <FolderClosed size={14} />
            <span className="text-sm 2xl:text-base ">Organize</span>
          </div>
          <div className="flex gap-1 justify-center items-center px-6 py-2 rounded-t-md  " >
            <BarChart2 size={14} />
            <span className="text-sm 2xl:text-base  text-gray-600">Analyze</span>
          </div>
          <div className="flex gap-1 justify-center items-center px-6 py-2 rounded-t-md " >
            <Zap  size={14} />
            <span className="text-sm 2xl:text-base  text-gray-600">Automate</span>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex gap-4 justify-center items-center">
        <input className="w-60 p-[6px] outline-none border border-gray-400 rounded-md text-xs 2xl:text-base " placeholder="Search Tender and Document" />
        <Bell className="p-1 rounded-full border cursor-pointer border-gray-400" size={23}/>
        <LogIn className="p-1 rounded-full border cursor-pointer border-gray-400" size={23}/>
      </div>
    </div>
  );
}
