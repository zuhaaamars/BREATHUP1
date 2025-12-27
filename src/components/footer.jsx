import React from "react";
import "./css/footer.css";

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="footer">

        {/* Logo di pojok kiri atas */}
        <div className="footer-logo-wrapper">
          <img
            src="/assets/logobreathup.png"
            alt="BreatheUp Logo"
            className="footer-logo"
          />
        </div>

        <div className="footer-container">

          {/* About */}
          <div className="footer-box">
            <h3>About Us</h3>
            <p>
              BreatheUp adalah aplikasi pendamping pasien TBC yang membantu
              dalam screening, konsultasi online, serta edukasi kesehatan.
            </p>
          </div>

          {/* Contact */}
          <div className="footer-box">
            <h3>Contact Us</h3>
            <p>BreatheUp.id</p>
            <p>breatheup@gmail.com</p>
          </div>

          {/* Social Media */}
          <div className="social-icons">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#"><i className="fab fa-facebook"></i></a>
            
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#"><i className="fab fa-instagram"></i></a>
            
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#"><i className="fab fa-tiktok"></i></a>
          </div>

        </div>

        <hr />
        <p className="footer-copy">© 2025 BreatheUp. Semua Hak Dilindungi.</p>
      </footer>
    </>
  );
};

export default Footer;
