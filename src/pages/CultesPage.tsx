import React, { useState } from 'react';
import { useBranch } from '../utils/useBranch';
import { cultes } from '../data/mockData';
import CulteCard from '../components/CulteCard';
import { Calendar, Clock, MapPin, Search, BookOpen, Volume2 } from 'lucide-react';

export default function CultesPage() {
  const { branch, branchKey } = useBranch();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  // Filter cultes strictly by branch
  const branchCultes = cultes.filter((c) => c.branchKey === branchKey);
  const cultesSource = branchCultes.length > 0 ? branchCultes : cultes.filter((c) => c.branchKey === 'kinshasa');

  // Filter by search & category
  const filtered = cultesSource.filter((c) => {
    const matchesSearch =
      c.theme.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.verse.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.preacher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Tous' || c.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['Tous', 'Culte Dominical', 'Fraction du Pain', 'Exhortation Biblique'];

  return (
    <div className="bg-[#faf7f2] min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Hero Header */}
        <div className="bg-[#161c22] text-white rounded-xl p-8 sm:p-12 mb-10 shadow-lg border border-slate-800">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c2674b] mb-3">
              <MapPin className="w-4 h-4" />
              <span>Branche Locale : {branch.name} ({branch.province})</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
              Cultes & Prédications de {branch.name}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
              Écoutez et méditez la Parole de Dieu proclamée lors de nos rassemblements dominicaux et études de semaine à{' '}
              <strong className="text-white">{branch.fullName}</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 bg-[#202932] p-4 rounded-lg border border-slate-700">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#c2674b]" />
                <span><strong>Culte :</strong> {branch.scheduleSunday}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c2674b]" />
                <span><strong>Étude en semaine :</strong> {branch.scheduleWednesday}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-6 rounded-lg border border-[#e8e2d8] shadow-sm mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={`Rechercher un culte à ${branch.name} (thème, verset, prédicateur)...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#faf7f2] border border-[#e8e2d8] rounded-md pl-10 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#c2674b]"
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-semibold px-3.5 py-2 rounded-md transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#c2674b] text-white shadow-sm'
                      : 'bg-[#faf7f2] text-slate-700 hover:bg-[#ede6dc] border border-[#e8e2d8]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count & Current Branch indicator */}
        <div className="flex items-center justify-between text-xs text-slate-600 mb-6">
          <span>
            Affichage de <strong>{filtered.length}</strong> culte(s) pour la branche de <strong>{branch.name}</strong>
          </span>
          <span className="text-[#c2674b] font-medium">
            Prédicateur responsable : {branch.leader}
          </span>
        </div>

        {/* Cultes Cards Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((culte) => (
              <CulteCard key={culte.id} culte={culte} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 text-center rounded-lg border border-[#e8e2d8]">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-slate-800 mb-1">
              Aucun culte ne correspond à votre recherche
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Essayez de modifier votre recherche ou réinitialisez les filtres.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Tous');
              }}
              className="text-xs font-semibold text-[#c2674b] underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Order of Worship description */}
        <div className="mt-16 bg-[#faf7f2] p-8 rounded-xl border border-[#e8e2d8]">
          <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
            Déroulement d'un Culte Christadelphe à {branch.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
            Conformément à la simplicité de l’Église primitive du Nouveau Testament, notre rassemblement dominical comprend :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-700">
            <div className="bg-white p-4 rounded border border-[#e8e2d8]">
              <strong className="block text-[#c2674b] mb-1">1. Louange & Prière</strong>
              Cantiques spirituels et prières d'actions de grâces conduites par les frères.
            </div>
            <div className="bg-white p-4 rounded border border-[#e8e2d8]">
              <strong className="block text-[#c2674b] mb-1">2. Lecture des Écritures</strong>
              Passages de l'Ancien et du Nouveau Testament selon le Guide de Lecture Biblique.
            </div>
            <div className="bg-white p-4 rounded border border-[#e8e2d8]">
              <strong className="block text-[#c2674b] mb-1">3. Exhortation</strong>
              Message biblique d’édification préparant les cœurs à la fraction du pain.
            </div>
            <div className="bg-white p-4 rounded border border-[#e8e2d8]">
              <strong className="block text-[#c2674b] mb-1">4. La Sainte Cène</strong>
              Partage du pain sans levain et du vin en mémoire du sacrifice rédempteur de Jésus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
