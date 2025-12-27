import { useState } from "react";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Card, CardContent } from "../components/card";
import { Eye, EyeOff, User, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";  // ⬅⬅ TAMBAHAN
import axios from "axios";
import "./css/registrasi.css";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  // 🔹 State untuk input
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // ⬅⬅ TAMBAHAN

  // 🔹 Function register
  const handleRegister = async () => {
  if (!email || !nama || !password) {
    alert("Semua kolom wajib diisi!");
    return;
  }

  setLoading(true);
  setMessage("");

  try {
    const response = await axios.post("http://localhost:5000/api/register", {
      nama,
      email,
      password
    });

    const data = response.data;

    if (data.status === "success") {
      alert("Registrasi berhasil!"); // ✅ SUKSES
      navigate("/login");

      setEmail("");
      setNama("");
      setPassword("");

    } else {
      alert("Registrasi gagal!"); // ❌ GAGAL
      setMessage("Registrasi gagal!");
    }

      } catch (error) {
        alert("Registrasi gagal!"); // ❌ SERVER ERROR
        setMessage("Registrasi gagal!");
      }

      setLoading(false);
    };


  return (
    <div className="login-container">
      <Card className="login-card">

        {/* ====================================== */}
        {/* BAGIAN KIRI */}
        {/* ====================================== */}
        <div className="login-left">
          <div className="login-logo">
            <img
              src="/assets/logobreathup.png"
              alt="BreatheUp logo"
              className="logo-icon"
            />
            <h1 className="logo-text">
              <span className="text-white">Breathe</span>
              <span className="text-dark">Up</span>
            </h1>
          </div>

          <img
            src="/assets/loginregister1.png"
            alt="Ilustrasi Login"
            className="login-illustration"
          />
        </div>

        {/* ====================================== */}
        {/* BAGIAN KANAN */}
        {/* ====================================== */}
        <CardContent className="login-right">
          <h2 className="welcome-text">Selamat Datang di BreatheUp!</h2>
          <h3 className="login-subtitle">Create Account</h3>

          <div className="input-group">
            {/* Email */}
            <div className="input-wrapper">
              <Input
                placeholder="Email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Mail className="input-icon" size={18} />
            </div>

            {/* Username */}
            <div className="input-wrapper">
              <Input
                placeholder="Username"
                className="input-field"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <User className="input-icon" size={18} />
            </div>

            {/* Password */}
            <div className="input-wrapper">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <EyeOff
                  onClick={() => setShowPassword(false)}
                  className="password-toggle"
                  size={18}
                />
              ) : (
                <Eye
                  onClick={() => setShowPassword(true)}
                  className="password-toggle"
                  size={18}
                />
              )}
            </div>

            {/* Link login */}
            <p className="create-account">
              Already have an account?{" "}
              <Link to="/login" className="create-link">
                Login
              </Link>
            </p>

            {/* Tombol register */}
            <Button className="login-button" onClick={handleRegister} disabled={loading}>
              {loading ? "Processing..." : "Sign IN"}
            </Button>

            {/* Status message */}
            {message && <p className="status-message">{message}</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
