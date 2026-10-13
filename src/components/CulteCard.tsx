import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, Volume2, X, ChevronRight } from 'lucide-react';
import { Culte } from '../data/mockData';

interface CulteCardProps {
  culte: Culte;
}

export default function CulteCard({ culte }: CulteCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg border border-[#e8e2d8] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
        {/* Photo with subtle category/date overlay */}
        <div className="relative h-44 sm:h-52 overflow-hidden bg-slate-100">
          <img
            src={culte.image}
            alt={culte.theme}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-[#161c22]/90 backdrop-blur-sm text-white text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
            {culte.category}
          </div>
          {culte.audioDuration && (
            <div className="absolute bottom-3 right-3 bg-black/75 text-white text-[10px] sm:text-[11px] px-2 py-0.5 rounded flex items-center gap-1 font-mono">
              <Volume2 className="w-3 h-3 text-[#c2674b]" />
              {culte.audioDuration}
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#c2674b]" />
                <span>{culte.date}</span>
              </div>
              <span className="hidden xs:inline">·</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{culte.time}</span>
              </div>
            </div>

            <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#c2674b] transition-colors leading-snug mb-3">
              {culte.theme}
            </h3>

            <div className="flex items-center gap-2 text-xs text-slate-600 mb-4 bg-[#faf7f2] p-2.5 rounded border border-[#e8e2d8]">
              <BookOpen className="w-3.5 h-3.5 text-[#c2674b] shrink-0" />
              <span className="font-medium text-slate-800 truncate">{culte.verse}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <span className="text-xs text-slate-500 truncate max-w-[150px] sm:max-w-[170px]">
              {culte.preacher}
            </span>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#c2674b] hover:text-[#ab573c] transition-colors min-h-[38px] cursor-pointer"
            >
              Détails du Culte
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Comprehensive Culte Details Modal - Mobile Responsive */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl max-w-xl w-full p-5 sm:p-8 max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#c2674b] mb-2 pr-8">
              <span>{culte.category}</span>
              <span>·</span>
              <span>{culte.date}</span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-tight mb-4 pr-6">
              {culte.theme}
            </h3>

            {/* Bible Verse Banner */}
            <div className="bg-[#faf7f2] border-l-4 border-[#c2674b] p-3.5 sm:p-4 rounded-r-lg mb-5 sm:mb-6">
              <div className="flex items-center gap-2 text-xs font-bold text-[#c2674b] uppercase tracking-wider mb-1">
                <BookOpen className="w-4 h-4 shrink-0" />
                Verset Clé : {culte.verse}
              </div>
              <p className="font-serif text-xs sm:text-sm text-slate-800 italic leading-relaxed">
                « {culte.verseText} »
              </p>
            </div>

            {/* Liturgical Leadership Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 bg-slate-50 p-3.5 sm:p-4 rounded-lg border border-slate-200 mb-5 sm:mb-6 text-xs sm:text-sm">
              <div>
                <span className="text-slate-500 block text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold">
                  Prédicateur (Exhortation) :
                </span>
                <span className="font-semibold text-slate-900">{culte.preacher}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold">
                  Président / Orateur :
                </span>
                <span className="font-semibold text-slate-900">{culte.speaker}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold">
                  Horaire du Rassemblement :
                </span>
                <span className="font-medium text-slate-800">{culte.time}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold">
                  Enregistrement :
                </span>
                <span className="font-medium text-slate-800">
                  {culte.audioDuration ? `Audio disponible (${culte.audioDuration})` : 'Enregistrement archivé'}
                </span>
              </div>
            </div>

            {/* Other Liturgical Notes */}
            <div className="mb-6">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 sm:mb-2">
                Déroulement & Notes du Culte :
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-[#fcfbfa] p-3 rounded border border-slate-200/80">
                {culte.otherInfo}
              </p>
            </div>

            <div className="flex justify-end pt-3 border-t border-slate-100">
              <button
                onClick={() => setModalOpen(false)}
                className="w-full sm:w-auto bg-[#161c22] hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded transition-colors min-h-[44px]"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
