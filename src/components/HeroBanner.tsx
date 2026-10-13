import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Branch } from '../data/mockData';
import { useBranch } from '../utils/useBranch';

interface HeroBannerProps {
  branch: Branch;
}

export default function HeroBanner({ branch }: HeroBannerProps) {
  const { branchLink } = useBranch();

  return (
    <section id="hero" className="relative w-full bg-[#11161b] text-white overflow-hidden">
      {/* Background image with cinematic dark gradient scrim matching reference */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_kinshasa_church_1791721710657.jpg"
          alt="Mission Biblique Christadelphe"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#11161b] via-transparent to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-16 sm:pt-20 sm:pb-28 md:pt-28 md:pb-36 flex flex-col items-start justify-center">
        {/* Branch pill & Welcome kicker */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          <span className="text-[#e28a6f] text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold">
            Bienvenue dans la Maison de Dieu
          </span>
          <span className="text-slate-400 hidden xs:inline">·</span>
          <span className="bg-[#c2674b]/30 border border-[#c2674b]/50 text-white text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded uppercase tracking-wider">
            {branch.fullName}
          </span>
        </div>

        {/* Big Display Title matching "JOIN THE PRAYER" in reference image */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1.1] text-white max-w-3xl mb-4 sm:mb-6 break-words">
          Rejoignez <br />
          <span className="text-[#f1a48c]">La Prière</span> & La Foi
        </h1>

        {/* Subtitle */}
        <p className="text-slate-200 text-sm sm:text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-6 sm:mb-9">
          La Mission Biblique Christadelphe vous accueille pour partager la fraction du pain,
          l’enseignement pur des Écritures et la sainte espérance du Royaume de Dieu à{' '}
          <span className="font-semibold text-white underline decoration-[#c2674b] decoration-2 underline-offset-4">
            {branch.name}
          </span>
          .
        </p>

        {/* Action Buttons - full width on small mobile for touch comfort */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Link
            to={branchLink('/cultes')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c2674b] hover:bg-[#ab573c] text-white text-xs sm:text-sm font-semibold uppercase tracking-widest px-6 py-3.5 rounded transition-all shadow-lg active:scale-98 min-h-[46px]"
          >
            Nos Cultes & Prédications
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to={branchLink('/apropos')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/70 hover:border-white text-xs sm:text-sm font-semibold uppercase tracking-widest px-6 py-3.5 rounded transition-colors min-h-[46px]"
          >
            Découvrir Notre Foi
          </Link>
        </div>
      </div>

      {/* Bottom Floating Address Bar - responsive wrapping on mobile */}
      <div className="relative z-10 w-full bg-[#182026]/95 backdrop-blur-sm border-t border-slate-700/60 py-3.5 sm:py-4 px-4 sm:px-8 text-xs sm:text-sm text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-3">
          <div className="flex items-start sm:items-center gap-2 text-slate-200">
            <MapPin className="w-4 h-4 text-[#c2674b] shrink-0 mt-0.5 sm:mt-0" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-semibold text-white">{branch.name} :</span>
              <span className="text-slate-300 line-clamp-1 sm:line-clamp-none">{branch.address}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-slate-300 text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#c2674b] shrink-0" />
              <span>{branch.scheduleSunday}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#c2674b] shrink-0" />
              <span>{branch.scheduleWednesday}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
