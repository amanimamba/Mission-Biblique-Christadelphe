import React from 'react';
import { useBranch } from '../utils/useBranch';
import { BookOpen, MapPin, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const { branch } = useBranch();

  return (
    <div className="bg-[#faf7f2] min-h-screen py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Banner */}
        <div className="bg-[#161c22] text-white rounded-xl p-6 sm:p-10 md:p-12 mb-8 sm:mb-10 shadow-lg border border-slate-800">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c2674b] mb-3">
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>Doctrine & Histoire</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-3 sm:mb-4">
              À Propos de Notre Mission
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light mb-6">
              La Mission Biblique Christadelphe est une communauté chrétienne vouée au retour aux enseignements apostoliques authentiques de la Bible, présente à travers les provinces de la République Démocratique du Congo.
            </p>
          </div>
        </div>

        {/* Local Assembly Spotlight */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#c2674b]/50 shadow-sm mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c2674b] mb-2">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>Assemblée Locale Sélectionnée</span>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            La Communauté Christadelphe à {branch.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-light">
            {branch.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
            <div>
              <strong className="block text-slate-900">Adresse :</strong>
              <span>{branch.address}</span>
            </div>
            <div>
              <strong className="block text-slate-900">Ancien Responsable :</strong>
              <span>{branch.leader}</span>
            </div>
            <div>
              <strong className="block text-slate-900">Culte & Communion :</strong>
              <span>{branch.scheduleSunday}</span>
            </div>
          </div>
        </div>

        {/* 2-Column Story - responsive image height on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-6 rounded-xl overflow-hidden shadow-md border border-[#e8e2d8] h-60 sm:h-80 md:h-[380px]">
            <img
              src="/src/assets/images/church_leaders_consultation_1791887626495.jpg"
              alt="Fraternité pastorale"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-4 font-normal">
              Qui Sont les Christadelphes ?
            </h3>
            <p>
              Le nom <em>« Christadelphe »</em> vient de deux mots grecs signifiant <strong>« Frères et Sœurs en Christ »</strong> (Colossiens 1:2). C'est le nom adopté au XIXe siècle pour désigner un corps de croyants refusant toute dénomination sectaire humaine afin de s'attacher uniquement aux vérités bibliques de la foi primitive.
            </p>
            <p>
              Nous n'avons pas de hiérarchie cléricale rémunérée ni de clergé sacerdotal. Toutes les assemblées (ecclesias) sont autonomes et administrées fraternellement par des <strong>anciens</strong> et des <strong>diacres</strong> choisis selon les critères pastoraux de 1 Timothée 3 et Tite 1.
            </p>
            <p>
              En RDC, la mission est implantée à <strong>Kinshasa (Siège), Kindu, Lubumbashi, Goma, Kalemie et Kasenga</strong>, où elle rassemble des centaines de fidèles autour de la communion dominicale, de l'exégèse biblique et des œuvres caritatives.
            </p>
          </div>
        </div>

        {/* Confession de Foi */}
        <div className="bg-white p-6 sm:p-10 md:p-12 rounded-xl border border-[#e8e2d8] shadow-sm mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c2674b] block mb-2">
            Notre Fondement Doctrinal
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">
            Ce Que Nous Croyons selon les Écritures
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-slate-700">
            <div className="p-4 sm:p-5 bg-[#faf7f2] rounded-lg border border-[#e8e2d8]">
              <h4 className="font-serif font-bold text-base text-slate-900 mb-1.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c2674b] shrink-0" />
                1. La Bible, Seule Autorité Inspirée
              </h4>
              <p className="leading-relaxed text-slate-600 font-light">
                La Sainte Bible (Ancien et Nouveau Testaments) est la Parole inspirée et infaillible de Dieu, suffisante pour le salut et la doctrine (2 Timothée 3:16).
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-[#faf7f2] rounded-lg border border-[#e8e2d8]">
              <h4 className="font-serif font-bold text-base text-slate-900 mb-1.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c2674b] shrink-0" />
                2. Un Seul Dieu, le Père
              </h4>
              <p className="leading-relaxed text-slate-600 font-light">
                Il n'y a qu'un seul Dieu, le Père de notre Seigneur Jésus-Christ, Créateur de toutes choses (1 Corinthiens 8:6, Deutéronome 6:4).
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-[#faf7f2] rounded-lg border border-[#e8e2d8]">
              <h4 className="font-serif font-bold text-base text-slate-900 mb-1.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c2674b] shrink-0" />
                3. Jésus-Christ, Fils Unique de Dieu
              </h4>
              <p className="leading-relaxed text-slate-600 font-light">
                Jésus est le Fils de Dieu, né de Marie, qui a vaincu le péché dans notre nature humaine et a été glorifié à la droite du Père (Luc 1:35, Hébreux 4:15).
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-[#faf7f2] rounded-lg border border-[#e8e2d8]">
              <h4 className="font-serif font-bold text-base text-slate-900 mb-1.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c2674b] shrink-0" />
                4. Le Retour du Christ & le Royaume
              </h4>
              <p className="leading-relaxed text-slate-600 font-light">
                Jésus reviendra personnellement sur la terre pour ressusciter les morts, juger le monde et établir le Royaume de Dieu avec justice (Actes 1:11, Daniel 2:44).
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-[#faf7f2] rounded-lg border border-[#e8e2d8]">
              <h4 className="font-serif font-bold text-base text-slate-900 mb-1.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c2674b] shrink-0" />
                5. Le Baptême par Immersion
              </h4>
              <p className="leading-relaxed text-slate-600 font-light">
                Le baptême d'adultes croyants par immersion totale est indispensable pour le pardon des péchés et l'entrée dans l'alliance d'Abraham (Marc 16:16, Romains 6:4).
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-[#faf7f2] rounded-lg border border-[#e8e2d8]">
              <h4 className="font-serif font-bold text-base text-slate-900 mb-1.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c2674b] shrink-0" />
                6. L'Immortalité comme Don Futur
              </h4>
              <p className="leading-relaxed text-slate-600 font-light">
                L'homme est mortel par nature. L'immortalité sera accordée comme don de grâce à la résurrection corporelle des justes (1 Corinthiens 15:53).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
