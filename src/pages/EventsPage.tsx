import React from 'react';
import { useBranch } from '../utils/useBranch';
import { events } from '../data/mockData';
import EventCard from '../components/EventCard';
import { Calendar, MapPin, Share2, Bell } from 'lucide-react';

export default function EventsPage() {
  const { branch, branchKey } = useBranch();

  // Filter events strictly by branch
  const branchEvents = events.filter((e) => e.branchKey === branchKey);
  const eventsSource = branchEvents.length > 0 ? branchEvents : events.filter((e) => e.branchKey === 'kinshasa');

  return (
    <div className="bg-[#faf7f2] min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Banner */}
        <div className="bg-[#161c22] text-white rounded-xl p-8 sm:p-12 mb-10 shadow-lg border border-slate-800">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c2674b] mb-3">
              <MapPin className="w-4 h-4" />
              <span>Agenda des Activités : {branch.name}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
              Événements & Conférences à {branch.name}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
              Découvrez les conférences bibliques, séminaires de jeunesse, camps fraternels et journées d’entraide programmés par la branche de{' '}
              <strong className="text-white">{branch.fullName}</strong>.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-slate-300 bg-[#202932] px-4 py-2.5 rounded-lg border border-slate-700">
              <Calendar className="w-4 h-4 text-[#c2674b]" />
              <span>Lieu principal des rassemblements : {branch.address}</span>
            </div>
          </div>
        </div>

        {/* Info Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-lg border border-[#e8e2d8] mb-8 text-xs text-slate-700">
          <div>
            <span>
              Affichage de <strong>{eventsSource.length}</strong> événement(s) pour la branche de <strong>{branch.name}</strong>
            </span>
          </div>
          <div className="flex items-center gap-2 text-[#c2674b] font-medium">
            <Bell className="w-4 h-4" />
            <span>Tous nos événements et séminaires bibliques sont en accès libre et gratuit</span>
          </div>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsSource.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>

        {/* Participation Info */}
        <div className="mt-16 bg-white p-8 sm:p-10 rounded-xl border border-[#e8e2d8] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c2674b] block mb-2">
                Participer & Servir
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">
                Vous Souhaitez Participer à Nos Conférences à {branch.name} ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Chaque séminaire est conçu pour ouvrir les Écritures de manière claire, sans prérequis théologique. Des Bibles et des fascicules d’études sont mis gratuitement à la disposition des participants.
              </p>
              <div className="text-xs text-slate-700 space-y-1.5">
                <p>📞 Contact secrétariat événementiel : <strong>{branch.phone}</strong></p>
                <p>✉️ Inscription fraternelle : <strong>{branch.email}</strong></p>
              </div>
            </div>

            <div className="bg-[#faf7f2] p-6 rounded-lg border border-[#e8e2d8]">
              <h4 className="font-serif text-base font-bold text-slate-900 mb-2">
                Réseaux Sociaux & Retransmission
              </h4>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Suivez en direct ou en rediffusion nos conférences nationales et régionales sur nos plateformes officielles.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-[#1877F2]/10 text-[#1877F2] font-semibold px-2.5 py-1 rounded">Facebook Live</span>
                <span className="bg-slate-900/10 text-slate-900 font-semibold px-2.5 py-1 rounded">Fil 𝕏</span>
                <span className="bg-[#FF0000]/10 text-[#FF0000] font-semibold px-2.5 py-1 rounded">Chaîne YouTube</span>
                <span className="bg-black/10 text-black font-semibold px-2.5 py-1 rounded">Extraits TikTok</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
