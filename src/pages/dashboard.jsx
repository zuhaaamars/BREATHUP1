import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/dashboard.css";

function Dashboard() {
    const [berita, setBerita] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const user = JSON.parse(localStorage.getItem("user"));



    useEffect(() => {
        axios.get("http://localhost:5000/api/berita")
            .then(res => setBerita(res.data))
            .catch(err => console.error("Gagal memuat berita:", err));
    }, []);

    return (
        <div>

        {/* Hero Section */}
        <section id="home" className="hero">
            <div className="hero-text">
                <h1>BreatheEasy: Kesehatan Pernapasan yang Lebih Baik untuk Anda</h1>
                <p>
                    Aplikasi cerdas kami membantu Anda 
                    memantau kesehatan pernapasan dan pengobatan TBC,
                    memberikan wawasan yang diperlukan untuk hidup lebih sehat.
                </p>
            </div>
            <div className="hero-image">
                <img src="assets/12.png" alt="Meditasi dan pernapasan sehat" />
            </div>
        </section>

        {/* Info Section */}
        <section className="info">
            <div className="info-left">
                <img src="assets/22.png" alt="Ilustrasi batuk" />
            </div>
            <div className="info-right">
                <h1>Satu Juta Kematian TBC Tiap Tahun?</h1>
                <p>
                    Tuberkulosis (TBC) telah kembali menjadi penyakit menular 
                    paling mematikan kedua di dunia, 
                    membunuh sekitar 1,5 juta orang setiap tahunnya.
                </p>

                <p>
                    Angka tragis ini menunjukkan kegagalan kolektif global untuk mengakhiri epidemi TBC; 
                    penyakit penyebab kematian No. 2 Global ini hampir selalu menyerang kaum miskin.
                </p>

                <p>
                    Akar masalahnya bukan hanya bakteri, 
                    tetapi dipicu oleh kondisi sosial seperti kepadatan hunian, sanitasi buruk, 
                    dan kurangnya akses terhadap makanan bergizi.
                </p>
                <h2>Bagaimana Inovasi Digital Memutus Kesenjangan Akses dan Gizi Pasien?</h2>
            </div>
        </section>

        {/* Dukungan Section */}
        <section className="dukungan">
            <div className="dukungan-text">
                <h2>Cara BreatheUp Mendukung Proses Penyembuhan Anda</h2>
                <p>
                BreathUp adalah aplikasi inovatif yang dirancang untuk mendukung pasien tuberkulosis (TBC) 
                dalam menjalani pengobatan dengan fitur edukasi, panduan gizi, dan info rujukan. 
                Dengan antarmuka yang ramah pengguna, BreathUp membantu meningkatkan kepatuhan dan kesadaran kesehatan pernapasan.
                </p>
            </div>
            <img src="assets/6.png" alt="Ilustrasi dokter dan pasien" />
        </section>

        {/* Fitur Section */}
        <section className="fitur">
        <h2>Yuk Sembuh dari TBC!</h2>
        <div className="fitur-container">

            <div className="fitur-box">
            <h3>Screening TBC</h3>
            <p>Deteksi dini gejala TBC dengan mudah melalui pertanyaan singkat dan hasil cepat.</p>
            <img src="assets/screening2.png" alt="Screening" className="fitur-img" />
            </div>

            <div className="fitur-box">
            <h3>Konsultasi Online</h3>
            <p>Terhubung langsung dengan tenaga medis untuk diskusi, tanya jawab, dan pendampingan.</p>
            <img src="assets/konsultasi.png" alt="Konsultasi Online" className="fitur-img" />
            </div>

            <div className="fitur-box">
            <h3>Rekomendasi Terapi</h3>
            <p>Dapatkan saran terapi sesuai kondisi kesehatan Anda berdasarkan hasil screening dan konsultasi.</p>
            <img src="assets/rekomendasiterapi.png" alt="Rekomendasi Terapi" className="fitur-img" />
            </div>

            <div className="fitur-box">
            <h3>Edukasi dan Panduan Gizi</h3>
            <p>Informasi penting tentang pola hidup sehat, panduan nutrisi, serta tips pencegahan TBC.</p>
            <img src="assets/gizi.png" alt="Edukasi dan panduan gizi" className="fitur-img" />
            </div>

        </div>
        </section>

        {/* ---- BAGIAN BERITA SUDAH DIUBAH ---- */}
        <section className="berita">
            <h2>Berita Kasus TBC</h2>
            <div className="berita-container">
                {berita.length === 0 ? (
                    <p>Memuat berita...</p>
                ) : (
                    berita.map((item) => (
                        <article className="berita-item" key={item.id}>
                            <img
                                src={`http://localhost:5000/static/uploads/${item.gambar}`}
                                alt={item.judul}
                            />
                            <h3>{item.judul}</h3>
                            <p>{item.deskripsi}</p>
                            {item.url && (
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="baca-selengkapnya"
                                >
                                    Baca Selengkapnya
                                </a>
                            )}

                        </article>
                    ))
                )}
            </div>
        </section>

        </div>
    );
}

export default Dashboard;
