import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, Share2, Info, UserCheck } from 'lucide-react';
import { EventItem } from '../data/mockData';

interface EventCardProps {
  event: EventItem;
}

export default function EventCard({ event }: EventCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-[#e8e2d8] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
      {/* Event Photo */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-[#c2674b] text-white text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded shadow-sm">
          {event.date}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#c2674b] shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#c2674b] transition-colors leading-snug mb-1">
            {event.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 font-medium mb-4">
            {event.subtitle}
          </p>

          {/* 4 Social Media Links requested by user: Facebook, X (Twitter), YouTube, TikTok */}
          <div className="pt-3 border-t border-slate-100 mb-4">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 block mb-2">
              Suivre & Partager :
            </span>
            <div className="flex items-center gap-2">
              {/* Facebook */}
              <a
                href={event.links.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                title="Partager sur Facebook"
              >
                FB
              </a>

              {/* X / Twitter */}
              <a
                href={event.links.x}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-slate-900/10 hover:bg-black text-slate-900 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                title="Partager sur X (Twitter)"
              >
                𝕏
              </a>

              {/* YouTube */}
              <a
                href={event.links.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#FF0000]/10 hover:bg-[#FF0000] text-[#FF0000] hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                title="Voir sur YouTube"
              >
                YT
              </a>

              {/* TikTok */}
              <a
                href={event.links.tiktok}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-black/10 hover:bg-black text-slate-900 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                title="Voir sur TikTok"
              >
                TT
              </a>
            </div>
          </div>
        </div>

        {/* Action button to expand details */}
        <div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-800 bg-[#faf7f2] hover:bg-[#f1ebe0] py-2 px-3 rounded border border-[#e8e2d8] transition-colors"
          >
            <span>{expanded ? 'Masquer les informations' : 'Détails & Programme'}</span>
            {expanded ? <ChevronUp className="w-4 h-4 text-[#c2674b]" /> : <ChevronDown className="w-4 h-4 text-[#c2674b]" />}
          </button>

          {/* Expandable Details Container */}
          {expanded && (
            <div className="mt-3 p-4 bg-[#faf7f2] rounded border border-[#e8e2d8] text-xs text-slate-700 animate-in fade-in duration-200 space-y-2.5">
              <p className="leading-relaxed text-slate-800">
                {event.details}
              </p>
              <div className="pt-2 border-t border-slate-200/80 flex flex-col gap-1 text-[11px] text-slate-600">
                <span>🕒 <strong>Horaire :</strong> {event.time}</span>
                <span>👤 <strong>Organisateur :</strong> {event.organizer}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
