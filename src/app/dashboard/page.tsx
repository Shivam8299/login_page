import Calendar from "./components/Calender";
import DashboardCards from "./components/Cards";
import Navbar from "./components/Navbar";
import RecentActivities from "./components/RecentActivity";
import Sidebar from "./components/SideBar";
import Header from "./Header";

export default function Page () {
    return(
        <div className="max-w-[2000px] bg-gray-white m-auto min-h-screen">
            <Navbar/>
           <div className="flex p-2">
             <Sidebar/>
            <div className=" w-full flex flex-col gap-4 px-2">
                <Header/>
                <DashboardCards/>
                <div className="w-full p-3 flex gap-3">
                    <div className="w-[65%]">
                        <Calendar/>
                    </div>
                    <RecentActivities/>
                    
                    
                </div>

            </div>
           </div>
          
        </div>
//         <div className="flex min-h-screen">
//              <Navbar/>
//   {/* Sidebar */}
//   <aside className="w-64 bg-white  shadow-md hidden md:block">
//     <Sidebar/>
//   </aside>

//   {/* Main Section */}
//   <div className="flex-1  flex flex-col">
    
   

//     <main className="p-6 bg-gray-50 flex-1">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
//         {/* <Card title="Today's New Tenders" value="0" />
//         <Card title="Tenders Shortlisted" value="1" />
//         <Card title="License" value="3/3" />
//         <Card title="Offerings" value="0" /> */}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 mt-6">
//         {/* Calendar takes 2/3 */}
//         <div className="lg:col-span-2 ">
//           {/* <Calendar /> */}
//         </div>
//         {/* Recent activities takes 1/3 */}
//         {/* <ActivityList /> */}
//       </div>
//     </main>
//   </div>
// </div>
    )
}
