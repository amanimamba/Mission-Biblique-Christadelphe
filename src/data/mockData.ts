export interface Branch {
  key: string;
  name: string;
  fullName: string;
  isMain: boolean;
  address: string;
  city: string;
  province: string;
  phone: string;
  email: string;
  scheduleSunday: string;
  scheduleWednesday: string;
  leader: string;
  description: string;
}

export interface Culte {
  id: number;
  branchKey: string;
  theme: string;
  date: string;
  time: string;
  image: string;
  verse: string;
  verseText: string;
  speaker: string;
  preacher: string;
  otherInfo: string;
  audioDuration?: string;
  category: string;
}

export interface EventItem {
  id: number;
  branchKey: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  image: string;
  links: {
    facebook: string;
    x: string;
    youtube: string;
    tiktok: string;
  };
  details: string;
  organizer: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  branchKey?: string;
  branchName: string;
  image: string;
  bio: string;
  phone?: string;
}

export interface ChurchProject {
  id: number;
  branchKey?: string;
  title: string;
  target: string;
  raised: string;
  percent: number;
  description: string;
  location: string;
}

export const branches: Branch[] = [
  {
    key: 'kinshasa',
    name: 'Kinshasa',
    fullName: 'Branche Principale de Kinshasa (Siège)',
    isMain: true,
    address: '144 Boulevard du 30 Juin, Commune de la Gombe',
    city: 'Kinshasa',
    province: 'Kinshasa',
    phone: '+243 81 234 5678',
    email: 'kinshasa@christadelphes-rdc.org',
    scheduleSunday: 'Dimanche: 09h00 - 12h00 (Rupture du Pain & Exhortation)',
    scheduleWednesday: 'Mercredi: 17h00 - 18h30 (Étude Biblique Approfondie)',
    leader: 'Frère Michel Mwamba (Ancien Principal)',
    description: 'Siège central et branche directrice de la Mission Biblique Christadelphe en RDC, coordonnant la formation biblique, les éditions scripturaires et la communion fraternelle dans la capitale.',
  },
  {
    key: 'kindu',
    name: 'Kindu',
    fullName: 'Branche Régionale de Kindu (Maniema)',
    isMain: false,
    address: '34 Avenue du Maniema, Quartier Kasuku',
    city: 'Kindu',
    province: 'Maniema',
    phone: '+243 85 432 1098',
    email: 'kindu@christadelphes-rdc.org',
    scheduleSunday: 'Dimanche: 09h00 - 12h00 (Prière, Fraction du Pain & Exhortation)',
    scheduleWednesday: 'Jeudi: 16h00 - 17h30 (Étude des Prophéties Messianiques)',
    leader: 'Frère Thomas Tambwe (Ancien de Kindu)',
    description: 'Assemblée vivante et fervente de Kindu au Maniema, dévouée à l’étude approfondie des Écritures, à la fraternité chrétienne et à l’espérance du Royaume de Dieu.',
  },
  {
    key: 'lubumbashi',
    name: 'Lubumbashi',
    fullName: 'Branche de Lubumbashi (Haut-Katanga)',
    isMain: false,
    address: '45 Avenue Lumumba, Quartier Golf',
    city: 'Lubumbashi',
    province: 'Haut-Katanga',
    phone: '+243 97 123 4567',
    email: 'lubumbashi@christadelphes-rdc.org',
    scheduleSunday: 'Dimanche: 09h30 - 12h30 (Culte de Fraction du Pain)',
    scheduleWednesday: 'Jeudi: 16h30 - 18h00 (Étude Biblique Doctrinale)',
    leader: 'Frère Joseph Kalenga (Ancien de Branche)',
    description: 'Assemblée dynamique regroupant les familles et jeunes du Katanga pour la célébration de la sainte Cène et l’enseignement apostolique.',
  },
  {
    key: 'goma',
    name: 'Goma',
    fullName: 'Branche de Goma (Nord-Kivu)',
    isMain: false,
    address: '22 Avenue des Volcans, Quartier Himbi',
    city: 'Goma',
    province: 'Nord-Kivu',
    phone: '+243 82 987 6543',
    email: 'goma@christadelphes-rdc.org',
    scheduleSunday: 'Dimanche: 09h00 - 12h00 (Culte d’Adoration & Prière)',
    scheduleWednesday: 'Vendredi: 16h00 - 17h30 (Partage Scripturaire)',
    leader: 'Frère Emmanuel Hakizimana (Ancien de Goma)',
    description: 'Un phare d’espérance et de consolation évangélique au cœur des épreuves dans l’Est de la République, apportant la paix du Christ.',
  },
  {
    key: 'kalemie',
    name: 'Kalemie',
    fullName: 'Branche de Kalemie (Tanganyika)',
    isMain: false,
    address: '18 Route du Port, Quartier Industriel',
    city: 'Kalemie',
    province: 'Tanganyika',
    phone: '+243 84 555 4321',
    email: 'kalemie@christadelphes-rdc.org',
    scheduleSunday: 'Dimanche: 08h30 - 11h30 (Culte Dominical & Cène)',
    scheduleWednesday: 'Mercredi: 16h00 - 17h30 (Classe Biblique Ouverte)',
    leader: 'Frère Jean-Paul Kiluba (Ancien de Kalemie)',
    description: 'Assemblée fraternelle réunie sur les rives du lac Tanganyika pour confesser la promesse faite à Abraham et vivre la charité fraternelle.',
  },
  {
    key: 'kasenga',
    name: 'Kasenga',
    fullName: 'Branche de Kasenga (Vallée de Luapula)',
    isMain: false,
    address: 'Avenue Principale de la Mission, Kasenga Centre',
    city: 'Kasenga',
    province: 'Haut-Katanga',
    phone: '+243 99 876 5432',
    email: 'kasenga@christadelphes-rdc.org',
    scheduleSunday: 'Dimanche: 09h00 - 11h45 (Culte Fraternel de Fraction du Pain)',
    scheduleWednesday: 'Mardi: 16h30 - 18h00 (Instruction Biblique des Foyers)',
    leader: 'Frère Pierre Ilunga (Ancien de Kasenga)',
    description: 'Une communauté chrétienne historique engagée dans l’enseignement scripturaire des villages environnants et la solidarité locale.',
  },
];

export const cultes: Culte[] = [
  // --- KINSHASA CULTES ---
  {
    id: 1,
    branchKey: 'kinshasa',
    theme: 'La Grâce Abondante et la Promesse du Royaume',
    date: 'Dimanche 18 Octobre 2026',
    time: '09h00 - 11h30',
    image: '/src/assets/images/culte_detail_thumb_1791721724068.jpg',
    verse: 'Jean 1:16-17',
    verseText: 'Et nous avons tous reçu de sa plénitude, et grâce pour grâce; car la loi a été donnée par Moïse, la grâce et la vérité sont venues par Jésus-Christ.',
    speaker: 'Frère Daniel Lukusa',
    preacher: 'Frère Michel Mwamba (Ancien Principal)',
    otherInfo: 'Rupture du pain solennelle, prière pour la paix en RDC et accueil de 12 nouveaux frères et sœurs catéchumènes.',
    audioDuration: '48 min',
    category: 'Culte Dominical',
  },
  {
    id: 2,
    branchKey: 'kinshasa',
    theme: 'La Foi Vivante selon les Écritures d’Abraham',
    date: 'Dimanche 25 Octobre 2026',
    time: '09h00 - 11h30',
    image: '/src/assets/images/bible_study_reading_1791887625322.jpg',
    verse: 'Romains 4:3 & Hébreux 11:8',
    verseText: 'Abraham crut à Dieu, et cela lui fut imputé à justice. C’est par la foi qu’Abraham, lors de sa vocation, obéit et partit...',
    speaker: 'Frère Justin Mukendi',
    preacher: 'Frère David Ilunga (Docteur Biblique)',
    otherInfo: 'Étude doctrinale sur le salut par la foi opérante et l’espérance du retour du Messie sur la terre.',
    audioDuration: '52 min',
    category: 'Exhortation Biblique',
  },
  {
    id: 3,
    branchKey: 'kinshasa',
    theme: 'Marcher dans la Lumière de la Résurrection',
    date: 'Dimanche 01 Novembre 2026',
    time: '09h00 - 11h30',
    image: '/src/assets/images/hero_kinshasa_church_1791721710657.jpg',
    verse: '1 Corinthiens 15:20-23',
    verseText: 'Mais maintenant, Christ est ressuscité des morts, il est les prémices de ceux qui sont morts.',
    speaker: 'Frère Nathan Kabongo',
    preacher: 'Frère Samuel Kasongo',
    otherInfo: 'Culte axé sur l’immortalité promise aux croyants fidèles à la venue de Jésus.',
    audioDuration: '44 min',
    category: 'Fraction du Pain',
  },

  // --- KINDU CULTES ---
  {
    id: 4,
    branchKey: 'kindu',
    theme: 'Veillez et Priez : Les Signes des Temps à Kindu',
    date: 'Dimanche 18 Octobre 2026',
    time: '09h00 - 11h30',
    image: '/src/assets/images/culte_detail_thumb_1791721724068.jpg',
    verse: 'Luc 21:28 & Daniel 2:44',
    verseText: 'Quand ces choses commenceront à arriver, redressez-vous et levez vos têtes, parce que votre délivrance approche.',
    speaker: 'Frère Paul Radjabu',
    preacher: 'Frère Thomas Tambwe (Ancien de Kindu)',
    otherInfo: 'Exposition claire des prophéties bibliques sur le rétablissement du trône de David et la sainte communion fraternelle à Kasuku.',
    audioDuration: '55 min',
    category: 'Culte Dominical',
  },
  {
    id: 5,
    branchKey: 'kindu',
    theme: 'L’Alliance Éternelle et l’Espérance du Maniema',
    date: 'Dimanche 25 Octobre 2026',
    time: '09h00 - 11h30',
    image: '/src/assets/images/bible_study_reading_1791887625322.jpg',
    verse: 'Genèse 17:7 & Galates 3:29',
    verseText: 'Et si vous êtes à Christ, vous êtes donc la postérité d’Abraham, héritiers selon la promesse.',
    speaker: 'Frère Simon Mukamba',
    preacher: 'Frère Thomas Tambwe (Ancien de Kindu)',
    otherInfo: 'Étude doctrinale sur le baptême par immersion et l’héritage éternel promis aux croyants fidèles.',
    audioDuration: '47 min',
    category: 'Exhortation Biblique',
  },
  {
    id: 6,
    branchKey: 'kindu',
    theme: 'L’Amour Fraternel dans la Maison de Dieu',
    date: 'Dimanche 01 Novembre 2026',
    time: '09h00 - 11h30',
    image: '/src/assets/images/hero_kinshasa_church_1791721710657.jpg',
    verse: '1 Jean 4:11-12',
    verseText: 'Bien-aimés, si Dieu nous a ainsi aimés, nous devons aussi nous aimer les uns les autres.',
    speaker: 'Frère Jonas Assumani',
    preacher: 'Frère Paul Radjabu (Diacre à Kindu)',
    otherInfo: 'Fraction du pain suivie d’un temps de partage des vivres avec les veuves et orphelins de l’assemblée de Kindu.',
    audioDuration: '42 min',
    category: 'Fraction du Pain',
  },

  // --- LUBUMBASHI CULTES ---
  {
    id: 7,
    branchKey: 'lubumbashi',
    theme: 'Demeurer Fermes dans l’Espérance d’Israël',
    date: 'Dimanche 18 Octobre 2026',
    time: '09h30 - 12h00',
    image: '/src/assets/images/bible_study_reading_1791887625322.jpg',
    verse: 'Actes 28:20 & Éphésiens 2:12',
    verseText: 'C’est à cause de l’espérance d’Israël que je porte cette chaîne...',
    speaker: 'Frère Alain Banza',
    preacher: 'Frère Joseph Kalenga (Ancien)',
    otherInfo: 'Culte réunissant les croyants de Lubumbashi, Kolwezi et Likasi au quartier Golf.',
    audioDuration: '46 min',
    category: 'Culte Dominical',
  },
  {
    id: 8,
    branchKey: 'lubumbashi',
    theme: 'La Vérité Sans Compromis : La Parole de Dieu Seule',
    date: 'Dimanche 25 Octobre 2026',
    time: '09h30 - 12h00',
    image: '/src/assets/images/culte_detail_thumb_1791721724068.jpg',
    verse: '2 Timothée 3:16-17',
    verseText: 'Toute Écriture est inspirée de Dieu, et utile pour enseigner, pour convaincre, pour corriger...',
    speaker: 'Frère Patrick Ilunga',
    preacher: 'Frère Joseph Kalenga',
    otherInfo: 'Exhortation sur l’autorité souveraine de la Bible face aux coutumes et traditions humaines.',
    audioDuration: '50 min',
    category: 'Exhortation Biblique',
  },

  // --- GOMA CULTES ---
  {
    id: 9,
    branchKey: 'goma',
    theme: 'Le Dieu de Toute Consolation dans les Tempêtes',
    date: 'Dimanche 18 Octobre 2026',
    time: '09h00 - 11h30',
    image: '/src/assets/images/culte_detail_thumb_1791721724068.jpg',
    verse: '2 Corinthiens 1:3-4',
    verseText: 'Béni soit Dieu, le Père des miséricordes et le Dieu de toute consolation...',
    speaker: 'Frère Moïse Baraka',
    preacher: 'Frère Emmanuel Hakizimana',
    otherInfo: 'Prière d’intercession pour la paix dans le Nord-Kivu et réconfort des familles déplacées.',
    audioDuration: '50 min',
    category: 'Culte Dominical & Prière',
  },
  {
    id: 10,
    branchKey: 'goma',
    theme: 'La Cité Fondée sur Dieu : La Nouvelle Jérusalem',
    date: 'Dimanche 25 Octobre 2026',
    time: '09h00 - 11h30',
    image: '/src/assets/images/hero_kinshasa_church_1791721710657.jpg',
    verse: 'Hébreux 11:10 & Apocalypse 21:2',
    verseText: 'Car il attendait la cité qui a de solides fondements, celle dont Dieu est l’architecte et le constructeur.',
    speaker: 'Frère Barnabé Niyonzima',
    preacher: 'Frère Emmanuel Hakizimana',
    otherInfo: 'Enseignement fortifiant les croyants face à l’adversité présente dans l’Est congolais.',
    audioDuration: '43 min',
    category: 'Culte Dominical',
  },

  // --- KALEMIE CULTES ---
  {
    id: 11,
    branchKey: 'kalemie',
    theme: 'L’Évangile du Royaume Prêché avec Fidélité au Tanganyika',
    date: 'Dimanche 18 Octobre 2026',
    time: '08h30 - 11h00',
    image: '/src/assets/images/bible_study_reading_1791887625322.jpg',
    verse: 'Matthieu 24:14',
    verseText: 'Cette bonne nouvelle du royaume sera prêchée dans le monde entier, pour servir de témoignage...',
    speaker: 'Frère Élie Moma',
    preacher: 'Frère Jean-Paul Kiluba',
    otherInfo: 'Réception de frères visiteurs des localités riveraines du lac Tanganyika.',
    audioDuration: '40 min',
    category: 'Culte Dominical',
  },
  {
    id: 12,
    branchKey: 'kalemie',
    theme: 'La Paix avec Dieu par Notre Seigneur Jésus-Christ',
    date: 'Dimanche 25 Octobre 2026',
    time: '08h30 - 11h00',
    image: '/src/assets/images/culte_detail_thumb_1791721724068.jpg',
    verse: 'Romains 5:1-2',
    verseText: 'Étant donc justifiés par la foi, nous avons la paix avec Dieu par notre Seigneur Jésus-Christ.',
    speaker: 'Frère Gaston Kyungu',
    preacher: 'Frère Jean-Paul Kiluba',
    otherInfo: 'Communion fraternelle et partage de la cène du Seigneur avec toute l’assemblée.',
    audioDuration: '45 min',
    category: 'Fraction du Pain',
  },

  // --- KASENGA CULTES ---
  {
    id: 13,
    branchKey: 'kasenga',
    theme: 'Un Seul Corps, Un Seul Esprit, Une Seule Foi',
    date: 'Dimanche 18 Octobre 2026',
    time: '09h00 - 11h45',
    image: '/src/assets/images/culte_detail_thumb_1791721724068.jpg',
    verse: 'Éphésiens 4:4-6',
    verseText: 'Il y a un seul corps et un seul Esprit, comme aussi vous avez été appelés à une seule espérance par votre vocation...',
    speaker: 'Frère Simon Mwape',
    preacher: 'Frère Pierre Ilunga',
    otherInfo: 'Communion fraternelle solennelle avec agape partagée entre frères et sœurs de Luapula.',
    audioDuration: '45 min',
    category: 'Culte Dominical',
  },
  {
    id: 14,
    branchKey: 'kasenga',
    theme: 'Semer dans la Justice pour Moissonner dans la Miséricorde',
    date: 'Dimanche 25 Octobre 2026',
    time: '09h00 - 11h45',
    image: '/src/assets/images/bible_study_reading_1791887625322.jpg',
    verse: 'Osée 10:12',
    verseText: 'Semez selon la justice, moissonnez selon la miséricorde, défrichez-vous un champ nouveau!',
    speaker: 'Frère Michel Chola',
    preacher: 'Frère Pierre Ilunga',
    otherInfo: 'Exhortation sur la sanctification quotidienne des familles croyantes à Kasenga.',
    audioDuration: '41 min',
    category: 'Exhortation Biblique',
  },
];

export const events: EventItem[] = [
  // --- KINSHASA EVENTS ---
  {
    id: 1,
    branchKey: 'kinshasa',
    title: 'Grande Conférence Nationale de la Jeunesse Christadelphe',
    subtitle: '« Enracinés dans la Parole, Lumineux dans le Monde »',
    date: '24 - 26 Novembre 2026',
    time: 'De 09h00 à 16h30',
    location: 'Temple Central de Kinshasa, Gombe & Centre d’Accueil',
    image: '/src/assets/images/event_card_thumb_1791721734782.jpg',
    links: {
      facebook: 'https://facebook.com/christadelphesrdc',
      x: 'https://x.com/christadelphes_cd',
      youtube: 'https://youtube.com/@christadelphesrdc',
      tiktok: 'https://tiktok.com/@christadelphes_rdc',
    },
    details: 'Trois journées d’ateliers d’exégèse biblique, débats sur la foi chrétienne dans la société congolaise, chants de louange et activités d’entraide fraternelle. Hébergement assuré pour les délégués des provinces.',
    organizer: 'Comité National de la Jeunesse (Kinshasa)',
  },
  {
    id: 2,
    branchKey: 'kinshasa',
    title: 'Séminaire Biblique : Les Promesses Divines aux Patriarches',
    subtitle: 'Comprendre le plan de salut de Dieu à travers Genèse et Galates',
    date: '08 Novembre 2026',
    time: '14h00 - 18h00',
    location: 'Salle d’Étude Fraternelle, Gombe, Kinshasa',
    image: '/src/assets/images/bible_study_reading_1791887625322.jpg',
    links: {
      facebook: 'https://facebook.com/christadelphesrdc',
      x: 'https://x.com/christadelphes_cd',
      youtube: 'https://youtube.com/@christadelphesrdc',
      tiktok: 'https://tiktok.com/@christadelphes_rdc',
    },
    details: 'Session ouverte au grand public et aux chercheurs de vérité désirant approfondir la doctrine biblique sans ajouts traditionnels humains.',
    organizer: 'Fraternité des Anciens de Kinshasa',
  },

  // --- KINDU EVENTS ---
  {
    id: 3,
    branchKey: 'kindu',
    title: 'Séminaire Biblique Régional du Maniema à Kindu',
    subtitle: '« Le Retour Visible du Christ et la Restauration du Trône de David »',
    date: '20 - 22 Novembre 2026',
    time: 'De 14h00 à 18h00',
    location: 'Temple de Kindu Kasuku, 34 Avenue du Maniema',
    image: '/src/assets/images/event_card_thumb_1791721734782.jpg',
    links: {
      facebook: 'https://facebook.com/christadelphesrdc',
      x: 'https://x.com/christadelphes_cd',
      youtube: 'https://youtube.com/@christadelphesrdc',
      tiktok: 'https://tiktok.com/@christadelphes_rdc',
    },
    details: 'Grand séminaire prophétique réunissant les croyants et sympathisants de Kindu, Kalima, Punia et Kasongo. Étude détaillée des livres de Daniel et de l’Apocalypse, suivie d’un temps de questions-réponses bibliques.',
    organizer: 'Anciens de la Branche de Kindu',
  },
  {
    id: 4,
    branchKey: 'kindu',
    title: 'Journée Fraternelle d’Entraide & Diaconie à Kindu',
    subtitle: 'Soutien aux orphelins, veuves et partage des Écritures',
    date: '06 Décembre 2026',
    time: 'De 09h00 à 15h00',
    location: 'Cour de la Mission Christadelphe, Kindu Kasuku',
    image: '/src/assets/images/church_leaders_consultation_1791887626495.jpg',
    links: {
      facebook: 'https://facebook.com/christadelphesrdc',
      x: 'https://x.com/christadelphes_cd',
      youtube: 'https://youtube.com/@christadelphesrdc',
      tiktok: 'https://tiktok.com/@christadelphes_rdc',
    },
    details: 'Distribution de vivres de première nécessité, manuels scolaires et Bibles de poche dans la ville de Kindu, avec prière collective pour le Maniema.',
    organizer: 'Comité de Diaconie de Kindu',
  },

  // --- LUBUMBASHI EVENTS ---
  {
    id: 5,
    branchKey: 'lubumbashi',
    title: 'Camp Biblique Régional du Haut-Katanga',
    subtitle: 'Étude continue de l’Épître aux Hébreux et communion fraternelle',
    date: '04 - 06 Décembre 2026',
    time: 'Journée Complète',
    location: 'Centre Biblique de Lubumbashi, Quartier Golf',
    image: '/src/assets/images/event_card_thumb_1791721734782.jpg',
    links: {
      facebook: 'https://facebook.com/christadelphesrdc',
      x: 'https://x.com/christadelphes_cd',
      youtube: 'https://youtube.com/@christadelphesrdc',
      tiktok: 'https://tiktok.com/@christadelphes_rdc',
    },
    details: 'Un grand rassemblement annuel réunissant les familles et les jeunes des assemblées du Katanga pour un temps fort de consécration et de chants spirituels.',
    organizer: 'Assemblée de Lubumbashi',
  },

  // --- GOMA EVENTS ---
  {
    id: 6,
    branchKey: 'goma',
    title: 'Atelier de Réconfort & Étude Biblique : L’Espérance dans les Épreuves',
    subtitle: 'La foi inébranlable dans les promesses divines du Royaume futur',
    date: '28 Novembre 2026',
    time: '13h30 - 17h00',
    location: 'Chapelle de Goma Himbi, Avenue des Volcans',
    image: '/src/assets/images/church_leaders_consultation_1791887626495.jpg',
    links: {
      facebook: 'https://facebook.com/christadelphesrdc',
      x: 'https://x.com/christadelphes_cd',
      youtube: 'https://youtube.com/@christadelphesrdc',
      tiktok: 'https://tiktok.com/@christadelphes_rdc',
    },
    details: 'Moment de soutien spirituel, de partage des Écritures et de prière communautaire pour tous les membres et visiteurs de Goma et des environs.',
    organizer: 'Comité Pastoral de Goma',
  },

  // --- KALEMIE EVENTS ---
  {
    id: 7,
    branchKey: 'kalemie',
    title: 'Journée Missionnaire du Lac Tanganyika',
    subtitle: 'Évangélisation et diffusion de la littérature biblique gratuite',
    date: '19 Décembre 2026',
    time: '09h00 - 16h00',
    location: 'Place Publique & Salle de Culte, Kalemie',
    image: '/src/assets/images/event_card_thumb_1791721734782.jpg',
    links: {
      facebook: 'https://facebook.com/christadelphesrdc',
      x: 'https://x.com/christadelphes_cd',
      youtube: 'https://youtube.com/@christadelphesrdc',
      tiktok: 'https://tiktok.com/@christadelphes_rdc',
    },
    details: 'Distribution de cours bibliques par correspondance et séminaire d’introduction aux prophéties bibliques à Kalemie.',
    organizer: 'Frères de Kalemie',
  },

  // --- KASENGA EVENTS ---
  {
    id: 8,
    branchKey: 'kasenga',
    title: 'Rencontre Annuelle des Frères & Sœurs de la Vallée de Luapula',
    subtitle: 'Rompre le pain dans l’unité fraternelle et baptêmes',
    date: '13 Décembre 2026',
    time: '10h00 - 15h30',
    location: 'Kasenga Centre, Temple Principal',
    image: '/src/assets/images/culte_detail_thumb_1791721724068.jpg',
    links: {
      facebook: 'https://facebook.com/christadelphesrdc',
      x: 'https://x.com/christadelphes_cd',
      youtube: 'https://youtube.com/@christadelphesrdc',
      tiktok: 'https://tiktok.com/@christadelphes_rdc',
    },
    details: 'Retrouvailles spirituelles, cantiques et baptêmes par immersion dans la rivière Luapula dans la foi apostolique originelle.',
    organizer: 'Assemblée de Kasenga',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Frère Michel Mwamba',
    role: 'Ancien Principal & Prédicateur',
    branchKey: 'kinshasa',
    branchName: 'Kinshasa (Siège)',
    image: '/src/assets/images/pastor_portrait_dr_congo_1791887626952.jpg',
    bio: 'Engagé depuis plus de 25 ans dans l’édification spirituelle des assemblées de la capitale et la proclamation fidèle de l’Évangile.',
    phone: '+243 81 234 5678',
  },
  {
    id: 2,
    name: 'Frère Thomas Tambwe',
    role: 'Ancien & Responsable de Branche',
    branchKey: 'kindu',
    branchName: 'Kindu (Maniema)',
    image: '/src/assets/images/pastor_portrait_dr_congo_1791887626952.jpg',
    bio: 'Ancien dévoué guidant l’assemblée de Kindu dans l’étude doctrinale, l’accueil fraternel et l’évangélisation dans tout le Maniema.',
    phone: '+243 85 432 1098',
  },
  {
    id: 3,
    name: 'Frère Joseph Kalenga',
    role: 'Ancien de Branche & Évangéliste',
    branchKey: 'lubumbashi',
    branchName: 'Lubumbashi (Katanga)',
    image: '/src/assets/images/pastor_portrait_dr_congo_1791887626952.jpg',
    bio: 'Superviseur des assemblées du Katanga, dévoué à la formation doctrinale et à l’accueil des nouvelles familles croyantes.',
    phone: '+243 97 123 4567',
  },
  {
    id: 4,
    name: 'Frère Emmanuel Hakizimana',
    role: 'Responsable Pastoral & Diaconie',
    branchKey: 'goma',
    branchName: 'Goma (Nord-Kivu)',
    image: '/src/assets/images/pastor_portrait_dr_congo_1791887626952.jpg',
    bio: 'Porteur du ministère de consolation et d’entraide dans les provinces de l’Est, fortifiant la foi des frères et sœurs.',
    phone: '+243 82 987 6543',
  },
  {
    id: 5,
    name: 'Frère Jean-Paul Kiluba',
    role: 'Ancien de Branche',
    branchKey: 'kalemie',
    branchName: 'Kalemie (Tanganyika)',
    image: '/src/assets/images/pastor_portrait_dr_congo_1791887626952.jpg',
    bio: 'Ancien de l’assemblée riveraine du Tanganyika, actif dans la formation des nouveaux disciples et le partage biblique.',
    phone: '+243 84 555 4321',
  },
  {
    id: 6,
    name: 'Frère Pierre Ilunga',
    role: 'Ancien & Enseignant Biblique',
    branchKey: 'kasenga',
    branchName: 'Kasenga (Luapula)',
    image: '/src/assets/images/church_leaders_consultation_1791887626495.jpg',
    bio: 'Pionnier de l’enseignement apostolique dans la vallée de Luapula, accompagnant les baptisés et les familles.',
    phone: '+243 99 876 5432',
  },
  {
    id: 7,
    name: 'Frère David Ilunga',
    role: 'Enseignement & Études Bibliques',
    branchKey: 'kinshasa',
    branchName: 'Kinshasa (Siège)',
    image: '/src/assets/images/church_leaders_consultation_1791887626495.jpg',
    bio: 'Docteur en Écritures et animateur des cours bibliques par correspondance à travers toute la République.',
    phone: '+243 81 555 0192',
  },
];

export const churchMinistries = [
  {
    id: 'hommes',
    title: 'Ministère des Hommes',
    icon: 'Shield',
    subtitle: 'Foi, Responsabilité & Prière',
    description: 'Rencontres fraternelles pour fortifier les pères, maris et jeunes hommes dans la doctrine biblique, l’intégrité morale et la conduite pieuse au foyer et dans l’assemblée locale.',
    meetingInfo: 'Chaque 1er et 3ème samedi du mois à 15h00',
  },
  {
    id: 'femmes',
    title: 'Ministère des Femmes',
    icon: 'Heart',
    subtitle: 'Dévotion, Entraide & Diaconie',
    description: 'Cercle des sœurs engagées dans la prière fraternelle, la visite des malades, le soutien aux veuves et l’enseignement des plus jeunes selon Tite 2.',
    meetingInfo: 'Chaque mardi après-midi à 16h00',
  },
  {
    id: 'couples',
    title: 'Couples & Familles',
    icon: 'Users',
    subtitle: 'Édification du Foyer Chrétien',
    description: 'Séminaires sur le mariage biblique, la communication bienveillante, l’éducation spirituelle des enfants et la sanctification du couple.',
    meetingInfo: 'Séminaire mensuel le dernier dimanche après le culte',
  },
  {
    id: 'jeunes',
    title: 'Jeunesse Christadelphe',
    icon: 'Compass',
    subtitle: 'Avenir, Étude & Témoignage',
    description: 'Camps de vacances, concours de récitation biblique, chorale et projets d’impact social pour ancrer la nouvelle génération dans la vérité divine.',
    meetingInfo: 'Tous les samedis à 14h00',
  },
];

export const churchProjects: ChurchProject[] = [
  {
    id: 1,
    branchKey: 'kindu',
    title: 'Extension de la Salle Polyvalente & Bibliothèque de Kindu',
    target: '12,000 $',
    raised: '8,400 $',
    percent: 70,
    description: 'Agrandissement du lieu de culte de Kasuku à Kindu pour accueillir jusqu’à 300 personnes et équiper une salle de lecture biblique pour les jeunes du Maniema.',
    location: 'Kindu (Maniema)',
  },
  {
    id: 2,
    branchKey: 'kinshasa',
    title: 'Construction du Centre Biblique Régional de Kinshasa-Est',
    target: '45,000 $',
    raised: '32,400 $',
    percent: 72,
    description: 'Édification d’une salle polyvalente de 600 places assises avec bibliothèque d’études pour héberger les séminaires nationaux à Kinshasa.',
    location: 'Kinshasa (Gombe & Limete)',
  },
  {
    id: 3,
    branchKey: 'lubumbashi',
    title: 'Centre de Formation Biblique des Jeunes au Katanga',
    target: '20,000 $',
    raised: '15,600 $',
    percent: 78,
    description: 'Aménagement de dortoirs et de salles d’ateliers pour le camp biblique annuel du Haut-Katanga à Lubumbashi.',
    location: 'Lubumbashi (Golf)',
  },
  {
    id: 4,
    branchKey: 'goma',
    title: 'Fonds de Solidarité & Cantine Fraternelle de Goma',
    target: '9,500 $',
    raised: '7,100 $',
    percent: 75,
    description: 'Fourniture de denrées et de soins d’urgence pour assister les familles déplacées et nécessiteuses au Nord-Kivu.',
    location: 'Goma (Himbi)',
  },
  {
    id: 5,
    branchKey: 'kalemie',
    title: 'Barque Missionnaire du Lac Tanganyika à Kalemie',
    target: '6,000 $',
    raised: '4,500 $',
    percent: 75,
    description: 'Acquisition d’une embarcation sécurisée pour permettre aux anciens de visiter les petites assemblées le long du lac.',
    location: 'Kalemie (Tanganyika)',
  },
  {
    id: 6,
    branchKey: 'kasenga',
    title: 'Projet d’Eau Potable & Forage Communautaire à Kasenga',
    target: '8,500 $',
    raised: '6,200 $',
    percent: 73,
    description: 'Installation d’un forage moderne et de bornes-fontaines pour les riverains de la mission dans la vallée de Luapula.',
    location: 'Kasenga Centre',
  },
];
