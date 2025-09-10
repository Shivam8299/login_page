"use client";
import { FolderClosed, BarChart2, Zap, Bell, LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <div className=" max-w-[2000px] m-auto flex justify-between px-6 py-3 border-b border-gray-400 bg-gray-100 ">
      <div className="flex justify-between  w-[47%] ">
        <div className="flex items-center gap-2 ">
          <div className=" rounded-lg p-1 shadow-2xl bg-gradient-to-t from-blue-100 border border-gray-200 to-white ">
            <span className="bg-indigo-800 text-white w-6 h-6 rounded-lg flex items-center justify-center p-1 font-medium   text-sm">
              QB
            </span>
          </div>
          <span className="font-semibold text-lg">QuickBid</span>
        </div>
        <div className=" hidden lg:flex justify-center  items-center  gap-1 ">
          <div className="flex px-6 py-2 rounded-t-md  gap-1 justify-center items-center " >
            <FolderClosed size={14} />
            <span className="text-sm text-gray-600">Organize</span>
          </div>
          <div className="flex gap-1 justify-center items-center px-6 py-2 rounded-t-md " >
            <BarChart2 size={14} />
            <span className="text-sm text-gray-600">Analyze</span>
          </div>
          <div className="flex gap-1 justify-center items-center px-6 py-2 rounded-t-md " >
            <Zap  size={14} />
            <span className="text-sm text-gray-600">Automate</span>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex gap-4 justify-center items-center">
        <input className="w-60 p-[6px] outline-none border border-gray-300 rounded-md text-xs" placeholder="Search Tender and Document" />
        <Bell className="p-1 rounded-full border border-gray-300" size={22}/>
        <LogIn className="p-1 rounded-full border border-gray-300" size={22}/>
      </div>
    </div>
  );
}
