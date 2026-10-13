import React from 'react';
import { Quote } from 'lucide-react';
import { Branch } from '../data/mockData';

interface TestimonialQuoteProps {
  branch: Branch;
}

export default function TestimonialQuote({ branch }: TestimonialQuoteProps) {
  return (
    <section className="bg-[#faf7f2] py-12 sm:py-16 px-4 sm:px-8 border-b border-[#e8e2d8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Meditation */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#c2674b] block mb-2">
              Méditation Spirituelle
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
              L’Espérance Vivante de l’Évangile
            </h2>
            <p className="text-slate-700 text-xs sm:text-base leading-relaxed mb-6 font-light">
              « Car Dieu a tant aimé le monde qu’il a donné son Fils unique, afin que quiconque
              croit en lui ne périsse point, mais qu’il ait la vie éternelle. »
              Cette certitude divine fonde notre assemblée locale à {branch.name}.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#c2674b]"></span>
                Fraction du Pain
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#c2674b]"></span>
                Étude Prophétique
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#c2674b]"></span>
                Diaconie
              </span>
            </div>
          </div>

          {/* Right Photographic Box with Overlapping Dark Quote Card - responsive height */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-lg overflow-hidden min-h-[380px] sm:min-h-[360px] md:h-[380px] shadow-md border border-[#e8e2d8] flex flex-col justify-end">
              <img
                src="/src/assets/images/bible_study_reading_1791887625322.jpg"
                alt="Méditation biblique"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Overlapping Dark Quote Card matching the template */}
              <div className="relative z-10 m-3 sm:m-6 sm:max-w-md bg-[#161c22]/95 backdrop-blur-md text-white p-4 sm:p-6 rounded-lg border border-slate-700 shadow-2xl">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#c2674b] mb-1.5 opacity-80" />
                <p className="font-serif text-xs sm:text-sm md:text-base italic leading-relaxed text-slate-200 mb-3 sm:mb-4">
                  « Là où deux ou trois sont assemblés en mon nom, je suis au milieu d’eux.
                  C’est cette communion fraternelle qui fortifie nos cœurs chaque dimanche. »
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-700">
                  <img
                    src="/src/assets/images/pastor_portrait_dr_congo_1791887626952.jpg"
                    alt="Ancien de la mission"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-[#c2674b] shrink-0"
                  />
                  <div>
                    <span className="font-serif text-xs sm:text-sm font-bold text-white block">
                      Frère Michel Mwamba
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#c2674b] uppercase tracking-wider">
                      Ancien Principal · RDC
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
