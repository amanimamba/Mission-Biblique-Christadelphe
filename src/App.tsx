import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CultesPage from './pages/CultesPage';
import EventsPage from './pages/EventsPage';
import ProjectsPage from './pages/ProjectsPage';
import MinistriesPage from './pages/MinistriesPage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 flex flex-col font-sans selection:bg-[#c2674b] selection:text-white">
      <ScrollToTop />
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apropos" element={<AboutPage />} />
          <Route path="/cultes" element={<CultesPage />} />
          <Route path="/evenements" element={<EventsPage />} />
          <Route path="/projets" element={<ProjectsPage />} />
          <Route path="/ministeres" element={<MinistriesPage />} />
          <Route path="/equipe" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
