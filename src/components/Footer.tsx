import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { useBranch } from '../utils/useBranch';

export default function Footer() {
  const { branch, branches, branchLink, setBranch } = useBranch();

  return (
    <footer className="bg-[#0e1317] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Identity */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-[#c2674b] flex items-center justify-center text-white font-serif font-bold text-lg">
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
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Choisir une Branche en RDC
            </h4>
            <ul className="space-y-2">
              {branches.map((b) => (
                <li key={b.key}>
                  <button
                    onClick={() => setBranch(b.key)}
                    className={`w-full text-left flex items-center justify-between text-xs transition-colors py-1 cursor-pointer ${
                      b.key === branch.key
                        ? 'text-[#c2674b] font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#c2674b]" />
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
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Pages du Site
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to={branchLink('/')} className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#c2674b]" /> Accueil
                </Link>
              </li>
              <li>
                <Link to={branchLink('/apropos')} className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#c2674b]" /> À Propos
                </Link>
              </li>
              <li>
                <Link to={branchLink('/cultes')} className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#c2674b]" /> Cultes ({branch.name})
                </Link>
              </li>
              <li>
                <Link to={branchLink('/evenements')} className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#c2674b]" /> Événements ({branch.name})
                </Link>
              </li>
              <li>
                <Link to={branchLink('/projets')} className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#c2674b]" /> Projets
                </Link>
              </li>
              <li>
                <Link to={branchLink('/ministeres')} className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#c2674b]" /> Ministères
                </Link>
              </li>
              <li>
                <Link to={branchLink('/equipe')} className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#c2674b]" /> Dirigeants
                </Link>
              </li>
              <li>
                <Link to={branchLink('/contact')} className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#c2674b]" /> Contact & Prière
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Horaires */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Coordonnées de {branch.name}
            </h4>
            <div className="space-y-3 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c2674b] shrink-0 mt-0.5" />
                <span>{branch.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c2674b] shrink-0" />
                <a href={`tel:${branch.phone}`} className="hover:text-white">
                  {branch.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c2674b] shrink-0" />
                <a href={`mailto:${branch.email}`} className="hover:text-white">
                  {branch.email}
                </a>
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="text-[11px] text-slate-500 block mb-1">Culte du Dimanche à {branch.name} :</span>
              <p className="text-white font-medium">{branch.scheduleSunday}</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Mission Biblique Christadelphe en RDC — Branche de {branch.name}.</p>
          <div className="flex items-center gap-6">
            <Link to={branchLink('/apropos')} className="hover:text-slate-300 transition-colors">
              Confession de Foi
            </Link>
            <Link to={branchLink('/contact')} className="hover:text-slate-300 transition-colors">
              Contact & Prière
            </Link>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400">Sola Scriptura</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
