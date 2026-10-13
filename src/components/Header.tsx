import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Heart, Menu, X, BookOpen, Clock } from 'lucide-react';
import BranchSelector from './BranchSelector';
import { useBranch } from '../utils/useBranch';

export default function Header() {
  const { branch, branchLink } = useBranch();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'À Propos', path: '/apropos' },
    { label: 'Cultes', path: '/cultes' },
    { label: 'Événements', path: '/evenements' },
    { label: 'Projets', path: '/projets' },
    { label: 'Ministères', path: '/ministeres' },
    { label: 'Dirigeants', path: '/equipe' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top micro bar matching reference image */}
      <div className="bg-[#11161b] text-slate-300 text-xs border-b border-slate-800 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c2674b]"></span>
              {branch.isMain
                ? 'Siège National & Branche Principale'
                : `Branche Régionale de ${branch.name} (${branch.province})`}
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#c2674b]" />
              <a href={`tel:${branch.phone}`}>{branch.phone}</a>
            </span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#c2674b]" />
              <a href={`mailto:${branch.email}`}>{branch.email}</a>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Dimanche : 09h00</span>
            </span>
            <Link
              to={branchLink('/projets')}
              className="inline-flex items-center gap-1 bg-[#c2674b] hover:bg-[#ab573c] text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded transition-colors"
            >
              <Heart className="w-3 h-3 fill-white" />
              Soutenir la Mission
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-[#161c22] border-b border-slate-800/80 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          {/* Logo & Church Identity */}
          <Link
            to={branchLink('/')}
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
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-semibold uppercase tracking-widest text-slate-200">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={branchLink(item.path)}
                className={`py-1 transition-colors relative ${
                  isActive(item.path)
                    ? 'text-[#e89c83] font-bold border-b-2 border-[#c2674b]'
                    : 'hover:text-[#c2674b]'
                }`}
              >
                {item.label}
              </Link>
            ))}
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
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={branchLink(item.path)}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1.5 border-b border-slate-800/60 flex items-center justify-between ${
                  isActive(item.path)
                    ? 'text-[#e89c83] font-bold'
                    : 'hover:text-[#c2674b]'
                }`}
              >
                <span>{item.label}</span>
                {isActive(item.path) && (
                  <span className="text-[10px] bg-[#c2674b]/30 text-[#e89c83] px-2 py-0.5 rounded uppercase font-semibold">
                    Actif
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
