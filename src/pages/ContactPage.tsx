import React from 'react';
import { useBranch } from '../utils/useBranch';
import ConsultationForm from '../components/ConsultationForm';
import { MapPin, Phone, Clock, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const { branch } = useBranch();

  return (
    <div className="bg-[#faf7f2] min-h-screen py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Banner */}
        <div className="bg-[#161c22] text-white rounded-xl p-6 sm:p-10 md:p-12 mb-8 sm:mb-10 shadow-lg border border-slate-800">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c2674b] mb-3">
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Contact & Accueil Fraternel</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-3 sm:mb-4">
              Contacter la Branche de {branch.name}
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light mb-6">
              Venez nous rendre visite lors de nos cultes dominicaux, prenez contact avec nos anciens ou transmettez votre sujet de prière en toute confiance fraternelle.
            </p>
          </div>
        </div>

        {/* Contact Information Cards - mobile responsive gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-12">
          {/* Card 1: Address */}
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#e8e2d8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#faf7f2] border border-[#e8e2d8] flex items-center justify-center text-[#c2674b] mb-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">
                Lieu de Culte & Adresse
              </h3>
              <p className="text-xs font-semibold text-[#c2674b] mb-2 uppercase tracking-wider">
                {branch.fullName}
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-light">
                {branch.address}
              </p>
              <p className="text-xs text-slate-500 font-light">
                Province de {branch.province}, RD Congo
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-medium text-slate-600">
              Responsable : {branch.leader}
            </div>
          </div>

          {/* Card 2: Phone & Email */}
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#e8e2d8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#faf7f2] border border-[#e8e2d8] flex items-center justify-center text-[#c2674b] mb-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">
                Téléphone & WhatsApp
              </h3>
              <p className="text-xs font-semibold text-[#c2674b] mb-2 uppercase tracking-wider">
                Assistance Pastorale Directe
              </p>
              <p className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                <a href={`tel:${branch.phone}`} className="hover:text-[#c2674b] transition-colors">
                  {branch.phone}
                </a>
              </p>
              <p className="text-xs text-slate-600 mb-4 font-light">
                Disponible pour les appels et messages WhatsApp du Lundi au Samedi.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-700 truncate">
              Email : <a href={`mailto:${branch.email}`} className="text-[#c2674b] underline">{branch.email}</a>
            </div>
          </div>

          {/* Card 3: Schedules */}
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#e8e2d8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#faf7f2] border border-[#e8e2d8] flex items-center justify-center text-[#c2674b] mb-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">
                Horaires des Rassemblements
              </h3>
              <p className="text-xs font-semibold text-[#c2674b] mb-2 uppercase tracking-wider">
                À {branch.name}
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 font-light">
                <div>
                  <strong className="block text-slate-900 font-semibold">Dimanche :</strong>
                  <span>{branch.scheduleSunday}</span>
                </div>
                <div>
                  <strong className="block text-slate-900 font-semibold">En semaine :</strong>
                  <span>{branch.scheduleWednesday}</span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs text-emerald-700 font-medium">
              ✓ Accueil des nouveaux arrivants 30 min avant le culte
            </div>
          </div>
        </div>

        {/* Formik & Yup Interactive Form */}
        <ConsultationForm branch={branch} />

        {/* First time visitors FAQ */}
        <div className="mt-12 sm:mt-16 bg-white p-6 sm:p-10 rounded-xl border border-[#e8e2d8]">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            Votre Première Visite à {branch.name} : Questions Fréquentes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-xs sm:text-sm text-slate-700">
            <div>
              <h4 className="font-serif font-bold text-base text-slate-900 mb-1">
                Comment se déroule l'accueil ?
              </h4>
              <p className="leading-relaxed text-slate-600 font-light">
                Vous serez accueilli avec chaleur par nos frères et sœurs. Aucun habillement spécial n'est imposé, nous recommandons une tenue digne et respectueuse de la sainteté de Dieu.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-slate-900 mb-1">
                Puis-je participer au culte sans être baptisé ?
              </h4>
              <p className="leading-relaxed text-slate-600 font-light">
                Absolument ! Tout le monde est bienvenu pour écouter les chants, les prières et l'exhortation de la Parole. Seul le partage du pain et de la coupe est réservé aux frères et sœurs baptisés.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-slate-900 mb-1">
                Faites-vous des quêtes obligatoires d'argent ?
              </h4>
              <p className="leading-relaxed text-slate-600 font-light">
                Non. Aucune dîme obligatoire n'est réclamée. Une corbeille discrète est accessible pour les offrandes volontaires destinées aux œuvres caritatives et à l'entretien du lieu de culte.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-slate-900 mb-1">
                Puis-je obtenir une Bible ou des cours par correspondance ?
              </h4>
              <p className="leading-relaxed text-slate-600 font-light">
                Oui, nos anciens remettent gratuitement des guides d'études et des cours bibliques par correspondance à toute personne sincère désirant approfondir la foi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
