import React from "react";
import "./../components/Style.css";

const Headers = () => {
    return (
        <div className="">
            <header className="header text-white">
                <div className="header-text">
                    <h1>Pondok Pesantren Qur'an</h1>
                    <h1 className="h-1">Al Mahir</h1>
                    <i>
                        Menyiapkan para Hafidz Qur'an mahir dalam berbahasa
                        Arab, mandiri dan profesional{" "}
                    </i>
                    <div className="d-flex gap-2">
                        <button
                            className="btn-head"
                            style={{
                                padding: "15px 20px",
                                border: "none",
                                backgroundColor: "#0d6efd",
                                color: "white",
                                borderRadius: "5px",
                            }}>
                            Informasi <i class="ri-arrow-right-line"></i>
                        </button>
                        <button
                            className="btn-head"
                            style={{
                                padding: "15px 20px",
                                border: "none",
                                backgroundColor: "#14133B",
                                color: "white",
                                borderRadius: "5px",
                            }}>
                            Daftar Sekarang <i class="ri-arrow-right-line"></i>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Headers;
