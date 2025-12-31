import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import PatientChart from "../components/PatientChart";
import StaffChart from "../components/StaffChart";
import Notifications from "../components/Notifications";
import "../charts/chartSetup";
import Topbar from "../components/Topbar";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      

      <main className="flex-1 px-6 pb-6 space-y-6">
        <Topbar />

        {/* Stats */}
        <div className="flex flex-wrap gap-5">
          <div className="flex-1 min-w-[200px]">
            <StatCard title="Total Doctors" value="40" bg="bg-blue-500" icon="👨‍⚕️" />
          </div>

          <div className="flex-1 min-w-[200px]">
            <StatCard title="Total Nurses" value="40" bg="bg-green-500" icon="👩‍⚕️" />
          </div>

          <div className="flex-1 min-w-[200px]">
            <StatCard title="Total Cleaners" value="12" bg="bg-orange-500" icon="🧹" />
          </div>

          <div className="flex-1 min-w-[200px]">
            <StatCard title="Active Ambulances" value="6" bg="bg-teal-500" icon="🚑" />
          </div>

          <div className="flex-1 min-w-[200px]">
            <StatCard title="Emergency" value="6" bg="bg-indigo-500" icon="🚨" />
          </div>
        </div>


       {/* Charts + Notifications */}
<div className="flex flex-col md:flex-row gap-6">
  
  {/* Patient Chart – 60% */}
  <div className="w-full md:w-[60%]">
    <PatientChart />
  </div>

  {/* Notifications – 40% */}
  <div className="w-full md:w-[40%]">
    <Notifications message="Staff Count by Department"/>
  </div>

</div>


          <div className="flex flex-col md:flex-row gap-6">
  
  {/* Patient Chart – 60% */}
  <div className="w-full md:w-[60%]">
    <StaffChart />
  </div>

  {/* Notifications – 40% */}
  <div className="w-full md:w-[40%]">
    <Notifications message="Notifications"/>
  </div>

</div>


        {/* Bar Chart */}
        
      </main>
    </div>
  );
}
