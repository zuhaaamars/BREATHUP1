import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/konsultasi.css";

export default function Konsultasi() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/konsultasi") // sesuaikan port backend
      .then((res) => {
        setDoctors(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal fetch data konsultasi:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="konsultasi-page">
      <main className="konsultasi-container">
        <h1 className="title">Konsultasi Online</h1>
        <p className="subtitle">Konsultasi mudah dengan tenaga medis kapan saja</p>

        <h2 className="section-title">Rekomendasi Dokter Paru-paru</h2>

        {loading && <p>Sedang memuat data dokter...</p>}

        {!loading && doctors.length === 0 && (
          <p>Belum ada dokter yang tersedia.</p>
        )}

        <div className="dokter-grid">
          {doctors.map((doctor) => (
            <div className="dokter-card" key={doctor.id_konsultasi}>
              <img
                src={`http://localhost:5000/static/uploads/${doctor.gambar}`}
                alt={doctor.nama_dokter}
                className="dokter-img"
                onError={(e) => (e.target.src = "/assets/default-dokter.png")}
              />

              <div className="dokter-info">
                <h3 className="dokter-name">{doctor.nama_dokter}</h3>
                <a
                  href={`https://wa.me/${doctor.nomor_wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="konsul-button"
                >
                  Mulai konsultasimu disini
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
