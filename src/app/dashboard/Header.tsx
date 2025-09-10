"use client";

import { FC } from "react";
import { FileText } from "lucide-react";

const links = [
  "Company Profile",
  "Document Library",
  "Tender Discovery",
  "Product Library",
  "Service Library",
  "OEM/SP Profile",
];

const Header: FC = () => {
  return (
    <div className="w-full rounded-xl bg-gradient-to-r from-[#0d1f3a] to-[#1b2e4a] text-white px-6 py-3 flex justify-between items-center shadow-md">
      {/* Left Side */}
      <div>
        <h2 className="text-base font-semibold">
          Smart Document Management & Tender Discovery
        </h2>
        <div className="flex flex-wrap text-xs text-gray-300 mt-1">
          {links.map((link, i) => (
            <span key={i} className="flex items-center">
              {link}
              {i < links.length - 1 && <span className="mx-1">•</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 py-2 ">
        <FileText className="w-5 h-5 text-gray-200" />
        <div className="text-sm">
          <p className="text-gray-300 text-xs">Document Management</p>
          <p className="font-medium text-white text-xs">Ready to organize?</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
