import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    };

    return (
        <div
            className="row m-0 p-0 vh-100"
            style={{
                backgroundColor: "#000",
            }}
        >
            {/* Left Side - Form */}
            <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center p-4">
                <div
                    className="p-4 text-center text-white"
                    style={{
                        width: "100%",
                        maxWidth: "350px",
                        backgroundColor: "#1a1a1a",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 0 20px rgba(128, 0, 255, 0.25)",
                    }}
                >
                    <form onSubmit={handleLogin}>
                        <h2 className="text-white mb-4" style={{ fontSize: "1.6rem" }}>
                            Login to Sparkit Admin
                        </h2>

                        <div className="mb-3 text-start">
                            <label htmlFor="email" className="form-label text-white">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                style={{
                                    backgroundColor: "#111",
                                    color: "#fff",
                                    border: "1px solid #333",
                                }}
                            />
                        </div>

                        <div className="mb-3 text-start">
                            <label htmlFor="password" className="form-label text-white">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                style={{
                                    backgroundColor: "#111",
                                    color: "#fff",
                                    border: "1px solid #333",
                                }}
                            />
                        </div>

                        <button
                            type="button"
                            className="btn btn-light w-100 mt-3"
                            style={{
                                color: "#000",
                                border: "none",
                                fontWeight: "500",
                            }}
                        >
                            <i className="bi bi-google me-2"></i> Login with Google
                        </button>

                        <button
                            type="submit"
                            className="btn w-100 mt-3"
                            style={{
                                backgroundColor: "#9b5cff",
                                border: "none",
                                fontWeight: "500",
                            }}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
                <img
                    src="/images/563536ce3b385ffc4fe7a215f3ebfe6a5c2559e8.png"
                    alt="Sparkit Illustration"
                    style={{
                        width: "70%",
                        maxWidth: "500px",
                        filter: "blur(3px)",
                    }}
                />
            </div>

            {/* ✅ Responsive CSS */}
            <style>
                {`
          @media (max-width: 992px) {
            .col-lg-6 {
              flex: 1 1 100%;
              width: 100%;
            }
          }

          @media (max-width: 768px) {
            h2 {
              font-size: 1.4rem !important;
            }

            form input {
              font-size: 0.9rem;
            }

            .btn {
              font-size: 0.9rem;
            }

            .p-4 {
              padding: 1.5rem !important;
            }
          }

          @media (max-width: 576px) {
            .vh-100 {
              height: auto !important;
              min-height: 100vh;
            }

            .text-center {
              text-align: center !important;
            }

            .p-4 {
              padding: 1rem !important;
            }
          }
        `}
            </style>
        </div>
    );
};

export default LoginPage;
