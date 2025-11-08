import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SidebarAndNavbar = ({ active }) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Sidebar - Desktop */}
            <div
                className="d-none d-lg-flex flex-column p-4"
                style={{
                    width: "250px",
                    minHeight: "100vh",
                    backgroundColor: "#1a1a1a",
                    position: "fixed",
                    top: 0,
                    left: 0,
                }}
            >
                <h4 className="text-white mb-5">
                    ⚡ <span style={{ color: "#9b5cff" }}>Sparkit</span>
                </h4>

                {[
                    { label: "Dashboard", path: "/dashboard" },
                    { label: "All Users", path: "/users" },
                    { label: "Campaigns", path: "/campaigns" },
                ].map((item) => (
                    <button
                        key={item.path}
                        className={`btn text-start mb-3 ${active === item.label ? "text-white" : "text-white"
                            }`}
                        style={{
                            backgroundColor:
                                active === item.label ? "#9b5cff" : "transparent",
                            color: "#fff",
                            border: "none",
                            fontWeight: "500",
                            boxShadow:
                                active === item.label
                                    ? "0 0 15px rgba(155, 92, 255, 0.4)"
                                    : "none",
                        }}
                        onClick={() => navigate(item.path)}
                    >
                        {item.label}
                    </button>
                ))}

                {/* Bottom User Card */}
                <div
                    className="mt-auto d-flex align-items-center gap-2 text-white border-top pt-3"
                    style={{ fontSize: "14px" }}
                >
                    <img
                        src="https://i.pravatar.cc/40?img=12"
                        alt="User"
                        className="rounded-circle"
                        width="35"
                        height="35"
                    />
                    <div>
                        <p className="m-0">Ahmad Omar</p>
                        <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
                            ahmad@gmail.com
                        </p>
                    </div>
                    <i className="bi bi-box-arrow-right ms-auto text-danger"></i>
                </div>
            </div>

            {/* Navbar - Mobile */}
            <nav
                className="d-flex d-lg-none justify-content-between align-items-center px-4 py-3 position-relative"
                style={{
                    backgroundColor: "#1a1a1a",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    zIndex: 1000,
                }}
            >
                <h5 className="m-0">
                    ⚡ <span style={{ color: "#9b5cff" }}>Sparkit</span>
                </h5>

                <button
                    className="btn text-white"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    style={{
                        background: "transparent",
                        border: "none",
                        fontSize: "1.6rem",
                        zIndex: 1001,
                    }}
                >
                    <i className="bi bi-list"></i>
                </button>

                {isMenuOpen && (
                    <div
                        className="position-absolute start-0 w-100 p-3"
                        style={{
                            backgroundColor: "#1a1a1a",
                            top: "100%",
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                            zIndex: 1002,
                        }}
                    >
                        {[
                            { label: "Dashboard", path: "/dashboard" },
                            { label: "All Users", path: "/users" },
                            { label: "Campaigns", path: "/campaigns" },
                        ].map((item) => (
                            <button
                                key={item.path}
                                className="btn w-100 mb-2 text-start text-white"
                                style={{
                                    backgroundColor:
                                        active === item.label ? "#9b5cff" : "transparent",
                                    fontWeight: "500",
                                    border: "none",
                                }}
                                onClick={() => {
                                    navigate(item.path);
                                    setIsMenuOpen(false);
                                }}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </nav>

            {/* Style fix */}
            <style>
                {`
          @media (max-width: 992px) {
            .main-content {
              margin-left: 0 !important;
              padding-top: 90px !important;
            }
          }
        `}
            </style>
        </>
    );
};

export default SidebarAndNavbar;
