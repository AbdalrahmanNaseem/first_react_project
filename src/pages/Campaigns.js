import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import SidebarAndNavbar from "../components/SidebarAndNavbar";

const Campaigns = () => {
    const navigate = useNavigate();

    const campaigns = [
        { name: "Test Project", owner: "User", fund: "10 ETH", email: "jane@microsoft.com", status: "Approved" },
        { name: "Smart Sofa", owner: "User", fund: "12 ETH", email: "floyd@yahoo.com", status: "Rejected" },
        { name: "Crypto Wallet App", owner: "User", fund: "9 ETH", email: "ronald@adobe.com", status: "Rejected" },
        { name: "AI Assistant Tool", owner: "User", fund: "15 ETH", email: "marvin@tesla.com", status: "Approved" },
        { name: "Green Energy Campaign", owner: "User", fund: "23 ETH", email: "jerome@google.com", status: "Pending" },
        { name: "Tech99 Company", owner: "User", fund: "10 ETH", email: "kathryn@microsoft.com", status: "Pending" },
        { name: "Education for All", owner: "User", fund: "20 ETH", email: "jacob@yahoo.com", status: "Approved" },
        { name: "Test Project", owner: "User", fund: "50 ETH", email: "kristin@facebook.com", status: "Rejected" },
    ];

    return (
        <div
            className="d-flex flex-column flex-lg-row vh-100"
            style={{ backgroundColor: "#0f0f0f", color: "#fff", overflowY: "auto" }}
        >
            {/* ✅ المكون الموحد للسايدبار والنافبار */}
            <SidebarAndNavbar active="Campaigns" />

            {/* ✅ المحتوى الرئيسي */}
            <div
                className="flex-grow-1 main-content"
                style={{
                    marginLeft: "260px",
                    padding: "30px",
                }}
            >
                <h3 className="mb-2">All Campaigns</h3>
                <p className="text-secondary mb-4">
                    Manage, Approve, Reject Campaigns and More
                </p>

                {/* Main White Card */}
                <div
                    className="p-4 rounded table-container"
                    style={{
                        backgroundColor: "#fff",
                        color: "#000",
                        borderRadius: "20px",
                        boxShadow: "0 0 30px rgba(155, 92, 255, 0.1)",
                        overflowX: "auto",
                    }}
                >
                    {/* Top Bar */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
                        <div className="position-relative w-100 w-md-auto">
                            <i
                                className="bi bi-search position-absolute"
                                style={{
                                    top: "50%",
                                    left: "12px",
                                    transform: "translateY(-50%)",
                                    color: "#888",
                                }}
                            ></i>
                            <input
                                type="text"
                                placeholder="Search"
                                className="form-control ps-5"
                                style={{
                                    borderRadius: "10px",
                                    border: "1px solid #ddd",
                                    width: "100%",
                                    maxWidth: "260px",
                                }}
                            />
                        </div>

                        <select
                            className="form-select"
                            style={{
                                width: "160px",
                                borderRadius: "10px",
                                border: "1px solid #ddd",
                                color: "#555",
                            }}
                        >
                            <option>Sort by: Newest</option>
                            <option>Oldest</option>
                            <option>Approved</option>
                            <option>Rejected</option>
                        </select>
                    </div>

                    {/* Table */}
                    <table className="table table-borderless align-middle mb-0">
                        <thead>
                            <tr
                                style={{
                                    color: "#9b9b9b",
                                    fontWeight: 500,
                                    whiteSpace: "nowrap",
                                }}
                            >
                                <th>Campaign Name</th>
                                <th>Owner</th>
                                <th>Fund Requested</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns.map((c, i) => (
                                <tr
                                    key={i}
                                    style={{ transition: "background 0.3s ease" }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.backgroundColor = "#f9f7ff")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.backgroundColor = "transparent")
                                    }
                                >
                                    <td
                                        className="fw-semibold"
                                        style={{ cursor: "pointer", color: "#000" }}
                                        onClick={() =>
                                            navigate(`/campaign/${c.name.toLowerCase().replace(/\s+/g, "-")}`)
                                        }
                                    >
                                        {c.name}
                                    </td>
                                    <td>{c.owner}</td>
                                    <td>{c.fund}</td>
                                    <td>{c.email}</td>
                                    <td>
                                        <span
                                            className={`badge px-3 py-2 ${c.status === "Approved"
                                                    ? "bg-success-subtle text-success"
                                                    : c.status === "Rejected"
                                                        ? "bg-danger-subtle text-danger"
                                                        : "bg-warning-subtle text-warning"
                                                }`}
                                            style={{
                                                borderRadius: "8px",
                                                fontSize: "13px",
                                                fontWeight: "500",
                                            }}
                                        >
                                            {c.status}
                                        </span>
                                    </td>
                                    <td className="text-center">
                                        <i
                                            className="bi bi-pencil me-3"
                                            style={{ color: "#9b5cff", cursor: "pointer" }}
                                        ></i>
                                        <i
                                            className="bi bi-trash"
                                            style={{ color: "#e63946", cursor: "pointer" }}
                                        ></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mt-4 gap-2">
                        <small className="text-secondary">
                            Showing data 1 to 8 of 10,000 entries
                        </small>
                        <nav>
                            <ul className="pagination pagination-sm mb-0">
                                <li className="page-item active">
                                    <button
                                        className="page-link border-0"
                                        style={{
                                            backgroundColor: "#9b5cff",
                                            color: "#fff",
                                            borderRadius: "6px",
                                        }}
                                    >
                                        1
                                    </button>
                                </li>
                                {[2, 3, 4].map((num) => (
                                    <li key={num} className="page-item">
                                        <button
                                            className="page-link border-0 text-dark"
                                            style={{
                                                backgroundColor: "#f5f5f5",
                                                borderRadius: "6px",
                                                marginLeft: "4px",
                                            }}
                                        >
                                            {num}
                                        </button>
                                    </li>
                                ))}
                                <li className="page-item">
                                    <button
                                        className="page-link border-0 text-dark"
                                        style={{
                                            backgroundColor: "#f5f5f5",
                                            borderRadius: "6px",
                                            marginLeft: "4px",
                                        }}
                                    >
                                        &gt;
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Footer */}
                <footer className="text-secondary text-center mt-4">
                    © 2025 Sparkit. All rights reserved.
                </footer>
            </div>

            {/* ✅ Responsive adjustments */}
            <style>
                {`
          @media (max-width: 992px) {
            .main-content {
              margin-left: 0 !important;
              padding-top: 90px;
            }
          }
          @media (max-width: 768px) {
            table {
              font-size: 0.85rem;
            }
            th, td {
              white-space: nowrap;
            }
          }
        `}
            </style>
        </div>
    );
};

export default Campaigns;
