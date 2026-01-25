
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
  activities: PhaseStep[];
  questions?: string[]; // Specific for Fase 0
  intakeDomains?: { title: string; description: string }[];
  
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
    title: "Capri High Level Design",
<<<<<<< HEAD
    shortDescription: "Architectuurrichting en scope voor de moderne werkplek",
=======
    shortDescription: "Richtinggevende keuzes voor werkplek & security",
    overviewDecision: "Capri management en Tap-IT besluiten bij het Go/No-Go moment of richting en scope kloppen; deze fase voorkomt detailontwerp zonder gedragen koers.",
>>>>>>> 4b031133e5c1d414391f4b9854fa935925130883
    tags: ["STRATEGIE", "WERKPLEK", "SECURITY"],
    heroSummary: "We bepalen de architectuurrichting en kaders voor de moderne werkplek, voordat technische uitwerking start.",
    
    goal: "Het vaststellen van een heldere, toekomstvaste architectuurrichting voor de moderne werkplek van Capri. Deze fase bepaalt wat er gebouwd wordt, waarom, en binnen welke kaders — voordat er technisch wordt uitgewerkt.",
    
    activities: [
      {
        title: "Architectuurrichting bepalen",
        content: ["TAP-IT vertaalt de inzichten uit Fase 0 naar concrete architectuurprincipes voor identiteit, werkplek, security en samenwerking."]
      },
      {
        title: "Keuzes onderbouwen vanuit business & risico",
        content: ["Elke keuze wordt gemotiveerd op basis van schaalbaarheid, security & compliance en aansluiting op klanten, partners en toekomstige groei."]
      },
      {
        title: "Afbakening van scope",
        content: ["We maken expliciet wat onderdeel is van de standaard werkplek, wat optioneel is en wat buiten scope valt. Zo ontstaat voorspelbaarheid in uitvoering, beheer en kosten."]
      },
      {
        title: "Validatie met Capri (richting, geen techniek)",
        content: ["Capri valideert de richting en uitgangspunten. TAP-IT bewaakt en bepaalt de architectuurkeuzes. Zoals een automonteur adviseert welk remsysteem veilig is, bepaalt TAP-IT welke IT-architectuur passend en verantwoord is."]
      }
    ],
    
    deliverables: [
      "Capri High Level Design (HLD)",
      "Architectuurprincipes & scope-afbakening",
      "Heldere basis voor verdere technische uitwerking"
    ],
    
    checklist: {
      needs: ["Feedback op uitgangspunten en prioriteiten", "Inzicht in groeiplannen en samenwerkingen"],
      roles: ["Capri management / partners", "TAP-IT architect"],
      decisions: ["Akkoord op architectuurrichting", "Akkoord op scope en uitgangspunten", "Zonder akkoord start Fase 2 niet"]
    },
    nextPhase: "fase-2"
  },
  {
    id: "fase-2",
    slug: "fase-2",
    number: 2,
    title: "Tap-IT MSP Blueprint",
<<<<<<< HEAD
    shortDescription: "Product- en beheerstandaard voor een schaalbaar MSP-model",
=======
    shortDescription: "Ontwerp herhaalbaar ecosysteem & architectuur",
    overviewDecision: "Tap-IT beslist na review en validatie over de MSP Blueprint; deze fase borgt schaalbaarheid en standaardisatie vóór klantdetail.",
>>>>>>> 4b031133e5c1d414391f4b9854fa935925130883
    tags: ["ARCHITECTUUR", "SCHAALBAARHEID", "STANDAARDISATIE"],
    heroSummary: "We vertalen het HLD naar een concrete product- en beheerstandaard voor een herhaalbaar MSP-model.",
    
    goal: "Het definiëren van een herhaalbaar, beheersbaar en schaalbaar MSP-model dat als fundament dient voor Capri — en toekomstige groei. Deze fase vertaalt de HLD naar een concrete product- en beheerstandaard.",
    
    activities: [
      {
        title: "Definitieve productdefinitie vaststellen",
        content: ["We leggen vast wat de standaard Managed Modern Workplace inhoudt. Standaard inbegrepen: Microsoft Entra ID (identity & access), Intune baseline policies, rollen & rechten, endpoint security, logging & basis monitoring. Optioneel / add-ons: mobile devices, hardware, networking (via partner of apart traject). Niet inbegrepen: on-prem infrastructuur, maatwerk per individuele gebruiker, complexe netwerkomgevingen."]
      },
      {
        title: "Minimum Viable Product (MVP) vastleggen",
        content: ["Het MVP is direct inzetbaar, schaalbaar en beheerbaar. Dit voorkomt uitzonderingen en onvoorspelbaarheid in beheer."]
      },
      {
        title: "Impact op beheer & pricing expliciet maken",
        content: ["Keuzes in deze fase bepalen complexiteit van beheer, benodigde support en toekomstige kosten. Transparantie vóór implementatie."]
      }
    ],
    
    deliverables: [
      "Tap-IT MSP Blueprint v1.0",
      "Vastgelegde productstandaard",
      "Duidelijke afbakening van wat wel en niet geleverd wordt"
    ],
    
    checklist: {
      needs: ["Validatie van business-fit", "Inzicht in gewenste flexibiliteit"],
      roles: ["TAP-IT engineers / architecten", "Eventuele externe experts"],
      decisions: ["Akkoord op MSP Blueprint", "Akkoord op MVP en scope", "Dit is de basis voor technische uitwerking in Fase 3"]
    },
    nextPhase: "fase-3"
  },
  {
    id: "fase-3",
    slug: "fase-3",
    number: 3,
    title: "LLD & Proof of Concept",
    shortDescription: "Detailontwerp en technische validatie",
    overviewDecision: "Tap-IT en Capri beslissen na PoC/LLD of configuraties productie-klaar zijn; deze fase elimineert technische risico’s vóór livegang.",
    tags: ["DETAILONTWERP", "VALIDATIE", "PROOF OF CONCEPT"],
    heroSummary: "Papier is geduldig, techniek niet. We werken details uit tot op instelling-niveau en testen risicovolle onderdelen in een veilige omgeving.",
    
    goal: "Laatste technische risicopoort vóór productie: we elimineren technische risico's en maken de configuratie definitief voordat we live gaan. Na deze fase weet Capri exact dat de configuraties werken en kan het definitieve besluit tot implementatie worden genomen.",
    
    activities: [
      {
        title: "Low Level Design (LLD)",
        content: ["Documentatie & configuratie: exacte configuraties, naming conventions en policy settings vastleggen."],
        callout: "We zorgen dat alles werkt zoals bedacht voordat we gebruikers raken."
      },
      {
        title: "Proof of Concept (PoC)",
        content: ["Praktijkvalidatie & tests: bouw van een testomgeving en testen van kritische applicaties."]
      }
    ],
    
    deliverables: ["Capri Low Level Design (LLD) – productie-klare configuraties en implementatiestandaarden, gevalideerd via Proof of Concept."],
    
    checklist: {
      needs: ["Input Capri: testgebruikers / testdevices", "Input Capri: applicatie-eigenaren voor tests"],
      roles: ["Key Users (Testers)", "Tap-IT Engineers"],
      decisions: ["Tap-IT besluit: PoC geaccepteerd op basis van tests", "Definitief besluit Tap-IT + Capri: Go voor migratie/implementatie"]
    },
    nextPhase: "fase-4"
  },
  {
    id: "fase-4",
    slug: "fase-4",
    number: 4,
    title: "Implementatie & Decharge",
    shortDescription: "Bouw, migratie en oplevering",
    overviewDecision: "Capri beslist bij decharge over acceptatie; deze fase zorgt voor gecontroleerde migratie en overdracht naar beheer.",
    tags: ["UITROL", "MIGRATIE", "LIVEGANG"],
    heroSummary: "De daadwerkelijke uitrol. We bouwen de productieomgeving, migreren data en gebruikers, en zorgen voor een soepele overgang.",
    
    goal: "Een vlekkeloze transitie naar de nieuwe moderne werkplek voor alle medewerkers, met minimale impact op de business. Na deze fase weet Capri exact dat de productie-omgeving stabiel draait en is de definitieve acceptatie afgerond.",
    
    activities: [
      {
        title: "Bouw & Configuratie",
        content: ["Inrichten tenants en portals conform LLD. Strikte uitvoering van het ontwerp."],
        callout: "De nieuwe omgeving wordt gebruiksklaar gemaakt."
      },
      {
        title: "Migratie & Onboarding",
        content: ["Migreren van mail en data, en begeleiding van gebruikers tijdens de livegang."]
      },
      {
        title: "Decharge",
        content: ["Formele oplevering, acceptatie en overdracht naar beheer."]
      }
    ],
    
    deliverables: ["Werkende productieomgeving", "Decharge document"],
    
    checklist: {
      needs: ["Input Capri: interne communicatie naar medewerkers", "Input Capri: beschikbaarheid tijdens migratieweekend/dag"],
      roles: ["Alle medewerkers", "Projectteam"],
      decisions: ["Definitief besluit Capri: formele acceptatie (Decharge)"]
    },
    nextPhase: "fase-5"
  },
  {
    id: "fase-5",
    slug: "fase-5",
    number: 5,
    title: "Evaluatie & Standaardisatie",
    shortDescription: "Leren, verbeteren en borgen",
    overviewDecision: "Tap-IT beslist na evaluatie welke verbeteringen worden geborgd; deze fase verankert leren en standaardisatie.",
    tags: ["EVALUATIE", "OPTIMALISATIE", "BORGING"],
    heroSummary: "Na de livegang stopt het niet. We evalueren het proces en het resultaat. De lessen verwerken we in de standaard voor de toekomst.",
    
    goal: "Borgen van kwaliteit en continu verbeteren van het MSP-ecosysteem op basis van praktijkervaring. Na deze fase weet Capri exact welke verbeteringen structureel worden geborgd in beheer en standaard.",
    
    activities: [
      {
        title: "Projectevaluatie",
        content: ["Wat ging goed? Wat kan beter? Feedback ophalen van gebruikers en stakeholders."],
        callout: "We leren van elke stap om de dienstverlening te verbeteren."
      },
      {
        title: "Update Blueprint",
        content: ["Verwerken van lessons learned in de MSP Blueprint v1.1."]
      },
      {
        title: "Start Regulier Beheer",
        content: ["Inregeling in reguliere beheerprocessen en planning van QBRs."]
      }
    ],
    
    deliverables: ["Evaluatieverslag", "Tap-IT MSP Blueprint v1.1"],
    
    checklist: {
      needs: ["Input Capri: feedback", "Input Capri: deelname evaluatiesessie"],
      roles: ["Management", "Projectteam"],
      decisions: ["Tap-IT besluit: verbeterpunten vastgesteld"]
    }
  }
];
