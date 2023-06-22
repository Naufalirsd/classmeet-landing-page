import React from "react";
import "./../components/Style.css";

const Unit = () => {
    return (
        <div
            className="unit container d-flex flex-wrap mt-5 gap-3 justify-content-center"
            style={{ borderRadius: "20px" }}>
            <div className="unit-card">
                <div
                    className="unit-title d-flex gap-3"
                    style={{ alignItems: "center" }}>
                    <p className="unit-p">1</p>
                    <h3 className="unit-h6">TPA Al Mahir</h3>
                </div>
                <div className="unit-ul">
                    <ul>
                        <li>
                            <p>Anak-anak usia 6-13 thn</p>
                        </li>
                        <li>
                            <p>
                                Materi pokok: Karimah dasar & tahsin, Tilawah
                                Al-Qur'an, Hafalan juz 30
                            </p>
                        </li>
                        <li>
                            <p>
                                Materi Penunjang: Aqidah, Do'a, Dzikir & Adab
                                Harian, Fiqih ibadah, siroh,, bhs. Arab dasar,
                                hadits-hadits pilihan, kitabah/khat
                            </p>
                        </li>
                        <li>
                            <p>Masa pendidikan 2 tahun</p>
                        </li>
                        <li>
                            <p>
                                Ujian & terima raport setiap 1 semester (6
                                bulan)
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="unit-card">
                <div
                    className="unit-title d-flex gap-3"
                    style={{ alignItems: "center" }}>
                    <p className="unit-p">2</p>
                    <h3 className="unit-h6">PPQ IT Al Mahir</h3>
                </div>
                <div className="unit-ul">
                    <ul>
                        <li>
                            <p>Pondok IT setaraf SLTA (Khusus ikhwan)</p>
                        </li>
                        <li>
                            <p>Karantina bhs. Arab & bhs. Inggris</p>
                        </li>
                        <li>
                            <p>
                                Materi dinniyah & tahfidz: Aqidah, Fiqih, Siroh,
                                Imla' wa Khat, dll
                            </p>
                        </li>
                        <li>
                            <p>
                                Materi IT berbasis project (FrontEnd, BackEnd,
                                Mobile)
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="unit-card">
                <div
                    className="unit-title d-flex gap-3"
                    style={{ alignItems: "center" }}>
                    <p className="unit-p">3</p>
                    <h3 className="unit-h6">Reguler Tahsin</h3>
                </div>
                <div className="unit-ul">
                    <ul>
                        <li>
                            <p>Tersedia kelas privat maupun reguler</p>
                        </li>
                        <li>
                            <p>Tersedia kelas ikhwan ataupun akhwat</p>
                        </li>
                        <li>
                            <p>Menggunakan metode Karimah</p>
                        </li>
                        <li>
                            <p>
                                Dibimbing langsung oleh Asatidzah yang telah
                                terlatih mengajarkan metode Karimah
                            </p>
                        </li>
                        <li>
                            <p>3 bulan masa belajar</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="unit-card">
                <div
                    className="unit-title d-flex gap-3"
                    style={{ alignItems: "center" }}>
                    <p className="unit-p">4</p>
                    <h3 className="unit-h6">Reguler Bahasa Arab</h3>
                </div>
                <div className="unit-ul">
                    <ul>
                        <li>
                            <p>Durusullughah</p>
                        </li>
                        <li>
                            <p>Nahwu & Shorof</p>
                        </li>
                        <li>
                            <p>Khusus Ikhwan</p>
                        </li>
                        <li>
                            <p>Periode belajar 6 bulan</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="unit-card">
                <div
                    className="unit-title d-flex gap-3"
                    style={{ alignItems: "center" }}>
                    <p className="unit-p">5</p>
                    <h3 className="unit-h6">Kelas Tahfidz</h3>
                </div>
                <div className="unit-ul">
                    <ul>
                        <li>
                            <p>Setoran hafalan juz 1-3, & 28-30</p>
                        </li>
                        <li>
                            <p>Pembelajaran sepekan 2x</p>
                        </li>
                        <li>
                            <p>Periode belajar 6 bulan</p>
                        </li>
                        <li>
                            <p>Target 6 bulan hafal 3 juz</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Unit;
