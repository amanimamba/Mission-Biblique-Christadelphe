import React from 'react';
import { useBranch } from '../utils/useBranch';
import { teamMembers } from '../data/mockData';
import { UserCheck, MapPin, Phone, Award } from 'lucide-react';

export default function TeamPage() {
  const { branch, branchKey } = useBranch();

  // Find local leader
  const localLeader = teamMembers.find((m) => m.branchKey === branchKey);

  return (
    <div className="bg-[#faf7f2] min-h-screen py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Banner */}
        <div className="bg-[#161c22] text-white rounded-xl p-6 sm:p-10 md:p-12 mb-8 sm:mb-10 shadow-lg border border-slate-800">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c2674b] mb-3">
              <UserCheck className="w-4 h-4 shrink-0" />
              <span>Service Fraternel & Anciens</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-3 sm:mb-4">
              Notre Corps Pastoral & Responsables
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light mb-6">
              Des serviteurs de Dieu consacrés à l'enseignement, à l'accompagnement des familles et à la prière au sein de la branche de{' '}
              <strong className="text-white">{branch.fullName}</strong> et dans toute la république.
            </p>
          </div>
        </div>

        {/* Featured Local Leader of the Selected Branch */}
        {localLeader && (
          <div className="bg-white rounded-xl border border-[#c2674b] p-5 sm:p-8 md:p-10 shadow-md mb-10 sm:mb-14">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c2674b] mb-4">
              <Award className="w-4 h-4 shrink-0" />
              <span>Responsable Pastoral de la Branche de {branch.name}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="md:col-span-4 rounded-xl overflow-hidden shadow border border-slate-200 h-64 sm:h-80">
                <img
                  src={localLeader.image}
                  alt={localLeader.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="md:col-span-8 flex flex-col justify-between">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                    {localLeader.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-[#c2674b] uppercase tracking-wider mb-3 sm:mb-4">
                    {localLeader.role} — {localLeader.branchName}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 font-light">
                    {localLeader.bio}
                  </p>
                </div>

                <div className="bg-[#faf7f2] p-3.5 sm:p-4 rounded-lg border border-[#e8e2d8] flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#c2674b] shrink-0" />
                    <span>Ligne pastorale : <strong>{localLeader.phone || branch.phone}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#c2674b] shrink-0" />
                    <span>Lieu de culte : <strong>{branch.address}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Elders in DR Congo */}
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            Tous les Anciens & Responsables Régionaux en RDC
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg overflow-hidden border border-[#e8e2d8] shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-56 sm:h-60 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#c2674b] block mb-1">
                      {member.branchName}
                    </span>
                    <h4 className="font-serif text-base font-bold text-slate-900 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-xs text-slate-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
