export default function Topbar() {
  return (
     
    <div>
          <div className="flex justify-between p-4 "> 
               <div>
                  <input className="py-1 px-2 border border-gray-200 outline-0" placeholder="🔎 Search"/>
               </div>
               <div className="flex gap-6">
                  <div>🔎</div>
                  <div>🔔</div>
                  <div>📝</div>
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center">👨‍⚕️</div>

               </div>
          </div>

      <div className="flex justify-between items-center bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold">🏥 Hospital Admin Dashboard</h2>
      <div className="flex items-center gap-3">
        <span className="text-gray-600">Welcome, Alexander Peirce</span>
        <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center text-2xl">👨‍⚕️</div>
      </div>
    </div>

    </div> 

    
  );
}
