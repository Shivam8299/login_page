import { User, FileText, LucideIcon } from "lucide-react";

type Detail = {
  label: string;
  value: string;
};

type Activity = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  status: string;
  time: string;
  details?: Detail[];
};

type ActivityCardProps = Activity;

function ActivityCard({ icon: Icon, title, description, status, time, details }: ActivityCardProps) {
  return (
    <div className="bg-[#F0F8FFE6] rounded-xl p-3  border border-gray-100 flex gap-3 shadow-md transition">
      {/* Icon */}
      <div className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100">
        <Icon className="w-4 h-4 text-green-600" />
      </div>

      {/* Content */}
      <div className="flex-1 ">
        <div className="flex justify-between items-center ">
          <h3 className="font-medium text-gray-800 text-sn">{title}</h3>
          <div className="flex  flex-row gap-2 ">
            <div className=" text-green-600  flex justify-center items-center gap-[2px]  text-[10px] font-medium">
                <div className="w-1 h-1 rounded-full bg-green-500"></div>
          {status}
        </div>
          <span className="text-[10px] text-gray-500">{time}</span>
          </div>
        </div>
        <p className="text-xs pb-2 border-b border-gray-400 text-gray-500">{description}</p>
        
        {/* Extra details */}
        {details && (
          <div className="mt-2 text-xs space-y-1">
            {details.map((d, i) => (
              <div key={i} className="flex justify-between">
                <span className="text-gray-500">{d.label}:</span>
                <span className="font-medium text-gray-600">{d.value}</span>
              </div>
            ))}
          </div>
        )}

        
    
      </div>
    </div>
  );
}

export default function RecentActivities() {
  const activities: Activity[] = [
    {
      id: 1,
      icon: User,
      title: "Company Profile Updated",
      description: "Updated company details and certifications in My Company Profile",
      status: "Completed",
      time: "2 hours ago",
      details: [
        { label: "Sections", value: "5 updated" },
        { label: "Status", value: "Complete" },
        { label: "Verification", value: "Pending" },
      ],
    },
    {
      id: 2,
      icon: FileText,
      title: "New Document Created",
      description: "Created 'Technical Specifications' in Document Library",
      status: "Completed",
      time: "4 hours ago",
      details: [
        { label: "Document Type", value: "Technical" },
        { label: "Size", value: "2.5 MB" },
        { label: "Status", value: "Uploaded" },
      ],
    },
  ];

  return (
    <div className="bg-[#F0F8FFE6] p-4 rounded-xl w-full shadow-md lg:w-[35%]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-gray-800">Recent Organize Activities</h2>
        <button className="text-xs bg-[linear-gradient(127deg,rgb(14,28,41)_-68%,rgb(50,61,104)_100%)] text-white px-4 py-2 rounded-md">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} {...activity} />
        ))}
      </div>
    </div>
  );
}
