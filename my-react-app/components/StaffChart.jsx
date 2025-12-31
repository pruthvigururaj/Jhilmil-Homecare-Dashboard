import { Bar } from "react-chartjs-2";

export default function StaffChart() {
  const data = {
    labels: ["Doctors", "Nurses", "Cleaners", "Ambulances"],
    datasets: [
      {
        data: [25, 40, 12, 6],
        backgroundColor: [
          "#3b82f6",
          "#22c55e",
          "#f97316",
          "#38bdf8",
        ],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h3 className="font-semibold mb-4 text-2xl">Staff Count by Department</h3>
      <Bar data={data} options={options} height={120} />
    </div>
  );
}
