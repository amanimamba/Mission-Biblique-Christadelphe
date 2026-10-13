import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { useBranch } from '../utils/useBranch';

export default function Footer() {
  const { branch, branches, branchLink, setBranch } = useBranch();

  return (
    <footer className="bg-[#0e1317] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Col 1: Identity */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-[#c2674b] flex items-center justify-center text-white font-serif font-bold text-lg shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-base font-bold text-white uppercase tracking-wider block">
                  Mission Biblique Christadelphe
                </span>
                <span className="text-[11px] text-[#c2674b] uppercase tracking-widest font-semibold">
                  République Démocratique du Congo
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed mb-6 font-light">
              Une fraternité chrétienne internationale proclamant la foi apostolique originelle,
              la Bible comme Parole inspirée de Dieu et l’espérance certaine du retour de Jésus-Christ
              pour régner sur la terre.
            </p>

            <div className="text-[11px] text-slate-400 bg-[#161c22] p-3.5 rounded border border-slate-800 w-full">
              <strong className="text-white block mb-0.5">Branche Sélectionnée Actuelle :</strong>
              <span className="text-[#e28a6f] font-semibold">{branch.fullName}</span>
              <p className="mt-1 text-slate-400">{branch.address}</p>
              <p className="mt-1 text-slate-500">Responsable : {branch.leader}</p>
            </div>
          </div>

          {/* Col 2: Branches Directory */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-3 sm:mb-4 border-b border-slate-800 pb-2">
              Choisir une Branche en RDC
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {branches.map((b) => (
                <li key={b.key}>
                  <button
                    onClick={() => {
                      setBranch(b.key);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full text-left flex items-center justify-between text-xs transition-colors py-2 px-1 rounded hover:bg-slate-800/40 cursor-pointer min-h-[38px] ${
                      b.key === branch.key
                        ? 'text-[#c2674b] font-bold bg-[#c2674b]/10'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#c2674b] shrink-0" />
                      {b.name} {b.isMain && '(Siège)'}
                    </span>
                    <span className="text-[10px] text-slate-600">{b.province}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Dedicated Pages Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-3 sm:mb-4 border-b border-slate-800 pb-2">
              Pages du Site
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {[
                { label: 'Accueil', path: '/' },
                { label: 'À Propos', path: '/apropos' },
                { label: `Cultes (${branch.name})`, path: '/cultes' },
                { label: `Événements (${branch.name})`, path: '/evenements' },
                { label: 'Projets', path: '/projets' },
                { label: 'Ministères', path: '/ministeres' },
                { label: 'Dirigeants', path: '/equipe' },
                { label: 'Contact & Prière', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={branchLink(item.path)}
                    className="hover:text-white transition-colors flex items-center gap-1 py-1 min-h-[36px]"
                  >
                    <ChevronRight className="w-3 h-3 text-[#c2674b] shrink-0" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Horaires */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-3 sm:mb-4 border-b border-slate-800 pb-2">
              Coordonnées de {branch.name}
            </h4>
            <div className="space-y-3 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c2674b] shrink-0 mt-0.5" />
                <span>{branch.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c2674b] shrink-0" />
                <a href={`tel:${branch.phone}`} className="hover:text-white py-1">
                  {branch.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c2674b] shrink-0" />
                <a href={`mailto:${branch.email}`} className="hover:text-white py-1">
                  {branch.email}
                </a>
              </p>
            </div>

            <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-800">
              <span className="text-[11px] text-slate-500 block mb-1">Culte du Dimanche à {branch.name} :</span>
              <p className="text-white font-medium">{branch.scheduleSunday}</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Mission Biblique Christadelphe en RDC — Branche de {branch.name}.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to={branchLink('/apropos')} className="hover:text-slate-300 transition-colors py-1">
              Confession de Foi
            </Link>
            <Link to={branchLink('/contact')} className="hover:text-slate-300 transition-colors py-1">
              Contact & Prière
            </Link>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-slate-400">Sola Scriptura</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
