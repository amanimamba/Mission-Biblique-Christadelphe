import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useSearchParams } from 'react-router-dom';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import FeatureBar from './components/FeatureBar';
import QuoteBlock from './components/QuoteBlock';
import AboutSection from './components/AboutSection';
import MinistriesBanner from './components/MinistriesBanner';
import CulteCard from './components/CulteCard';
import EventCard from './components/EventCard';
import TestimonialQuote from './components/TestimonialQuote';
import TeamSection from './components/TeamSection';
import ProjectSection from './components/ProjectSection';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import { branches, cultes, events, Branch } from './data/mockData';
import { Calendar, Sparkles, MapPin, ArrowRight } from 'lucide-react';

function ChurchHome() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentBranchKey = searchParams.get('branch') || 'kinshasa';
  const currentBranch: Branch =
    branches.find((b) => b.key === currentBranchKey) || branches[0];

  // Filter cultes by branch, or fallback gracefully with all cultes if specific branch has fewer
  const branchCultes = cultes.filter((c) => c.branchKey === currentBranchKey);
  const displayCultes =
    branchCultes.length > 0
      ? branchCultes
      : cultes.filter((c) => c.branchKey === 'kinshasa');

  // Filter events by branch
  const branchEvents = events.filter((e) => e.branchKey === currentBranchKey);
  const displayEvents =
    branchEvents.length > 0
      ? branchEvents
      : events.filter((e) => e.branchKey === 'kinshasa');

  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-800 flex flex-col font-sans selection:bg-[#c2674b] selection:text-white">
      <Header />

      {/* Main Content Area structured identically to the uploaded reference image */}
      <main className="flex-1">
        {/* Branch Context Notification Bar if viewing non-main branch */}
        {!currentBranch.isMain && (
          <div className="bg-[#1f262e] text-white px-4 py-2 text-xs flex items-center justify-between border-b border-slate-700">
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c2674b]" />
                <span>
                  Vous visualisez les activités de la <strong>{currentBranch.fullName}</strong>.
                </span>
              </span>
              <button
                onClick={() => setSearchParams({ branch: 'kinshasa' })}
                className="text-[#e89c83] hover:underline font-semibold text-[11px] uppercase tracking-wider"
              >
                Retourner à Kinshasa (Siège) →
              </button>
            </div>
          </div>
        )}

        {/* 1. Cinematic Hero matching reference */}
        <HeroBanner branch={currentBranch} />

        {/* 2. Four photo cards below hero matching reference */}
        <FeatureBar />

        {/* 3. Inspiring Quote Block with vertical line matching reference */}
        <QuoteBlock />

        {/* 4. About Church 2-column section matching reference */}
        <AboutSection branch={currentBranch} />

        {/* 5. Dark "OUR MINISTRIES" banner matching reference */}
        <MinistriesBanner />

        {/* 6. "NEW SERMONS" (Cultes & Prédications) matching reference */}
        <section id="cultes" className="py-16 sm:py-24 px-4 sm:px-8 bg-[#faf7f2] border-b border-[#e8e2d8]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#c2674b] block mb-2">
                  Nourrir Votre Foi
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-slate-900">
                  Derniers Cultes & Prédications
                </h2>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md font-light leading-relaxed">
                Retrouvez les messages bibliques, les études dominicales et les exhortations prononcées dans notre assemblée à {currentBranch.name}.
              </p>
            </div>

            {/* Cultes Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayCultes.map((culte) => (
                <CulteCard key={culte.id} culte={culte} />
              ))}
            </div>

            {/* If branch has less, note that other sermons are shared from central */}
            {branchCultes.length === 0 && (
              <p className="mt-6 text-center text-xs text-slate-500 italic">
                (Affichage des enseignements centraux de communion partagés pour la branche de {currentBranch.name})
              </p>
            )}
          </div>
        </section>

        {/* 7. Testimonial / Scripture Meditation Overlay matching reference */}
        <TestimonialQuote branch={currentBranch} />

        {/* 8. Events & Conferences Section (with 4 social media links) */}
        <section id="evenements" className="py-16 sm:py-24 px-4 sm:px-8 bg-[#faf7f2] border-b border-[#e8e2d8]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#c2674b] block mb-2">
                  Vie Fraternelle & Assemblée
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-slate-900">
                  Événements & Conférences
                </h2>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md font-light leading-relaxed">
                Rejoignez nos séminaires, camps bibliques de jeunes et journées d’action fraternelle à {currentBranch.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayEvents.map((evt) => (
                <EventCard key={evt.id} event={evt} />
              ))}
            </div>
          </div>
        </section>

        {/* 9. Dark "MEET OUR TEAM" section matching reference */}
        <TeamSection />

        {/* 10. Projects section */}
        <ProjectSection branch={currentBranch} />

        {/* 11. "FREE CONSULTATION" Consultation & Prayer form matching reference */}
        <ConsultationForm branch={currentBranch} />
      </main>

      {/* 12. Complete Ecclesiastical Footer */}
      <Footer currentBranch={currentBranch} />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ChurchHome />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
