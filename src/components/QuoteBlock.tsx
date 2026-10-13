import React from 'react';

export default function QuoteBlock() {
  return (
    <section className="bg-[#faf7f2] py-14 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-l-4 border-[#c2674b] pl-6 sm:pl-8 py-2">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-slate-800 leading-snug italic font-normal">
            « Notre communauté rassemble la famille de Dieu dans une fraternité sincère.
            Nous offrons une communion vivante et accueillante, invitant chaque croyant
            à marcher dans les pas du Christ et dans la promesse inébranlable des Écritures. »
          </p>
          <span className="block mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c2674b]">
            — Mission Biblique Christadelphe en République Démocratique du Congo
          </span>
        </div>
      </div>
    </section>
  );
}
