import { Search, CheckCircle, Key, ShoppingCart } from "lucide-react";

export default function DashboardCards() {
  const cards = [
    {
      id: 1,
      title: "Today's New Tenders",
      description: "New opportunities today",
      value: 0,
      icon: Search,
      stats: [
        { label: "GeM", value: 0, change: "+0%" },
        { label: "eProcurement", value: 0, change: "+0%" },
      ],
    },
    {
      id: 2,
      title: "Tenders Shortlisted",
      description: "Successfully shortlisted",
      value: 1,
      icon: CheckCircle,
      stats: [
        { label: "GeM", value: 1, change: "+100%" },
        { label: "eProcurement", value: 0, change: "+0%" },
      ],
    },
    {
      id: 3,
      title: "License",
      description: "Created and remaining",
      value: "3/3",
      icon: Key,
      stats: [
        { label: "Created", value: 3, change: "+3" },
        { label: "Remaining", value: 0 },
      ],
    },
    {
      id: 4,
      title: "Offerings",
      description: "Total products & services",
      value: 0,
      icon: ShoppingCart,
      stats: [
        { label: "Products", value: 0, change: "+0%" },
        { label: "Services", value: 0, change: "+0%" },
      ],
    },
  ];

  return (
    <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2  ">
      {cards.map(({ id, title, description, value, icon: Icon, stats }) => ( 
        <div
          key={id}
          className="h-35 2xl:h-37  px-4 pt-4 rounded-xl shadow-md transition border border-gray-100 bg-[#F0F8FFE6]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-1 border-b border-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 2xl:w-9 2x:h-9 flex items-center justify-center rounded-md bg-[#F0F8FFE6] shadow-md">
                <Icon className="w-4 h-4 2xl:w-6 2x:h-6  text-gray-600" />
              </div>
              <div>
                <h2 className="text-sm 2xl:text-base font-semibold text-[#0E1C29]">{title}</h2>
                <p className="text-xs 2xl:text-sm text-gray-500">{description}</p>
              </div>
            </div>
            <span className="text-lg font-medium text-[#0E1C29]">{value}</span>
          </div>

          {/* Stats */}
          <div className="mt-3 space-y-1 ">
            {stats.map(({ label, value, change }, i) => (
              <div key={i} className="flex justify-between text-xs 2xl:text-sm">
                <span className="text-gray-600">{label}:</span>
                <span className="text-gray-800 flex items-center gap-1">
                  {value}
                  {change && (
                    <span className="text-green-600 text-xs 2xl:text-sm font-medium">
                      {change}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
