import React from "react";
import "./css/edukasi.css";

const Edukasi = () => {
  return (
    <div>
      {/* ===== Section 1 : Rumah Sehat ===== */}
      <section id="rumahsehat" className="edukasirumahsehat">
            <div className="rumahsehat-text">
                <h1>Mengapa Rumah Sehat Penting?</h1>
                    <p>
                      Lingkungan rumah yang sehat memiliki peran sangat penting dalam pencegahan penularan TBC
                      sekaligus mempercepat proses penyembuhan bagi pasien yang sedang menjalani pengobatan. 
                      Rumah yang selalu terjaga kebersihannya, baik dari debu, kotoran, maupun kelembapan berlebih, 
                      mampu mengurangi jumlah kuman yang menempel di permukaan benda sehari-hari. 
                    </p>
                    <p>
                      Sirkulasi udara yang baik misalnya melalui jendela yang rutin dibuka atau penggunaan ventilasi silang 
                      membuat pertukaran udara berlangsung lancar sehingga udara pengap yang mungkin mengandung bakteri TBC 
                      dapat segera tergantikan dengan udara segar.
                    </p>
                    <p>
                      Pencahayaan alami yang cukup, terutama sinar matahari, juga berperan menekan pertumbuhan kuman 
                      karena sinar ultraviolet mampu membantu membunuh mikroorganisme penyebab penyakit
                    </p>
            </div>
            <div className="rumahsehat-image">
                <img src="/assets/rumahsehat.png" alt="Rumah sehat" />
            </div>
        </section>

      <section className="card-edukasi">
        <div className="edukasi">

            <div className="edukasi-box">
            <h3>Ventilasi & Sirkulasi Udara</h3>
            <p>
              1. Buka jendela setiap hari minimal 2–3 jam agar udara segar masuk dan kuman keluar.
            </p>
            <p>
              2. Gunakan ventilasi silang (dua bukaan berhadapan) untuk mempercepat pergantian udara.
            </p>
            <p>
              3. Jika memungkinkan, pasang exhaust fan atau ventilator tambahan di ruang tidur
            </p>
            <img src="assets/screening2.png" alt="Screening" className="edukasi-img" />
            </div>

            <div className="edukasi-box">
            <h3>Kebersihan Rumah</h3>
            <p>
              1. Bersihkan lantai dan permukaan benda dengan disinfektan ringan secara rutin
            </p>
            <p>
              2. Sediakan tempat cuci tangan dengan sabun di area strategis.
            </p>
            <p>
              3. Pisahkan peralatan makan pasien dan cuci dengan air panas jika diperlukan.
            </p>
            <img src="assets/konsultasi.png" alt="Konsultasi Online" className="edukasi-img" />
            </div>

            <div className="edukasi-box">
            <h3>Pengelolaan Limbah & Barang Pribadi</h3>
            <p>
              1. Gunakan tempat sampah tertutup khusus untuk tisu atau dahak pasien dan buang secara rutin.
            </p>
            <p>
              2. Cuci pakaian, sprei, dan handuk pasien secara terpisah dengan air panas atau deterjen antiseptik.
            </p>
            <img src="assets/rekomendasiterapi.png" alt="Rekomendasi Terapi" className="edukasi-img" />
            </div>

            <div className="edukasi-box">
            <h3>Edukasi Keluarga & Pencegahan</h3>
            <p>
              1. Ajarkan etika batuk dan bersin kepada semua anggota keluarga.
            </p>
            <p>
              2. Biasakan cuci tangan dengan sabun setelah kontak dengan pasien.
            </p>
            <p>
              3. Lakukan skrining TBC berkala untuk anggota keluarga serumah.
            </p>
            <img src="assets/gizi.png" alt="Edukasi dan panduan gizi" className="edukasi-img" />
            </div>

        </div>
      </section>

      {/* ===== Section 2 : Panduan Gizi ===== */}
      <section className="panduangizi">
        <div className="panduangizi-text">
          <h1>Panduan Gizi untuk Pemulihan TBC</h1>
          <p>
            Penderita TBC dianjurkan mengonsumsi makanan tinggi protein, vitamin, dan mineral untuk 
            membantu perbaikan jaringan paru serta meningkatkan daya tahan tubuh. Pilih sumber protein 
            seperti daging tanpa lemak, ikan, telur, tahu, dan tempe, 
            serta perbanyak buah dan sayuran kaya vitamin C, A, dan E.
          </p>
          <p>
            Pastikan asupan karbohidrat kompleks seperti nasi merah atau gandum utuh untuk energi, 
            serta minum cukup air agar proses pemulihan lebih optimal. Batasi makanan tinggi gula, garam, dan lemak jenuh, 
            serta hindari alkohol dan rokok agar pengobatan berjalan efektif.
          </p>
        </div>
        <div className="panduangizi-image">
          <img src="/assets/gizi.png" alt="Panduan Gizi" />
        </div>
      </section>

      <section className="card-edukasi">
        <div className="edukasi">

            <div className="edukasi-box">
            <h3>Kebutuhan Energi dan Protein</h3>
            <p>
              1. Konsumsi makanan berprotein tinggi seperti daging tanpa lemak, ayam, ikan, telur, tahu, tempe, dan kacang-kacangan.
            </p>
            <p>
              2. Tambahkan kalori sehat dari karbohidrat kompleks (nasi merah, roti gandum, kentang) untuk mendukung proses penyembuhan.
            </p>
            <img src="assets/screening2.png" alt="Screening" className="edukasi-img" />
            </div>

            <div className="edukasi-box">
            <h3>Asupan Vitamin dan Mineral</h3>
            <p>
              1. Perbanyak buah dan sayuran berwarna terang yang kaya vitamin A, C, dan E (misalnya wortel, jeruk, bayam, tomat) untuk meningkatkan daya tahan tubuh.
            </p>
            <p>
              2. Sertakan sumber mineral seperti seng (dari biji-bijian, seafood) dan zat besi (dari daging merah, sayuran hijau).
            </p>
            <img src="assets/konsultasi.png" alt="Konsultasi Online" className="edukasi-img" />
            </div>

            <div className="edukasi-box">
            <h3>Cairan dan Hidrasi</h3>
            <p>
              1. Minum air putih minimal 8 gelas per hari untuk membantu mengeluarkan racun tubuh dan menjaga fungsi organ.
            </p>
            <p>
              2. Sertakan sup, jus buah tanpa gula, atau air kelapa sebagai variasi.
            </p>
            <img src="assets/rekomendasiterapi.png" alt="Rekomendasi Terapi" className="edukasi-img" />
            </div>

            <div className="edukasi-box">
            <h3>Pembatasan dan Kebiasaan Sehat</h3>
            <p>
              1. Hindari makanan tinggi gula, lemak jenuh, dan makanan olahan berpengawet.
            </p>
            <p>
              2. Jauhi alkohol dan rokok, serta pertahankan jadwal makan teratur agar pengobatan berjalan optimal.
            </p>
            <img src="./assets/gizi.png" alt="Edukasi dan panduan gizi" className="edukasi-img" />
            </div>

        </div>
      </section>

    </div>
  );
};

export default Edukasi;
