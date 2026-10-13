import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Branch } from '../data/mockData';

interface AboutSectionProps {
  branch: Branch;
}

export default function AboutSection({ branch }: AboutSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="apropos" className="bg-[#faf7f2] py-16 sm:py-24 px-4 sm:px-8 border-b border-[#e8e2d8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with frame matching template */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg border border-[#e8e2d8]">
              <img
                src="/src/assets/images/church_leaders_consultation_1791887626495.jpg"
                alt="Rencontre fraternelle et pastorale"
                className="w-full h-[380px] sm:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded shadow-md border border-slate-200">
                <p className="text-xs font-semibold text-slate-800">
                  Fraternité & Conseil Pastoral
                </p>
                <p className="text-[11px] text-slate-600">
                  {branch.name} — Responsable: {branch.leader}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative matching "ABOUT CHURCH" */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#c2674b] mb-2 block">
              Connaître Notre Assemblée
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight leading-tight mb-6">
              À Propos de la Mission Biblique Christadelphe
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
              Les <strong>Christadelphes</strong> (« Frères et Sœurs en Christ ») forment une communauté mondiale
              de croyants unis par la foi aux promesses faites par Dieu à Abraham et à David, ainsi qu’à
              la bonne nouvelle du Royaume de Dieu accomplie en Jésus-Christ.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              En République Démocratique du Congo, notre mission œuvre à travers ses différentes branches
              locales (Kinshasa, Lubumbashi, Goma, Kalemie, Kasenga, Kindu) pour offrir un enseignement
              exclusivement fondé sur la Sainte Bible, sans dogmes traditionnels ni hiérarchie cléricale,
              en encourageant chaque croyant à scruter quotidiennement les Écritures.
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 w-full">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#c2674b] shrink-0" />
                <span>La Bible comme seule autorité divine</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#c2674b] shrink-0" />
                <span>Royaume de Dieu futur sur la terre</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#c2674b] shrink-0" />
                <span>Baptême des adultes par immersion</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#c2674b] shrink-0" />
                <span>Fraction du pain hebdomadaire fraternelle</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#c2674b] hover:bg-[#ab573c] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded transition-colors shadow-sm"
              >
                Confession de Foi & Histoire
              </button>
              <a
                href="#contact"
                className="border border-slate-700 text-slate-800 hover:bg-slate-900 hover:text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded transition-colors"
              >
                Prendre Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Confession de Foi */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                Principes de Foi des Christadelphes
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-2xl font-bold p-1 leading-none"
              >
                &times;
              </button>
            </div>
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                <strong>1. Un Dieu Unique :</strong> Le Père éternel, Créateur du ciel et de la terre,
                hors duquel il n’y a point de Dieu (Ésaïe 45:5, 1 Corinthiens 8:6).
              </p>
              <p>
                <strong>2. Jésus-Christ, Fils de Dieu :</strong> Né de la vierge Marie par l’action
                du Saint-Esprit, qui a manifesté le Père, a triomphé du péché par son obéissance
                parfaite et sa mort sur la croix, et a été ressuscité pour notre justification.
              </p>
              <p>
                <strong>3. L’Espérance d’Israël :</strong> Les promesses faites à Abraham et à David
                s’accompliront lorsque le Christ reviendra en gloire pour établir le Royaume de Dieu
                sur la terre avec Jérusalem pour capitale.
              </p>
              <p>
                <strong>4. La Résurrection des Morts :</strong> L’immortalité n’est pas innée à l’âme,
                mais sera accordée aux croyants fidèles lors de la venue du Messie.
              </p>
              <p>
                <strong>5. La vie en RDC :</strong> Présente depuis plusieurs décennies, la communauté
                participe à la prière collective pour la paix du pays et soutient les familles dans
                l’épreuve.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-slate-900 text-white text-xs font-semibold uppercase px-5 py-2.5 rounded hover:bg-slate-800 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
