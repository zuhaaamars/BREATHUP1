import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // <— WAJIB import axios
import "./css/hasilscreening.css";

export default function HasilScreening() {
  const [risk, setRisk] = useState("");
  const [description, setDescription] = useState("");
  const [jawaban, setJawaban] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/hasil-screening")
      .then((res) => {
        setRisk(res.data.risk);
        setDescription(res.data.description);
        setJawaban(res.data.jawaban); // <— tampilkan jawaban
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <div className="hasil-page">
      <main className="hasil-container">
        <h1 className="hasil-title">Hasil Screening Anda</h1>

        <div className={`hasil-risk-pill ${risk === "tinggi" ? "risk-high" : "risk-low"}`}>
          <h3>{risk || "Memuat..."}</h3>
          <p>{description || "Sedang mengambil data..."}</p>
        </div>

        {/* ❗ Tampilkan jawaban pasien */}
        <section className="hasil-card">
          <h3 className="hasil-card-title">Jawaban Anda</h3>
          <ul className="hasil-rec-list">
            {jawaban.map((item, index) => (
              <li key={index}>
                {item.pertanyaan}: <strong>{item.jawab}</strong>
              </li>
            ))}
          </ul>
        </section>

        <section className="hasil-card">
          <h3 className="hasil-card-title">Rekomendasi Terapi</h3>
          <ol className="hasil-rec-list">
            <li>Tetap jaga pola hidup sehat</li>
            <li>Segera periksa jika gejala semakin sering atau berat</li>
            <li>Ikuti Edukasi “Rumah Sehat” dan “Panduan Gizi”</li>
          </ol>

          <div className="hasil-btns">
            <Link to="/konsultasi" className="hasil-btn primary">
              Konsultasi Online
            </Link>
            <Link to="/edukasi" className="hasil-btn secondary">
              Lihat Edukasi
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
