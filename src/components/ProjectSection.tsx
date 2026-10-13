import React from 'react';
import { Target, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { churchProjects, Branch } from '../data/mockData';

interface ProjectSectionProps {
  branch: Branch;
}

export default function ProjectSection({ branch }: ProjectSectionProps) {
  return (
    <section id="projets" className="bg-[#faf7f2] py-16 sm:py-24 px-4 sm:px-8 border-b border-[#e8e2d8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#c2674b] block mb-2">
              Bâtir Ensemble pour le Royaume
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wider text-slate-900">
              Nos Projets & Œuvres Missionnaires
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md">
            Chaque contribution participe à l’expansion de l’Évangile et à la solidarité pratique envers les assemblées en RD Congo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {churchProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg border border-[#e8e2d8] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#c2674b] uppercase tracking-wider mb-3">
                  <span className="flex items-center gap-1.5">
                    <Target className="w-4 h-4" />
                    Projet Actif
                  </span>
                  <span>{project.percent}% Financé</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug mb-3">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Progress bar */}
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden mb-3 border border-slate-200">
                  <div
                    className="bg-[#c2674b] h-full rounded-full transition-all duration-1000"
                    style={{ width: `${project.percent}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-700 font-medium mb-4">
                  <span>Récolté : <strong>{project.raised}</strong></span>
                  <span>Objectif : <strong>{project.target}</strong></span>
                </div>

                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#161c22] hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider py-2.5 px-4 rounded transition-colors"
                >
                  <Heart className="w-3.5 h-3.5 text-[#c2674b] fill-[#c2674b]" />
                  Participer à ce Projet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
