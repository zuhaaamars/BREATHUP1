import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/screening.css";

const TBCForm = () => {
  const [formData, setFormData] = useState({
    nama: "",
    usia: "",
    jenisKelamin: "",   // <-- sesuaikan dengan backend (camelCase)
    riwayat: "",
    jawaban: ["0","0","0","0","0","0"]
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (index, value) => {
    const newJawaban = [...formData.jawaban];
    newJawaban[index] = value === "Ya" ? "1" : "0";
    setFormData((prev) => ({ ...prev, jawaban: newJawaban }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nama: formData.nama,
      usia: formData.usia,
      jenisKelamin: formData.jenisKelamin, // <-- ini yang backend minta
      riwayat: formData.riwayat,
      jawaban: formData.jawaban.map(Number)
    };

    try {
      await fetch("http://127.0.0.1:5000/api/screening", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      navigate("/hasilscreening");
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <div className="tbc-form-container">
      <div className="login-logo">
        <img src="/assets/breathup-hd.png" alt="BreatheUp logo" className="logo-icon" />
        <h1 className="logo-text">
          <span className="text-white">Breathe</span><span className="text-dark">Up</span>
        </h1>
      </div>

      <header className="form-header">
        <h2>TBC SCREENING FORM</h2>
        <p>Isi formulir di bawah ini untuk menentukan risiko Anda terhadap TBC.</p>
      </header>

      <form className="tbc-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nama Lengkap</label>
          <input type="text" name="nama" value={formData.nama} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Usia</label>
            <input type="number" name="usia" value={formData.usia} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Jenis Kelamin</label>
            <select name="jenisKelamin" value={formData.jenisKelamin} onChange={handleChange} required>
              <option value="">Pilih</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
        </div>

        <h3>Status Kesehatan</h3>
        <div className="question-group">
          {[
            "Batuk berdahak lebih dari 2 minggu.",
            "Demam lama pada sore/malam.",
            "Berkeringat di malam hari.",
            "Penurunan berat badan tanpa sebab.",
            "Nafsu makan menurun.",
            "Sering lelah."
          ].map((q, i) => (
            <div key={i} className="question">
              <label>{q}</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name={`q${i}`}
                    value="Ya"
                    checked={formData.jawaban[i] === "1"}
                    onChange={(e) => handleRadioChange(i, e.target.value)}
                  /> Ya
                </label>
                <label>
                  <input
                    type="radio"
                    name={`q${i}`}
                    value="Tidak"
                    checked={formData.jawaban[i] === "0"}
                    onChange={(e) => handleRadioChange(i, e.target.value)}
                  /> Tidak
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="form-group">
          <label>Riwayat Penyakit Sebelumnya</label>
          <input type="text" name="riwayat" value={formData.riwayat} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">Kirim Jawaban</button>
      </form>
    </div>
  );
};

export default TBCForm;
