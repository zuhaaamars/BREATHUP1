import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // ⇦ TAMBAH INI

  // Cek login + ambil data user
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);

    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  // Tutup dropdown saat klik di luar
  const handleOutsideClick = (e) => {
    if (
      !e.target.closest(".dropdown") &&
      !e.target.closest(".profile-dropdown")
    ) {
      setDropdownOpen(false);
      setProfileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  // Fungsi Logout
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <header>
      {/* KIRI: HAMBURGER + LOGO */}
      <div className="left-header">
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* LOGO */}
        <div className="logo">
          <img
            src="/assets/logobreathup.png"
            alt="BreatheUp Logo"
            className="logo-img"
          />
          <span className="logo-text">
            <span className="white-text">Breath</span>
            <span className="purple-text">Up</span>
          </span>
        </div>
      </div>

      {/* NAVIGASI */}
      <nav>
        <ul className={`${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/inforujukan" onClick={() => setMenuOpen(false)}>
              Rujukan
            </Link>
          </li>

          {/* Dropdown Layanan */}
          <li
            className={`dropdown ${dropdownOpen ? "active" : ""}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <button className="dropbtn" type="button">
              Layanan ▾
            </button>
            <ul className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
              <li>
                <Link
                  to="/screening"
                  onClick={() => {
                    setMenuOpen(false);
                    setDropdownOpen(false);
                  }}
                >
                  Screening
                </Link>
              </li>
              <li>
                <Link
                  to="/konsultasi"
                  onClick={() => {
                    setMenuOpen(false);
                    setDropdownOpen(false);
                  }}
                >
                  Konsultasi Online
                </Link>
              </li>
              <li>
                <Link
                  to="/inforujukan"
                  onClick={() => {
                    setMenuOpen(false);
                    setDropdownOpen(false);
                  }}
                >
                  Info Rujukan Rumah Sakit
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/edukasi" onClick={() => setMenuOpen(false)}>
              Edukasi
            </Link>
          </li>

          {/* LOGIN atau PROFIL */}
          {!isLoggedIn ? (
            <li>
              <button
                className="btn-login"
                type="button"
                onClick={() => (window.location.href = "/login")}
              >
                Login
              </button>
            </li>
          ) : (
            <li className="profile-dropdown">
              <div
                className="profile-wrapper"
                onClick={() => setProfileOpen(!profileOpen)}
              >
               <img
      src={user && user.foto ? user.foto : "/assets/profile.png"}
      alt="Profile"
      className="profile-icon"
    />

                {/* ⇦ USERNAME MUNCUL DI SINI */}
                <span className="profile-name">
                  {user ? user.nama : "User"}
                </span>

                <span className="arrow">▾</span>
              </div>

              <ul className={`profile-menu ${profileOpen ? "show" : ""}`}>
                <li>
                  <Link
                    to="/profilesaya"
                    onClick={() => setProfileOpen(false)}
                  >
                    Profil Saya
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Keluar</button>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;