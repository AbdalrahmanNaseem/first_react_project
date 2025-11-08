import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import SidebarAndNavbar from "../components/SidebarAndNavbar";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Dashboard = () => {
    const barData = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                label: "Platform Growth",
                data: [25, 45, 30, 50, 40, 60, 55, 80, 70, 60, 50, 45],
                backgroundColor: "#9b5cff",
                borderRadius: 8,
            },
        ],
    };

    const barOptions = {
        plugins: { legend: { display: false } },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: "#aaa" },
            },
            y: {
                grid: { color: "rgba(255,255,255,0.1)" },
                ticks: { color: "#aaa" },
            },
        },
    };

    const doughnutData = {
        labels: ["Funded", "Pending"],
        datasets: [
            {
                data: [65, 35],
                backgroundColor: ["#9b5cff", "#333"],
                borderWidth: 0,
            },
        ],
    };

    return (
        <div
            className="d-flex flex-column flex-lg-row vh-100"
            style={{
                backgroundColor: "#0f0f0f",
                color: "#fff",
                overflowY: "auto",
            }}
        >
            {/* ✅ المكون الموحد للسايدبار والنافبار */}
            <SidebarAndNavbar active="Dashboard" />

            {/* ✅ المحتوى الرئيسي */}
            <div
                className="flex-grow-1 main-content"
                style={{
                    marginLeft: "260px",
                    padding: "30px",
                }}
            >
                <h3 className="mb-2">Welcome Ahmad 👋</h3>
                <p className="text-secondary mb-4">
                    Track projects, campaigns, and the progress of the funding.
                </p>

                {/* Cards */}
                <div className="row g-4 mb-4">
                    {[
                        {
                            title: "Total Users",
                            number: "12,450",
                            change: "↑ 12%",
                            color: "text-success",
                        },
                        {
                            title: "Total Fund Collected",
                            number: "3,219",
                            change: "↑ 15%",
                            color: "text-success",
                        },
                        {
                            title: "New Add Campaigns",
                            number: "321",
                            change: "↓ 2%",
                            color: "text-danger",
                        },
                    ].map((item, index) => (
                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                            <div
                                className="p-4 rounded"
                                style={{
                                    backgroundColor: "#1a1a1a",
                                    boxShadow: "0 0 15px rgba(155, 92, 255, 0.1)",
                                }}
                            >
                                <h6 className="text-secondary">{item.title}</h6>
                                <h3 className="fw-bold">{item.number}</h3>
                                <small className={item.color}>
                                    {item.change} vs last month
                                </small>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Charts */}
                <div className="row g-4 mb-4">
                    <div className="col-12 col-lg-8">
                        <div
                            className="p-4 rounded"
                            style={{
                                backgroundColor: "#1a1a1a",
                                boxShadow: "0 0 25px rgba(155, 92, 255, 0.1)",
                            }}
                        >
                            <h6 className="mb-3">Overview</h6>
                            <Bar data={barData} options={barOptions} height={100} />
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div
                            className="p-4 rounded text-center"
                            style={{
                                backgroundColor: "#1a1a1a",
                                boxShadow: "0 0 25px rgba(155, 92, 255, 0.1)",
                            }}
                        >
                            <h6 className="mb-3">Projects</h6>
                            <div style={{ width: "180px", margin: "auto" }}>
                                <Doughnut data={doughnutData} />
                            </div>
                            <p className="mt-3">
                                <span style={{ color: "#9b5cff", fontWeight: "bold" }}>
                                    65%
                                </span>{" "}
                                Projects Funded
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tables */}
                <div className="row g-4 mb-5">
                    {/* Users Table */}
                    <div className="col-12 col-lg-6">
                        <div
                            className="p-4 rounded"
                            style={{
                                backgroundColor: "#1a1a1a",
                                boxShadow: "0 0 25px rgba(155, 92, 255, 0.1)",
                                overflowX: "auto",
                            }}
                        >
                            <h6 className="mb-3">Latest User Signups</h6>
                            <table className="table table-dark table-borderless align-middle mb-0">
                                <thead>
                                    <tr className="text-secondary">
                                        <th>Name</th>
                                        <th>Campaign Created</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Saif Majed", 3],
                                        ["Raed Mohammed", 5],
                                        ["Tech99 Company", 2],
                                        ["Ahmad Mazen", 1],
                                    ].map(([name, count], i) => (
                                        <tr key={i}>
                                            <td>{name}</td>
                                            <td>{count}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Projects Table */}
                    <div className="col-12 col-lg-6">
                        <div
                            className="p-4 rounded"
                            style={{
                                backgroundColor: "#1a1a1a",
                                boxShadow: "0 0 25px rgba(155, 92, 255, 0.1)",
                                overflowX: "auto",
                            }}
                        >
                            <h6 className="mb-3">Latest Projects Funded</h6>
                            <table className="table table-dark table-borderless align-middle mb-0">
                                <thead>
                                    <tr className="text-secondary">
                                        <th>Campaign Name</th>
                                        <th>Campaign Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Test Project", "Jun 02 - Jun 12"],
                                        ["Smart Sofa", "Jun 07 - Jun 09"],
                                        ["Crypto Wallet App", "Jun 20 - Jun 23"],
                                        ["AI Assistant Tool", "Jun 24 - Jun 26"],
                                    ].map(([project, duration], i) => (
                                        <tr key={i}>
                                            <td>{project}</td>
                                            <td>{duration}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="text-secondary text-center mb-3">
                    © 2025 Sparkit. All rights reserved.
                </footer>
            </div>

            {/* ✅ Responsive adjustments */}
            <style>
                {`
          @media (max-width: 992px) {
            .main-content {
              margin-left: 0 !important;
              padding-top: 90px; /* لتحت النافبار */
            }
          }
          @media (max-width: 768px) {
            .table {
              font-size: 0.9rem;
            }
            h3 {
              font-size: 1.4rem;
            }
            p {
              font-size: 0.9rem;
            }
          }
        `}
            </style>
        </div>
    );
};

export default Dashboard;
