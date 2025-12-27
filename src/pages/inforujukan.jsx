import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/inforujukan.css";

const InfoRujukan = () => {
  const [dataRujukan, setDataRujukan] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/rujukan")
      .then((res) => {
        console.log("HASIL API:", res.data);
        setDataRujukan(res.data.data || []); 
      })
      .catch((err) => console.error("Gagal fetch rujukan:", err));
  }, []);

  return (
    <div>
      <section className="info-rujukan-section">

        {/* ================================
            BAGIAN ATAS (TIDAK DIUBAH)
        ================================= */}
        <div className="info-content">
          <div className="info-text">
            <h2>Apa itu MDR-TB?</h2>
            <p>
              MDR-TB (Multi Drug Resistant Tuberculosis) adalah jenis
              tuberkulosis yang resisten terhadap dua obat utama anti-TB,
              yaitu isoniazid dan rifampisin. Kondisi ini biasanya terjadi
              karena ketidakteraturan minum obat, penanganan yang kurang tepat,
              atau kualitas pengobatan yang rendah.
            </p>
          </div>
          <img src="assets/mdrtb2.png" alt="Ilustrasi MDR-TB" className="img-mdrtb" />
        </div>

        <div className="info-subcontent">
          <img src="assets/penangananmedis.png" alt="Pasien TB" className="img-pasien" />
          <div className="info-text">
            <h2>Pentingnya mendapatkan penanganan khusus</h2>
            <p>
              Penanganan MDR-TB membutuhkan perhatian khusus dari tenaga medis
              berpengalaman untuk memastikan pengobatan yang tepat.
            </p>
          </div>
        </div>

        {/* ================================
            BAGIAN RUJUKAN
        ================================= */}
        <h2 className="rujukan-title">Info Rujukan</h2>

        <div className="rujukan-grid">
          {dataRujukan.map((item, index) => (
            <div className="rujukan-card" key={index}>

              {/* GAMBAR */}
              <img
                src={`http://localhost:5000/static/uploads/${item.gambar}`}
                alt={item.nama_rs}
              />

              {/* NAMA RUMAH SAKIT */}
              <p>{item.nama_rs}</p>

              {/* LINK GOOGLE MAPS */}
              <a
                href={item.maps_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="alamat-btn">Lihat Alamat</button>
              </a>

            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default InfoRujukan;
