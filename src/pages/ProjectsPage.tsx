import React, { useState } from 'react';
import { useBranch } from '../utils/useBranch';
import { churchProjects } from '../data/mockData';
import { Target, Heart, CheckCircle2, MapPin, DollarSign, Send } from 'lucide-react';

export default function ProjectsPage() {
  const { branch, branchKey } = useBranch();
  const [pledgeSubmitted, setPledgeSubmitted] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number>(1);

  // Put the project matching current branch first!
  const sortedProjects = [...churchProjects].sort((a, b) => {
    if (a.branchKey === branchKey) return -1;
    if (b.branchKey === branchKey) return 1;
    return 0;
  });

  return (
    <div className="bg-[#faf7f2] min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Banner */}
        <div className="bg-[#161c22] text-white rounded-xl p-8 sm:p-12 mb-10 shadow-lg border border-slate-800">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c2674b] mb-3">
              <Target className="w-4 h-4" />
              <span>Édification & Solidarité : {branch.name}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
              Projets & Œuvres de la Mission
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
              Soutenez le développement des lieux de culte, la distribution de la Sainte Bible et l'aide fraternelle aux assemblées locales en République Démocratique du Congo.
            </p>
          </div>
        </div>

        {/* Highlight local branch project */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#c2674b]" />
            Projets en Cours (Priorité à la Branche de {branch.name})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.map((project) => {
              const isCurrentBranch = project.branchKey === branchKey;
              return (
                <div
                  key={project.id}
                  className={`bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                    isCurrentBranch
                      ? 'border-[#c2674b] ring-2 ring-[#c2674b]/30'
                      : 'border-[#e8e2d8]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider mb-3">
                      <span className="flex items-center gap-1.5 text-[#c2674b]">
                        <MapPin className="w-3.5 h-3.5" />
                        {project.location}
                      </span>
                      <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded">
                        {project.percent}% Financé
                      </span>
                    </div>

                    {isCurrentBranch && (
                      <span className="inline-block bg-[#c2674b]/15 text-[#c2674b] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded mb-2">
                        Projet Local pour {branch.name}
                      </span>
                    )}

                    <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug mb-3">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden mb-3 border border-slate-200">
                      <div
                        className="bg-[#c2674b] h-full rounded-full transition-all duration-1000"
                        style={{ width: `${project.percent}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-700 font-medium mb-4">
                      <span>Collecté : <strong>{project.raised}</strong></span>
                      <span>Objectif : <strong>{project.target}</strong></span>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedProjectId(project.id);
                        document.getElementById('pledge-box')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full flex items-center justify-center gap-1.5 bg-[#161c22] hover:bg-[#202830] text-white text-xs font-semibold uppercase tracking-wider py-2.5 px-4 rounded transition-colors"
                    >
                      <Heart className="w-3.5 h-3.5 text-[#c2674b] fill-[#c2674b]" />
                      Participer à ce Projet
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pledge / Support Form */}
        <div id="pledge-box" className="bg-white p-8 sm:p-10 rounded-xl border border-[#e8e2d8] shadow-sm">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c2674b] block mb-1">
                Générosité & Action
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Soutenir une Œuvre de la Mission
              </h3>
              <p className="text-xs text-slate-500 mt-2 font-light">
                « Que chacun donne comme il l’a résolu en son cœur, sans tristesse ni contrainte; car Dieu aime celui qui donne avec joie. » — 2 Corinthiens 9:7
              </p>
            </div>

            {pledgeSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-6 rounded-lg text-center animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-serif text-lg font-bold">Merci pour votre promesse de soutien !</h4>
                <p className="text-xs text-emerald-700 mt-1">
                  Les trésoriers de la Mission prendront contact avec vous pour vous transmettre les détails du compte bancaire ou mobile money officiel de la mission.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setPledgeSubmitted(true);
                  setTimeout(() => setPledgeSubmitted(false), 8000);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Choisir le Projet à Soutenir
                  </label>
                  <select
                    value={selectedProjectId}
                    onChange={(e) => setSelectedProjectId(Number(e.target.value))}
                    className="w-full bg-[#faf7f2] border border-[#e8e2d8] text-slate-900 text-xs sm:text-sm rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#c2674b]"
                  >
                    {churchProjects.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} ({p.location}) — Objectif: {p.target}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Votre Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Frère David Kabamba"
                      className="w-full bg-[#faf7f2] border border-[#e8e2d8] text-slate-900 text-xs sm:text-sm rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#c2674b]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Téléphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+243 ..."
                      className="w-full bg-[#faf7f2] border border-[#e8e2d8] text-slate-900 text-xs sm:text-sm rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#c2674b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Montant Envisagé (USD ou CDF)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 50 USD / 100,000 CDF"
                    className="w-full bg-[#faf7f2] border border-[#e8e2d8] text-slate-900 text-xs sm:text-sm rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#c2674b]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c2674b] hover:bg-[#ab573c] text-white font-semibold text-xs uppercase tracking-widest py-3.5 px-4 rounded transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Valider Mon Engagement pour la Mission
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
