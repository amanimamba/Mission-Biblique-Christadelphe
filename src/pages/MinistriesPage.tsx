import React from 'react';
import { useBranch } from '../utils/useBranch';
import { churchMinistries } from '../data/mockData';
import { Shield, Heart, Users, Compass, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function MinistriesPage() {
  const { branch } = useBranch();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-8 h-8 text-[#c2674b]" />;
      case 'Heart':
        return <Heart className="w-8 h-8 text-[#c2674b]" />;
      case 'Users':
        return <Users className="w-8 h-8 text-[#c2674b]" />;
      case 'Compass':
        return <Compass className="w-8 h-8 text-[#c2674b]" />;
      default:
        return <Users className="w-8 h-8 text-[#c2674b]" />;
    }
  };

  return (
    <div className="bg-[#faf7f2] min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Banner */}
        <div className="bg-[#161c22] text-white rounded-xl p-8 sm:p-12 mb-10 shadow-lg border border-slate-800">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c2674b] mb-3">
              <Users className="w-4 h-4" />
              <span>Vie Fraternelle : {branch.name}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
              Nos Ministères & Départements
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
              L'édification du corps du Christ s’exerce à travers la participation active de chacun selon ses dons spirituels et sa vocation à{' '}
              <strong className="text-white">{branch.fullName}</strong>.
            </p>
          </div>
        </div>

        {/* Ministries Detailed Grid */}
        <div className="space-y-8 mb-16">
          {churchMinistries.map((ministry, idx) => (
            <div
              key={ministry.id}
              className="bg-white rounded-xl border border-[#e8e2d8] p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#faf7f2] border border-[#e8e2d8] flex items-center justify-center shrink-0">
                    {getIcon(ministry.icon)}
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-widest font-semibold text-[#c2674b] block mb-1">
                      Département #{idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-slate-900 leading-tight">
                      {ministry.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-medium">
                      {ministry.subtitle}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-8 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                    {ministry.description}
                  </p>

                  <div className="bg-[#faf7f2] p-4 rounded-lg border border-[#e8e2d8] flex flex-wrap items-center justify-between gap-4 text-xs">
                    <div className="flex items-center gap-2 text-slate-800 font-medium">
                      <Calendar className="w-4 h-4 text-[#c2674b]" />
                      <span>{ministry.meetingInfo}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="w-4 h-4 text-[#c2674b]" />
                      <span>Lieu : {branch.name} — {branch.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Box */}
        <div className="bg-[#161c22] text-white p-8 sm:p-10 rounded-xl">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl font-bold mb-3">
              Rejoindre un Groupe Fraternel à {branch.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-light">
              Que vous soyez nouveau dans la foi ou en quête de vérité biblique, nos groupes d'études sont ouverts à tous. Rapprochez-vous des anciens lors du culte de dimanche.
            </p>
            <p className="text-xs text-[#c2674b] font-medium">
              Responsable pastoral de branche : {branch.leader} — Tél : {branch.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
