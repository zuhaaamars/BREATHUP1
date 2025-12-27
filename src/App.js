import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header';
import Content from './components/content';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Registrasi from './pages/registrasi';
import Edukasi from './pages/edukasi';
import Konsultasi from './pages/konsultasi';
import Screening from "./pages/screening";
import Hasilscreening from "./pages/hasilscreening";
import ChatKonsul from "./pages/chatkonsul";
import InfoRujukan from './pages/inforujukan';
import Footer from './components/footer';
import Profile from './pages/profilesaya';

// Komponen pembungkus agar bisa pakai useLocation
function AppLayout() {
  const location = useLocation();

  // daftar path yang tidak ingin menampilkan header/footer
  const hideHeaderPaths = ['/login', '/registrasi', '/screening',   '/chatkonsul'];
  const hideFooterPaths = ['/login', '/registrasi', '/chatkonsul'];

  return (
    <>
      {/* Header hanya muncul jika path bukan login/registrasi */}
      {!hideHeaderPaths.includes(location.pathname) && <Header />}

      {/* Konten utama */}
      <main className="page-content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edukasi" element={<Edukasi />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrasi" element={<Registrasi />} />
          <Route path="/konsultasi" element={<Konsultasi />} />
          <Route path="/inforujukan" element={<InfoRujukan />} />
          <Route path="/screening" element={<Screening />} /> 
          <Route path="/hasilscreening" element={<Hasilscreening />} /> 
          <Route path="/chatkonsul" element={<ChatKonsul/> } />
          <Route path="/content" element={<Content />} />
          <Route path="/profilesaya" element={<Profile />} />
        </Routes>
      </main>

      {/* Footer di bawah */}
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
