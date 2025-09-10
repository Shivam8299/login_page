import React from "react";

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, active }) => {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-1 rounded-lg  cursor-pointer transition-colors
        ${
          active
            ? "bg-indigo-50 text-indigo-600 font-medium"
            : "text-gray-700 hover:bg-gray-100"
        }`}
    >
      {icon}
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default SidebarItem;
