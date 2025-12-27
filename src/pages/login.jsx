import { useState } from "react";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Card, CardContent } from "../components/card";
import { Eye, EyeOff, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Email dan password wajib diisi!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password
      });

      const data = response.data;

      if (data.status === "success") {
        alert("Login berhasil!");

        // ⬇️ SIMPAN DATA LOGIN DI LOCAL STORAGE
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);

        navigate("/dashboard");
      } else {
        alert("Login gagal!");
        setMessage("Login gagal!");
      }
    } catch (error) {
      alert("Login gagal!");
      setMessage("Login gagal!");
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <div className="login-left">
          <div className="login-logo">
            <img src="/assets/logobreathup.png" alt="BreatheUp logo" className="logo-icon" />
            <h1 className="logo-text">
              <span className="text-white">Breathe</span>
              <span className="text-dark">Up</span>
            </h1>
          </div>

          <img src="/assets/loginregister1.png" alt="Ilustrasi Login" className="login-illustration" />
        </div>

        <CardContent className="login-right">
          <h2 className="welcome-text">Selamat Datang di BreatheUp!</h2>
          <h3 className="login-subtitle">Login</h3>

          <div className="input-group">

            <div className="input-wrapper">
              <Input placeholder="Email" className="input-field" value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <User className="input-icon" size={18} />
            </div>

            <div className="input-wrapper">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <EyeOff onClick={() => setShowPassword(false)} className="password-toggle" size={18} />
              ) : (
                <Eye onClick={() => setShowPassword(true)} className="password-toggle" size={18} />
              )}
            </div>

            <p className="create-account">
              Don’t have an account?{" "}
              <Link to="/registrasi" className="create-link">Create account</Link>
            </p>

            <Button className="login-button" onClick={handleLogin} disabled={loading}>
              {loading ? "Processing..." : "Login"}
            </Button>

            {message && <p className="status-message">{message}</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

