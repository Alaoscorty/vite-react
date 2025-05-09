import { useState, useEffect } from "react";
import SideBars from "../components/SideBars";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Enregistrer les composants nécessaires
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function HomePage() {
  const [selectedMonth, setSelectedMonth] = useState("1");
  const [salesData, setSalesData] = useState<number[]>([]);

  // Simuler la récupération des ventes par mois
  const fetchSalesData = (month: string) => {
    const data: { [key: string]: number[] } = {
      "1": [10, 12, 13, 15, 14, 16, 20, 18, 17, 14, 13, 11],
      "2": [15, 17, 16, 18, 19, 20, 22, 23, 21, 19, 18, 15],
      "3": [20, 18, 19, 25, 28, 22, 24, 26, 27, 29, 30, 32],
      "4": [22, 23, 24, 21, 25, 29, 31, 30, 28, 27, 26, 25]
    };
    setSalesData(data[month] || []);
  };

  useEffect(() => {
    fetchSalesData(selectedMonth);
  }, [selectedMonth]);

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
  };

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Ventes",
        data: salesData,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Ventes Mensuelles"
      },
      tooltip: {
        mode: "index" as const,
        intersect: false
      }
    }
  };

  return (
    <div
      className="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      <SideBars />
      <div className="body-wrapper">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="card w-100">
                <div className="card-body">
                  <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                    <h5 className="card-title fw-semibold">Sales Overview</h5>
                    <select
                      className="form-select"
                      value={selectedMonth}
                      onChange={handleMonthChange}
                    >
                      <option value="1">Mars 2023</option>
                      <option value="2">Avril 2023</option>
                      <option value="3">Mai 2023</option>
                      <option value="4">Juin 2023</option>
                    </select>
                  </div>
                  <Line data={chartData} options={chartOptions} />
                </div>
              </div>
            </div>
            {/* Les cartes sur le côté droit */}
            <div className="col-lg-4">
              <div className="card overflow-hidden">
                <div className="card-body p-4">
                  <h5 className="card-title mb-9 fw-semibold">Yearly Breakup</h5>
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="fw-semibold">$36,358</h4>
                    <span className="text-success">+9%</span>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="card-title mb-9 fw-semibold">Monthly Earnings</h5>
                  <h4 className="fw-semibold">$6,820</h4>
                  <span className="text-danger">-5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
