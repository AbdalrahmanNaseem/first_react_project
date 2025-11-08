import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import SidebarAndNavbar from "../components/SidebarAndNavbar";

const CampaignDetails = () => {
    const navigate = useNavigate();
    const { campaignName } = useParams();

    // بيانات الحملات
    const campaigns = [
        {
            name: "Test Project",
            image: "/images/88660e553d9342975bab0d35a678e695c69335ca.jpg",
        },
        {
            name: "Smart Sofa",
            image: "/images/88660e553d9342975bab0d35a678e695c69335ca.jpg",
        },
        {
            name: "Crypto Wallet App",
            image: "/images/88660e553d9342975bab0d35a678e695c69335ca.jpg",
        },
        {
            name: "AI Assistant Tool",
            image: "/images/88660e553d9342975bab0d35a678e695c69335ca.jpg",
        },
    ];

    // البحث عن الحملة حسب الاسم في الرابط
    const formattedName = campaignName.replace(/-/g, " ").toLowerCase();
    const campaign = campaigns.find(
        (c) => c.name.toLowerCase().replace(/\s+/g, " ") === formattedName
    );

    if (!campaign) {
        return (
            <div
                className="vh-100 d-flex justify-content-center align-items-center text-white"
                style={{ backgroundColor: "#0f0f0f" }}
            >
                <h2>Campaign not found 😢</h2>
            </div>
        );
    }

    return (
        <div
            className="d-flex flex-column flex-lg-row vh-100"
            style={{
                backgroundColor: "#0f0f0f",
                color: "#fff",
                overflowY: "auto",
            }}
        >
            <SidebarAndNavbar active="Campaigns" />

            {/* المحتوى الرئيسي */}
            <div
                className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center flex-grow-1 main-content"
                style={{
                    marginLeft: "260px",
                    padding: "30px",
                }}

            >
                <img
                    src={campaign.image}
                    alt={campaign.name}
                    className="rounded campaign-image"
                    style={{
                        width: "600px",
                        maxWidth: "90%",
                        borderRadius: "25px",
                        boxShadow: "0 0 30px rgba(155, 92, 255, 0.25)",
                    }}
                />
                <h3 className="mt-4 fw-bold">{campaign.name}</h3>

                <footer className="text-secondary text-center mt-5">
                    © 2025 Sparkit. All rights reserved.
                </footer>
            </div>


        </div>
    );
};

export default CampaignDetails;
