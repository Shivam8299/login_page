"use client"
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

// type Event = {
//   date: string; 
//   title: string;
//   priority: "high" | "medium" | "low";
// };

// const events: Event[] = [
//   { date: "2025-09-11", title: "Project Deadline", priority: "high" },
//   { date: "2025-09-15", title: "Team Meeting", priority: "medium" },
//   { date: "2025-09-20", title: "Client Review", priority: "low" },
// ];

// const priorities: Record<string, string> = {
//   high: "bg-red-500",
//   medium: "bg-orange-500",
//   low: "bg-green-500",
// };

const CalendarUI: React.FC = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

//   const getEventForDate = (day: number) => {
//     const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
//     return events.find((e) => e.date === dateStr);
//   };

  return (
    <div className="p-4 bg-gray-50 rounded-2xl shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="text-blue-500" />
          <div>
            <h2 className="font-semibold text-lg">Interactive Calendar</h2>
            <p className="text-gray-500 text-sm">Manage deadlines and important events</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={prevMonth}><ChevronLeft /></button>
          <span className="font-medium">{monthNames[currentMonth]} {currentYear}</span>
          <button onClick={nextMonth}><ChevronRight /></button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 text-center font-medium text-gray-600 mb-2">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {/* Empty cells for alignment */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {/* Days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
        //   const event = getEventForDate(day);

          return (
            <div
              key={day}
              className={`h-9 flex flex-col justify-center items-center  border cursor-pointer hover:bg-gray-100 ${
                today.getDate() === day &&
                today.getMonth() === currentMonth &&
                today.getFullYear() === currentYear
                  ? "border-blue-500"
                  : "border-gray-200"
              }`}
            >
              <span className="text-xs font-medium">{day}</span>
              {/* {event && (
                <div
                  className={`mt-1 w-1 h-1 rounded-full ${priorities[event.priority]}`}
                  title={event.title}
                />
              )} */}
            </div>
          );
        })}
      </div>

      {/* Priority Legend */}
      <div className="flex justify-between border-t mt-2 pt-3 border-gray-400 text-sm text-gray-600 ">
        <div className="flex gap-4">
            <div className="flex items-center gap-1 text-xs">
          <span className="w-2 h-2 rounded-full bg-red-500"></span> High Priority
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span> Medium Priority
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="w-2 h-2 rounded-full bg-green-500"></span> Low Priority
        </div>
        </div>
        <div>
            <p className="text-gray-500 text-xs"> 6 total events</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarUI;
