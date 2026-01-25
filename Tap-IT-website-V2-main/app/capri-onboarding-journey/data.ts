
export interface PhaseStep {
  title: string;
  content: string[]; // Bullet points or paragraphs
  callout?: string; // "Wat betekent dit voor Capri?"
}

export interface PhaseChecklist {
  needs: string[];
  roles: string[];
  decisions: string[];
}

export interface PhaseData {
  id: string; // "fase-0"
  slug: string; // "fase-0"
  number: number; // 0
  title: string; // "Intake & Context"
  shortDescription: string;
  overviewDecision: string;
  tags: string[]; // [Doel, Deliverable, Go/No-Go]
  heroSummary: string;
  
  // Content Sections
  goal: string;
  goalBullets?: string[];
  activities: PhaseStep[];
  questions?: string[]; // Specific for Fase 0
  intakeDomains?: { title: string; description: string }[];
  rolesResponsibilities?: {
    heading: string;
    bullets: string[];
  }[];
  rolesAnalogy?: string;
  networkingScope?: string[];
  managedWorkplace?: {
    heading: string;
    items: string[];
  }[];
  mvpDefinition?: string;
  managementPricingImpact?: string[];
  accordMoment?: string;
  summary?: string;
  
  deliverables: string[];
  
  checklist: PhaseChecklist;
  
  nextPhase?: string;
}

export const phases: PhaseData[] = [
  {
    id: "fase-0",
    slug: "fase-0",
    number: 0,
    title: "Intake & Context",
    shortDescription: "Capri begrijpen zonder oplossingen te ontwerpen",
    overviewDecision: "Capri management en Tap-IT besluiten bij het Go/No-Go moment of context en risico’s scherp genoeg zijn; zonder deze fase worden architectuurkeuzes niet onderbouwd en ontstaat risico in latere groei.",
    tags: ["STARTPUNT", "CONTEXT", "ANALYSE"],
    heroSummary: "Capri volledig begrijpen zonder direct oplossingen te ontwerpen. We leggen de basis voor een passend advies.",
    
    goal: "Inzicht verkrijgen in de huidige IT-situatie, volwassenheid, tooling en risico’s, zodat architectuur- en securitykeuzes in volgende fases objectief en verdedigbaar zijn.",
    
    activities: [
      {
        title: "Voorwerk & Data Request",
        content: ["We analyseren basisinformatie over users, licenties en huidige tooling. Indicatie: ± 30 min – Capri management & operations + Tap-IT."],
        callout: "We toetsen de context en spiegelen wat dit betekent voor volgende keuzes."
      },
      {
        title: "Intake Sessie (± 2 uur)",
        content: ["We valideren de context en maken risico’s expliciet per domein. Indicatie: ± 2 uur – Capri management & operations + Tap-IT."]
      },
      {
        title: "Synthese",
        content: ["We analyseren de input en vertalen dit naar het Capri Customer Profile en IT Maturity Snapshot. Indicatie: ± 1–2 werkdagen – Tap-IT (met input van Capri)."]
      },
      {
        title: "Validatie",
        content: ["We spiegelen de conclusies en valideren de risico’s en groeibeperkingen. Indicatie: ± 30 min – Capri management & operations."]
      },
      {
        title: "Go / No-Go moment",
        content: ["Op basis van de vastgestelde context en risico’s besluiten we samen of we doorgaan naar Fase 1 (High Level Design). Indicatie: ± 30 min – Capri management + Tap-IT."]
      }
    ],
    
    questions: [
      "Wat zijn de bedrijfscontext en groeiplannen? Denk aan groei in headcount, locaties of internationalisering.",
      "Wie zijn de gebruikers, welke devices gebruiken ze en waar werken ze? We brengen persona's en werkstijlen in kaart.",
      "Wat is de huidige IT & Security maturity? We inventariseren het huidige niveau van beheer en beveiliging.",
      "Hoe gaan we om met data & compliance? We bespreken eisen rondom wetgeving en dataclassificatie.",
      "Waar ervaren medewerkers vandaag frictie in hun werk, en wat zou het hen makkelijker, rustiger en prettiger maken?"
    ],
    
    intakeDomains: [
      { title: "Networking", description: "Huidige netwerkopzet, wifi, externe toegang, partners" },
      { title: "Endpoints", description: "Apparatuur, beheer, updates, scheiding privé/zakelijk" },
      { title: "Security", description: "Identity, toegang, data-bescherming, offboarding" },
      { title: "Software & tooling", description: "Google / Microsoft, SaaS-gebruik, shadow IT" }
    ],

    deliverables: [
      "Capri Customer Profile",
      "IT Maturity Snapshot",
      "Risico- & groeibeperkingen overzicht",
      "Advies over vervolgfase & prioriteiten"
    ],
    
    checklist: {
      needs: ["Input Capri: lijst met huidige applicaties", "Input Capri: organogram of user-overzicht", "Input Capri: beschikbaarheid voor intake"],
      roles: ["Management", "Operations / HR", "Externe (pro-bono) IT-beheerder / partner (inzicht in configuratie en overdraagbaarheid)"],
      decisions: [
        "Wat beslissen we in deze fase? Akkoord op vastgestelde context & risico’s",
        "Go / No-Go moment naar Fase 1 (High Level Design)",
        "Akkoord om door te gaan naar High Level Design"
      ]
    },
    nextPhase: "fase-1"
  },
  {
    id: "fase-1",
    slug: "fase-1",
    number: 1,
    title: "Architectuurrichting & Besluit op Hoofdlijnen",
    shortDescription: "TAP-IT bepaalt de architectuurrichting en scope op hoofdlijnen. Capri valideert de business-impact en prioriteiten.",
    overviewDecision: "TAP-IT bepaalt de architectuurrichting op hoofdlijnen, Capri valideert. Zonder akkoord start Fase 2 niet.",
    tags: ["STRATEGIE", "WERKPLEK", "SECURITY"],
    heroSummary: "TAP-IT bepaalt de architectuurrichting en scope op hoofdlijnen. Capri valideert de business-impact en prioriteiten.",
    
    goal: "In deze fase stelt TAP-IT de architectuurrichting vast op hoofdlijnen. Dit betekent: keuzes over principes, scope en uitgangspunten, nog zonder technische detaillering. Het doel is om één duidelijke, gedragen richting vast te leggen waarop in Fase 2 (Blueprint) en Fase 3 (LLD & PoC) verder gebouwd kan worden.",
    
    activities: [
      {
        title: "Architectuurprincipes vaststellen",
        content: ["Vaststellen van architectuurprincipes voor de moderne werkplek."]
      },
      {
        title: "Scope afbakenen",
        content: ["Afbakenen van de Managed Modern Workplace (wat valt er wel / niet onder)."]
      },
      {
        title: "Networking positioneren",
        content: ["Positioneren van networking als integraal onderdeel van de totale oplossing, evaluatie volgt later."]
      },
      {
        title: "Security, groei en compliance",
        content: ["Vastleggen van uitgangspunten voor security, groei en compliance."]
      },
      {
        title: "Richtlijnen voor vervolgfasen",
        content: ["Vertalen van Fase-0 inzichten naar duidelijke richtlijnen voor vervolgfasen."]
      }
    ],

    rolesResponsibilities: [
      {
        heading: "TAP-IT",
        bullets: [
          "Bepaalt de architectuurrichting en scope op hoofdlijnen",
          "Bewaakt schaalbaarheid, security en beheersbaarheid",
          "Maakt expliciete keuzes (geen open eindes)"
        ]
      },
      {
        heading: "CAPRI",
        bullets: [
          "Levert context, input en prioriteiten",
          "Valideert business-impact en praktische haalbaarheid",
          "Geeft akkoord op richting, niet op technische invulling"
        ]
      }
    ],
    rolesAnalogy: "Net zoals een automonteur bepaalt welk type remblok veilig is, bepaalt TAP-IT welke IT-architectuur passend is.",
    networkingScope: [
      "Networking wordt in deze fase inhoudelijk meegenomen als onderdeel van de totale oplossing.",
      "In Fase 1 bepalen we welke netwerkaspecten relevant zijn voor de architectuurrichting.",
      "In Fase 1 bepalen we welke afhankelijkheden en risico’s er zijn.",
      "Concrete inrichting en uitvoeringskeuzes volgen pas in latere fases."
    ],
    accordMoment: "Go / No-Go moment. Capri geeft akkoord op de gekozen architectuurrichting, de scope op hoofdlijnen en wat in de volgende fases verder wordt uitgewerkt. Zonder akkoord op deze punten start Fase 2 niet.",
    
    deliverables: [
      "Architectuurrichting op hoofdlijnen",
      "Afgebakende scope van de Managed Modern Workplace",
      "Vastgelegde uitgangspunten voor security, schaalbaarheid en beheer",
      "Duidelijke randvoorwaarden voor Fase 2 en 3"
    ],
    
    checklist: {
      needs: ["Inhoudelijke feedback op voorgestelde richting", "Prioriteiten vanuit business en groei"],
      roles: ["Capri management", "TAP-IT architect / solution lead"],
      decisions: ["Akkoord op architectuurrichting", "Akkoord op scope op hoofdlijnen", "Go / No-Go naar Fase 2"]
    },
    nextPhase: "fase-2"
  },
  {
    id: "fase-2",
    slug: "fase-2",
    number: 2,
    title: "Productdefinitie & MSP-Blueprint",
    shortDescription: "Managed Modern Workplace-standaard als basis voor beheer",
    overviewDecision: "Akkoord op productdefinitie en MVP is vereist vóór start van Fase 3.",
    tags: ["ARCHITECTUUR", "SCHAALBAARHEID", "STANDAARDISATIE"],
    heroSummary: "TAP-IT definieert de Managed Modern Workplace-standaard en het MVP.",
    
    goal: "In deze fase vertaalt TAP-IT de gekozen architectuurrichting naar een concrete, herhaalbare Managed Modern Workplace-standaard. Deze standaard vormt het fundament voor beheer, support en pricing.",
    
    activities: [
      {
        title: "Managed Modern Workplace-standaard definiëren",
        content: ["Definiëren van de Managed Modern Workplace-standaard."]
      },
      {
        title: "MVP vaststellen",
        content: ["Vaststellen van het Minimum Viable Product (MVP)."]
      },
      {
        title: "Add-ons bepalen",
        content: ["Bepalen van optionele uitbreidingen (add-ons)."]
      },
      {
        title: "Beheer en kosten inzichtelijk maken",
        content: ["Inzichtelijk maken van impact op beheer en kosten."]
      }
    ],

    managedWorkplace: [
      {
        heading: "Standaard inbegrepen",
        items: [
          "Microsoft Entra ID (identity & access)",
          "Intune baseline policies",
          "Rollen & rechten",
          "Endpoint security",
          "Basis collaboration (Teams / SharePoint)"
        ]
      },
      {
        heading: "Optioneel (add-ons)",
        items: [
          "Mobile device support",
          "Hardware & lifecycle management",
          "Networking (via partner of apart traject)"
        ]
      },
      {
        heading: "Niet inbegrepen",
        items: [
          "On-prem infrastructuur",
          "Klantspecifieke maatwerkarchitecturen",
          "Niet-standaard security-constructies"
        ]
      }
    ],
    mvpDefinition: "Het MVP is de minimale, veilige en schaalbare werkplekstandaard die TAP-IT beheersbaar kan leveren. Afwijkingen van het MVP vergroten complexiteit, beheerlast en kosten.",
    managementPricingImpact: [
      "Beheercomplexiteit",
      "Supportmodel",
      "Prijsrichting",
      "Daarom worden hier expliciet grenzen gesteld."
    ],
    accordMoment: "Go / No-Go moment, akkoord op productdefinitie en MVP is vereist vóór start van Fase 3.",
    
    deliverables: [
      "Vastgelegde Managed Modern Workplace-standaard",
      "Duidelijke MVP-afbakening",
      "Overzicht standaard vs add-ons",
      "Input voor LLD & implementatie"
    ],
    
    checklist: {
      needs: ["Validatie van business-fit", "Inzicht in gewenste flexibiliteit"],
      roles: ["TAP-IT engineers / architecten", "Eventuele externe experts"],
      decisions: ["Akkoord op productdefinitie", "Akkoord op MVP", "Go / No-Go moment: akkoord vereist vóór start Fase 3"]
    },
    nextPhase: "fase-3"
  },
  {
    id: "fase-3",
    slug: "fase-3",
    number: 3,
    title: "Intern Ontwerp & Validatie",
    shortDescription: "Van architectuurrichting naar een gevalideerde, beheersbare standaard.",
    overviewDecision: "TAP-IT bepaalt het definitieve ontwerp; Capri valideert toepasbaarheid en impact. Zonder akkoord geen uitrol.",
    tags: ["DETAILONTWERP", "VALIDATIE", "PROOF OF CONCEPT"],
    heroSummary: "TAP-IT vertaalt de architectuurrichting naar een intern ontwerp dat beheersbaar en uitvoerbaar is.",
    
    goal: "In deze fase vertaalt TAP-IT de gekozen architectuurrichting naar een concreet, intern ontworpen werkplek-ontwerp. Capri valideert de uitkomst op toepasbaarheid en impact, niet op technische keuzes.",
    
    activities: [
      {
        title: "Functionele verdieping (Capri)",
        content: ["We toetsen de gekozen richting aan concrete werksituaties en groeiscenario’s, zonder technische invulling."]
      },
      {
        title: "Interne TAP-IT architectuursessie (zonder klant)",
        content: ["TAP-IT werkt het standaard werkplekontwerp uit op basis van schaalbaarheid, security en beheerbaarheid."]
      },
      {
        title: "Low Level Design (LLD)",
        content: ["Vastleggen van het definitieve ontwerp als interne standaard voor Capri."]
      },
      {
        title: "Proof of Concept (validatie, geen experiment)",
        content: ["We tonen de werking van de standaard om aannames te bevestigen en risico’s vóór implementatie weg te nemen."]
      },
      {
        title: "Validatie met Capri",
        content: ["Capri geeft feedback op gebruik, impact en begrijpelijkheid, TAP-IT bewaakt het ontwerp."]
      }
    ],
    
    deliverables: [
      "Gevalideerd Low Level Design (LLD)",
      "Bevestigde werkplek-standaard voor implementatie",
      "Go-besluit voor uitrol"
    ],
    
    checklist: {
      needs: ["Feedback op werking en impact", "Bevestiging dat dit past bij dagelijkse praktijk en groei"],
      roles: ["Key users / vertegenwoordiging operations", "Projectverantwoordelijke Capri"],
      decisions: ["Akkoord op definitief ontwerp", "Go / No-Go naar implementatie", "Akkoord op scope en randvoorwaarden", "Start implementatie (Fase 4)"]
    },
    nextPhase: "fase-4"
  },
  {
    id: "fase-4",
    slug: "fase-4",
    number: 4,
    title: "Implementatie & Overdracht",
    shortDescription: "Gecontroleerde livegang op basis van een vastgestelde standaard.",
    overviewDecision: "Formele acceptatie en start beheerfase op basis van afgesproken scope.",
    tags: ["UITROL", "MIGRATIE", "LIVEGANG"],
    heroSummary: "De vastgestelde werkplek-standaard wordt gecontroleerd uitgerold en formeel overgedragen.",
    
    goal: "In deze fase wordt de vastgestelde werkplek-standaard gecontroleerd uitgerold. De productieomgeving wordt ingericht, getest en formeel overgedragen aan beheer.",
    
    activities: [
      {
        title: "Implementatie van de standaard",
        content: ["Uitrol van de werkplek zoals vastgesteld in Fase 3, zonder scope-uitbreiding."]
      },
      {
        title: "Migratie & onboarding",
        content: ["Overzetten van gebruikers, data en instellingen met minimale verstoring."]
      },
      {
        title: "Afstemming afhankelijkheden",
        content: ["Duidelijke afbakening tussen TAP-IT verantwoordelijkheden, eventuele partners en buiten scope."]
      },
      {
        title: "Decharge & overdracht naar beheer",
        content: ["Formele acceptatie en start van beheer volgens afgesproken kaders."]
      },
      {
        title: "Verwachtingsmanagement",
        content: ["Livegang is geen eindpunt, maar het begin van gecontroleerd beheer en verdere optimalisatie."]
      }
    ],
    
    deliverables: [
      "Werkende productieomgeving",
      "Gedocumenteerde configuratie",
      "Formele acceptatie & overdracht",
      "Decharge: opgeleverd conform afgesproken scope, overgedragen naar beheer, MVP is wat is afgesproken, geen maatwerk"
    ],
    
    checklist: {
      needs: ["Tijdige communicatie richting medewerkers", "Beschikbaarheid tijdens migratiemomenten"],
      roles: ["Projectverantwoordelijke Capri", "TAP-IT projectteam"],
      decisions: ["Formele acceptatie", "Start beheerfase"]
    },
    nextPhase: "fase-5"
  },
  {
    id: "fase-5",
    slug: "fase-5",
    number: 5,
    title: "Evaluatie, Borging & Beheer",
    shortDescription: "Overgang naar steady-state beheer en verantwoordelijkheden",
    overviewDecision: "Afspraken worden definitief vastgelegd en beheer start structureel volgens afgesproken kaders.",
    tags: ["EVALUATIE", "OPTIMALISATIE", "BORGING"],
    heroSummary: "Na livegang wordt de samenwerking structureel ingericht. We leggen vast wat werkt, wat geborgd is en hoe beheer, security en verantwoordelijkheden er vanaf nu uitzien.",
    
    goal: "Het definitief vastleggen van beheer-, security- en samenwerkingsafspraken. We zorgen dat de werkplek niet alleen werkt, maar ook beheersbaar, veilig en schaalbaar blijft, zonder afhankelijk te zijn van individuen.",
    goalBullets: [
      "Continuïteit en voorspelbaarheid",
      "Heldere verantwoordelijkheden",
      "Minder risico bij groei, partnerwissels of exit"
    ],
    
    activities: [
      {
        title: "Beheer- & Supportmodel vastleggen",
        content: [
          "Wij definiëren en borgen: wat valt onder standaard beheer, wat is incidenteel of meerwerk, fair-use grenzen (bijv. changes per maand) en escalatie- en contactstructuur.",
          "Dit voorkomt onduidelijkheid, ad-hoc werk en verwachtingsverschillen."
        ]
      },
      {
        title: "Security & Monitoring definitief inrichten",
        content: [
          "We leggen vast: wat is een security-incident, welke monitoring actief is, welke alerts worden opgevolgd en verwachtingen rondom beschikbaarheid (kantoortijden vs 24/7).",
          "Keuze wordt expliciet gemaakt: TAP-IT SOC / monitoring óf vaste securitypartner. Capri weet exact wat “veilig” betekent, en wat niet."
        ]
      },
      {
        title: "Standaard borgen voor de toekomst",
        content: [
          "De gekozen inrichting wordt vast onderdeel van de Tap-IT standaard.",
          "Verbeteringen worden gecontroleerd doorgevoerd.",
          "Geen wildgroei of uitzonderingen per klant. Dit beschermt kwaliteit, schaalbaarheid én snelheid."
        ]
      }
    ],
    
    deliverables: [
      "Evaluatie- & borgingsdocument",
      "Definitieve beheer- en supportafspraken",
      "Security- & monitoringafspraken",
      "Aangescherpte Tap-IT standaard (input voor volgende klanten)"
    ],
    
    checklist: {
      needs: ["Feedback op samenwerking en beheer", "Akkoord op support- en securityafspraken"],
      roles: ["Capri management", "TAP-IT service / architectuur"],
      decisions: ["Beheer- en securitymodel vastgesteld", "Samenwerking over naar steady-state"]
    },
    summary: "We leggen vast hoe Capri’s IT structureel beheerd, beveiligd en ondersteund wordt, zonder verrassingen, afhankelijkheden of losse eindjes."
  }
];
