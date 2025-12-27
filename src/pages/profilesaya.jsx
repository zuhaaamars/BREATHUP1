import React, { useState, useEffect } from "react";
import "./css/profilesaya.css";
import { User, Pencil, Save } from "lucide-react";

export default function ProfileCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null);
  const [file, setFile] = useState(null); // simpan file foto untuk upload
  const [password] = useState("********");

  // Ambil data user dari localStorage saat mount
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser) {
      setUsername(savedUser.nama);
      setEmail(savedUser.email);
      setPhoto(savedUser.foto || null);
    }
  }, []);

  // Handle perubahan foto (preview di frontend)
  const handlePhotoChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile); // simpan file untuk FormData
      const imageURL = URL.createObjectURL(selectedFile);
      setPhoto(imageURL); // preview di frontend
    }
  };

  // Handle simpan perubahan
  const handleSave = async () => {
    setIsEditing(false);

    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) return;

    const formData = new FormData();
    formData.append("nama", username);
    formData.append("email", email);
    if (file) formData.append("foto", file); // tambahkan file jika ada

    try {
      const res = await fetch(`http://localhost:5000/api/profile/${savedUser.id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.status === "success") {
        // Update localStorage dengan data terbaru dari backend
        localStorage.setItem("user", JSON.stringify(data.user));

        // Update state agar langsung tampil
        setUsername(data.user.nama);
        setEmail(data.user.email);
        setPhoto(data.user.foto);

        alert("Profil berhasil diperbarui!");
      } else {
        alert(data.message || "Gagal update profil!");
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan server.");
    }
  };

  return (
    <div className="profile-page">
      <h2 className="profile-title">Profil Akun</h2>
      <p className="profile-desc">
        Halaman ini menampilkan dan mengubah informasi akun pengguna.
      </p>

     <div className="profile-card">
        {/* FOTO PROFIL */}
        <div className="profile-avatar-container">
          <div className="profile-avatar">
            {photo ? (
              <img src={photo} alt="Profile" className="profile-photo" />
            ) : (
              <User size={80} color="#3b82f6" />
            )}
          </div>

          {isEditing && (
            <>
              <label htmlFor="photo-upload" className="upload-btn">
                Ganti Foto
              </label>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={{ display: "none" }}
              />
            </>
          )}
        </div>

        {/* INFORMASI */}
        <div className="profile-info">
          <div className="info-row">
            <span className="label">Username</span>
            {isEditing ? (
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="edit-input"
              />
            ) : (
              <span className="value">{username}</span>
            )}
          </div>

          <div className="info-row">
            <span className="label">Email</span>
            {isEditing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="edit-input"
              />
            ) : (
              <span className="value">{email}</span>
            )}
          </div>

          <div className="info-row">
            <span className="label">Password</span>
            <span className="value">{password}</span>
          </div>

          <div className="edit-btn-container">
            {isEditing ? (
              <button className="save-btn" onClick={handleSave}>
                <Save size={16} /> Simpan
              </button>
            ) : (
              <button className="edit-btn" onClick={() => setIsEditing(true)}>
                <Pencil size={16} /> Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
