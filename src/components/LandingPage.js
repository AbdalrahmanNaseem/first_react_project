import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate("/login");
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100 position-relative"
            style={{
                backgroundColor: "#000",
                overflow: "hidden",
            }}
        >
            {/* الخلفيات - الأيقونات */}
            <img
                src="/images/4f0bea8ce50343f693ef70fe93ef5734744a49d3.png"
                alt="Icon Top Left"
                className="decor-icon top-left"
            />
            <img
                src="/images/ad8a98a3d4f1081723f012786edf6d6ef2e84a0b.png"
                alt="Icon Top Right"
                className="decor-icon top-right"
            />
            <img
                src="/images/c82eac99dbecc9c3f4c19201855959510d00fadc.png"
                alt="Icon Bottom Left"
                className="decor-icon bottom-left"
            />
            <img
                src="/images/d67d82c2f0015536740590c1115fbb151b5af0ca.png"
                alt="Icon Bottom Right"
                className="decor-icon bottom-right"
            />

            {/* الكارت الرئيسي */}
            <div
                className="card p-4 text-center text-white"
                style={{
                    width: "90%",
                    maxWidth: "360px",
                    backgroundColor: "#1a1a1a",
                    border: "none",
                    borderRadius: "16px",
                    boxShadow: "0 0 25px rgba(155, 92, 255, 0.25)",
                    zIndex: 2,
                }}
            >
                <h4 className="mb-2 fw-bold">
                    ⚡ <span style={{ color: "#9b5cff" }}>Sparkit</span>
                </h4>

                <h5 className="mb-3 fw-semibold">Admin Dashboard Login</h5>

                <p className="text-secondary small mb-4 px-2">
                    Sign in with your account to manage fundings, projects, and more with
                    ease.
                </p>

                <button
                    className="btn w-100"
                    style={{
                        backgroundColor: "#9b5cff",
                        border: "none",
                        fontWeight: "500",
                        color: "#fff",
                        borderRadius: "8px",
                        padding: "10px 0",
                        boxShadow: "0 0 15px rgba(155, 92, 255, 0.4)",
                    }}
                    onClick={handleContinue}
                >
                    Continue <span style={{ fontSize: "1.2em" }}>➜</span>
                </button>
            </div>

            {/* CSS responsive مدمج مباشرة */}
            <style>
                {`
          .decor-icon {
            position: absolute;
            opacity: 0.9;
            transition: all 0.4s ease;
          }

          .top-left {
            top: 10%;
            left: 20%;
            width: 250px;
            height: auto;
          }

          .top-right {
            top: 15%;
            right: 18%;
            width: 250px;
            height: auto;
          }

          .bottom-left {
            bottom: 15%;
            left: 22%;
            width: 250px;
            height: auto;
          }

          .bottom-right {
            bottom: 12%;
            right: 20%;
            width: 250px;
            height: auto;
          }

          /* 📱 موبايل */
          @media (max-width: 768px) {
            .top-left {
              top: 5%;
              left: 5%;
              width: 120px;
            }
            .top-right {
              top: 10%;
              right: 5%;
              width: 120px;
            }
            .bottom-left {
              bottom: 10%;
              left: 5%;
              width: 100px;
            }
            .bottom-right {
              bottom: 8%;
              right: 5%;
              width: 100px;
            }
          }

          /* 🖥️ شاشات كبيرة */
          @media (min-width: 1400px) {
            .top-left, .top-right, .bottom-left, .bottom-right {
              width: 300px;
            }
          }
        `}
            </style>
        </div>
    );
};

export default LandingPage;
