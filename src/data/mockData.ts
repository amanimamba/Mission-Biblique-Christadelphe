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
}

export const branches: Branch[] = [
  {
    key: 'kinshasa',
    name: 'Kinshasa',
    fullName: 'Branche Principale de Kinshasa',
    isMain: true,
    address: '144 Boulevard du 30 Juin, Commune de la Gombe',
    city: 'Kinshasa',
    province: 'Kinshasa',
    phone: '+243 81 234 5678',
    email: 'kinshasa@christadelphes-rdc.org',
    scheduleSunday: 'Dimanche: 09h00 - 12h00 (Rupture du Pain & Exhortation)',
    scheduleWednesday: 'Mercredi: 17h00 - 18h30 (Étude Biblique Approfondie)',
    leader: 'Frère Michel Mwamba (Ancien Principal)',
    description: 'Siège central de la Mission Biblique Christadelphe en RDC, coordonnant la prédication de la Parole et la communion fraternelle dans la capitale.',
  },
  {
    key: 'lubumbashi',
    name: 'Lubumbashi',
    fullName: 'Branche de Lubumbashi (Katanga)',
    isMain: false,
    address: '45 Avenue Lumumba, Quartier Golf',
    city: 'Lubumbashi',
    province: 'Haut-Katanga',
    phone: '+243 97 123 4567',
    email: 'lubumbashi@christadelphes-rdc.org',
    scheduleSunday: 'Dimanche: 09h30 - 12h30 (Culte de Fraction du Pain)',
    scheduleWednesday: 'Jeudi: 16h30 - 18h00 (Étude Biblique)',
    leader: 'Frère Joseph Kalenga (Ancien)',
    description: 'Communauté fervente engagée dans la formation biblique des familles et des jeunes du Katanga.',
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
    scheduleSunday: 'Dimanche: 09h00 - 12h00 (Culte d’Adoration)',
    scheduleWednesday: 'Vendredi: 16h00 - 17h30 (Partage & Prière)',
    leader: 'Frère Emmanuel Hakizimana (Ancien)',
    description: 'Un phare d’espérance et de consolation évangélique au cœur des épreuves dans l’Est de la République.',
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
    scheduleSunday: 'Dimanche: 08h30 - 11h30 (Culte du Dimanche)',
    scheduleWednesday: 'Mercredi: 16h00 - 17h30 (Classe Biblique)',
    leader: 'Frère Jean-Paul Kiluba (Ancien)',
    description: 'Assemblée fraternelle réunie sur les rives du lac Tanganyika pour confesser la promesse faite à Abraham.',
  },
  {
    key: 'kasenga',
    name: 'Kasenga',
    fullName: 'Branche de Kasenga',
    isMain: false,
    address: 'Avenue Principale de la Mission, Kasenga Centre',
    city: 'Kasenga',
    province: 'Haut-Katanga',
    phone: '+243 99 876 5432',
    email: 'kasenga@christadelphes-rdc.org',
    scheduleSunday: 'Dimanche: 09h00 - 11h45 (Culte Fraternel)',
    scheduleWednesday: 'Mardi: 16h30 - 18h00 (Instruction Biblique)',
    leader: 'Frère Pierre Ilunga (Ancien)',
    description: 'Une communauté historique active dans l’enseignement scripturaire et la solidarité chrétienne locale.',
  },
  {
    key: 'kindu',
    name: 'Kindu',
    fullName: 'Branche de Kindu (Maniema)',
    isMain: false,
    address: '34 Avenue du Maniema, Kasuku',
    city: 'Kindu',
    province: 'Maniema',
    phone: '+243 85 432 1098',
    email: 'kindu@christadelphes-rdc.org',
    scheduleSunday: 'Dimanche: 09h00 - 12h00 (Prière & Prédication)',
    scheduleWednesday: 'Jeudi: 16h00 - 17h30 (Étude des Prophéties)',
    leader: 'Frère Thomas Tambwe (Ancien)',
    description: 'Assemblée dévouée à l’approfondissement de la Parole de Dieu et à la diffusion de l’espérance messianique.',
  },
];

export const cultes: Culte[] = [
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
    category: 'Culte de Fraction du Pain',
  },
  {
    id: 4,
    branchKey: 'lubumbashi',
    theme: 'Demeurer Fermes dans l’Espérance d’Israël',
    date: 'Dimanche 18 Octobre 2026',
    time: '09h30 - 12h00',
    image: '/src/assets/images/bible_study_reading_1791887625322.jpg',
    verse: 'Actes 28:20 & Éphésiens 2:12',
    verseText: 'C’est à cause de l’espérance d’Israël que je porte cette chaîne...',
    speaker: 'Frère Alain Banza',
    preacher: 'Frère Joseph Kalenga',
    otherInfo: 'Culte réunissant les croyants de Lubumbashi, Kolwezi et Likasi.',
    audioDuration: '46 min',
    category: 'Culte Dominical',
  },
  {
    id: 5,
    branchKey: 'goma',
    theme: 'Le Dieu de Toute Consolation dans les Tempêtes',
    date: 'Dimanche 18 Octobre 2026',
    time: '09h00 - 11h30',
    image: '/src/assets/images/culte_detail_thumb_1791721724068.jpg',
    verse: '2 Corinthiens 1:3-4',
    verseText: 'Béni soit Dieu, le Père des miséricordes et le Dieu de toute consolation...',
    speaker: 'Frère Moïse Baraka',
    preacher: 'Frère Emmanuel Hakizimana',
    otherInfo: 'Moment de prière d’intercession pour les déplacés et distribution de vivres fraternels.',
    audioDuration: '50 min',
    category: 'Culte Dominical & Prière',
  },
  {
    id: 6,
    branchKey: 'kalemie',
    theme: 'L’Évangile du Royaume Prêché avec Fidélité',
    date: 'Dimanche 18 Octobre 2026',
    time: '08h30 - 11h00',
    image: '/src/assets/images/bible_study_reading_1791887625322.jpg',
    verse: 'Matthieu 24:14',
    verseText: 'Cette bonne nouvelle du royaume sera prêchée dans le monde entier...',
    speaker: 'Frère Élie Moma',
    preacher: 'Frère Jean-Paul Kiluba',
    otherInfo: 'Réception de frères visiteurs des localités bordant le Tanganyika.',
    audioDuration: '40 min',
    category: 'Culte Dominical',
  },
  {
    id: 7,
    branchKey: 'kasenga',
    theme: 'Un Seul Corps, Un Seul Esprit, Une Seule Foi',
    date: 'Dimanche 18 Octobre 2026',
    time: '09h00 - 11h30',
    image: '/src/assets/images/culte_detail_thumb_1791721724068.jpg',
    verse: 'Éphésiens 4:4-6',
    verseText: 'Il y a un seul corps et un seul Esprit, comme aussi vous avez été appelés à une seule espérance...',
    speaker: 'Frère Simon Mwape',
    preacher: 'Frère Pierre Ilunga',
    otherInfo: 'Communion fraternelle avec agape partagée.',
    audioDuration: '45 min',
    category: 'Culte Dominical',
  },
  {
    id: 8,
    branchKey: 'kindu',
    theme: 'Veillez et Priez: Les Signes des Temps',
    date: 'Dimanche 18 Octobre 2026',
    time: '09h00 - 11h30',
    image: '/src/assets/images/bible_study_reading_1791887625322.jpg',
    verse: 'Luc 21:28',
    verseText: 'Quand ces choses commenceront à arriver, redressez-vous et levez vos têtes, parce que votre délivrance approche.',
    speaker: 'Frère Paul Radjabu',
    preacher: 'Frère Thomas Tambwe',
    otherInfo: 'Exposition claire des prophéties bibliques sur le rétablissement du trône de David.',
    audioDuration: '55 min',
    category: 'Étude & Culte',
  },
];

export const events: EventItem[] = [
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
    details: 'Trois journées d’ateliers d’exégèse biblique, débats sur la vie chrétienne dans la société congolaise, chants de louange et activités d’entraide fraternelle. Hébergement assuré pour les délégués des provinces.',
    organizer: 'Comité National de la Jeunesse (Kinshasa)',
  },
  {
    id: 2,
    branchKey: 'kinshasa',
    title: 'Séminaire Biblique: Les Promesses Divines aux Patriarches',
    subtitle: 'Comprendre le plan de salut de Dieu à travers Genèse et Galates',
    date: '08 Novembre 2026',
    time: '14h00 - 18h00',
    location: 'Salle d’Étude Fraternelle, Kinshasa',
    image: '/src/assets/images/bible_study_reading_1791887625322.jpg',
    links: {
      facebook: 'https://facebook.com/christadelphesrdc',
      x: 'https://x.com/christadelphes_cd',
      youtube: 'https://youtube.com/@christadelphesrdc',
      tiktok: 'https://tiktok.com/@christadelphes_rdc',
    },
    details: 'Session ouverte au public et aux chercheurs de vérité désirant approfondir la doctrine biblique sans ajouts traditionnels humains.',
    organizer: 'Fraternité des Anciens de Kinshasa',
  },
  {
    id: 3,
    branchKey: 'kinshasa',
    title: 'Journée d’Action Fraternelle et Distribution d’Entraide',
    subtitle: 'Mettre l’amour du Christ en action auprès des orphelins et des veuves',
    date: '12 Décembre 2026',
    time: '08h30 - 15h00',
    location: 'Parvis de l’Église de Kinshasa',
    image: '/src/assets/images/church_leaders_consultation_1791887626495.jpg',
    links: {
      facebook: 'https://facebook.com/christadelphesrdc',
      x: 'https://x.com/christadelphes_cd',
      youtube: 'https://youtube.com/@christadelphesrdc',
      tiktok: 'https://tiktok.com/@christadelphes_rdc',
    },
    details: 'Collecte et distribution de vivres, de manuels scolaires et de Bibles de poche pour soutenir les familles vulnérables de la communauté urbaine.',
    organizer: 'Département de Diaconie & Entraide',
  },
  {
    id: 4,
    branchKey: 'lubumbashi',
    title: 'Camp Biblique Régional du Haut-Katanga',
    subtitle: 'Étude continue de l’Épître aux Hébreux et communion fraternelle',
    date: '04 - 06 Décembre 2026',
    time: 'Journée Complète',
    location: 'Centre Biblique de Lubumbashi',
    image: '/src/assets/images/event_card_thumb_1791721734782.jpg',
    links: {
      facebook: 'https://facebook.com/christadelphesrdc',
      x: 'https://x.com/christadelphes_cd',
      youtube: 'https://youtube.com/@christadelphesrdc',
      tiktok: 'https://tiktok.com/@christadelphes_rdc',
    },
    details: 'Un grand rassemblement annuel réunissant les familles et les jeunes des assemblées du Katanga pour un temps fort de consécration.',
    organizer: 'Assemblée de Lubumbashi',
  },
  {
    id: 5,
    branchKey: 'goma',
    title: 'Atelier de Réconfort & Étude: L’Espérance dans les Épreuves',
    subtitle: 'La foi inébranlable dans les promesses du Royaume futur',
    date: '28 Novembre 2026',
    time: '13h30 - 17h00',
    location: 'Chapelle de Goma Himbi',
    image: '/src/assets/images/church_leaders_consultation_1791887626495.jpg',
    links: {
      facebook: 'https://facebook.com/christadelphesrdc',
      x: 'https://x.com/christadelphes_cd',
      youtube: 'https://youtube.com/@christadelphesrdc',
      tiktok: 'https://tiktok.com/@christadelphes_rdc',
    },
    details: 'Moment de soutien spirituel, de partage des Écritures et de prière communautaire pour tous les membres et visiteurs de Goma.',
    organizer: 'Comité Pastoral de Goma',
  },
  {
    id: 6,
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
    details: 'Distribution de cours bibliques par correspondance et séminaire d’introduction aux prophéties bibliques.',
    organizer: 'Frères de Kalemie',
  },
  {
    id: 7,
    branchKey: 'kasenga',
    title: 'Rencontre Annuelle des Frères & Sœurs de la Vallée de Luapula',
    subtitle: 'Rompre le pain dans l’unité fraternelle',
    date: '13 Décembre 2026',
    time: '10h00 - 15h30',
    location: 'Kasenga Centre',
    image: '/src/assets/images/culte_detail_thumb_1791721724068.jpg',
    links: {
      facebook: 'https://facebook.com/christadelphesrdc',
      x: 'https://x.com/christadelphes_cd',
      youtube: 'https://youtube.com/@christadelphesrdc',
      tiktok: 'https://tiktok.com/@christadelphes_rdc',
    },
    details: 'Retrouvailles spirituelles, cantiques et baptêmes dans la foi biblique apostolique.',
    organizer: 'Assemblée de Kasenga',
  },
  {
    id: 8,
    branchKey: 'kindu',
    title: 'Conférence des Écritures: Le Retour Visible du Christ',
    subtitle: 'Restauration de la terre et paix universelle',
    date: '20 Novembre 2026',
    time: '14h30 - 18h00',
    location: 'Temple de Kindu Kasuku',
    image: '/src/assets/images/bible_study_reading_1791887625322.jpg',
    links: {
      facebook: 'https://facebook.com/christadelphesrdc',
      x: 'https://x.com/christadelphes_cd',
      youtube: 'https://youtube.com/@christadelphesrdc',
      tiktok: 'https://tiktok.com/@christadelphes_rdc',
    },
    details: 'Explication méthodique des prophéties de Daniel, Zacharie et de l’Apocalypse.',
    organizer: 'Mission de Kindu',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Frère Michel Mwamba',
    role: 'Ancien Principal & Prédicateur',
    branchKey: 'kinshasa',
    branchName: 'Kinshasa',
    image: '/src/assets/images/pastor_portrait_dr_congo_1791887626952.jpg',
    bio: 'Engagé depuis plus de 25 ans dans l’édification spirituelle des assemblées de la capitale et la proclamation fidèle de l’Évangile.',
  },
  {
    id: 2,
    name: 'Frère David Ilunga',
    role: 'Enseignement & Études Bibliques',
    branchKey: 'kinshasa',
    branchName: 'Kinshasa',
    image: '/src/assets/images/church_leaders_consultation_1791887626495.jpg',
    bio: 'Docteur en Écritures et animateur des cours bibliques par correspondance à travers toute la République.',
  },
  {
    id: 3,
    name: 'Frère Joseph Kalenga',
    role: 'Ancien de Branche & Évangéliste',
    branchKey: 'lubumbashi',
    branchName: 'Lubumbashi',
    image: '/src/assets/images/pastor_portrait_dr_congo_1791887626952.jpg',
    bio: 'Superviseur des assemblées du Katanga, dévoué à la formation doctrinale et à l’accueil des nouvelles familles croyantes.',
  },
  {
    id: 4,
    name: 'Frère Emmanuel Hakizimana',
    role: 'Responsable Pastoral & Diaconie',
    branchKey: 'goma',
    branchName: 'Goma',
    image: '/src/assets/images/pastor_portrait_dr_congo_1791887626952.jpg',
    bio: 'Porteur du ministère de consolation et d’entraide dans les provinces de l’Est, fortifiant la foi des frères et sœurs.',
  },
];

export const churchMinistries = [
  {
    id: 'hommes',
    title: 'Ministère des Hommes',
    icon: 'Shield',
    subtitle: 'Foi, Responsabilité & Prière',
    description: 'Rencontres mensuelles pour fortifier les pères, maris et jeunes hommes dans la doctrine biblique, l’intégrité morale et la conduite pieuse au foyer et dans l’Église.',
  },
  {
    id: 'femmes',
    title: 'Ministère des Femmes',
    icon: 'Heart',
    subtitle: 'Dévotion, Entraide & Diaconie',
    description: 'Cercle des sœurs engagées dans la prière fraternelle, la visite des malades, le soutien aux veuves et l’enseignement des plus jeunes selon Tite 2.',
  },
  {
    id: 'couples',
    title: 'Couples & Familles',
    icon: 'Users',
    subtitle: 'Édification du Foyer Chrétien',
    description: 'Séminaires sur le mariage biblique, la communication bienveillante, l’éducation spirituelle des enfants et la sanctification du couple.',
  },
  {
    id: 'jeunes',
    title: 'Jeunesse Christadelphe',
    icon: 'Compass',
    subtitle: 'Avenir, Étude & Témoignage',
    description: 'Camps de vacances, concours de récitation biblique, chorale et projets d’impact social pour ancrer la nouvelle génération dans la vérité.',
  },
];

export const churchProjects = [
  {
    id: 1,
    title: 'Construction du Centre Biblique Régional de Kinshasa-Est',
    target: '45,000 $',
    raised: '32,400 $',
    percent: 72,
    description: 'Édification d’une salle polyvalente de 600 places assises avec bibliothèque d’études pour héberger les séminaires nationaux.',
  },
  {
    id: 2,
    title: 'Impression & Distribution de 5 000 Bibles d’Étude en RDC',
    target: '15,000 $',
    raised: '11,800 $',
    percent: 78,
    description: 'Fourniture gratuite de Bibles avec concordances et livrets explicatifs aux assemblées de Kalemie, Kindu, Kasenga et Goma.',
  },
  {
    id: 3,
    title: 'Projet d’Eau Potable & Hygiène Communautaire à Kasenga',
    target: '8,500 $',
    raised: '6,200 $',
    percent: 73,
    description: 'Installation d’un forage moderne et de bornes-fontaines pour les riverains de la mission dans le Haut-Katanga.',
  },
];
