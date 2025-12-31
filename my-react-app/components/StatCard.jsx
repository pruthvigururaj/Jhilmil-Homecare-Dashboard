export default function StatCard({ title, value, icon, bg }) {
  return (
    <div
      className={`flex items-center justify-between p-5 rounded-xl shadow-md ${bg}`}
    >
      <div className="text-white">
        <p className="text-sm opacity-90">{title}</p>
        <h2 className="text-3xl font-bold mt-1">{value}</h2>
      </div>

      <div className="text-white text-4xl opacity-80">
        {icon}
      </div>
    </div>
  );
}
