import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Check, Send, Heart, Phone, User, MessageSquare } from 'lucide-react';
import { Branch } from '../data/mockData';

interface ConsultationFormProps {
  branch: Branch;
}

export default function ConsultationForm({ branch }: ConsultationFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      phone: '',
      topic: 'priere',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, 'Veuillez saisir au moins 2 caractères')
        .required('Le nom complet est obligatoire'),
      phone: Yup.string()
        .min(8, 'Numéro de téléphone incomplet')
        .required('Le numéro de téléphone est obligatoire'),
      topic: Yup.string().required('Veuillez choisir un sujet'),
    }),
    onSubmit: (values, { resetForm }) => {
      // Simulate submission
      setSubmitted(true);
      resetForm();
      setTimeout(() => setSubmitted(false), 8000);
    },
  });

  return (
    <section id="contact" className="bg-[#11161b] text-white py-14 px-4 sm:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1b232a] border border-slate-700/80 rounded-xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-slate-700/60 pb-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#c2674b] block mb-1">
                Écoute Pastorale & Communion
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
                Demande de Prière & Consultation
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md font-light">
              Besoin d’une prière, d’une étude biblique à domicile ou d’une visite fraternelle à {branch.name} ? Nos anciens sont à votre disposition.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 p-6 rounded-lg text-center animate-in fade-in">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-1">
                Demande Transmise avec Succès
              </h3>
              <p className="text-xs text-emerald-300">
                Les anciens de la branche de <strong>{branch.name}</strong> ont bien reçu votre demande et vous contacteront en toute discrétion fraternelle.
              </p>
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
                {/* Nom */}
                <div>
                  <label htmlFor="fullName" className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1 font-medium">
                    Nom & Prénom *
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Ex: Frère Jean Mukendi"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.fullName}
                      className={`w-full bg-[#13191f] border text-white text-xs sm:text-sm rounded px-3 py-3 focus:outline-none focus:ring-1 focus:ring-[#c2674b] transition-colors ${
                        formik.touched.fullName && formik.errors.fullName
                          ? 'border-red-500'
                          : 'border-slate-700'
                      }`}
                    />
                  </div>
                  {formik.touched.fullName && formik.errors.fullName && (
                    <p className="text-red-400 text-[11px] mt-1">{formik.errors.fullName}</p>
                  )}
                </div>

                {/* Téléphone */}
                <div>
                  <label htmlFor="phone" className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1 font-medium">
                    Téléphone / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Ex: +243 81 000 0000"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className={`w-full bg-[#13191f] border text-white text-xs sm:text-sm rounded px-3 py-3 focus:outline-none focus:ring-1 focus:ring-[#c2674b] transition-colors ${
                      formik.touched.phone && formik.errors.phone
                        ? 'border-red-500'
                        : 'border-slate-700'
                    }`}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-400 text-[11px] mt-1">{formik.errors.phone}</p>
                  )}
                </div>

                {/* Sujet */}
                <div>
                  <label htmlFor="topic" className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1 font-medium">
                    Objet de la Demande
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.topic}
                    className="w-full bg-[#13191f] border border-slate-700 text-white text-xs sm:text-sm rounded px-3 py-3 focus:outline-none focus:ring-1 focus:ring-[#c2674b] cursor-pointer"
                  >
                    <option value="priere">Sujet de Prière & Intercession</option>
                    <option value="etude">Demande d'Étude Biblique</option>
                    <option value="visite">Visite Pastorale Fraternelle</option>
                    <option value="bapteme">Information sur le Baptême</option>
                  </select>
                </div>

                {/* Bouton d'envoi matching template */}
                <div className="sm:col-span-2 lg:col-span-1 pt-0 sm:pt-[22px]">
                  <button
                    type="submit"
                    className="w-full bg-[#c2674b] hover:bg-[#ab573c] text-white font-semibold text-xs uppercase tracking-widest py-3.5 px-4 rounded transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Envoyer la Demande
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
