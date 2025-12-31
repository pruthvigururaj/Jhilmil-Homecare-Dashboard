export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-4">
      <h1 className="text-xl font-bold mb-6">🏥 JHILMIL HOSPITAL</h1>
       <hr className="border border-slate-500"></hr>
      <div className="py-4">
        <input className="py-2 px-1 border border-slate-500 outline-0 rounded-md" placeholder="🔎 Search"/>
      </div>
        <hr className="border border-slate-500"></hr>
      <nav className="space-y-1 py-2">
        {[
          "Dashboard",
          "Hospital",
          "Doctor",
          "Doctor List",
          "Nurses",
          "Nurse List",
          "Cleaners",
          "Ambulance",
          "Pathology",
        ].map((item) => (
          <div
            key={item}
            className="px-4 py-2 rounded-lg hover:bg-slate-700 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
}
