import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, Users, Compass, ChevronRight, ArrowRight } from 'lucide-react';
import { churchMinistries } from '../data/mockData';
import { useBranch } from '../utils/useBranch';

export default function MinistriesBanner() {
  const [selectedMinistry, setSelectedMinistry] = useState<string | null>(null);
  const { branchLink, branch } = useBranch();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#c2674b]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#c2674b]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#c2674b]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#c2674b]" />;
      default:
        return <Users className="w-6 h-6 text-[#c2674b]" />;
    }
  };

  const activeMinistryData = churchMinistries.find((m) => m.id === selectedMinistry);

  return (
    <section id="ministeres" className="bg-[#161c22] text-white py-14 px-4 sm:px-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#c2674b] block mb-1">
              Au Service de la Communauté à {branch.name}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">
              Nos Ministères & Départements
            </h2>
          </div>
          <Link
            to={branchLink('/ministeres')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e89c83] hover:text-white uppercase tracking-wider transition-colors"
          >
            Découvrir tous les départements ({churchMinistries.length})
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 horizontal ministry blocks matching the dark banner in reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {churchMinistries.map((ministry) => {
            const isSelected = selectedMinistry === ministry.id;
            return (
              <div
                key={ministry.id}
                onClick={() => setSelectedMinistry(isSelected ? null : ministry.id)}
                className={`p-6 rounded-lg border transition-all cursor-pointer flex flex-col items-center text-center group ${
                  isSelected
                    ? 'bg-[#232b33] border-[#c2674b] ring-1 ring-[#c2674b]'
                    : 'bg-[#1b232a] border-slate-800 hover:border-slate-700 hover:bg-[#202830]'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#161c22] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner">
                  {getIcon(ministry.icon)}
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1 group-hover:text-[#e89c83] transition-colors">
                  {ministry.title}
                </h3>
                <p className="text-xs text-[#c2674b] font-medium tracking-wide mb-2">
                  {ministry.subtitle}
                </p>
                <p className="text-[12px] text-slate-400 line-clamp-2 leading-relaxed">
                  {ministry.description}
                </p>
                <span className="mt-3 text-[11px] font-semibold text-slate-300 group-hover:text-white flex items-center gap-1 uppercase tracking-wider">
                  {isSelected ? 'Masquer détails' : 'Découvrir'}
                  <ChevronRight className="w-3 h-3 text-[#c2674b]" />
                </span>
              </div>
            );
          })}
        </div>

        {/* Active ministry expanded detail callout */}
        {activeMinistryData && (
          <div className="mt-8 bg-[#202932] border border-[#c2674b]/60 rounded-lg p-6 sm:p-8 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-700/80 pb-4 mb-4">
              <div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {activeMinistryData.title}
                </h4>
                <p className="text-xs text-[#c2674b] uppercase tracking-widest font-semibold">
                  {activeMinistryData.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedMinistry(null)}
                className="text-xs text-slate-400 hover:text-white border border-slate-700 px-3 py-1.5 rounded cursor-pointer"
              >
                Fermer
              </button>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl mb-4">
              {activeMinistryData.description}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <span>📅 Rencontre bi-mensuelle le Samedi après-midi</span>
              <span>📍 Salle de Fraternité & Groupes de Maisons à {branch.name}</span>
              <span>ℹ️ Ouvert à tous les membres et sympathisants</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
