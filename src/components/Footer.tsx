import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BookOpen, MapPin, Phone, Mail, Heart, ChevronRight } from 'lucide-react';
import { branches, Branch } from '../data/mockData';

interface FooterProps {
  currentBranch: Branch;
}

export default function Footer({ currentBranch }: FooterProps) {
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

            <div className="text-[11px] text-slate-400 bg-[#161c22] p-3 rounded border border-slate-800 w-full">
              <strong className="text-white block mb-0.5">Branche Active :</strong>
              <span className="text-[#e28a6f]">{currentBranch.fullName}</span>
              <p className="mt-1 text-slate-400">{currentBranch.address}</p>
            </div>
          </div>

          {/* Col 2: Branches Directory */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Nos Branches en RDC
            </h4>
            <ul className="space-y-2">
              {branches.map((b) => (
                <li key={b.key}>
                  <Link
                    to={`/?branch=${b.key}`}
                    className={`flex items-center justify-between text-xs transition-colors py-1 ${
                      b.key === currentBranch.key
                        ? 'text-[#c2674b] font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#c2674b]" />
                      {b.name} {b.isMain && '(Siège)'}
                    </span>
                    <span className="text-[10px] text-slate-600">{b.province}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#c2674b]" /> Accueil
                </a>
              </li>
              <li>
                <a href="#apropos" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#c2674b]" /> À Propos
                </a>
              </li>
              <li>
                <a href="#cultes" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#c2674b]" /> Nos Cultes
                </a>
              </li>
              <li>
                <a href="#evenements" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#c2674b]" /> Événements
                </a>
              </li>
              <li>
                <a href="#projets" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#c2674b]" /> Projets & Œuvres
                </a>
              </li>
              <li>
                <a href="#ministeres" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#c2674b]" /> Ministères
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#c2674b]" /> Corps Pastoral
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#c2674b]" /> Demande de Prière
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Horaires */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Coordonnées
            </h4>
            <div className="space-y-3 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c2674b] shrink-0 mt-0.5" />
                <span>{currentBranch.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c2674b] shrink-0" />
                <a href={`tel:${currentBranch.phone}`} className="hover:text-white">
                  {currentBranch.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c2674b] shrink-0" />
                <a href={`mailto:${currentBranch.email}`} className="hover:text-white">
                  {currentBranch.email}
                </a>
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="text-[11px] text-slate-500 block mb-1">Horaires du Culte :</span>
              <p className="text-white font-medium">{currentBranch.scheduleSunday}</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Mission Biblique Christadelphe en RDC. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#apropos" className="hover:text-slate-300 transition-colors">Confession de Foi</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Nous Contacter</a>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400">Édifié dans la foi et la vérité biblique</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
