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
    navPillars: "Pristup",
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
      "Jsem osobni trenerka a S&C kouc. Specializuji se na trenink pro zeny zalozeny na dukazech. Moje klientky chteji typicky ziskat silu, zlepsit slozeni tela a vybudovat si zdravejsi vztah k jidlu a cviceni. Bez extremnich omezeni.",
    aboutMeP2:
      "Absolvovala jsem kvalifikaci IUSCA Level 4 mezi zari 2025 a unorem 2026. Pokryvala 29 modulu: od fyziologie a biomechaniky pres navrh programu, periodizaci, rehabilitaci po zranenich az po vyzivu.",

    pillarsTitle: "Zaklady meho pristupu",
    pillarsSubtitle: "Ctyri pilire, na kterych stavim kazdy treninkovy program",
    pillar1: "Na bazi dukazu",
    pillar1Desc: "Pouzivam metody podlozene vedou, ne trendy. Kazdy program vychazi z overene fyziologie, biomechaniky a vyzkumu.",
    pillar2: "Klient na prvnim miste",
    pillar2Desc: "Vse prizpusobuji vasemu zivotu, casovemu rozvrhu a cilum. Zadne sablony. Vas plan je jen vas.",
    pillar3: "Holisticky pristup",
    pillar3Desc: "Trenink, vyziva a mysleni tvori celek. Pracuji se vsemi tremi, protoze izolovanou cestou vysledky neprijdou.",
    pillar4: "Meritelne vysledky",
    pillar4Desc: "Sledujeme vse: silu, VO2max, slozeni tela. Co se nemeri, to se nezlepsi.",

    servicesTitle: "Jak muzeme spolupracovat",
    servicesSubtitle: "Najdete si to, co vam sedi",
    service1: "Osobni trenink 1 na 1",
    service1Desc: "Potkame se v Praze a budeme trenovat spolecne. Ja se postarame o plan, techniku i motivaci. Kazdy trenink sledujeme vas pokrok.",
    service1For: "Jste zacatecnice nebo pokrocila a chcete nekoho, kdo vas povede",
    service2: "Priprava na HYROX",
    service2Desc: "Pripravim vas na HYROX od zakladu: sila, vytrvalost, funkcni pohyby. Budeme simulovat zavodní podminky, abyste vedela, co vas ceka.",
    service2For: "Chystáte se na prvni HYROX nebo uz zavodite a chcete lepsi cas",
    service3: "Vyzivove poradenstvi",
    service3Desc: "Spolecne najdeme stravovaci plan, ktery funguje pro vas zivot. Zadne extremni diety. Cilem jsou navyky, ktere vydrzi.",
    service3For: "Chcete se v jidle citit lepe a videt vysledky",
    service4: "Online programovani",
    service4Desc: "Pripravim vam treninkovy plan na miru a posilam ho online. Kazdy tyden aktualizace, video zpetna vazba a jsem k dispozici kdykoli.",
    service4For: "Nemuzete trenovat osobne, ale chcete individualni pristup",
    serviceForLabel: "Pro koho:",

    resultsTitle: "Co se da stihnout za 12 tydnu",
    resultsSubtitle: "Tohle jsou realna cisla z treninku s realnou klientkou",
    stat1Label: "Odtrenovanich lekci",
    stat2Label: "Narust VO2max",
    stat3Label: "Wall Ball vykon",
    stat4Label: "Snizeni tuku",
    timelineTitle: "Jak to probihalo",
    timelineWeek1: "Tyden 1-3",
    timelineWeek1Desc: "Posouzeni, nastaveni zakladu, technika pohybu",
    timelineWeek4: "Tyden 4-6",
    timelineWeek4Desc: "Postupne zvysujeme zatez, ladime vyzivu",
    timelineWeek8: "Tyden 7-9",
    timelineWeek8Desc: "Cileny trenink, viditelny pokrok",
    timelineWeek12: "Tyden 10-12",
    timelineWeek12Desc: "Spickovy vykon, finalni zhodnoceni",

    experienceTitle: "Co mam za sebou",
    role1Title: "Osobni trenerka a S&C kouc",
    role1Company: "Na volne noze",
    role1Period: "2025 – dosud",
    role1Current: "Aktualni",
    role1Bullets: [
      "36+ individualnich treninku v ramci 12tydenni pripravy na HYROX Doubles. Kompletni planovani, logovani a tydenni hodnoceni.",
      "Navrhuji programy pro ruzne cile: priprava na zavody, sila a kompozice tela pro zeny 23-35 let, budovani aerobniho zakladu od nuly.",
      "Vysledky za 12 tydnu: VO2max +21 %, wall ball +118 %, telesny tuk -2,7 p.b.",
      "Vedla jsem klientku se zranenim (zanet okostice) 7 tydnu. Behani jsme nahradily Ski Ergem a veslovanim, upravovaly objem kazdy trenink. Zraneni se vylecilo a trenink pokracoval.",
      "Koucuji cviky s cinkou, funkcni pohyby, Ski Erg, veslovani, sane a cviceni s vlastni vahou.",
    ],
    role2Title: "Recepce / Front Desk",
    role2Company: "Fitness studio",
    role2Period: "6-12 mesicu",
    role2Bullets: [
      "Ridila jsem provoz recepce: prihlasovani navstevniku, registrace, komunikace v cestine, anglictine a rustine.",
      "Prezentovala jsem clenstvi novym navstevnikum a pomahala s prodejem na miste.",
      "Starala jsem se o plynuly chod studia: rozvrhy, dodrzovani pravidel, udrzba.",
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
      "Pohodlne se domluvim s ceskymi cleny i zahranicnimi klienty. Jazyk u me nikdy neni prekazka.",

    instagramTitle: "Sledujte me na Instagramu",
    instagramSubtitle: "Nahledy z treninku, tipy a kazdodenni motivace",
    instagramFollowCta: "Sledovat na Instagramu",

    philosophyTitle: "Moje filozofie",
    philosophyQuote:
      "K vasim cilum pristupuji se stejnou peci, jakou bych venovala svym vlastnim. Pouzivam metody zalozene na dukazech, ale clovek prede mnou je vzdy dulezitejsi nez program na papire. Pokud neco nefunguje pro vas zivot, zmenime to. Tak jednoduche to je.",
    referencesNote: "Reference k dispozici na vyzadani",
    getInTouch: "Ozvete se mi",
    contactSubtitle: "Chcete zacit? Napiste mi a domluvime se na prvni konzultaci.",
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
      "I'm a personal trainer and S&C coach specialising in evidence-based training for women. My clients typically want to get stronger, improve body composition, and build a healthier relationship with food and exercise. No extreme restriction.",
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

    servicesTitle: "How We Can Work Together",
    servicesSubtitle: "Find what fits your life",
    service1: "1-to-1 Personal Training",
    service1Desc: "We meet in Prague and train together. I handle the planning, technique, and motivation. Every session, we track where you're at.",
    service1For: "You're a beginner or experienced and want someone guiding you through it",
    service2: "HYROX Athlete Preparation",
    service2Desc: "I'll get you ready for HYROX from the ground up: strength, endurance, functional movements. We simulate race conditions so you know exactly what's coming.",
    service2For: "You're prepping for your first HYROX or already competing and want a better time",
    service3: "Nutrition Coaching",
    service3Desc: "Together we'll find an eating plan that works for your actual life. No extreme diets. The goal is habits that stick.",
    service3For: "You want to feel better about food and see real results",
    service4: "Online Programming",
    service4Desc: "I build your training plan and deliver it online. Weekly updates, video feedback, and I'm available whenever you need me.",
    service4For: "You can't train in person but still want an individualized approach",
    serviceForLabel: "Who it's for:",

    resultsTitle: "What 12 Weeks Can Do",
    resultsSubtitle: "Real numbers from training with a real client",
    stat1Label: "Coached Sessions",
    stat2Label: "VO2max Gain",
    stat3Label: "Wall Ball Performance",
    stat4Label: "Body Fat Reduced",
    timelineTitle: "How It Played Out",
    timelineWeek1: "Weeks 1-3",
    timelineWeek1Desc: "Assessment, baseline setting, movement technique",
    timelineWeek4: "Weeks 4-6",
    timelineWeek4Desc: "Progressive overload, dialling in nutrition",
    timelineWeek8: "Weeks 7-9",
    timelineWeek8Desc: "Targeted training, visible progress",
    timelineWeek12: "Weeks 10-12",
    timelineWeek12Desc: "Peak performance, final assessment",

    experienceTitle: "What I've Done",
    role1Title: "Personal Trainer & S&C Coach",
    role1Company: "Freelance",
    role1Period: "2025 \u2013 Present",
    role1Current: "Current",
    role1Bullets: [
      "Coached 36+ individual sessions over a 12-week HYROX Doubles prep block. Full session planning, logging, and weekly reviews.",
      "Designed programs across goals: competition prep, strength and body comp for women 23-35, aerobic base building from scratch.",
      "12-week client results: VO2max up 21%, wall ball reps up 118%, body fat down 2.7 pp.",
      "Managed training around a client's shin splints for 7 weeks. Swapped running for Ski Erg and rowing, adjusted volume session by session. Injury resolved while training continued.",
      "Coach barbell compounds, functional movements, Ski Erg, rowing, sled work, and bodyweight training.",
    ],
    role2Title: "Gym Receptionist / Front Desk",
    role2Company: "Fitness Studio",
    role2Period: "6\u201312 months",
    role2Bullets: [
      "Ran front desk daily: member check-ins, registration, answering questions in Czech, English, and Russian.",
      "Presented memberships to walk-ins and helped close sales on the spot.",
      "Kept the studio running smoothly: scheduling, house rules, maintenance.",
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
      "I'm comfortable with Czech members and international clients alike. Language is never a barrier.",

    instagramTitle: "Follow Me on Instagram",
    instagramSubtitle: "Training glimpses, tips, and daily motivation",
    instagramFollowCta: "Follow on Instagram",

    philosophyTitle: "My Coaching Philosophy",
    philosophyQuote:
      "I treat your goals with the same care I'd give my own. I use evidence-based methods to stay grounded, but the person in front of me always matters more than the programme on paper. If something isn't working for your life, we change it. Simple as that.",
    referencesNote: "References available on request",
    getInTouch: "Let's Talk",
    contactSubtitle: "Ready to start? Drop me a message and we'll set up your first consultation.",
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
      "Я персональный тренер и S&C коуч. Специализируюсь на тренировках для женщин с доказательным подходом. Мои клиентки хотят стать сильнее, улучшить композицию тела и наладить здоровые отношения с едой и тренировками. Без жёстких ограничений.",
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
    pillar4Desc: "Мы отслеживаем всё: силу, VO2max, композицию тела. Что нельзя измерить, то нельзя улучшить.",

    servicesTitle: "Как мы можем работать вместе",
    servicesSubtitle: "Найдите то, что подходит именно вам",
    service1: "Персональные тренировки 1 на 1",
    service1Desc: "Мы встречаемся в Праге и тренируемся вместе. Я беру на себя планирование, технику и мотивацию. Каждую тренировку отслеживаем ваш прогресс.",
    service1For: "Вы начинающая или опытная и хотите, чтобы кто-то вёл вас",
    service2: "Подготовка к HYROX",
    service2Desc: "Я подготовлю вас к HYROX с нуля: сила, выносливость, функциональные движения. Будем симулировать соревновательные условия, чтобы вы знали, что вас ждёт.",
    service2For: "Готовитесь к первому HYROX или уже соревнуетесь и хотите лучший результат",
    service3: "Консультации по питанию",
    service3Desc: "Вместе найдём план питания, который работает для вашей реальной жизни. Без экстремальных диет. Цель: привычки, которые останутся.",
    service3For: "Хотите чувствовать себя лучше в отношениях с едой и видеть реальные результаты",
    service4: "Онлайн-программирование",
    service4Desc: "Я создам ваш тренировочный план и отправлю онлайн. Еженедельные обновления, видео-обратная связь, и я на связи когда нужно.",
    service4For: "Не можете тренироваться очно, но хотите индивидуальный подход",
    serviceForLabel: "Для кого:",

    resultsTitle: "Что можно сделать за 12 недель",
    resultsSubtitle: "Реальные цифры из работы с реальной клиенткой",
    stat1Label: "Проведённых тренировок",
    stat2Label: "Прирост VO2max",
    stat3Label: "Результат Wall Ball",
    stat4Label: "Снижение жира",
    timelineTitle: "Как это проходило",
    timelineWeek1: "Недели 1-3",
    timelineWeek1Desc: "Оценка, установка базового уровня, техника движений",
    timelineWeek4: "Недели 4-6",
    timelineWeek4Desc: "Прогрессивная нагрузка, настройка питания",
    timelineWeek8: "Недели 7-9",
    timelineWeek8Desc: "Целевые тренировки, видимый прогресс",
    timelineWeek12: "Недели 10-12",
    timelineWeek12Desc: "Пиковый результат, финальная оценка",

    experienceTitle: "Что я делала",
    role1Title: "Персональный тренер и S&C коуч",
    role1Company: "Фриланс",
    role1Period: "2025 – настоящее время",
    role1Current: "Сейчас",
    role1Bullets: [
      "36+ индивидуальных тренировок в рамках 12-недельной подготовки к HYROX Doubles. Полное планирование, логирование и еженедельные разборы.",
      "Программы под разные цели: подготовка к соревнованиям, сила и композиция тела для женщин 23-35 лет, построение аэробной базы с нуля.",
      "Результаты за 12 недель: VO2max +21%, wall ball +118%, жировая масса -2,7 п.п.",
      "Вела клиентку с травмой (периостит голени) 7 недель. Заменили бег на Ski Erg и греблю, корректировали объём каждую тренировку. Травма прошла, тренировки не прерывались.",
      "Обучаю базовым упражнениям со штангой, функциональным движениям, Ski Erg, гребле, саням и тренировкам с собственным весом.",
    ],
    role2Title: "Администратор / Ресепшн",
    role2Company: "Фитнес-студия",
    role2Period: "6\u201312 месяцев",
    role2Bullets: [
      "Вела ресепшн каждый день: регистрация посетителей, ответы на вопросы на чешском, английском и русском.",
      "Презентовала абонементы новым посетителям и помогала закрывать продажи на месте.",
      "Следила за порядком в студии: расписание, правила, обслуживание.",
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
      "Свободно общаюсь с чешскими и международными клиентами. Язык никогда не проблема.",

    instagramTitle: "Подписывайтесь в Instagram",
    instagramSubtitle: "Моменты тренировок, советы и ежедневная мотивация",
    instagramFollowCta: "Подписаться в Instagram",

    philosophyTitle: "Моя философия",
    philosophyQuote:
      "Я отношусь к вашим целям с такой же заботой, как к своим собственным. Я использую доказательные методы, но человек передо мной всегда важнее, чем программа на бумаге. Если что-то не работает для вашей жизни, мы это меняем. Всё просто.",
    referencesNote: "Рекомендации предоставляются по запросу",
    getInTouch: "Давайте поговорим",
    contactSubtitle: "Готовы начать? Напишите мне и мы назначим первую консультацию.",
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
      "Я персональний тренер та S&C коуч. Спецiалiзуюся на тренуваннях для жiнок з доказовим пiдходом. Моi клiєнтки хочуть стати сильнiшими, покращити композицiю тiла та побудувати здоровiшi стосунки з iжею i вправами. Без жорстких обмежень.",
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
    pillar4Desc: "Ми вiдстежуємо все: силу, VO2max, композицiю тiла. Що не можна вимiряти, те не можна покращити.",

    servicesTitle: "Як ми можемо працювати разом",
    servicesSubtitle: "Знайдiть те, що пiдходить саме вам",
    service1: "Персональнi тренування 1 на 1",
    service1Desc: "Ми зустрiчаємося в Празi i тренуємося разом. Я беру на себе планування, технiку i мотивацiю. Кожне тренування вiдстежуємо ваш прогрес.",
    service1For: "Ви початкiвець або досвiдчена i хочете, щоб хтось вас вiв",
    service2: "Пiдготовка до HYROX",
    service2Desc: "Я пiдготую вас до HYROX з нуля: сила, витривалiсть, функцiональнi рухи. Будемо симулювати змагальнi умови, щоб ви знали, що на вас чекає.",
    service2For: "Готуєтеся до першого HYROX або вже змагаєтеся i хочете кращий результат",
    service3: "Консультацiї з харчування",
    service3Desc: "Разом знайдемо план харчування, який працює для вашого реального життя. Без екстремальних дiєт. Цiль: звички, якi залишаться.",
    service3For: "Хочете почуватися краще з iжею та бачити реальнi результати",
    service4: "Онлайн-програмування",
    service4Desc: "Я створю ваш тренувальний план i надiшлю онлайн. Щотижневi оновлення, вiдео-зворотний зв'язок, i я на зв'язку коли потрiбно.",
    service4For: "Не можете тренуватися очно, але хочете iндивiдуальний пiдхiд",
    serviceForLabel: "Для кого:",

    resultsTitle: "Що можна зробити за 12 тижнiв",
    resultsSubtitle: "Реальнi цифри з роботи з реальною клiєнткою",
    stat1Label: "Проведених тренувань",
    stat2Label: "Прирiст VO2max",
    stat3Label: "Результат Wall Ball",
    stat4Label: "Зниження жиру",
    timelineTitle: "Як це проходило",
    timelineWeek1: "Тижнi 1-3",
    timelineWeek1Desc: "Оцiнка, встановлення базового рiвня, технiка рухiв",
    timelineWeek4: "Тижнi 4-6",
    timelineWeek4Desc: "Прогресивне навантаження, налаштування харчування",
    timelineWeek8: "Тижнi 7-9",
    timelineWeek8Desc: "Цiльовi тренування, видимий прогрес",
    timelineWeek12: "Тижнi 10-12",
    timelineWeek12Desc: "Пiковий результат, фiнальна оцiнка",

    experienceTitle: "Що я робила",
    role1Title: "Персональний тренер та S&C коуч",
    role1Company: "Фриланс",
    role1Period: "2025 \u2013 дотепер",
    role1Current: "Зараз",
    role1Bullets: [
      "36+ iндивiдуальних тренувань у рамках 12-тижневої пiдготовки до HYROX Doubles. Повне планування, логування та щотижневi розбори.",
      "Програми пiд рiзнi цiлi: пiдготовка до змагань, сила та композицiя тiла для жiнок 23-35 рокiв, побудова аеробної бази з нуля.",
      "Результати за 12 тижнiв: VO2max +21%, wall ball +118%, жирова маса -2,7 в.п.",
      "Вела клiєнтку з травмою (перiостит гомiлки) 7 тижнiв. Замiнили бiг на Ski Erg та веслування, коригували об'єм кожне тренування. Травма пройшла, тренування не переривалися.",
      "Навчаю базовим вправам зi штангою, функцiональним рухам, Ski Erg, веслуванню, саням та тренуванням з власною вагою.",
    ],
    role2Title: "Адмiнiстратор / Рецепцiя",
    role2Company: "Фiтнес-студiя",
    role2Period: "6\u201312 мiсяцiв",
    role2Bullets: [
      "Вела рецепцiю кожного дня: реєстрацiя вiдвiдувачiв, вiдповiдi на запитання чеською, англiйською та росiйською.",
      "Презентувала абонементи новим вiдвiдувачам та допомагала закривати продажi на мiсцi.",
      "Стежила за порядком у студiї: розклад, правила, обслуговування.",
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
      "Вiльно спiлкуюся з чеськими та мiжнародними клiєнтами. Мова нiколи не є бар'єром.",

    instagramTitle: "Пiдписуйтесь в Instagram",
    instagramSubtitle: "Моменти тренувань, поради та щоденна мотивацiя",
    instagramFollowCta: "Пiдписатися в Instagram",

    philosophyTitle: "Моя фiлософiя",
    philosophyQuote:
      "Я ставлюся до ваших цiлей з такою ж турботою, як до своїх власних. Я використовую доказовi методи, але людина передi мною завжди важливiша, нiж програма на паперi. Якщо щось не працює для вашого життя, ми це змiнюємо. Все просто.",
    referencesNote: "Рекомендацiї надаються за запитом",
    getInTouch: "Давайте поговоримо",
    contactSubtitle: "Готовi почати? Напишiть менi i ми призначимо першу консультацiю.",
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
      "Sono una personal trainer e coach S&C specializzata in allenamento basato sulle evidenze per le donne. Le mie clienti vogliono diventare piu forti, migliorare la composizione corporea e costruire un rapporto piu sano con il cibo e l'esercizio. Senza restrizioni estreme.",
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
    pillar4Desc: "Monitoriamo tutto: forza, VO2max, composizione corporea. Quello che non si misura, non si migliora.",

    servicesTitle: "Come possiamo lavorare insieme",
    servicesSubtitle: "Trova quello che si adatta alla tua vita",
    service1: "Allenamento Personale 1 a 1",
    service1Desc: "Ci incontriamo a Praga e ci alleniamo insieme. Io mi occupo della pianificazione, della tecnica e della motivazione. Ogni sessione monitoriamo i tuoi progressi.",
    service1For: "Sei principiante o esperta e vuoi qualcuno che ti guidi",
    service2: "Preparazione HYROX",
    service2Desc: "Ti preparo per HYROX dalle basi: forza, resistenza, movimenti funzionali. Simuliamo le condizioni di gara cosi sai esattamente cosa aspettarti.",
    service2For: "Ti stai preparando per il primo HYROX o gareggi gia e vuoi un tempo migliore",
    service3: "Consulenza Nutrizionale",
    service3Desc: "Insieme troviamo un piano alimentare che funzioni per la tua vita reale. Nessuna dieta estrema. L'obiettivo sono abitudini che restano.",
    service3For: "Vuoi sentirti meglio con il cibo e vedere risultati concreti",
    service4: "Programmazione Online",
    service4Desc: "Creo il tuo piano di allenamento e te lo invio online. Aggiornamenti settimanali, feedback video, e sono disponibile quando ne hai bisogno.",
    service4For: "Non puoi allenarti di persona ma vuoi un approccio personalizzato",
    serviceForLabel: "Per chi:",

    resultsTitle: "Cosa si puo fare in 12 settimane",
    resultsSubtitle: "Numeri reali dall'allenamento con una cliente reale",
    stat1Label: "Sessioni svolte",
    stat2Label: "Aumento VO2max",
    stat3Label: "Performance Wall Ball",
    stat4Label: "Grasso ridotto",
    timelineTitle: "Come si e svolta",
    timelineWeek1: "Settimane 1-3",
    timelineWeek1Desc: "Valutazione, definizione baseline, tecnica del movimento",
    timelineWeek4: "Settimane 4-6",
    timelineWeek4Desc: "Sovraccarico progressivo, calibrazione nutrizionale",
    timelineWeek8: "Settimane 7-9",
    timelineWeek8Desc: "Allenamento mirato, progressi visibili",
    timelineWeek12: "Settimane 10-12",
    timelineWeek12Desc: "Performance di picco, valutazione finale",

    experienceTitle: "Cosa ho fatto",
    role1Title: "Personal Trainer e Coach S&C",
    role1Company: "Freelance",
    role1Period: "2025 \u2013 presente",
    role1Current: "Attuale",
    role1Bullets: [
      "36+ sessioni individuali in un blocco di 12 settimane di preparazione HYROX Doubles. Pianificazione completa, registrazione e revisioni settimanali.",
      "Programmi per obiettivi diversi: preparazione gare, forza e composizione corporea per donne 23-35 anni, costruzione base aerobica da zero.",
      "Risultati in 12 settimane: VO2max +21%, wall ball +118%, grasso corporeo -2,7 pp.",
      "Ho gestito una cliente con periostite tibiale per 7 settimane. Sostituita la corsa con Ski Erg e canottaggio, volume aggiustato sessione per sessione. Infortunio risolto senza interrompere l'allenamento.",
      "Insegno sollevamenti con bilanciere, movimenti funzionali, Ski Erg, canottaggio, slitta e allenamento a corpo libero.",
    ],
    role2Title: "Receptionist / Front Desk",
    role2Company: "Studio Fitness",
    role2Period: "6\u201312 mesi",
    role2Bullets: [
      "Gestione quotidiana della reception: accoglienza, registrazioni, risposte in ceco, inglese e russo.",
      "Presentazione abbonamenti ai nuovi visitatori e supporto nelle vendite sul posto.",
      "Cura del buon funzionamento dello studio: orari, regole, manutenzione.",
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
      "Lavoro tranquillamente con membri cechi e clienti internazionali. La lingua non e mai un problema.",

    instagramTitle: "Seguimi su Instagram",
    instagramSubtitle: "Momenti di allenamento, consigli e motivazione quotidiana",
    instagramFollowCta: "Segui su Instagram",

    philosophyTitle: "La mia filosofia",
    philosophyQuote:
      "Tratto i tuoi obiettivi con la stessa cura che dedico ai miei. Uso metodi basati sulle evidenze, ma la persona davanti a me conta sempre piu del programma scritto. Se qualcosa non funziona per la tua vita, lo cambiamo. Semplice cosi.",
    referencesNote: "Referenze disponibili su richiesta",
    getInTouch: "Parliamone",
    contactSubtitle: "Pronta a iniziare? Scrivimi e fisseremo la tua prima consulenza.",
  },
};
