import React from 'react';
import { MapPin, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Branch } from '../data/mockData';

interface HeroBannerProps {
  branch: Branch;
}

export default function HeroBanner({ branch }: HeroBannerProps) {
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-28 md:pt-28 md:pb-36 flex flex-col items-start justify-center">
        {/* Branch pill & Welcome kicker */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[#e28a6f] text-xs uppercase tracking-[0.25em] font-semibold">
            Bienvenue dans la Maison de Dieu
          </span>
          <span className="text-slate-400">·</span>
          <span className="bg-[#c2674b]/30 border border-[#c2674b]/50 text-white text-[11px] font-medium px-2.5 py-0.5 rounded uppercase tracking-wider">
            {branch.fullName}
          </span>
        </div>

        {/* Big Display Title matching "JOIN THE PRAYER" in reference image */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1.08] text-white max-w-3xl mb-6">
          Rejoignez <br />
          <span className="text-[#f1a48c]">La Prière</span> & La Foi
        </h1>

        {/* Subtitle */}
        <p className="text-slate-200 text-base sm:text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-9">
          La Mission Biblique Christadelphe vous accueille pour partager la fraction du pain,
          l’enseignement pur des Écritures et la sainte espérance du Royaume de Dieu à{' '}
          <span className="font-semibold text-white underline decoration-[#c2674b] decoration-2 underline-offset-4">
            {branch.name}
          </span>
          .
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#cultes"
            className="inline-flex items-center gap-2 bg-[#c2674b] hover:bg-[#ab573c] text-white text-xs sm:text-sm font-semibold uppercase tracking-widest px-6 py-3.5 rounded transition-all shadow-lg hover:shadow-xl hover:translate-y-[-1px]"
          >
            Nos Cultes & Prédications
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#apropos"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/70 hover:border-white text-xs sm:text-sm font-semibold uppercase tracking-widest px-6 py-3.5 rounded transition-colors"
          >
            Découvrir Notre Foi
          </a>
        </div>
      </div>

      {/* Bottom Floating Address Bar matching reference image bottom strip */}
      <div className="relative z-10 w-full bg-[#182026]/95 backdrop-blur-sm border-t border-slate-700/60 py-4 px-4 sm:px-8 text-xs sm:text-sm text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-slate-200">
            <MapPin className="w-4 h-4 text-[#c2674b] shrink-0" />
            <span className="font-semibold text-white">{branch.name}:</span>
            <span className="text-slate-300 truncate">{branch.address}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-300 text-xs">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#c2674b]" />
              <span>{branch.scheduleSunday}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#c2674b]" />
              <span>{branch.scheduleWednesday}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
