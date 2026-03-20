export type Language = "cz" | "en" | "ru" | "uk" | "it";

export const languageOptions: { code: Language; label: string; flag: string }[] = [
  { code: "cz", label: "CZ", flag: "\u{1f1e8}\u{1f1ff}" },
  { code: "en", label: "EN", flag: "\u{1f1ec}\u{1f1e7}" },
  { code: "ru", label: "RU", flag: "\u{1f1f7}\u{1f1fa}" },
  { code: "uk", label: "UK", flag: "\u{1f1fa}\u{1f1e6}" },
  { code: "it", label: "IT", flag: "\u{1f1ee}\u{1f1f9}" },
];

export interface Translations {
  // Nav
  navHero: string;
  navPillars: string;
  navServices: string;
  navResults: string;
  navExperience: string;
  navEducation: string;
  navLanguages: string;
  navInstagram: string;
  navContact: string;

  // Hero
  badge: string;
  subtitle: string;
  heroQuote: string;
  location: string;
  heroScrollCta: string;

  // About
  aboutMeTitle: string;
  aboutMeP1: string;
  aboutMeP2: string;

  // Core Pillars
  pillarsTitle: string;
  pillarsSubtitle: string;
  pillar1: string;
  pillar1Desc: string;
  pillar2: string;
  pillar2Desc: string;
  pillar3: string;
  pillar3Desc: string;
  pillar4: string;
  pillar4Desc: string;

  // Services
  servicesTitle: string;
  servicesSubtitle: string;
  service1: string;
  service1Desc: string;
  service1For: string;
  service2: string;
  service2Desc: string;
  service2For: string;
  service3: string;
  service3Desc: string;
  service3For: string;
  service4: string;
  service4Desc: string;
  service4For: string;
  serviceForLabel: string;

  // Results
  resultsTitle: string;
  resultsSubtitle: string;
  stat1Label: string;
  stat2Label: string;
  stat3Label: string;
  stat4Label: string;
  timelineTitle: string;
  timelineWeek1: string;
  timelineWeek1Desc: string;
  timelineWeek4: string;
  timelineWeek4Desc: string;
  timelineWeek8: string;
  timelineWeek8Desc: string;
  timelineWeek12: string;
  timelineWeek12Desc: string;

  // Experience
  experienceTitle: string;
  role1Title: string;
  role1Company: string;
  role1Period: string;
  role1Current: string;
  role1Bullets: string[];
  role2Title: string;
  role2Company: string;
  role2Period: string;
  role2Bullets: string[];

  // Education
  educationTitle: string;
  edu1Title: string;
  edu1Subtitle: string;
  edu1Period: string;
  edu1Desc: string;
  edu2Title: string;
  edu2Subtitle: string;
  edu2Period: string;
  edu2Desc: string;

  // Languages
  languagesTitle: string;
  languagesSubtitle: string;

  // Instagram
  instagramTitle: string;
  instagramSubtitle: string;
  instagramFollowCta: string;

  // Philosophy / Contact
  philosophyTitle: string;
  philosophyQuote: string;
  referencesNote: string;
  getInTouch: string;
  contactSubtitle: string;
}

export const translations: Record<Language, Translations> = {
  cz: {
    navHero: "Domov",
    navPillars: "Pilire",
    navServices: "Sluzby",
    navResults: "Vysledky",
    navExperience: "Zkusenosti",
    navEducation: "Vzdelani",
    navLanguages: "Jazyky",
    navInstagram: "Instagram",
    navContact: "Kontakt",

    badge: "IUSCA Level 4 certifikace",
    subtitle: "Kondicni a silova trenerka",
    heroQuote:
      "Trenuji s trpelivosti a na zaklade dukazu, protoze chci budovat neco, co opravdu vydrzi.",
    location: "Praha, CZ",
    heroScrollCta: "Zjistete vice",

    aboutMeTitle: "O mne",
    aboutMeP1:
      "Jsem osobni fitness trenerka a S&C praktik se specializaci na trenink zalozeny na dukazech pro zeny. Moje klientky chteji typicky budovat silu a zlepsit slozeni tela a zaroven si vybudovat zdravejsi vztah k jidlu a cviceni, bez extremnich omezeni.",
    aboutMeP2:
      "Absolvovala jsem kvalifikaci IUSCA Level 4 mezi zarim 2025 a unorem 2026. Zahrnovala 29 modulu od fyziologie a biomechaniky pres navrh programu, periodizaci, rehabilitaci po zranenich az po vyzivu.",

    pillarsTitle: "Zaklady meho pristup",
    pillarsSubtitle: "Ctyr pilire, na kterych stavim kazdy treninkovy program",
    pillar1: "Na bazi dukazu",
    pillar1Desc: "Pouzivam metody podlozene vedou, ne trendy. Kazdy program vychazi z overene fyziologie, biomechaniky a vyzkumu.",
    pillar2: "Klient na prvnim miste",
    pillar2Desc: "Vse prizpusobuji vasemu zivotu, casovemu rozvrhu a tem. Zadne sablony. Vas plan je jen vas.",
    pillar3: "Holisticky pristup",
    pillar3Desc: "Trenink, vyziva a mysleni tvori celek. Pracuji se vsemi tremi, protoze izolovanou cestou vysledky neprijdou.",
    pillar4: "Meritelne vysledky",
    pillar4Desc: "Sledujeme vse: silu, VO2max, slozeni tela. Pokud to nemeritelne, nemuze se to zlepsit.",

    servicesTitle: "Sluzby",
    servicesSubtitle: "Vyberte si program, ktery vam vyhovuje",
    service1: "Osobni trenink 1 na 1",
    service1Desc: "Individualni treninky se mnou v Praze. Kompletni planovani, technika, motivace a sledovani pokroku pri kazde lekci.",
    service1For: "Pro zacatecnice i pokrocile, ktere chteji strukturu a odbornost",
    service2: "Priprava na HYROX",
    service2Desc: "Specificka priprava pro zavody HYROX. Sila, vytrvalost, funkni pohyby a simulace zavodnich podminek.",
    service2For: "Pro zavodnice i ty, co chteji zkusit svuj prvni HYROX",
    service3: "Vyzivove poradenstvi",
    service3Desc: "Prakticke stravovaci plany prizpusobene vasemu zivotnimu stylu. Zadne extremni diety. Udrzitelne navyky na celyzivot.",
    service3For: "Pro kazdeho, kdo chce lepsi vztah k jidlu a viditelne vysledky",
    service4: "Online programovani",
    service4Desc: "Treninkove plany na miru dodavane online. Tydenni aktualizace, video zpetna vazba a komunikace kdykoli.",
    service4For: "Pro klientky, ktere se nemohou trenovat osobne",
    serviceForLabel: "Pro koho:",

    resultsTitle: "Vysledky (12tydenni blok)",
    resultsSubtitle: "Meritelne zmeny z realneho treninku s realnymi klientkami",
    stat1Label: "Odtrenovanich lekci",
    stat2Label: "Narust VO2max",
    stat3Label: "Wall Ball vykon",
    stat4Label: "Snizeni tuku",
    timelineTitle: "12tydenni transformace",
    timelineWeek1: "Tyden 1-3",
    timelineWeek1Desc: "Posouzeni, nastaveni zakladu, technika pohybu",
    timelineWeek4: "Tyden 4-6",
    timelineWeek4Desc: "Progresivni zatez, uprava vyzivy",
    timelineWeek8: "Tyden 7-9",
    timelineWeek8Desc: "Specialni trenink, meritelny pokrok",
    timelineWeek12: "Tyden 10-12",
    timelineWeek12Desc: "Peak vykon, finalni hodnoceni",

    experienceTitle: "Zkusenosti",
    role1Title: "Osobni trenerka a S&C kouc",
    role1Company: "Na volne noze",
    role1Period: "2025 – dosud",
    role1Current: "Aktualni",
    role1Bullets: [
      "Odvedla 36+ individualnich lekci v ramci strukturovaneho 12tydenniho treninkoveh bloku s kompletnim planovanim, evidenci a sledovanim pokroku",
      "Navrhla individualizovane programy pro klientky od zacatecnic (vek 23-35) po soutezni atletky HYROX",
      "Dosahla meritelnych vysledku: VO2max +21 %, vykon ve wall ball +118 %, telesny tuk -2,7 p.b. za 12 tydnu",
      "Provedla zdravotni screening, stanoveni cilu a pohybovou diagnostiku pro bezpecne a efektivni plany",
      "Koucovala klientky v zakladnich cvicich s cinkou, funkcnich pohybech, Ski Erg, veslovani a cviceni s vlastni vahou",
      "Ridila trenink s ohledem na zraneni klientky (periostitis holenni kosti) s upravenym programem pro bezpecny postup",
    ],
    role2Title: "Recepce / Front Desk",
    role2Company: "Fitness studio",
    role2Period: "6-12 mesicu",
    role2Bullets: [
      "Zajistovala denni provoz recepce: odbavovani navstevniku, registrace, komunikace s klienty v cestine, anglictine a rustine",
      "Prezentovala sluzby studia potencialnim clenum a pomahala s prodejem clenstvi",
      "Dohlizela na dodrzovani provozniho radu a plynuly chod studia",
    ],

    educationTitle: "Vzdelani a certifikace",
    edu1Title: "IUSCA Level 4",
    edu1Subtitle: "Strength & Conditioning Practitioner",
    edu1Period: "International Universities S&C Association \u00B7 2025\u20132026",
    edu1Desc:
      "29 modulu: anatomie, fyziologie, navrh programu, periodizace, vyziva, prevence zraneni, testovaci protokoly, etika kouce.",
    edu2Title: "Balakarsky titul",
    edu2Subtitle: "Italsky jazyk a literatura",
    edu2Period: "Masarykova univerzita, Brno \u00B7 2025",
    edu2Desc:
      "Doplnkove studium anglictiny, spanelstiny a rectiny. Mezikulturni komunikace a vyzkumne dovednosti.",

    languagesTitle: "7 jazyku",
    languagesSubtitle:
      "Pohodlne pracuji s ceskymi cleny i mezinarodnimi klienty. Jazyk neni nikdy bariera.",

    instagramTitle: "Sledujte me na Instagramu",
    instagramSubtitle: "Nahledy z treninku, tipy a kazdodenni motivace",
    instagramFollowCta: "Sledovat na Instagramu",

    philosophyTitle: "Moje koucovaci filozofie",
    philosophyQuote:
      "Muj pristup je jednoduchy: k vasim cilum pristupuji se stejnou peci, jakou bych venovala svym vlastnim. Pouzivam metody zalozene na dukazech, ale clovek prede mnou je vzdy dulezitejsi nez program na papire. Pokud neco nefunguje pro vas zivot, zmenime to.",
    referencesNote: "Reference k dispozici na vyzadani",
    getInTouch: "Kontaktujte me",
    contactSubtitle: "Pripravena zacit? Napiste mi a domluvime se na prvni konzultaci.",
  },

  en: {
    navHero: "Home",
    navPillars: "Approach",
    navServices: "Services",
    navResults: "Results",
    navExperience: "Experience",
    navEducation: "Education",
    navLanguages: "Languages",
    navInstagram: "Instagram",
    navContact: "Contact",

    badge: "IUSCA Level 4 Certified",
    subtitle: "Strength & Conditioning Coach",
    heroQuote:
      "I coach with patience and evidence because I want to build something that actually lasts.",
    location: "Prague, CZ",
    heroScrollCta: "Discover more",

    aboutMeTitle: "About Me",
    aboutMeP1:
      "I am a personal fitness coach and S&C practitioner specialising in evidence-based training for women. My clients typically want to build strength and improve body composition while developing a healthier relationship with food and exercise, without extreme restriction.",
    aboutMeP2:
      "I completed the IUSCA Level 4 qualification between September 2025 and February 2026, covering 29 modules from physiology and biomechanics through to program design, periodization, injury rehabilitation, and nutrition.",

    pillarsTitle: "My Approach",
    pillarsSubtitle: "Four pillars behind every training program I build",
    pillar1: "Evidence-Based Training",
    pillar1Desc: "I use methods backed by science, not trends. Every program is grounded in proven physiology, biomechanics, and research.",
    pillar2: "Client-First Approach",
    pillar2Desc: "Everything adapts to your life, schedule, and goals. No templates. Your plan is yours alone.",
    pillar3: "Holistic Wellness",
    pillar3Desc: "Training, nutrition, and mindset form a whole. I work with all three because isolated approaches don't deliver lasting results.",
    pillar4: "Measurable Results",
    pillar4Desc: "We track everything: strength, VO2max, body composition. If it can't be measured, it can't be improved.",

    servicesTitle: "Services",
    servicesSubtitle: "Choose the program that fits your life",
    service1: "1-to-1 Personal Training",
    service1Desc: "In-person sessions with me in Prague. Full planning, technique coaching, motivation, and progress tracking every session.",
    service1For: "For beginners and advanced clients who want structure and expertise",
    service2: "HYROX Athlete Preparation",
    service2Desc: "Specific preparation for HYROX races. Strength, endurance, functional movements, and race-condition simulations.",
    service2For: "For competitors and those wanting to try their first HYROX",
    service3: "Nutrition Coaching",
    service3Desc: "Practical meal plans tailored to your lifestyle. No extreme diets. Sustainable habits that last a lifetime.",
    service3For: "For anyone who wants a better relationship with food and visible results",
    service4: "Online Programming",
    service4Desc: "Custom training plans delivered online. Weekly updates, video feedback, and communication whenever you need it.",
    service4For: "For clients who can't train in person",
    serviceForLabel: "Who it's for:",

    resultsTitle: "Results (12-Week Block)",
    resultsSubtitle: "Measurable changes from real training with real clients",
    stat1Label: "Coached Sessions",
    stat2Label: "VO2max Gain",
    stat3Label: "Wall Ball Performance",
    stat4Label: "Body Fat Reduced",
    timelineTitle: "12-Week Transformation",
    timelineWeek1: "Weeks 1-3",
    timelineWeek1Desc: "Assessment, baseline setting, movement technique",
    timelineWeek4: "Weeks 4-6",
    timelineWeek4Desc: "Progressive overload, nutrition adjustments",
    timelineWeek8: "Weeks 7-9",
    timelineWeek8Desc: "Specialized training, measurable progress",
    timelineWeek12: "Weeks 10-12",
    timelineWeek12Desc: "Peak performance, final assessment",

    experienceTitle: "Experience",
    role1Title: "Personal Trainer & S&C Coach",
    role1Company: "Freelance",
    role1Period: "2025 \u2013 Present",
    role1Current: "Current",
    role1Bullets: [
      "Delivered 36+ one-on-one sessions across a structured 12-week training block with full planning, logging, and progress tracking",
      "Designed individualised programs for clients from beginner women (ages 23\u201335) to competitive HYROX athletes",
      "Achieved measurable results: VO2max +21%, wall ball performance +118%, body fat -2.7pp over 12 weeks",
      "Conducted health screening, goal setting, and movement assessments for safe, effective plans",
      "Coached barbell compound lifts, functional movements, Ski Erg, rowing, and bodyweight training",
      "Managed training around a client\u2019s injury (shin splints) with modified programs for safe continued progress",
    ],
    role2Title: "Gym Receptionist / Front Desk",
    role2Company: "Fitness Studio",
    role2Period: "6\u201312 months",
    role2Bullets: [
      "Managed daily front desk operations: visitor check-in, registration, client communication in Czech, English, and Russian",
      "Presented studio services to prospective members and assisted with membership sales",
      "Monitored compliance with house rules and ensured smooth day-to-day studio operations",
    ],

    educationTitle: "Education & Certifications",
    edu1Title: "IUSCA Level 4",
    edu1Subtitle: "Strength & Conditioning Practitioner",
    edu1Period: "International Universities S&C Association \u00B7 2025\u20132026",
    edu1Desc:
      "29 modules: anatomy, physiology, program design, periodization, nutrition, injury prevention, testing protocols, coaching ethics.",
    edu2Title: "Bachelor\u2019s Degree",
    edu2Subtitle: "Italian Language & Literature",
    edu2Period: "Masaryk University, Brno \u00B7 2025",
    edu2Desc:
      "Additional studies in English, Spanish, and Greek. Cross-cultural communication and research skills.",

    languagesTitle: "7 Languages",
    languagesSubtitle:
      "Comfortable working with Czech members and international clients. Language is never a barrier.",

    instagramTitle: "Follow Me on Instagram",
    instagramSubtitle: "Training glimpses, tips, and daily motivation",
    instagramFollowCta: "Follow on Instagram",

    philosophyTitle: "My Coaching Philosophy",
    philosophyQuote:
      "My approach is simple: I treat your goals with the same care I would give my own. I use evidence-based methods to stay grounded, but the person in front of me always matters more than the programme on paper. If something is not working for your life, we change it.",
    referencesNote: "References available on request",
    getInTouch: "Get in Touch",
    contactSubtitle: "Ready to start? Send me a message and we'll schedule your first consultation.",
  },

  ru: {
    navHero: "Главная",
    navPillars: "Подход",
    navServices: "Услуги",
    navResults: "Результаты",
    navExperience: "Опыт",
    navEducation: "Образование",
    navLanguages: "Языки",
    navInstagram: "Instagram",
    navContact: "Контакт",

    badge: "Сертификация IUSCA Level 4",
    subtitle: "Тренер по силовой и кондиционной подготовке",
    heroQuote:
      "Я тренирую с терпением и опорой на доказательства, потому что хочу строить то, что действительно длится.",
    location: "Прага, Чехия",
    heroScrollCta: "Узнать больше",

    aboutMeTitle: "Обо мне",
    aboutMeP1:
      "Я персональный фитнес-тренер и специалист по силовой и кондиционной подготовке. Специализируюсь на тренировках для женщин с доказательным подходом. Мои клиентки хотят стать сильнее, улучшить композицию тела и выстроить здоровые отношения с едой и упражнениями, без жестких ограничений.",
    aboutMeP2:
      "Я прошла квалификацию IUSCA Level 4 с сентября 2025 по февраль 2026 года. Программа включала 29 модулей: от физиологии и биомеханики до проектирования программ, периодизации, реабилитации после травм и питания.",

    pillarsTitle: "Мой подход",
    pillarsSubtitle: "Четыре принципа, на которых построена каждая программа",
    pillar1: "Доказательный подход",
    pillar1Desc: "Я использую методы, подтверждённые наукой, а не трендами. Каждая программа основана на проверенной физиологии, биомеханике и исследованиях.",
    pillar2: "Клиент на первом месте",
    pillar2Desc: "Всё адаптируется к вашей жизни, расписанию и целям. Никаких шаблонов. Ваш план только ваш.",
    pillar3: "Целостный подход",
    pillar3Desc: "Тренировки, питание и мышление образуют единое целое. Я работаю со всеми тремя, потому что изолированные подходы не дают устойчивых результатов.",
    pillar4: "Измеримые результаты",
    pillar4Desc: "Мы отслеживаем всё: силу, VO2max, композицию тела. Если нельзя измерить, нельзя улучшить.",

    servicesTitle: "Услуги",
    servicesSubtitle: "Выберите программу, которая подходит вашей жизни",
    service1: "Персональные тренировки 1 на 1",
    service1Desc: "Очные тренировки со мной в Праге. Полное планирование, техника, мотивация и отслеживание прогресса на каждом занятии.",
    service1For: "Для начинающих и продвинутых клиенток, которые хотят структуру и экспертизу",
    service2: "Подготовка к HYROX",
    service2Desc: "Специальная подготовка к соревнованиям HYROX. Сила, выносливость, функциональные движения и симуляция соревновательных условий.",
    service2For: "Для соревнующихся и тех, кто хочет попробовать свой первый HYROX",
    service3: "Консультации по питанию",
    service3Desc: "Практичные планы питания, адаптированные к вашему образу жизни. Без экстремальных диет. Устойчивые привычки на всю жизнь.",
    service3For: "Для каждого, кто хочет лучших отношений с едой и видимых результатов",
    service4: "Онлайн-программирование",
    service4Desc: "Индивидуальные тренировочные планы онлайн. Еженедельные обновления, видео-обратная связь и общение в любое время.",
    service4For: "Для клиенток, которые не могут тренироваться очно",
    serviceForLabel: "Для кого:",

    resultsTitle: "Результаты (12-недельный блок)",
    resultsSubtitle: "Измеримые изменения от реальных тренировок с реальными клиентками",
    stat1Label: "Проведенных тренировок",
    stat2Label: "Прирост VO2max",
    stat3Label: "Результат Wall Ball",
    stat4Label: "Снижение жира",
    timelineTitle: "12-недельная трансформация",
    timelineWeek1: "Недели 1-3",
    timelineWeek1Desc: "Оценка, установка базового уровня, техника движений",
    timelineWeek4: "Недели 4-6",
    timelineWeek4Desc: "Прогрессивная нагрузка, корректировка питания",
    timelineWeek8: "Недели 7-9",
    timelineWeek8Desc: "Специализированные тренировки, измеримый прогресс",
    timelineWeek12: "Недели 10-12",
    timelineWeek12Desc: "Пиковая производительность, финальная оценка",

    experienceTitle: "Опыт работы",
    role1Title: "Персональный тренер и S&C коуч",
    role1Company: "Фриланс",
    role1Period: "2025 – настоящее время",
    role1Current: "Сейчас",
    role1Bullets: [
      "Провела более 36 индивидуальных тренировок в рамках структурированного 12-недельного блока с полным планированием, логированием и отслеживанием прогресса",
      "Разработала индивидуальные программы для клиенток: от начинающих женщин (23\u201335 лет) до соревнующихся атлетов HYROX",
      "Достигла измеримых результатов: VO2max +21%, результат wall ball +118%, жировая масса -2,7 п.п. за 12 недель",
      "Провела скрининг здоровья, постановку целей и оценку движений для безопасных и эффективных программ",
      "Обучала базовым упражнениям со штангой, функциональным движениям, Ski Erg, гребле и тренировкам с собственным весом",
      "Адаптировала тренировки с учетом травмы клиентки (периостит голени) с модифицированной программой для безопасного продолжения прогресса",
    ],
    role2Title: "Администратор / Ресепшн",
    role2Company: "Фитнес-студия",
    role2Period: "6\u201312 месяцев",
    role2Bullets: [
      "Управляла ежедневной работой ресепшн: регистрация посетителей, оформление, общение с клиентами на чешском, английском и русском языках",
      "Презентовала услуги студии потенциальным членам и помогала с продажей абонементов",
      "Следила за соблюдением правил и обеспечивала бесперебойную работу студии",
    ],

    educationTitle: "Образование и сертификации",
    edu1Title: "IUSCA Level 4",
    edu1Subtitle: "Strength & Conditioning Practitioner",
    edu1Period: "International Universities S&C Association \u00B7 2025\u20132026",
    edu1Desc:
      "29 модулей: анатомия, физиология, проектирование программ, периодизация, питание, профилактика травм, протоколы тестирования, этика коуча.",
    edu2Title: "Степень бакалавра",
    edu2Subtitle: "Итальянский язык и литература",
    edu2Period: "Университет Масарика, Брно \u00B7 2025",
    edu2Desc:
      "Дополнительное изучение английского, испанского и греческого языков. Навыки межкультурной коммуникации и исследовательской работы.",

    languagesTitle: "7 языков",
    languagesSubtitle:
      "Свободно работаю с чешскими и международными клиентами. Язык никогда не является барьером.",

    instagramTitle: "Подписывайтесь в Instagram",
    instagramSubtitle: "Моменты тренировок, советы и ежедневная мотивация",
    instagramFollowCta: "Подписаться в Instagram",

    philosophyTitle: "Моя философия коучинга",
    philosophyQuote:
      "Мой подход прост: я отношусь к вашим целям с такой же заботой, как к своим собственным. Я использую доказательные методы, но человек передо мной всегда важнее, чем программа на бумаге. Если что-то не работает для вашей жизни, мы это меняем.",
    referencesNote: "Рекомендации предоставляются по запросу",
    getInTouch: "Связаться со мной",
    contactSubtitle: "Готовы начать? Напишите мне и мы назначим вашу первую консультацию.",
  },

  uk: {
    navHero: "Головна",
    navPillars: "Пiдхiд",
    navServices: "Послуги",
    navResults: "Результати",
    navExperience: "Досвiд",
    navEducation: "Освiта",
    navLanguages: "Мови",
    navInstagram: "Instagram",
    navContact: "Контакт",

    badge: "Сертифiкацiя IUSCA Level 4",
    subtitle: "Тренер з силової та кондицiйної пiдготовки",
    heroQuote:
      "Я треную з терпiнням та опорою на докази, тому що хочу будувати те, що справдi триватиме.",
    location: "Прага, Чехiя",
    heroScrollCta: "Дiзнатися бiльше",

    aboutMeTitle: "Про мене",
    aboutMeP1:
      "Я персональний фiтнес-тренер та фахiвець з силової i кондицiйної пiдготовки. Спецiалiзуюся на тренуваннях для жiнок з доказовим пiдходом. Моi клiєнтки зазвичай хочуть стати сильнiшими, покращити композицiю тiла та побудувати здоровiшi стосунки з iжею i вправами, без жорстких обмежень.",
    aboutMeP2:
      "Я пройшла квалiфiкацiю IUSCA Level 4 з вересня 2025 по лютий 2026 року. Програма охоплювала 29 модулiв: вiд фiзiологiї та бiомеханiки до проектування програм, перiодизацiї, реабiлiтацiї пiсля травм i харчування.",

    pillarsTitle: "Мiй пiдхiд",
    pillarsSubtitle: "Чотири принципи, на яких побудована кожна програма",
    pillar1: "Доказовий пiдхiд",
    pillar1Desc: "Я використовую методи, пiдтвердженi наукою, а не трендами. Кожна програма базується на перевiренiй фiзiологiї, бiомеханiцi та дослiдженнях.",
    pillar2: "Клiєнт на першому мiсцi",
    pillar2Desc: "Все адаптується до вашого життя, розкладу та цiлей. Жодних шаблонiв. Ваш план тiльки ваш.",
    pillar3: "Цiлiсний пiдхiд",
    pillar3Desc: "Тренування, харчування та мислення утворюють єдине цiле. Я працюю з усiма трьома, тому що iзольованi пiдходи не дають стiйких результатiв.",
    pillar4: "Вимiрюванi результати",
    pillar4Desc: "Ми вiдстежуємо все: силу, VO2max, композицiю тiла. Якщо не можна вимiряти, не можна покращити.",

    servicesTitle: "Послуги",
    servicesSubtitle: "Оберiть програму, яка пiдходить вашому життю",
    service1: "Персональнi тренування 1 на 1",
    service1Desc: "Очнi тренування зi мною в Празi. Повне планування, технiка, мотивацiя та вiдстеження прогресу на кожному занятт.",
    service1For: "Для початкiвцiв та просунутих клiєнток, якi хочуть структуру та експертизу",
    service2: "Пiдготовка до HYROX",
    service2Desc: "Спецiальна пiдготовка до змагань HYROX. Сила, витривалiсть, функцiональнi рухи та симуляцiя змагальних умов.",
    service2For: "Для змагальниць i тих, хто хоче спробувати свiй перший HYROX",
    service3: "Консультацiї з харчування",
    service3Desc: "Практичнi плани харчування, адаптованi до вашого способу життя. Без екстремальних дiєт. Стiйкi звички на все життя.",
    service3For: "Для кожного, хто хоче кращих стосункiв з iжею та видимих результатiв",
    service4: "Онлайн-програмування",
    service4Desc: "Iндивiдуальнi тренувальнi плани онлайн. Щотижневi оновлення, вiдео-зворотний зв'язок та спiлкування будь-коли.",
    service4For: "Для клiєнток, якi не можуть тренуватися очно",
    serviceForLabel: "Для кого:",

    resultsTitle: "Результати (12-тижневий блок)",
    resultsSubtitle: "Вимiрюванi змiни вiд реальних тренувань з реальними клiєнтками",
    stat1Label: "Проведених тренувань",
    stat2Label: "Прирiст VO2max",
    stat3Label: "Результат Wall Ball",
    stat4Label: "Зниження жиру",
    timelineTitle: "12-тижнева трансформацiя",
    timelineWeek1: "Тижнi 1-3",
    timelineWeek1Desc: "Оцiнка, встановлення базового рiвня, технiка рухiв",
    timelineWeek4: "Тижнi 4-6",
    timelineWeek4Desc: "Прогресивне навантаження, корекцiя харчування",
    timelineWeek8: "Тижнi 7-9",
    timelineWeek8Desc: "Спецiалiзованi тренування, вимiрюваний прогрес",
    timelineWeek12: "Тижнi 10-12",
    timelineWeek12Desc: "Пiкова продуктивнiсть, фiнальна оцiнка",

    experienceTitle: "Досвiд роботи",
    role1Title: "Персональний тренер та S&C коуч",
    role1Company: "Фриланс",
    role1Period: "2025 \u2013 дотепер",
    role1Current: "Зараз",
    role1Bullets: [
      "Провела понад 36 iндивiдуальних тренувань у рамках структурованого 12-тижневого блоку з повним плануванням, логуванням та вiдстеженням прогресу",
      "Розробила iндивiдуальнi програми для клiєнток: вiд початкiвцiв (23\u201335 рокiв) до змагальних атлетiв HYROX",
      "Досягла вимiрюваних результатiв: VO2max +21%, результат wall ball +118%, жирова маса -2,7 в.п. за 12 тижнiв",
      "Провела скринiнг здоров'я, визначення цiлей та оцiнку рухiв для безпечних та ефективних програм",
      "Навчала базовим вправам зi штангою, функцiональним рухам, Ski Erg, веслуванню та тренуванням з власною вагою",
      "Адаптувала тренування з урахуванням травми клiєнтки (перiостит гомiлки) з модифiкованою програмою для безпечного продовження прогресу",
    ],
    role2Title: "Адмiнiстратор / Рецепцiя",
    role2Company: "Фiтнес-студiя",
    role2Period: "6\u201312 мiсяцiв",
    role2Bullets: [
      "Керувала щоденною роботою рецепцiї: реєстрацiя вiдвiдувачiв, оформлення, спiлкування з клiєнтами чеською, англiйською та росiйською мовами",
      "Презентувала послуги студiї потенцiйним членам та допомагала з продажем абонементiв",
      "Стежила за дотриманням правил та забезпечувала безперебiйну роботу студiї",
    ],

    educationTitle: "Освiта та сертифiкацiї",
    edu1Title: "IUSCA Level 4",
    edu1Subtitle: "Strength & Conditioning Practitioner",
    edu1Period: "International Universities S&C Association \u00B7 2025\u20132026",
    edu1Desc:
      "29 модулiв: анатомiя, фiзiологiя, проектування програм, перiодизацiя, харчування, профiлактика травм, протоколи тестування, етика коуча.",
    edu2Title: "Ступiнь бакалавра",
    edu2Subtitle: "Iталiйська мова та лiтература",
    edu2Period: "Унiверситет Масарика, Брно \u00B7 2025",
    edu2Desc:
      "Додаткове вивчення англiйської, iспанської та грецької мов. Навички мiжкультурної комунiкацiї та дослiдницької роботи.",

    languagesTitle: "7 мов",
    languagesSubtitle:
      "Вiльно працюю з чеськими та мiжнародними клiєнтами. Мова нiколи не є бар'єром.",

    instagramTitle: "Пiдписуйтесь в Instagram",
    instagramSubtitle: "Моменти тренувань, поради та щоденна мотивацiя",
    instagramFollowCta: "Пiдписатися в Instagram",

    philosophyTitle: "Моя фiлософiя коучингу",
    philosophyQuote:
      "Мiй пiдхiд простий: я ставлюся до ваших цiлей з такою ж турботою, як до своїх власних. Я використовую доказовi методи, але людина передi мною завжди важливiша, нiж програма на паперi. Якщо щось не працює для вашого життя, ми це змiнюємо.",
    referencesNote: "Рекомендацiї надаються за запитом",
    getInTouch: "Зв'язатися зi мною",
    contactSubtitle: "Готовi почати? Напишiть менi i ми призначимо вашу першу консультацiю.",
  },

  it: {
    navHero: "Home",
    navPillars: "Approccio",
    navServices: "Servizi",
    navResults: "Risultati",
    navExperience: "Esperienza",
    navEducation: "Formazione",
    navLanguages: "Lingue",
    navInstagram: "Instagram",
    navContact: "Contatto",

    badge: "Certificazione IUSCA Level 4",
    subtitle: "Coach di Forza e Preparazione Atletica",
    heroQuote:
      "Alleno con pazienza e basandomi sulle evidenze, perche voglio costruire qualcosa che duri davvero.",
    location: "Praga, CZ",
    heroScrollCta: "Scopri di piu",

    aboutMeTitle: "Chi sono",
    aboutMeP1:
      "Sono una personal trainer e professionista S&C specializzata in allenamento basato sulle evidenze per le donne. Le mie clienti vogliono tipicamente costruire forza e migliorare la composizione corporea, sviluppando un rapporto piu sano con il cibo e l'esercizio, senza restrizioni estreme.",
    aboutMeP2:
      "Ho completato la qualifica IUSCA Level 4 tra settembre 2025 e febbraio 2026, coprendo 29 moduli dalla fisiologia e biomeccanica alla progettazione di programmi, periodizzazione, riabilitazione da infortuni e nutrizione.",

    pillarsTitle: "Il mio approccio",
    pillarsSubtitle: "Quattro pilastri dietro ogni programma di allenamento",
    pillar1: "Basato sulle evidenze",
    pillar1Desc: "Utilizzo metodi supportati dalla scienza, non dalle tendenze. Ogni programma si basa su fisiologia, biomeccanica e ricerca comprovate.",
    pillar2: "Il cliente prima di tutto",
    pillar2Desc: "Tutto si adatta alla tua vita, al tuo programma e ai tuoi obiettivi. Nessun modello. Il tuo piano e solo tuo.",
    pillar3: "Benessere olistico",
    pillar3Desc: "Allenamento, nutrizione e mentalita formano un tutt'uno. Lavoro con tutti e tre perche gli approcci isolati non danno risultati duraturi.",
    pillar4: "Risultati misurabili",
    pillar4Desc: "Monitoriamo tutto: forza, VO2max, composizione corporea. Se non si puo misurare, non si puo migliorare.",

    servicesTitle: "Servizi",
    servicesSubtitle: "Scegli il programma che si adatta alla tua vita",
    service1: "Allenamento Personale 1 a 1",
    service1Desc: "Sessioni in presenza con me a Praga. Pianificazione completa, coaching tecnico, motivazione e monitoraggio dei progressi ad ogni sessione.",
    service1For: "Per principianti e clienti avanzati che vogliono struttura e competenza",
    service2: "Preparazione HYROX",
    service2Desc: "Preparazione specifica per le gare HYROX. Forza, resistenza, movimenti funzionali e simulazioni delle condizioni di gara.",
    service2For: "Per competitrici e chi vuole provare il primo HYROX",
    service3: "Consulenza Nutrizionale",
    service3Desc: "Piani alimentari pratici adattati al tuo stile di vita. Nessuna dieta estrema. Abitudini sostenibili che durano tutta la vita.",
    service3For: "Per chiunque voglia un rapporto migliore con il cibo e risultati visibili",
    service4: "Programmazione Online",
    service4Desc: "Piani di allenamento personalizzati online. Aggiornamenti settimanali, feedback video e comunicazione quando ne hai bisogno.",
    service4For: "Per clienti che non possono allenarsi di persona",
    serviceForLabel: "Per chi:",

    resultsTitle: "Risultati (blocco di 12 settimane)",
    resultsSubtitle: "Cambiamenti misurabili da allenamenti reali con clienti reali",
    stat1Label: "Sessioni svolte",
    stat2Label: "Aumento VO2max",
    stat3Label: "Performance Wall Ball",
    stat4Label: "Grasso ridotto",
    timelineTitle: "Trasformazione in 12 settimane",
    timelineWeek1: "Settimane 1-3",
    timelineWeek1Desc: "Valutazione, definizione baseline, tecnica del movimento",
    timelineWeek4: "Settimane 4-6",
    timelineWeek4Desc: "Sovraccarico progressivo, aggiustamenti nutrizionali",
    timelineWeek8: "Settimane 7-9",
    timelineWeek8Desc: "Allenamento specializzato, progressi misurabili",
    timelineWeek12: "Settimane 10-12",
    timelineWeek12Desc: "Performance di picco, valutazione finale",

    experienceTitle: "Esperienza",
    role1Title: "Personal Trainer e Coach S&C",
    role1Company: "Freelance",
    role1Period: "2025 \u2013 presente",
    role1Current: "Attuale",
    role1Bullets: [
      "Ho svolto oltre 36 sessioni individuali in un blocco di allenamento strutturato di 12 settimane con pianificazione completa, registrazione e monitoraggio dei progressi",
      "Ho progettato programmi individualizzati per clienti principianti (23-35 anni) fino ad atlete HYROX competitive",
      "Risultati misurabili raggiunti: VO2max +21%, performance wall ball +118%, grasso corporeo -2,7pp in 12 settimane",
      "Ho condotto screening sanitari, definizione degli obiettivi e valutazioni del movimento per piani sicuri ed efficaci",
      "Ho insegnato sollevamenti composti con bilanciere, movimenti funzionali, Ski Erg, canottaggio e allenamento a corpo libero",
      "Ho gestito l'allenamento attorno a un infortunio della cliente (periostite tibiale) con programmi modificati per un progresso sicuro e continuo",
    ],
    role2Title: "Receptionist / Front Desk",
    role2Company: "Studio Fitness",
    role2Period: "6\u201312 mesi",
    role2Bullets: [
      "Ho gestito le operazioni quotidiane della reception: accoglienza visitatori, registrazioni, comunicazione con i clienti in ceco, inglese e russo",
      "Ho presentato i servizi dello studio a potenziali membri e assistito nelle vendite degli abbonamenti",
      "Ho monitorato il rispetto delle regole e garantito il funzionamento regolare dello studio",
    ],

    educationTitle: "Formazione e Certificazioni",
    edu1Title: "IUSCA Level 4",
    edu1Subtitle: "Strength & Conditioning Practitioner",
    edu1Period: "International Universities S&C Association \u00B7 2025\u20132026",
    edu1Desc:
      "29 moduli: anatomia, fisiologia, progettazione programmi, periodizzazione, nutrizione, prevenzione infortuni, protocolli di test, etica del coaching.",
    edu2Title: "Laurea Triennale",
    edu2Subtitle: "Lingua e Letteratura Italiana",
    edu2Period: "Universita Masaryk, Brno \u00B7 2025",
    edu2Desc:
      "Studi aggiuntivi in inglese, spagnolo e greco. Competenze di comunicazione interculturale e ricerca.",

    languagesTitle: "7 Lingue",
    languagesSubtitle:
      "Lavoro con facilita con membri cechi e clienti internazionali. La lingua non e mai un ostacolo.",

    instagramTitle: "Seguimi su Instagram",
    instagramSubtitle: "Momenti di allenamento, consigli e motivazione quotidiana",
    instagramFollowCta: "Segui su Instagram",

    philosophyTitle: "La mia filosofia di coaching",
    philosophyQuote:
      "Il mio approccio e semplice: tratto i tuoi obiettivi con la stessa cura che dedico ai miei. Utilizzo metodi basati sulle evidenze per restare con i piedi per terra, ma la persona davanti a me conta sempre piu del programma scritto. Se qualcosa non funziona per la tua vita, lo cambiamo.",
    referencesNote: "Referenze disponibili su richiesta",
    getInTouch: "Contattami",
    contactSubtitle: "Pronta a iniziare? Scrivimi e fisseremo la tua prima consulenza.",
  },
};
