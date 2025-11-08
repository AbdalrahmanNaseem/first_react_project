import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import SidebarAndNavbar from "../components/SidebarAndNavbar";

const AllUsers = () => {
    const navigate = useNavigate();

    const users = [
        {
            name: "Saif Majed",
            email: "olivia@jsmastery.pro",
            joined: "Jan 6, 2022",
            campaigns: 3,
            status: "User",
            image: "https://i.pravatar.cc/40?img=3",
        },
        {
            name: "Raed Mohammed",
            email: "phoenix@jsmastery.pro",
            joined: "Jan 6, 2022",
            campaigns: 6,
            status: "User",
            image: "https://i.pravatar.cc/40?img=4",
        },
        {
            name: "Tech99 Company",
            email: "lana@jsmastery.pro",
            joined: "Jan 6, 2022",
            campaigns: 1,
            status: "Admin",
            image: "https://i.pravatar.cc/40?img=5",
        },
        {
            name: "Mohammad",
            email: "demi@jsmastery.pro",
            joined: "Jan 5, 2022",
            campaigns: 3,
            status: "User",
            image: "https://i.pravatar.cc/40?img=6",
        },
        {
            name: "Mark Davis",
            email: "candice@jsmastery.pro",
            joined: "Jan 5, 2022",
            campaigns: 6,
            status: "Admin",
            image: "https://i.pravatar.cc/40?img=7",
        },
        {
            name: "Kevin Taylor",
            email: "natal@jsmastery.pro",
            joined: "Jan 5, 2022",
            campaigns: 3,
            status: "User",
            image: "https://i.pravatar.cc/40?img=8",
        },
    ];

    return (
        <div
            className="d-flex flex-column flex-lg-row vh-100"
            style={{
                backgroundColor: "#0f0f0f",
                color: "#fff",
                overflowY: "auto",
            }}
        >
            {/* ✅ Sidebar & Navbar component */}
            <SidebarAndNavbar active="All Users" />

            {/* ✅ Main Content */}
            <div
                className="flex-grow-1 main-content"
                style={{
                    marginLeft: "260px",
                    padding: "30px",
                }}
            >
                <h3 className="mb-2">Manage Users</h3>
                <p className="text-secondary mb-4 text-white">
                    Filter, sort, and access detailed user profiles.
                </p>

                {/* ✅ Table Container */}
                <div
                    className="p-4 rounded table-container"
                    style={{
                        backgroundColor: "#f9f9fb",
                        color: "#000",
                        borderRadius: "14px",
                        boxShadow: "0 0 25px rgba(155, 92, 255, 0.15)",
                        overflowX: "auto",
                    }}
                >
                    <table className="table table-borderless align-middle mb-0">
                        <thead>
                            <tr
                                style={{
                                    color: "#9b9b9b",
                                    fontWeight: 500,
                                    whiteSpace: "nowrap",
                                }}
                            >
                                <th>Name</th>
                                <th>Email Address</th>
                                <th>Date Joined</th>
                                <th>Campaign Created</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => (
                                <tr
                                    key={i}
                                    style={{
                                        transition: "background 0.3s ease",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.backgroundColor = "#f2f2ff")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.backgroundColor = "transparent")
                                    }
                                >
                                    <td className="fw-semibold">
                                        <div
                                            className="d-flex align-items-center gap-2"
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                                navigate(
                                                    `/user/${user.name
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "-")}`
                                                )
                                            }
                                        >
                                            <img
                                                src={user.image}
                                                alt={user.name}
                                                className="rounded-circle"
                                                width="35"
                                                height="35"
                                            />
                                            <span className="text-dark">{user.name}</span>
                                        </div>
                                    </td>

                                    <td style={{ color: "#666" }}>{user.email}</td>
                                    <td style={{ color: "#666" }}>{user.joined}</td>
                                    <td style={{ color: "#666" }}>{user.campaigns}</td>
                                    <td>
                                        <span
                                            className={`badge px-3 py-2 ${user.status === "Admin"
                                                ? "bg-primary-subtle text-primary"
                                                : "bg-success-subtle text-success"
                                                }`}
                                            style={{
                                                borderRadius: "8px",
                                                fontSize: "13px",
                                                fontWeight: "500",
                                            }}
                                        >
                                            {user.status}
                                        </span>
                                    </td>
                                    <td>
                                        <i
                                            className="bi bi-trash3"
                                            style={{
                                                color: "#000000ff",
                                                cursor: "pointer",
                                            }}
                                        ></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* ✅ Pagination */}
                    <div className="d-flex flex-wrap justify-content-between align-items-center mt-4">
                        <button
                            className="btn btn-outline-dark btn-sm px-3 mb-2"
                            style={{ borderRadius: "6px" }}
                        >
                            Previous
                        </button>
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
                                {[2, 3, 4, 5].map((num) => (
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
                            </ul>
                        </nav>
                        <button
                            className="btn btn-outline-dark btn-sm px-3 mb-2"
                            style={{ borderRadius: "6px" }}
                        >
                            Next
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <footer className="text-secondary text-center mt-4">
                    © 2025 Sparkit. All rights reserved.
                </footer>
            </div>


        </div>
    );
};

export default AllUsers;
