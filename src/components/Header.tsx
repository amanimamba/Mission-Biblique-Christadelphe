import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Heart, Menu, X, BookOpen, Clock, MapPin } from 'lucide-react';
import BranchSelector from './BranchSelector';
import { useBranch } from '../utils/useBranch';

export default function Header() {
  const { branch, branchLink, branches, setBranch } = useBranch();
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
    <header className="sticky top-0 z-50 w-full shadow-md bg-[#161c22]">
      {/* Top micro bar - refined for mobile: compact single row on mobile, full on desktop */}
      <div className="bg-[#11161b] text-slate-300 text-xs border-b border-slate-800 py-1.5 px-3 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Left: Phone or Branch Tag */}
          <div className="flex items-center gap-3 sm:gap-6 truncate">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c2674b] shrink-0"></span>
              <span className="truncate">
                {branch.isMain
                  ? 'Siège National & Branche Principale'
                  : `Branche Régionale de ${branch.name}`}
              </span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors text-[11px] sm:text-xs">
              <Phone className="w-3.5 h-3.5 text-[#c2674b] shrink-0" />
              <a href={`tel:${branch.phone}`} className="truncate">{branch.phone}</a>
            </span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#c2674b] shrink-0" />
              <a href={`mailto:${branch.email}`}>{branch.email}</a>
            </span>
          </div>

          {/* Right: Sunday time & Support button */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <span className="hidden md:flex items-center gap-1.5 text-slate-400 text-xs">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Dimanche : 09h00</span>
            </span>
            <Link
              to={branchLink('/projets')}
              className="inline-flex items-center gap-1 bg-[#c2674b] hover:bg-[#ab573c] text-white text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded transition-colors active:scale-95"
            >
              <Heart className="w-3 h-3 fill-white" />
              <span className="hidden xs:inline sm:inline">Soutenir</span>
              <span className="xs:hidden">Don</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-slate-800/80 px-3 sm:px-8 py-2.5 sm:py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
          {/* Logo & Church Identity */}
          <Link
            to={branchLink('/')}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none min-w-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-[#c2674b] flex items-center justify-center text-white shadow-sm font-serif font-bold text-base sm:text-lg tracking-wider group-hover:bg-[#ab573c] transition-colors shrink-0">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-white font-serif text-sm sm:text-base md:text-lg font-bold tracking-wider uppercase leading-tight group-hover:text-[#e89c83] transition-colors truncate">
                Mission Biblique
              </span>
              <span className="text-[#c2674b] text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase truncate">
                Christadelphe RDC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-semibold uppercase tracking-widest text-slate-200">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={branchLink(item.path)}
                className={`py-1 transition-colors relative whitespace-nowrap ${
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
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <BranchSelector />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center active:bg-slate-700"
              aria-label="Menu Mobile"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with responsive touch targets and branch switcher */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161c22] border-b border-slate-800 px-4 sm:px-6 py-4 animate-in slide-in-from-top duration-200 max-h-[calc(100vh-100px)] overflow-y-auto">
          {/* Mobile active branch switcher pill */}
          <div className="bg-[#202830] p-3 rounded-lg border border-slate-700/80 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c2674b]" />
                Branche active :
              </span>
              <span className="text-xs font-bold text-white bg-[#c2674b]/30 px-2 py-0.5 rounded">
                {branch.name}
              </span>
            </div>
            <select
              value={branch.key}
              onChange={(e) => {
                setBranch(e.target.value);
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#13191f] border border-slate-700 text-white text-xs rounded p-2 focus:ring-1 focus:ring-[#c2674b] cursor-pointer"
            >
              {branches.map((b) => (
                <option key={b.key} value={b.key}>
                  {b.name} {b.isMain ? '(Siège Kinshasa)' : `(${b.province})`}
                </option>
              ))}
            </select>
          </div>

          {/* Navigation Links with large tap targets (>= 44px) */}
          <nav className="flex flex-col gap-1 text-sm font-medium text-slate-200 tracking-wide">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={branchLink(item.path)}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-3 rounded-lg flex items-center justify-between transition-colors min-h-[44px] ${
                  isActive(item.path)
                    ? 'bg-[#c2674b]/20 text-[#e89c83] font-bold border-l-4 border-[#c2674b]'
                    : 'hover:bg-slate-800/60 active:bg-slate-800 text-slate-300'
                }`}
              >
                <span>{item.label}</span>
                {isActive(item.path) && (
                  <span className="text-[10px] bg-[#c2674b] text-white px-2 py-0.5 rounded uppercase font-semibold">
                    Actif
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Quick contact button inside mobile menu */}
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={`tel:${branch.phone}`}
              className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold py-3 px-4 rounded-lg min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-[#c2674b]" />
              Appeler la Branche de {branch.name}
            </a>
            <Link
              to={branchLink('/contact')}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#c2674b] hover:bg-[#ab573c] text-white text-xs font-semibold uppercase tracking-wider py-3 px-4 rounded-lg min-h-[44px]"
            >
              Demande de Prière & Visite
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
