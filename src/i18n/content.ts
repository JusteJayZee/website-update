// All marketing copy is taken verbatim from the live ordero.lt pages (LT / EN / PL).
// The only text written for this build lives under `ui` (labels inside the
// interactive app fragments) and `form.error`; see README for the list.

export type Lang = 'lt' | 'en' | 'pl';
export const langs: Lang[] = ['lt', 'en', 'pl'];

export const links = {
  login: 'https://app.ordero.lt/login',
  businessLogin: 'https://business.ordero.lt/login',
  appStore: 'https://apps.apple.com/lt/app/ordero/id6749176295',
  googlePlay: 'https://play.google.com/store/apps/details?id=com.orderoApp&hl=en',
  linkedin: 'https://www.linkedin.com/company/ordero-app',
};

export const routes: Record<Lang, Record<'home' | 'business' | 'terms' | 'privacy' | 'businessPrivacy', string>> = {
  lt: {
    home: '/',
    business: '/ordero-business',
    terms: '/taisykles-ir-salygos',
    privacy: '/privatumo-politika',
    businessPrivacy: '/verslo-privatumo-politika',
  },
  en: {
    home: '/en',
    business: '/en/ordero-business',
    terms: '/en/terms-and-conditions',
    privacy: '/en/privacy-policy',
    businessPrivacy: '/en/business-privacy-policy',
  },
  pl: {
    home: '/pl',
    business: '/pl/ordero-business',
    terms: '/pl/regulamin',
    privacy: '/pl/polityka-prywatności',
    businessPrivacy: '/pl/polityka-prywatności-dla-firm',
  },
};

export const kidsPartners = [
  { file: 'baltu-salis', name: 'Baltų šalis', href: 'https://www.baltusalis.lt/apie-mus' },
  { file: 'katino-dieneles', name: 'Katino dienelės International Nursery', href: 'https://katinodieneles.lt/' },
  { file: 'mazuju-valdos', name: 'Mažųjų valdos', href: 'https://mazuju-valdos.lt/' },
  { file: 'demokratine-mokykla', name: 'Demokratinė mokykla', href: 'https://www.demokratinemokykla.lt/' },
  { file: 'aisv', name: 'The American International School of Vilnius', href: 'https://www.aisv.lt/' },
  { file: 'kd-school', name: 'KD International School', href: 'https://kd.lt/' },
  { file: 'vaikystes-sodas', name: 'Vaikystės sodas', href: 'https://vaikystes-sodas.lt/' },
];

export const businessPartners = [
  { file: 'avion', name: 'Avion Express' },
  { file: 'firstpick', name: 'Firstpick' },
  { file: 'oras', name: 'Oras' },
  { file: 'terasky', name: 'TeraSky' },
  { file: 'homanit', name: 'Homanit' },
  { file: 'lost-astronaut', name: 'Lost Astronaut' },
];

const shared = {
  lt: {
    langName: 'Lietuvių',
    skip: 'Pereiti prie pagrindinio turinio',
    nav: { products: 'Produktai', kids: 'Ordero Kids', business: 'Ordero Business', demo: 'Užsakyti demo', login: 'Prisijungti', menu: 'Meniu', close: 'Uždaryti' },
    contact: {
      title: 'Susisiekite',
      addresses: [
        'Verslo centras Go9 Spaces, Gedimino pr. 9, Vilnius, 01103, Lietuva',
        'Verslo centras Raadhuspladsen, Rådhuspladsen 16, 1550 København, Danija',
      ],
    },
    form: {
      name: 'Vardas', email: 'El. paštas', phone: 'Telefonas', message: 'Žinutė', send: 'Siųsti',
      thanks: 'Ačiū, gavome jūsų pateiktą informaciją.',
      error: 'Nepavyko išsiųsti. Bandykite dar kartą.',
      sending: 'Siunčiama…',
    },
    footer: {
      legal: 'Teisinė informacija',
      terms: 'Taisyklės ir sąlygos',
      privacy: 'Privatumo politika',
      businessPrivacy: 'Verslo privatumo politika',
      tagline: 'Paprastas, išmanus maitinimo užsakymas mokykloms ir darbovietėms',
      copyright: '© 2026 Ordero',
      photo: 'Nuotrauka',
    },
  },
  en: {
    langName: 'English',
    skip: 'Skip to Main Content',
    nav: { products: 'Products', kids: 'Ordero Kids', business: 'Ordero Business', demo: 'Book a Demo', login: 'Login', menu: 'Menu', close: 'Close' },
    contact: {
      title: 'Get in Touch',
      addresses: [
        'Business Centre Go9 Spaces, Gedimino pr. 9, Vilnius, 01103, Lithuania',
        'Business Centre Raadhuspladsen, Rådhuspladsen 16, 1550 København, Denmark',
      ],
    },
    form: {
      name: 'Name', email: 'Email', phone: 'Phone', message: 'Message', send: 'Send',
      thanks: 'Thanks, we received your submission.',
      error: 'Something went wrong. Please try again.',
      sending: 'Sending…',
    },
    footer: {
      legal: 'Legal',
      terms: 'Terms and Conditions',
      privacy: 'Privacy Policy',
      businessPrivacy: 'Business Privacy Policy',
      tagline: 'Simple, smart meal ordering for schools and workplaces.',
      copyright: '© 2026 Ordero',
      photo: 'Photo',
    },
  },
  pl: {
    langName: 'Polski',
    skip: 'Przejdź do głównej treści',
    nav: { products: 'Produkty', kids: 'Ordero Kids', business: 'Ordero Business', demo: 'Zamów demo', login: 'Zaloguj się', menu: 'Menu', close: 'Zamknij' },
    contact: {
      title: 'Skontaktuj się',
      addresses: [
        'Business Centre Go9 Spaces, Gedimino pr. 9, Vilnius, 01103, Lithuania',
        'Business Centre Raadhuspladsen, Rådhuspladsen 16, 1550 København, Denmark',
      ],
    },
    form: {
      name: 'Nazwa', email: 'E-mail', phone: 'Telefon', message: 'Wiadomość', send: 'Wysłać',
      thanks: 'Dziękujemy, otrzymaliśmy Twoje zgłoszenie.',
      error: 'Nie udało się wysłać. Spróbuj ponownie.',
      sending: 'Wysyłanie…',
    },
    footer: {
      legal: 'Informacje prawne',
      terms: 'Regulamin',
      privacy: 'Polityka prywatności',
      businessPrivacy: 'Polityka prywatności dla firm',
      tagline: 'Proste i inteligentne zamawianie posiłków dla szkół i firm.',
      copyright: '© 2026 Ordero',
      photo: 'Zdjęcie',
    },
  },
};

const kids = {
  lt: {
    title: 'Ordero Kids | Ordero',
    description: 'Ordero – elektroninis maitinimas mokykloms ir darželiams. Užsakykite vaiko maitinimą internetu, tvarkykite meniu ir atsiskaitymus vienoje sistemoje.',
    hero: {
      h1: ['Mokyklos pietūs ar darželio maitinimas.', 'Be rūpesčių per kelias minutes.'],
      lead: 'Ordero leidžia tėvams užsakyti, keisti ir stebėti maitinimą vienoje vietoje — jokių formų, jokių skambučių, jokių spėliojimų.',
      cta: 'Pradėti',
    },
    partners: 'Pasitiki daugiau nei 100 partnerių:',
    features: {
      h2: ['Viskas, ko reikia tėvams.', 'Nieko nereikalingo.'],
      items: {
        ease: ['Paprastumas', 'Užsakykite vaikui valgį vienu mygtuko paspaudimu — jokių formų, jokių skambučių, jokių spėliojimų.'],
        transparency: ['Skaidrumas', 'Gaukite informaciją apie vaiko kasdienę mitybą. Visiškas meniu matomumas ir žinojimas, ką iš tikrųjų valgė.'],
        control: ['Kontrolė', 'Pateikite ir redaguokite užsakymus iki paskutinės minutės. Planai keičiasi — Ordero prisitaiko prie jūsų.'],
        auto: ['Automatinis užsakymas', 'Nustatykite numatytuosius užsakymus konkrečiam laikotarpiui ir leiskite Ordero pasirūpinti viskuo kitu. Automatiškai, kiekvieną savaitę.'],
        personal: ['Personalizavimas', 'Pasirinkite maisto tipą, nustatykite porcijos dydį ir aprašykite alergijas ar mitybos poreikius — išsaugoma vieną kartą, taikoma visada.'],
      },
    },
    platform: {
      h2: 'Viena platforma — viskas suderinta.',
      lead: 'Ordero yra centre — jungia tėvus, mokyklas ir tiekėjus, kad tinkamas maistas automatiškai pasiektų tinkamą vaiką.',
      items: {
        caterer: ['Tiekėjai įkelia meniu', 'Pusryčiai, pietūs, užkandžiai ir papildomi patiekalai — visa tai matoma tėvams programėlėje.'],
        parents: ['Tėvai užsako, moka, daro pakeitimus', 'Viskas per Ordero — jokių formų, jokių skambučių ar žinučių siuntimo į mokyklą.'],
        school: ['Mokyklos gauna tvarkingą dienos ataskaitą', 'Tikslus vaikų skaičius ir patiekalų sąrašas, automatiškai — nieko nereikia sekti ar kontroliuoti.'],
      },
      diagram: {
        caterer: 'Tiekėjai', school: 'Mokykla', parents: 'Tėvai',
        delivery: 'užsakymo pristatymas', offerings: 'maisto pasiūlymai',
        report: 'dienos vaikų užsakymo ataskaita', orders: 'užsakymai, pakeitimai, atšaukimai, mokėjimai',
      },
    },
    stats: [
      ['0', 'Popierinių formų. Nulis. Daugiau nebėra.'],
      ['100+', 'Mokyklų ir partnerių jau platformoje'],
      ['1 min', 'Savaitės maitinimui užsakyti'],
      ['Kasdien', 'Atsako žmogus — ir savaitgaliais.'],
    ],
    steps: {
      h2: 'Trys žingsniai. Ir viskas.',
      lead: 'Nuo atsisiuntimo iki pirmojo užsakymo — daugiausiai penkios minutės.',
      items: [
        ['Sukurkite paskyrą', 'Užsiregistruokite, pridėkite vaiko duomenis ir vieną kartą nustatykite mitybos poreikius ar alergijas.'],
        ['Pasirinkite savaitės valgiaraštį', 'Peržiūrėkite mokyklos meniu ir pasirinkite maitinimą arba įjunkite automatinį užsakymą ir leiskite Ordero pasirūpinti viskuo.'],
        ['Atsipalaiduokite — viskas sutvarkyta', 'Užsakymai pateikiami automatiškai. Keiskite ar atšaukite bet kada iki termino pabaigos.'],
      ],
    },
    testimonials: {
      h2: 'Pamėgta tėvų, mokyklų ir maitinimo įmonių.',
      items: [
        { name: 'Jolanta Balsytė', role: 'Mokyklos auklėtoja', quote: 'Labai patogu ryte gauti sąrašus su vaikų maisto užsakymais. Taip pat pradėjus naudoti Ordero sistemą išvengiame nemalonių situacijų, kai per klaidą vienam ar keliems vaikams nebuvo užsakytas maistas.' },
        { name: 'Mantas Žilinskas', role: 'Maitinimo tiekėjas', quote: 'Išties taupanti laiką sistema. Yra galimybė automatiškai sugeneruoti ir išsiųsti ugdymo įstaigai mėnesio ataskaitą bei galimybė automatiškai generuoti važtaraščius.' },
        { name: 'Edita Šakalienė', role: '2 vaikų mama', quote: 'Puiki sistema. Lengva valdyti mano vaiko maisto užsakymus. Taip pat visiškai nesunku koreguoti vaiko valgymo įpročius pridedant ir sveikesnių maisto pasirinkimų.' },
      ],
    },
    cta: {
      h2: 'Pasiruošę rūpintis vaiko maitinimu paprasčiau?',
      lines: ['Tūkstančiai tėvų iš daugiau nei 100 mokyklų ir darželių jau naudoja Ordero.', 'Pradėkite per kelias minutes.'],
    },
  },
  en: {
    title: 'Ordero Kids | Ordero',
    description: "Ordero – digital meal ordering for schools and kindergartens. Order your child's meals online, manage menus and payments in one platform.",
    hero: {
      h1: ['School meals and kindergarten lunches.', 'Sorted in minutes.'],
      lead: 'Ordero lets parents order, change and track meals in one place. No paper forms, no phone calls, no guessing.',
      cta: 'Get Started',
    },
    partners: 'Trusted by 100+ partners:',
    features: {
      h2: ['Everything parents need.', "Nothing they don't."],
      items: {
        ease: ['Ease of use', 'Order meals for your child with a click of a button — no paperwork, no phone calls, no fuss.'],
        transparency: ['Transparency', "Get real insights into your child's daily diet. Full menu visibility and a log of what they actually ate."],
        control: ['Control', 'Place and edit orders right up until the last minute. Plans change — Ordero moves with you.'],
        auto: ['Automated ordering', 'Configure default orders for a set time period and let Ordero handle the rest. Automatically, every week.'],
        personal: ['Personalisation', 'Select meal type, set portion size, and describe allergies or dietary needs — saved once, applied always.'],
      },
    },
    platform: {
      h2: 'One platform, everyone in sync.',
      lead: 'Ordero sits at the centre — connecting parents, schools, and caterers so the right meal reaches the right child, automatically.',
      items: {
        caterer: ['Caterers upload the menu', 'Breakfast, lunch, snacks and extras — all visible to parents in the app.'],
        parents: ['Parents order, change, pay', 'Everything through Ordero — no paper, no calls to the school.'],
        school: ['Schools get a clean daily report', 'An accurate headcount and meal list, automatically — nothing to chase.'],
      },
      diagram: {
        caterer: 'Caterer', school: 'School', parents: 'Parents',
        delivery: 'Food delivery', offerings: 'dish offerings',
        report: "daily children's order report", orders: 'orders, changes, cancellations, payments',
      },
    },
    stats: [
      ['0', 'Paper forms. Zero. Gone.'],
      ['100+', 'Schools & partners already on board'],
      ['1 min', 'Average time to order a full week of meals'],
      ['7 days', 'Human support, Weekends included.'],
    ],
    steps: {
      h2: "Three Steps. That's all.",
      lead: 'From signup to your first order — it takes about five minutes.',
      items: [
        ['Create your account', "Sign up, add your child's details, and set any dietary needs or allergies once."],
        ['Pick meals for the week', "Browse the school's menu and choose — or turn on auto-order and let Ordero handle it."],
        ["Relax — it's handled", 'Orders go through automatically. Change or cancel anytime before the cutoff.'],
      ],
    },
    testimonials: {
      h2: 'Loved by parents, schools and caterers alike.',
      items: [
        { name: 'Jolanta Balsytė', role: 'Teacher', quote: 'It is very convenient to get lists with children’s food orders in the morning. Also, when using the Order system, we avoid unpleasant situations when one or more children were not ordered food by mistake.' },
        { name: 'Mantas Žilinskas', role: 'Catering provider employee', quote: 'A truly time-saving system. There is an option to automatically generate and send a monthly report to the educational institution, as well as an option to automatically generate waybills.' },
        { name: 'Edita Šakalienė', role: 'Mother of 2 children', quote: 'Great system. It’s easy to manage my child’s food orders. It is also not at all difficult to adjust a child’s management habits by adding healthier food choices.' },
      ],
    },
    cta: {
      h2: 'Ready to make school meals effortless?',
      lines: ['Join 100+ schools & kindergartens already using Ordero.', 'Get started in minutes.'],
    },
  },
  pl: {
    title: 'Ordero Kids | Ordero',
    description: 'Ordero pozwala rodzicom zamawiać, zmieniać i śledzić posiłki w jednym miejscu — bez formularzy, bez telefonów, bez zgadywania.',
    hero: {
      h1: ['Obiady szkolne i posiłki przedszkolne.', 'Bez stresu, w kilka minut.'],
      lead: 'Ordero pozwala rodzicom zamawiać, zmieniać i śledzić posiłki w jednym miejscu — bez formularzy, bez telefonów, bez zgadywania.',
      cta: 'Zacznij',
    },
    partners: 'Zaufało nam 100+ partnerów:',
    features: {
      h2: ['Wszystko, czego potrzebują rodzice.', 'I nic więcej.'],
      items: {
        ease: ['Łatwość obsługi', 'Zamów posiłek dla dziecka jednym kliknięciem — bez papierów, bez telefonów, bez zamieszania.'],
        transparency: ['Przejrzystość', 'Zobacz dokładnie, co dziecko je każdego dnia. Pełne menu i historia faktycznie zjedzonych posiłków.'],
        control: ['Kontrola', 'Składaj i zmieniaj zamówienia do ostatniej chwili. Plany się zmieniają — Ordero się dostosowuje.'],
        auto: ['Zamawianie automatyczne', 'Ustaw stałe zamówienia na wybrany okres, a Ordero zajmie się resztą — automatycznie, co tydzień.'],
        personal: ['Personalizacja', 'Wybierz rodzaj dania, wielkość porcji i wskaż alergie lub potrzeby żywieniowe — zapisujesz raz, działa zawsze.'],
      },
    },
    platform: {
      h2: 'Jedna platforma — wszyscy zgrani.',
      lead: 'Ordero jest w centrum — łączy rodziców, szkoły i firmy cateringowe, aby właściwy posiłek trafił do właściwego dziecka. Automatycznie.',
      items: {
        caterer: ['Firmy cateringowe wgrywają menu', 'Śniadania, obiady, podwieczorki i dodatki — Wszystko może sprawdzić rodzic w aplikacji'],
        parents: ['Rodzice zamawiają, zmieniają, płacą', 'Wszystko przez Ordero — bez papierów, bez telefonów do szkoły.'],
        school: ['Szkoły otrzymują gotowy raport dzienny', 'Dokładna liczba dzieci i lista posiłków — automatycznie, bez zbierania danych.'],
      },
      diagram: {
        caterer: 'Dostawca', school: 'Szkoła', parents: 'Rodzice',
        delivery: 'dostawa zamówienia', offerings: 'oferta posiłków',
        report: 'dzienny raport zamówień dzieci', orders: 'zamówienia, zmiany, anulowania, płatności',
      },
    },
    stats: [
      ['0', 'Papierowych formularzy.'],
      ['100+', 'Szkół i partnerów już z nami'],
      ['1 min', 'Średni czas zamówienia posiłków na cały tydzień'],
      ['7 dni', 'Pomagamy również w weekendy.'],
    ],
    steps: {
      h2: 'Trzy kroki. I gotowe.',
      lead: 'Od rejestracji do pierwszego zamówienia — około pięciu minut.',
      items: [
        ['Załóż konto', 'Zarejestruj się, dodaj dane dziecka i wskaż potrzeby żywieniowe lub alergie.'],
        ['Wybierz posiłki na tydzień', 'Przejrzyj menu szkoły i wybierz — albo włącz automatyczne zamawianie i zostaw to Ordero.'],
        ['Odpocznij — wszystko działa', 'Zamówienia składają się automatycznie. Zmień lub anuluj w każdej chwili przed terminem.'],
      ],
    },
    testimonials: {
      h2: 'Rodzice, szkoły i dostawcy — wszyscy go kochają',
      items: [
        { name: 'Jolanta Balsytė', role: 'Nauczycielka', quote: 'Bardzo wygodnie jest rano otrzymywać listy z zamówieniami posiłków dzieci. Od kiedy zaczęliśmy korzystać z systemu Ordero, unikamy nieprzyjemnych sytuacji, gdy przez pomyłkę jednemu lub kilku dzieciom nie zamówiono posiłku.' },
        { name: 'Mantas Žilinskas', role: 'Dyrektor Confetti', quote: 'Naprawdę oszczędzający czas system. Istnieje możliwość automatycznego generowania i wysyłania miesięcznego raportu do placówki oświatowej oraz automatycznego generowania dokumentów przewozowych.' },
        { name: 'Edita Šakalienė', role: 'Mama dwójki dzieci', quote: 'Świetny system. Łatwo zarządzać zamówieniami posiłków dla mojego dziecka. Bez trudu można też korygować nawyki żywieniowe dziecka, dodając zdrowsze opcje żywieniowe.' },
      ],
    },
    cta: {
      h2: 'Przygotowani do ułatwienia zarządzania żywienia dzieci?',
      lines: ['Dołącz do 100+ szkół i przedszkoli, które już korzystają z Ordero. Zacznij w kilka minut.'],
    },
  },
};

const business = {
  lt: {
    title: 'Ordero Business | Ordero',
    hero: {
      h1: ['Vienas paspaudimas.', 'Greitesni užsakymai.'],
      lead: 'Paverskite pietus biure išskirtine darbuotojų patirtimi. Jūsų komanda gauna personalizuotą maisto užsakymo platformą, kuri supaprastina dienos pietų užsakymą.',
      cta: 'Pradėti',
    },
    partners: 'Mūsų partneriai:',
    steps: {
      h2: 'Trys žingsniai. Ir viskas.',
      lead: 'Nuo atsisiuntimo iki pirmojo užsakymo — daugiausiai penkios minutės.',
      items: [
        ['Atsisiųskite programėlę', 'Pradėkite per kelias sekundes. Atsisiųskite programėlę, naršykite personalizuotus dienos pietų pasiūlymus ir užsisakykite tiesiai telefone.'],
        ['Pasirinkite patiekalus', 'Rinkitės iš šviežių kasdienių pasiūlymų, užsisakykite ir apmokėkite programėlėje. Greita, patogu ir paruošta, kai jums patogu.'],
        ['Atsiimkite užsakymą biuro virtuvėje', 'Užsakymas jūsų laukia biuro virtuvės atsiėmimo taške. Jokių pristatymo mokesčių, jokių prenumeratų, jokio laukimo.'],
      ],
    },
    why: {
      h2: 'Kodėl Ordero Business?',
      items: [
        ['Iki 2 valandų sutaupoma kas savaitę', 'Darbuotojai užsisako ir apmoka iš anksto, todėl nelieka eilių ir laiko, sugaišto derinant užsakymus rankiniu būdu.'],
        ['Pietūs užsakomi per mažiau nei 30 sek.', 'Peržiūrėkite meniu, pasirinkite patiekalus ir iškart apmokėkite programėlėje. Greita ir sklandu užimtoms komandoms.'],
        ['0 € pristatymo mokesčių', 'Maistas pristatomas tiesiai į biuro virtuvės atsiėmimo tašką — jokių kurjerio išlaidų, jokių paslėptų mokesčių, jokio rūpesčio.'],
      ],
    },
    stats: [
      ['30 sek.', 'Vidutinis užsakymo laikas'],
      ['2 val.', 'Sutaupoma vienam darbuotojui per savaitę'],
      ['0€', 'Pristatymo mokesčių.'],
      ['0', 'Žmonių pietums administruoti. Tai daro sistema.'],
    ],
    cta: {
      h2: 'Pasiruošę palengvinti pietų užsakymą savo komandai?',
      lines: ['Join 100+ companies already using Ordero Business. Get started in minutes.'],
    },
  },
  en: {
    title: 'Ordero Business | Ordero',
    hero: {
      h1: ['One click.', 'Faster orders.'],
      lead: 'Turn workplace meals into a premium employee experience. Your team gets a personalised food ordering platform that simplifies lunch and boosts satisfaction.',
      cta: 'Get Started',
    },
    partners: 'Our partners:',
    steps: {
      h2: "Three steps. That's all.",
      lead: 'From download to first order — five minutes, max.',
      items: [
        ['Download the app', 'Get started in seconds. Download the app, browse personalised daily meal options, and order your lunch directly from your phone.'],
        ['Select your meals', 'Choose from fresh, daily options, place your order and pay directly in the app. Quick, convenient, ready when you are.'],
        ['Pick up order at office kitchen', 'Your order is ready for pickup at your office kitchen point. No delivery fees, no subscriptions, no waiting around.'],
      ],
    },
    why: {
      h2: 'Why Ordero Business?',
      items: [
        ['Up to 2 hours saved every week', 'Employees pre-order and pay in advance, reducing lunch queues and eliminating time spent coordinating food orders manually.'],
        ['Order lunch in under 30 sec', 'Browse menus, select meals, and pay instantly in the app. A fast and seamless experience for busy teams.'],
        ['0€ delivery fees', 'Meals are delivered directly to the office kitchen pickup point — no courier costs, no hidden fees, and no unnecessary hassle.'],
      ],
    },
    stats: [
      ['30s', 'Average time to place an order'],
      ['2h', 'Saved per employee every week'],
      ['0€', 'Delivery fees. Ever.'],
      ['0', 'People needed to manage lunch. The system does it.'],
    ],
    cta: {
      h2: 'Ready to make lunch effortless for your team?',
      lines: ['Join 100+ companies already using Ordero Business. Get started in minutes.'],
    },
  },
  pl: {
    title: 'Ordero Business | Ordero',
    hero: {
      h1: ['Jedno kliknięcie.', 'Szybsze zamówienia.'],
      lead: 'Zamień firmowe obiady w wyjątkowe doświadczenie dla pracowników. Twój zespół otrzymuje spersonalizowaną platformę zamawiania posiłków, która upraszcza lunch i zwiększa zadowolenie.',
      cta: 'Zacznij teraz',
    },
    partners: 'Nasi partnerzy:',
    steps: {
      h2: 'Trzy kroki. I gotowe.',
      lead: 'Od pobrania do pierwszego zamówienia — maksymalnie pięć minut.',
      items: [
        ['Pobierz aplikację', 'Zacznij w kilka sekund. Pobierz aplikację, przeglądaj spersonalizowane propozycje dań dnia i zamów lunch bezpośrednio z telefonu.'],
        ['Wybierz posiłki', 'Wybieraj ze świeżych, codziennych propozycji, zamawiaj i płać w aplikacji. Szybko, wygodnie i gotowe, kiedy tego potrzebujesz.'],
        ['Odbierz zamówienie w kuchni biurowej', 'Zamówienie czeka w punkcie odbioru w kuchni biurowej. Bez opłat za dostawę, bez abonamentów, bez czekania.'],
      ],
    },
    why: {
      h2: 'Dlaczego Ordero Business?',
      items: [
        ['Nawet 2 godziny oszczędności tygodniowo', 'Pracownicy zamawiają i płacą z wyprzedzeniem, więc znikają kolejki i czas tracony na ręczne zbieranie zamówień.'],
        ['Zamów lunch w mniej niż 30 sekund', 'Przeglądaj menu, wybieraj dania i płać od razu w aplikacji. Szybko i płynnie — dla zabieganych zespołów.'],
        ['0 € opłat za dostawę', 'Posiłki trafiają prosto do punktu odbioru w kuchni biurowej — bez kosztów kuriera, bez ukrytych opłat, bez zbędnych formalności.'],
      ],
    },
    stats: [
      ['30s', 'Średni czas złożenia zamówienia'],
      ['2 godz.', 'Oszczędności na pracownika tygodniowo'],
      ['0€', 'Opłat za dostawę. Nigdy.'],
      ['0', 'Osób do obsługi lunchu. Robi to system.'],
    ],
    cta: {
      h2: 'Gotowi ułatwić lunch swojemu zespołowi?',
      lines: ['Dołącz do 100+ firm, które już korzystają z Ordero Business. Zacznij w kilka minut.'],
    },
  },
};

// Labels inside the interactive app fragments (written for this build, sample data).
const ui = {
  lt: {
    child: 'Emilija · 2B klasė',
    week: '49 savaitė',
    days: ['Pr', 'An', 'Tr', 'Kt', 'Pn'],
    dates: ['11-30', '12-01', '12-02', '12-03', '12-04'],
    breakfast: 'Pusryčiai', lunch: 'Pietūs',
    ordered: 'Užsakyta', notOrdered: 'Neužsakyta', cancelled: 'Atšaukta', auto: 'Auto',
    order: 'Užsakyti', cancel: 'Atšaukti', restore: 'Grąžinti',
    cutoff: 'Keisti galima iki 08:00',
    autoToggle: 'Automatinis užsakymas kas savaitę',
    logToggle: 'Rodyti, ką valgė',
    eaten: 'Suvalgė', notEaten: 'Nevalgė',
    portion: 'Porcija', portions: ['Maža', 'Įprasta', 'Didelė'],
    allergies: 'Alergijos', allergens: ['Laktozė', 'Riešutai', 'Glitimas'],
    total: 'Iš viso', perDay: '5,00 €',
    lunchDish: 'Pupelių sriuba, troškinta kalakutiena, grikiai',
    breakfastDish: '7 grūdų košė su uogomis, vaisius',
    menuTitle: 'Valgiaraštis · 49 savaitė',
    menu: [
      ['Pr', '7 grūdų košė su uogomis', 'Pupelių sriuba su petražolėmis; troškinta kalakutiena, grikiai'],
      ['An', 'Varškėtėčiai su jogurtu', 'Burokėlių sriuba; vištienos kotletai, bulvių košė'],
      ['Tr', 'Avižinė košė su obuoliais', 'Daržovių sriuba; žuvies kepsneliai, ryžiai'],
      ['Kt', 'Omletas, pilno grūdo duona', 'Lęšių sriuba; makaronai su jautiena'],
      ['Pn', 'Kvietinių kruopų košė, vaisius', 'Pomidorų sriuba; blynai su uogiene'],
    ],
    reportTitle: 'Dienos ataskaita · 12-01',
    reportCols: ['Klasė', 'Pusryčiai', 'Pietūs'],
    reportRows: [['1A', 18, 22], ['1B', 15, 19], ['2A', 20, 24], ['2B', 17, 21]],
    reportNotes: 'Be laktozės: 3 · Be riešutų: 2',
    orderTitle: 'Užsakymas · Emilija, 2B',
    orderLines: [['Pr', 'Pietūs', '5,00 €', ''], ['An', 'Pietūs', '5,00 €', ''], ['Tr', 'Pietūs', '5,00 €', 'cancel'], ['Kt', 'Pietūs', '5,00 €', ''], ['Pn', 'Pietūs', '5,00 €', '']],
    orderTotal: '20,00 €',
    paid: 'Apmokėta',
    stepsLabel: 'Žingsnis',
  },
  en: {
    child: 'Emilija · Class 2B',
    week: 'Week 49',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    dates: ['30 Nov', '1 Dec', '2 Dec', '3 Dec', '4 Dec'],
    breakfast: 'Breakfast', lunch: 'Lunch',
    ordered: 'Ordered', notOrdered: 'Not ordered', cancelled: 'Cancelled', auto: 'Auto',
    order: 'Order', cancel: 'Cancel', restore: 'Restore',
    cutoff: 'Changes until 08:00',
    autoToggle: 'Auto-order every week',
    logToggle: 'Show what was eaten',
    eaten: 'Eaten', notEaten: 'Not eaten',
    portion: 'Portion', portions: ['Small', 'Regular', 'Large'],
    allergies: 'Allergies', allergens: ['Lactose', 'Nuts', 'Gluten'],
    total: 'Total', perDay: '5,00 €',
    lunchDish: 'Mixed bean soup, slow-cooked turkey, fluffy buckwheat',
    breakfastDish: '7-grain porridge with berries, fruit',
    menuTitle: 'Menu · Week 49',
    menu: [
      ['Mon', '7-grain porridge with berries', 'Mixed bean soup with fresh parsley; slow-cooked turkey cubes, fluffy buckwheat'],
      ['Tue', 'Curd pancakes with yoghurt', 'Beetroot soup; chicken patties, mashed potatoes'],
      ['Wed', 'Oat porridge with apple', 'Vegetable soup; fish cakes, rice'],
      ['Thu', 'Omelette, wholegrain bread', 'Lentil soup; pasta with beef'],
      ['Fri', 'Semolina porridge, fruit', 'Tomato soup; pancakes with jam'],
    ],
    reportTitle: 'Daily report · Tue 1 Dec',
    reportCols: ['Class', 'Breakfast', 'Lunch'],
    reportRows: [['1A', 18, 22], ['1B', 15, 19], ['2A', 20, 24], ['2B', 17, 21]],
    reportNotes: 'Lactose-free: 3 · Nut-free: 2',
    orderTitle: 'Order · Emilija, 2B',
    orderLines: [['Mon', 'Lunch', '5,00 €', ''], ['Tue', 'Lunch', '5,00 €', ''], ['Wed', 'Lunch', '5,00 €', 'cancel'], ['Thu', 'Lunch', '5,00 €', ''], ['Fri', 'Lunch', '5,00 €', '']],
    orderTotal: '20,00 €',
    paid: 'Paid',
    stepsLabel: 'Step',
  },
  pl: {
    child: 'Emilija · Klasa 2B',
    week: 'Tydzień 49',
    days: ['Pon', 'Wt', 'Śr', 'Czw', 'Pt'],
    dates: ['30.11', '1.12', '2.12', '3.12', '4.12'],
    breakfast: 'Śniadanie', lunch: 'Obiad',
    ordered: 'Zamówione', notOrdered: 'Niezamówione', cancelled: 'Anulowane', auto: 'Auto',
    order: 'Zamów', cancel: 'Anuluj', restore: 'Przywróć',
    cutoff: 'Zmiany do 08:00',
    autoToggle: 'Zamawiaj automatycznie co tydzień',
    logToggle: 'Pokaż, co zjadło',
    eaten: 'Zjedzone', notEaten: 'Niezjedzone',
    portion: 'Porcja', portions: ['Mała', 'Zwykła', 'Duża'],
    allergies: 'Alergie', allergens: ['Laktoza', 'Orzechy', 'Gluten'],
    total: 'Razem', perDay: '5,00 €',
    lunchDish: 'Zupa fasolowa, duszony indyk, kasza gryczana',
    breakfastDish: 'Owsianka 7 zbóż z owocami, owoc',
    menuTitle: 'Menu · Tydzień 49',
    menu: [
      ['Pon', 'Owsianka 7 zbóż z jagodami', 'Zupa fasolowa z pietruszką; duszony indyk, kasza gryczana'],
      ['Wt', 'Placuszki twarogowe z jogurtem', 'Barszcz; kotlety drobiowe, puree'],
      ['Śr', 'Owsianka z jabłkiem', 'Zupa jarzynowa; kotleciki rybne, ryż'],
      ['Czw', 'Omlet, chleb pełnoziarnisty', 'Zupa z soczewicy; makaron z wołowiną'],
      ['Pt', 'Kasza manna, owoc', 'Zupa pomidorowa; naleśniki z dżemem'],
    ],
    reportTitle: 'Raport dzienny · wt. 1.12',
    reportCols: ['Klasa', 'Śniadanie', 'Obiad'],
    reportRows: [['1A', 18, 22], ['1B', 15, 19], ['2A', 20, 24], ['2B', 17, 21]],
    reportNotes: 'Bez laktozy: 3 · Bez orzechów: 2',
    orderTitle: 'Zamówienie · Emilija, 2B',
    orderLines: [['Pon', 'Obiad', '5,00 €', ''], ['Wt', 'Obiad', '5,00 €', ''], ['Śr', 'Obiad', '5,00 €', 'cancel'], ['Czw', 'Obiad', '5,00 €', ''], ['Pt', 'Obiad', '5,00 €', '']],
    orderTotal: '20,00 €',
    paid: 'Opłacone',
    stepsLabel: 'Krok',
  },
};

export function t(lang: Lang) {
  return { ...shared[lang], kids: kids[lang], business: business[lang], ui: ui[lang], routes: routes[lang], lang };
}
export type T = ReturnType<typeof t>;
