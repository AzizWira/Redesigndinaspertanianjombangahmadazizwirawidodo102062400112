import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProfilPage } from "./pages/ProfilPage";
import { GaleriPage } from "./pages/GaleriPage";
import { BeritaPage } from "./pages/BeritaPage";
import { LaporanPage } from "./pages/LaporanPage";
import { BackToTop } from "./components/BackToTop";
import { Navbar } from "./components/Navbar";
import { WelcomePopup } from "./components/WelcomePopup";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Show welcome popup on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 500); // Delay 500ms untuk smooth appearance
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 relative w-full min-h-screen transition-colors duration-300">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} 
          />
          <Route 
            path="/profil" 
            element={
              <>
                <div className="px-[20px] md:px-[50px] lg:px-[100px] py-[20px]">
                  <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                </div>
                <ProfilPage />
              </>
            } 
          />
          <Route 
            path="/galeri" 
            element={
              <>
                <div className="px-[20px] md:px-[50px] lg:px-[100px] py-[20px]">
                  <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                </div>
                <GaleriPage />
              </>
            } 
          />
          <Route 
            path="/berita" 
            element={
              <>
                <div className="px-[20px] md:px-[50px] lg:px-[100px] py-[20px]">
                  <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                </div>
                <BeritaPage />
              </>
            } 
          />
          <Route 
            path="/laporan" 
            element={
              <>
                <div className="px-[20px] md:px-[50px] lg:px-[100px] py-[20px]">
                  <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                </div>
                <LaporanPage />
              </>
            } 
          />
        </Routes>

        {/* Back to Top Button */}
        <BackToTop />

        {/* Welcome Popup */}
        <WelcomePopup isOpen={showWelcome} onClose={() => setShowWelcome(false)} />
      </div>
    </Router>
  );
}