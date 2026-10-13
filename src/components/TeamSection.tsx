import React from 'react';
import { teamMembers } from '../data/mockData';

export default function TeamSection() {
  return (
    <section id="equipe" className="bg-[#161c22] text-white py-16 sm:py-24 px-4 sm:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#c2674b] block mb-2">
            Serviteurs & Responsables
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white">
            Notre Corps Pastoral & Anciens
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-2 font-light">
            Des frères et sœurs consacrés au service bénévole de la parole, de la prière et de l’édification des assemblées à travers le Congo.
          </p>
        </div>

        {/* 4 portrait cards matching "MEET OUR TEAM" in reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-[#1c232b] rounded-lg overflow-hidden border border-slate-800 hover:border-[#c2674b]/60 transition-all flex flex-col"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161c22] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#c2674b] bg-black/70 px-2 py-0.5 rounded">
                    {member.branchName}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#e89c83] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#c2674b] font-medium tracking-wide mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
