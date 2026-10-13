import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import FeatureBar from '../components/FeatureBar';
import QuoteBlock from '../components/QuoteBlock';
import AboutSection from '../components/AboutSection';
import MinistriesBanner from '../components/MinistriesBanner';
import CulteCard from '../components/CulteCard';
import EventCard from '../components/EventCard';
import TestimonialQuote from '../components/TestimonialQuote';
import TeamSection from '../components/TeamSection';
import ProjectSection from '../components/ProjectSection';
import ConsultationForm from '../components/ConsultationForm';
import { cultes, events } from '../data/mockData';
import { useBranch } from '../utils/useBranch';
import { MapPin, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const { branch, branchKey, branchLink, setBranch } = useBranch();

  // Filter cultes by branch
  const branchCultes = cultes.filter((c) => c.branchKey === branchKey);
  const displayCultes =
    branchCultes.length > 0
      ? branchCultes
      : cultes.filter((c) => c.branchKey === 'kinshasa');

  // Filter events by branch
  const branchEvents = events.filter((e) => e.branchKey === branchKey);
  const displayEvents =
    branchEvents.length > 0
      ? branchEvents
      : events.filter((e) => e.branchKey === 'kinshasa');

  return (
    <div>
      {/* Non-main branch alert ribbon */}
      {!branch.isMain && (
        <div className="bg-[#1f262e] text-white px-4 py-2.5 text-xs border-b border-slate-700">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#c2674b] shrink-0" />
              <span>
                Vous consultez actuellement les activités et cultes de la{' '}
                <strong>{branch.fullName}</strong>.
              </span>
            </span>
            <button
              onClick={() => setBranch('kinshasa')}
              className="text-[#e89c83] hover:underline font-semibold text-[11px] uppercase tracking-wider text-left sm:text-right"
            >
              Basculer vers Kinshasa (Siège National) →
            </button>
          </div>
        </div>
      )}

      {/* 1. Cinematic Hero matching reference */}
      <HeroBanner branch={branch} />

      {/* 2. 4 Photo Cards under Hero matching reference */}
      <FeatureBar />

      {/* 3. Inspiring Quote Block with vertical line */}
      <QuoteBlock />

      {/* 4. About Church 2-column section */}
      <AboutSection branch={branch} />

      {/* 5. Dark "OUR MINISTRIES" banner */}
      <MinistriesBanner />

      {/* 6. "NEW SERMONS" Cultes & Prédications Section */}
      <section id="cultes" className="py-16 sm:py-24 px-4 sm:px-8 bg-[#faf7f2] border-b border-[#e8e2d8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#c2674b] block mb-2">
                Nourrir Votre Foi à {branch.name}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-slate-900">
                Derniers Cultes & Prédications
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <p className="text-slate-600 text-xs sm:text-sm max-w-md font-light leading-relaxed">
                Messages bibliques et communion fraternelle enregistrés à la branche de {branch.name}.
              </p>
              <Link
                to={branchLink('/cultes')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c2674b] hover:text-[#ab573c] uppercase tracking-wider"
              >
                Tous les cultes de {branch.name} ({branchCultes.length})
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayCultes.slice(0, 3).map((culte) => (
              <CulteCard key={culte.id} culte={culte} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonial / Scripture Meditation Overlay */}
      <TestimonialQuote branch={branch} />

      {/* 8. Events & Conferences Section */}
      <section id="evenements" className="py-16 sm:py-24 px-4 sm:px-8 bg-[#faf7f2] border-b border-[#e8e2d8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#c2674b] block mb-2">
                Vie Fraternelle & Assemblée
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-slate-900">
                Événements à {branch.name}
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <p className="text-slate-600 text-xs sm:text-sm max-w-md font-light leading-relaxed">
                Rejoignez nos conférences bibliques et ateliers pour fortifier votre foi à {branch.name}.
              </p>
              <Link
                to={branchLink('/evenements')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c2674b] hover:text-[#ab573c] uppercase tracking-wider"
              >
                Voir l'agenda complet ({displayEvents.length} événements)
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayEvents.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Dark "MEET OUR TEAM" section */}
      <TeamSection />

      {/* 10. Projects section */}
      <ProjectSection branch={branch} />

      {/* 11. "FREE CONSULTATION" Formik & Yup prayer request form */}
      <ConsultationForm branch={branch} />
    </div>
  );
}
