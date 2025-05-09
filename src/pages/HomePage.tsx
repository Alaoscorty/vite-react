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
      "1": [100, 121, 157, 156, 142, 162, 201, 185, 171, 144, 134, 117],
      "2": [155, 117, 116, 185, 159, 270, 242, 2436, 212, 129, 198, 159],
      "3": [920, 198, 919, 925, 298, 482, 294, 269, 279, 929, 30, 32],
      "4": [22, 23, 249, 291, 295, 299, 391, 390, 28, 297, 296, 695]
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
        backgroundColor: "rgba(54, 172, 172, 0.2)",
        borderColor: "rgb(75, 83, 192)"
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
                      <option value="1">Mars 2025</option>
                      <option value="2">Avril 2025</option>
                      <option value="3">Mai 2025</option>
                      <option value="4">Juin 2025</option>
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
                    <h4 className="fw-semibold">FCFA35358</h4>
                    <span className="text-success">+19%</span>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="card-title mb-9 fw-semibold">Monthly Earnings</h5>
                  <h4 className="fw-semibold">FCFA 690820</h4>
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
