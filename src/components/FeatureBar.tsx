import React from 'react';
import { Link } from 'react-router-dom';
import { useBranch } from '../utils/useBranch';

export default function FeatureBar() {
  const { branchLink } = useBranch();

  const features = [
    {
      image: '/src/assets/images/bible_study_reading_1791887625322.jpg',
      category: 'Lecture des Écritures',
      title: 'Études Bibliques',
      description: 'Instruction méthodique de la Genèse à l’Apocalypse selon la saine doctrine.',
      path: '/cultes',
    },
    {
      image: '/src/assets/images/culte_detail_thumb_1791721724068.jpg',
      category: 'Fraction du Pain',
      title: 'Culte du Dimanche',
      description: 'Communion fraternelle mémorielle ordonnée par Jésus pour ses disciples.',
      path: '/cultes',
    },
    {
      image: '/src/assets/images/hero_kinshasa_church_1791721710657.jpg',
      category: 'Espérance Messianique',
      title: 'Notre Vision',
      description: 'L’attente du rétablissement du Royaume de Dieu sur la terre avec justice.',
      path: '/apropos',
    },
    {
      image: '/src/assets/images/event_card_thumb_1791721734782.jpg',
      category: 'Amour en Action',
      title: 'Entraide & Jeunesse',
      description: 'Soutien mutuel, diaconie fraternelle et formation de la nouvelle génération.',
      path: '/evenements',
    },
  ];

  return (
    <section className="bg-[#faf7f2] py-12 px-4 sm:px-8 border-b border-[#e8e2d8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <Link
              key={idx}
              to={branchLink(item.path)}
              className="group bg-white rounded-lg overflow-hidden border border-[#e8e2d8] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#c2674b] font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#c2674b] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
