import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";

const UserProfile = () => {
    const navigate = useNavigate();
    const { username } = useParams();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const users = [
        {
            name: "Saif Majed",
            location: "Amman, Jordan",
            bio: "Full stack developer passionate about crowdfunding.",
            image: "https://i.pravatar.cc/150?img=3",
            campaigns: [
                {
                    title: "Smart Sofa",
                    image: "/images/88660e553d9342975bab0d35a678e695c69335ca.jpg",
                    progress: 70,
                    raised: 3,
                    goal: 10,
                    days: 32,
                },
            ],
        },
    ];

    const formattedName = username.replace(/-/g, " ");
    const user = users.find(
        (u) => u.name.toLowerCase() === formattedName.toLowerCase()
    );

    if (!user) {
        return (
            <div
                className="vh-100 d-flex justify-content-center align-items-center text-white"
                style={{ backgroundColor: "#0f0f0f" }}
            >
                <h2>User not found 😢</h2>
            </div>
        );
    }

    return (
        <div
            className="d-flex flex-column flex-lg-row vh-100"
            style={{ backgroundColor: "#0f0f0f", color: "#fff", overflowY: "auto" }}
        >
            {/* Sidebar (Desktop) */}
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

                <button
                    className="btn text-start mb-3 text-white"
                    style={{ background: "transparent" }}
                    onClick={() => navigate("/dashboard")}
                >
                    Dashboard
                </button>

                <button
                    className="btn text-start mb-3"
                    style={{
                        backgroundColor: "#9b5cff",
                        color: "#fff",
                        border: "none",
                        fontWeight: "500",
                    }}
                    onClick={() => navigate("/users")}
                >
                    All Users
                </button>

                <button
                    className="btn text-start text-white"
                    style={{ background: "transparent" }}
                    onClick={() => navigate("/campaigns")}
                >
                    Campaigns
                </button>
            </div>

            {/* Navbar (Mobile) */}
            <nav
                className="d-flex d-lg-none justify-content-between align-items-center px-4 py-3 position-relative"
                style={{
                    backgroundColor: "#1a1a1a",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    zIndex: 1000, // 👈 مهم حتى يظهر فوق الكل
                }}
            >
                <h5 className="m-0">
                    ⚡ <span style={{ color: "#9b5cff" }}>Sparkit</span>
                </h5>

                <button
                    className="btn text-white"
                    onClick={() => setIsMenuOpen((prev) => !prev)} // ✅ يبدّل الحالة صح
                    style={{
                        background: "transparent",
                        border: "none",
                        fontSize: "1.6rem",
                        zIndex: 1001,
                    }}
                >
                    <i className="bi bi-list"></i>
                </button>

                {/* القائمة المنسدلة */}
                {isMenuOpen && (
                    <div
                        className="position-absolute start-0 w-100 p-3"
                        style={{
                            backgroundColor: "#1a1a1a",
                            top: "100%",
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                            zIndex: 1002, // ✅ فوق كل شيء
                        }}
                    >
                        <button
                            className="btn w-100 mb-2 text-start text-white"
                            style={{ background: "transparent" }}
                            onClick={() => {
                                navigate("/dashboard");
                                setIsMenuOpen(false);
                            }}
                        >
                            Dashboard
                        </button>
                        <button
                            className="btn w-100 mb-2 text-start text-white"
                            style={{
                                backgroundColor: "#9b5cff",
                                fontWeight: "500",
                                border: "none",
                            }}
                            onClick={() => {
                                navigate("/users");
                                setIsMenuOpen(false);
                            }}
                        >
                            All Users
                        </button>
                        <button
                            className="btn w-100 text-start text-white"
                            style={{ background: "transparent" }}
                            onClick={() => {
                                navigate("/campaigns");
                                setIsMenuOpen(false);
                            }}
                        >
                            Campaigns
                        </button>
                    </div>
                )}
            </nav>

            <div
                className="flex-grow-1"
                style={{
                    marginLeft: "260px",
                    padding: "30px",
                }}
            >
                <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start mb-5 mt-3">
                    <img
                        src={user.image}
                        alt={user.name}
                        className="rounded-circle me-md-4 mb-3 mb-md-0"
                        width="120"
                        height="120"
                        style={{ boxShadow: "0 0 20px rgba(155,92,255,0.2)" }}
                    />
                    <div className="text-center text-md-start">
                        <h3 className="fw-bold mb-1">{user.name}</h3>
                        <p className="text-secondary mb-2">{user.location}</p>
                        <p className="text-light mb-3">{user.bio}</p>
                        <div>
                            <i
                                className="bi bi-twitter me-3"
                                style={{ cursor: "pointer", color: "#9b5cff" }}
                            ></i>
                            <i
                                className="bi bi-linkedin"
                                style={{ cursor: "pointer", color: "#9b5cff" }}
                            ></i>
                        </div>
                    </div>
                </div>

                <h5
                    className="mb-3 px-3 py-2 d-inline-block"
                    style={{
                        backgroundColor: "#9b5cff",
                        borderRadius: "20px",
                        fontSize: "15px",
                    }}
                >
                    Campaigns
                </h5>

                <div className="row g-4">
                    {user.campaigns.map((c, i) => (
                        <div key={i} className="col-12 col-sm-6 col-lg-4">
                            <div
                                className="p-3 rounded"
                                style={{
                                    backgroundColor: "#1a1a1a",
                                    boxShadow: "0 0 15px rgba(155, 92, 255, 0.15)",
                                }}
                            >
                                <img
                                    src={c.image}
                                    alt={c.title}
                                    className="img-fluid rounded mb-3"
                                    style={{ height: "180px", objectFit: "cover" }}
                                />
                                <h5 className="text-white">{c.title}</h5>
                                <div className="progress mb-2" style={{ height: "8px" }}>
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: `${c.progress}%`,
                                            backgroundColor: "#9b5cff",
                                        }}
                                    ></div>
                                </div>
                                <div className="d-flex justify-content-between text-secondary small mb-2">
                                    <span>
                                        {c.raised} ETH of {c.goal} ETH
                                    </span>
                                    <span>{c.days} days left</span>
                                </div>
                                <button
                                    className="btn w-100"
                                    style={{
                                        backgroundColor: "#9b5cff",
                                        color: "#fff",
                                        borderRadius: "8px",
                                        fontWeight: "500",
                                    }}
                                >
                                    View Project
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <footer className="text-secondary text-center mt-5">
                    © 2025 Sparkit. All rights reserved.
                </footer>
            </div>
            <div
                className="flex-grow-1"
                style={{ marginLeft: "260px", padding: "30px" }}
            >
                <div className="mt-4">
                    <h3>{user.name}</h3>
                    <p>{user.bio}</p>
                </div>
            </div>

            <style>
                {`
          @media (max-width: 992px) {
            .flex-grow-1 {
              margin-left: 0 !important;
              padding-top: 80px; /* لتحت النافبار */
            }
          }
        `}
            </style>
        </div>
    );
};

export default UserProfile;
