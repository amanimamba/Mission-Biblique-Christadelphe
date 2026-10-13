import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Branch } from '../data/mockData';
import { useBranch } from '../utils/useBranch';

interface AboutSectionProps {
  branch: Branch;
}

export default function AboutSection({ branch }: AboutSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { branchLink } = useBranch();

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
              locales (Kinshasa, Kindu, Lubumbashi, Goma, Kalemie, Kasenga) pour offrir un enseignement
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
              <Link
                to={branchLink('/apropos')}
                className="bg-[#c2674b] hover:bg-[#ab573c] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded transition-colors shadow-sm"
              >
                Page Complète & Confession de Foi
              </Link>
              <Link
                to={branchLink('/contact')}
                className="border border-slate-700 text-slate-800 hover:bg-slate-900 hover:text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded transition-colors"
              >
                Prendre Contact ({branch.name})
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
