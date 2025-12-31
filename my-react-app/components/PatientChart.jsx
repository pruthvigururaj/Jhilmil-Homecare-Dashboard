import { Line } from "react-chartjs-2";

export default function PatientChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "Patients",
        data: [800, 780, 900, 1050, 1200, 1150, 1180, 1250, 1300, 1400],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.1)",
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: "#3b82f6",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => `${value / 1000}k`,
        },
      },
    },
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h3 className="font-semibold mb-4 text-2xl">Patient Visits (Monthly)</h3>
      <Line data={data} options={options} height={120} />
    </div>
  );
}
