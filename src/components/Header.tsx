import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Phone, Mail, Heart, Menu, X, BookOpen, Clock } from 'lucide-react';
import BranchSelector from './BranchSelector';
import { branches } from '../data/mockData';

export default function Header() {
  const [searchParams] = useSearchParams();
  const currentBranchKey = searchParams.get('branch') || 'kinshasa';
  const currentBranch = branches.find((b) => b.key === currentBranchKey) || branches[0];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getBranchLink = (hash: string) => `/?branch=${currentBranchKey}${hash}`;

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top micro bar matching reference image */}
      <div className="bg-[#11161b] text-slate-300 text-xs border-b border-slate-800 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c2674b]"></span>
              {currentBranch.isMain ? 'Siège National & Branche Principale' : `Branche Régionale de ${currentBranch.name}`}
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#c2674b]" />
              <a href={`tel:${currentBranch.phone}`}>{currentBranch.phone}</a>
            </span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#c2674b]" />
              <a href={`mailto:${currentBranch.email}`}>{currentBranch.email}</a>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Dimanche: 09h00</span>
            </span>
            <a
              href="#projets"
              className="inline-flex items-center gap-1 bg-[#c2674b] hover:bg-[#ab573c] text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded transition-colors"
            >
              <Heart className="w-3 h-3 fill-white" />
              Soutenir la Mission
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-[#161c22] border-b border-slate-800/80 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          {/* Logo & Church Identity */}
          <Link
            to={getBranchLink('')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded bg-[#c2674b] flex items-center justify-center text-white shadow-sm font-serif font-bold text-lg tracking-wider group-hover:bg-[#ab573c] transition-colors">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif text-base sm:text-lg font-bold tracking-wider uppercase leading-tight group-hover:text-[#e89c83] transition-colors">
                Mission Biblique
              </span>
              <span className="text-[#c2674b] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
                Christadelphe RDC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-widest text-slate-200">
            <a href="#hero" className="hover:text-[#c2674b] transition-colors py-1">
              Accueil
            </a>
            <a href="#apropos" className="hover:text-[#c2674b] transition-colors py-1">
              À Propos
            </a>
            <a href="#cultes" className="hover:text-[#c2674b] transition-colors py-1">
              Cultes
            </a>
            <a href="#evenements" className="hover:text-[#c2674b] transition-colors py-1">
              Événements
            </a>
            <a href="#projets" className="hover:text-[#c2674b] transition-colors py-1">
              Projets
            </a>
            <a href="#ministeres" className="hover:text-[#c2674b] transition-colors py-1">
              Ministères
            </a>
            <a href="#equipe" className="hover:text-[#c2674b] transition-colors py-1">
              Dirigeants
            </a>
            <a href="#contact" className="hover:text-[#c2674b] transition-colors py-1">
              Contact
            </a>
          </nav>

          {/* Branch selector & Mobile toggle */}
          <div className="flex items-center gap-3">
            <BranchSelector />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161c22] border-b border-slate-800 px-6 py-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3.5 text-sm font-medium text-slate-200 tracking-wide">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#c2674b] py-1 border-b border-slate-800/60"
            >
              Accueil
            </a>
            <a
              href="#apropos"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#c2674b] py-1 border-b border-slate-800/60"
            >
              À Propos
            </a>
            <a
              href="#cultes"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#c2674b] py-1 border-b border-slate-800/60"
            >
              Cultes & Prédications
            </a>
            <a
              href="#evenements"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#c2674b] py-1 border-b border-slate-800/60"
            >
              Événements & Activités
            </a>
            <a
              href="#projets"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#c2674b] py-1 border-b border-slate-800/60"
            >
              Projets & Soutien
            </a>
            <a
              href="#ministeres"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#c2674b] py-1 border-b border-slate-800/60"
            >
              Nos Ministères
            </a>
            <a
              href="#equipe"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#c2674b] py-1 border-b border-slate-800/60"
            >
              Corps Pastoral
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#c2674b] py-1"
            >
              Contact & Demande de Prière
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
