"use client";

import { useState } from "react";
import { FiFolder, FiBarChart2, FiZap } from "react-icons/fi";
import { RiLoginBoxLine } from "react-icons/ri";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen max-w-[1600px] pb-10 m-auto flex items-center justify-center  bg-gray-50">
      <div className="w-full h-screen flex flex-col lg:flex-row justify-between  bg-gray-50 ">
        {/* Left Section */}
        <div className="bg-gray-300 opacity-40 rounded-xl px-3 sm:px-4 md:px-12 w-full lg:w-1/2   py-10 flex flex-col justify-center">
          <div className="w-full lg:max-w-[550px]">
            <div className="mb-8 ">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div className="bg-gray-50 rounded-lg p-1 flex items-center justify-center ">
                <span className="text-base font-medium bg-black text-white p-1 rounded-lg w-8 h-8 text-center ">
                  qb
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-800">
                QuickBid Pro
              </h1>
               <p className="text-black font-medium">
              Organize • Analyze • Automate
            </p>
              </div>
              
            </div>
    
          </div>

          <h2 className="text-xl font-medium text-gray-700 mb-4">
            Streamline Government Tendering with QuickBid
          </h2>
          <p className="text-gray-700 mb-8 font-normal">
            Transform tender management from complexity to clarity with advanced
            desktop modules:
          </p>

          <div className="space-y-7">
            <div className="bg-gray-50 rounded-xl relative shadow p-6 border border-purple-400">
              <span className=" absolute text-xs font-semibold text-white px-4 py-1 rounded-lg -top-3 shadow-md bg-purple-500">
                ORGANIZE
              </span>
              <div className="flex gap-3">
                <FiFolder className="bg-gray-400 text-gray-600 border border-gray-500 p-1" size={35}/>
                <p className="text-gray-800 font-medium">
                Smart Document Management & Tender Discovery
              </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl relative shadow p-6 border border-purple-400">
              <span className=" absolute text-xs font-semibold text-white px-4 py-1 rounded-lg -top-3 shadow-md bg-purple-500">
                ANALYZE
              </span>
              <div className="flex gap-3">
                <FiBarChart2 className="bg-gray-400 text-gray-600 border border-gray-500 p-1" size={35}/>
                <p className="text-gray-800 font-medium">
                AI-Powered Risk Assessment & Tender Synopsis
              </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl relative shadow p-6 border border-purple-400">
              <span className=" absolute text-xs font-semibold text-white px-4 py-1 rounded-lg -top-3 shadow-md bg-purple-500">
                AUTOMATE          
              </span>
              <div className="flex gap-3">
                <FiZap className="bg-gray-400 text-gray-600 border border-gray-500 p-1" size={35}/>
                <p className="text-gray-800 font-medium">
                Instant Bid Document Generation & Milestone Tracking
              </p>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Right Section */}
        <div className=" m-auto py-10 ">
           <h2 className="w-full lg:max-w-60 text-2xl text-center lg:text-start font-bold text-gray-800  mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-800 mb-4 w-full text-center lg:text-start  m-auto lg:m-1 max-w-75 text-sm font-medium">
            Access your QuickBid Pro dashboard to Organize • Analyze • Automate
            your tender process.
          </p>
          <div className="w-100 py-2 px-5 rounded-lg m-auto shadow-2xl">
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-800 font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-400 rounded-lg  outline-none"
                placeholder="user@company.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-800 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg  border-gray-400 outline-none"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-lg shadow-md transition"
            >
              <span className="inline-flex text-sm items-center gap-2">
                
                <RiLoginBoxLine  size={15} />
                Sign In
              </span>
            </button>
          </form>

        
          <p className="text-xs text-gray-800 px-4 bg-white text-center mt-4 tracking-widest">
            INTELLIGENT TENDER MANAGEMENT
          </p>
          

          <div className="mt-6 py-3 px-8 border border-gray-400 rounded-lg bg-gray-50">
            <p className="text-s font-medium text-gray-700">
              Your Privacy, Our Priority
            </p>
            <p className="text-xs text-gray-500">
              Your documents stay on your device. All communication is
              end-to-end encrypted with military-grade security.
            </p>
          </div>

          <div className="mt-4 text-center text-sm">
            <p className="text-gray-700 font-medium">
              Forgot your password?
            </p>
          </div>

          <div className="mt-2 flex text-center text-sm gap-2 justify-center">
            <p className="text-gray-500">Don’t have an account?</p>
            <p className="text-gray-700">Request Demo</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
