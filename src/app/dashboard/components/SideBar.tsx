import { Home, User, FileText, Map, BookOpen, Package, Wrench, Search } from "lucide-react";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="w-65 bg-gray-50 border-r border-gray-200 flex flex-col justify-between ">
      <div>
        
        <div className="text-sm text-gray-700 font-medium px-4   mt-1 uppercase">Organize</div>
        {/* Navigation */}
        <nav className="mt-2  space-y-[1px] px-2 font-medium text-gray-700">
          <SidebarItem icon={<Home size={14} />} text="Dashboard"  />
          <SidebarItem icon={<User size={14} />} text="My Company Profile" />
          <SidebarItem icon={<User size={14} />} text="OEM/SP Profile" />
          <SidebarItem icon={<FileText size={14} />} text="Create Document Title" />
          <SidebarItem icon={<Map size={14} />} text="Map Documents" />
          <SidebarItem icon={<BookOpen size={14} />} text="Document Library" />
          <SidebarItem icon={<Package size={14} />} text="Product Library" />
          <SidebarItem icon={<Wrench size={14} />} text="Service Library" />
          <SidebarItem icon={<Search size={14} />} text="Tender Discovery" />
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="mb-4 space-y-3 pl-4 pr-8">
        <div className="px-2 py-2 bg-[#F0F8FFE6] rounded-lg border border-gray-200 flex items-center gap-2 cursor-pointer hover:bg-gray-100">
          <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-white bg-[linear-gradient(127deg,rgb(14,28,41)_-68%,rgb(50,61,104)_100%)] font-bold">
            A
          </div>
          <span className="text-sm font-medium">Affiliate Program</span>
        </div>

        <div className="px-2 py-2 bg-[#F0F8FFE6] rounded-lg border border-gray-200 flex items-center gap-2 cursor-pointer hover:bg-gray-100">
          <div className="w-8 h-8 rounded-lg bg-[linear-gradient(127deg,rgb(14,28,41)_-68%,rgb(50,61,104)_100%)] text-white flex items-center justify-center font-medium">
            QB
          </div>
          <div>
            <p className="text-sm font-medium text-center">QuickBid Systems pvt. ltd.</p>
            <p className="text-xs text-gray-500">Switch Company</p>
          </div>
        </div>
      </div>
    </aside>
  );
}


