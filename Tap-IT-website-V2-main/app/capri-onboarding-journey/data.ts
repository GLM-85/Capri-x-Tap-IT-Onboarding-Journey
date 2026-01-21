
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
  tags: string[]; // [Doel, Deliverable, Go/No-Go]
  heroSummary: string;
  
  // Content Sections
  goal: string;
  activities: PhaseStep[];
  questions?: string[]; // Specific for Fase 0
  
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
    tags: ["STARTPUNT", "CONTEXT", "ANALYSE"],
    heroSummary: "Capri volledig begrijpen zonder direct oplossingen te ontwerpen. We leggen de basis voor een passend advies.",
    
    goal: "We willen voorkomen dat we techniek implementeren die niet aansluit bij de bedrijfsprocessen. Daarom starten we met luisteren en inventariseren. Na deze fase weet Capri exact of de context compleet is en kan er een bewuste Go/No-Go-beslissing worden genomen.",
    
    activities: [
      {
        title: "Voorwerk & Data Request",
        content: ["We vragen basisinformatie op over users en licenties. Indicatie: ± 30 min – Capri management & operations + Tap-IT."],
        callout: "Jullie hoeven hier nog geen technische oplossingen te kiezen, alleen de situatie te schetsen."
      },
      {
        title: "Intake Sessie (± 2 uur)",
        content: ["Een diepte-interview om de context te snappen. Indicatie: ± 2 uur – Capri management & operations + Tap-IT."]
      },
      {
        title: "Synthese",
        content: ["Wij vertalen de input naar het 'Capri Customer Profile'. Indicatie: ± 1–2 werkdagen – Tap-IT (met input van Capri)."]
      },
      {
        title: "Validatie",
        content: ["Jullie controleren of we het goed begrepen hebben. Indicatie: ± 30 min – Capri management & operations."]
      },
      {
        title: "Go / No-Go moment",
        content: ["Op basis van het Capri Customer Profile besluiten we samen of we doorgaan naar Fase 1 (High Level Design). Indicatie: ± 30 min – Capri management + Tap-IT."]
      }
    ],
    
    questions: [
      "Wat zijn de bedrijfscontext en groeiplannen? Denk aan groei in headcount, locaties of internationalisering.",
      "Wie zijn de gebruikers, welke devices gebruiken ze en waar werken ze? We brengen persona's en werkstijlen in kaart.",
      "Wat is de huidige IT & Security maturity? We inventariseren het huidige niveau van beheer en beveiliging.",
      "Hoe gaan we om met data & compliance? We bespreken eisen rondom wetgeving en dataclassificatie.",
      "Waar ervaren medewerkers vandaag frictie in hun werk, en wat zou het hen makkelijker, rustiger en prettiger maken?"
    ],

    deliverables: [
      "Capri Customer Profile",
      "Bedrijfscontext & groei",
      "Gebruikers & persona’s",
      "Devices & locaties",
      "IT-volwassenheid",
      "Belangrijkste pijnpunten & ambities"
    ],
    
    checklist: {
      needs: ["Input Capri: lijst met huidige applicaties", "Input Capri: organogram of user-overzicht", "Input Capri: beschikbaarheid voor intake"],
      roles: ["Management", "Operations / HR"],
      decisions: ["Besluit Tap-IT + Capri: bevestiging dat het profiel klopt", "Besluit Tap-IT + Capri: Go/No-Go voor start Fase 1"]
    },
    nextPhase: "fase-1"
  },
  {
    id: "fase-1",
    slug: "fase-1",
    number: 1,
    title: "Capri High Level Design",
    shortDescription: "Richtinggevende keuzes voor werkplek & security",
    tags: ["STRATEGIE", "WERKPLEK", "SECURITY"],
    heroSummary: "We vertalen de context uit Fase 0 naar een conceptueel ontwerp. De grote lijnen van de moderne werkplek en security, zonder technische details.",
    
    goal: "Overeenstemming bereiken over de strategie en functionaliteit van de nieuwe IT-omgeving, zodat we zeker weten dat we de juiste richting op gaan. Dit ontwerp geeft richting, maar bevat nog geen technische details of implementatiekeuzes. Na deze fase weet Capri exact welke richting en uitgangspunten worden gekozen en kan het besluit worden genomen om door te gaan naar detailontwerp.",
    
    activities: [
      {
        title: "Keuzes op hoofdlijnen",
        content: ["We maken samen richtinggevende keuzes over hoe jullie willen werken (bijv. volledig online werken of deels met lokale systemen), hoe medewerkers hun device gebruiken en welk basis-niveau van beveiliging daarbij past."],
        callout: "Hier bepalen we hoe de IT jullie business gaat ondersteunen."
      },
      {
        title: "Gebruikers & werkdag",
        content: ["We beschrijven de belangrijkste gebruikersgroepen en hoe hun werkdag eruitziet, zodat keuzes aansluiten op wat zij nodig hebben om soepel te kunnen werken."]
      },
      {
        title: "Support & afspraken",
        content: ["We spreken af wat jullie van support mogen verwachten en wat intern belegd blijft, zodat het duidelijk is wie waarvoor verantwoordelijk is en welke reactietijden passen bij jullie business."]
      }
    ],
    
    deliverables: [
      "Capri High Level Design (HLD)",
      "Richtinggevende uitgangspunten en keuzes op hoofdlijnen",
      "Overzicht van gebruikersgroepen en gewenste werkervaring",
      "Afspraken over support, verwachtingen en verantwoordelijkheden",
      "Kaders voor veiligheid en werkwijze (zonder detailontwerp)"
    ],
    
    checklist: {
      needs: ["Input Capri: feedback op concept HLD", "Input Capri: voorkeur voor hardware/devices"],
      roles: ["Management", "Key Users (voor persona validatie)"],
      decisions: ["Tap-IT besluit (met Capri akkoord): High Level Design vastgesteld", "Tap-IT besluit: richting en uitgangspunten vastgesteld (geen detailontwerp)", "Besluit Tap-IT + Capri: Go/No-Go voor start Fase 2"]
    },
    nextPhase: "fase-2"
  },
  {
    id: "fase-2",
    slug: "fase-2",
    number: 2,
    title: "Tap-IT MSP Blueprint",
    shortDescription: "Ontwerp herhaalbaar ecosysteem & architectuur",
    tags: ["ARCHITECTUUR", "SCHAALBAARHEID", "STANDAARDISATIE"],
    heroSummary: "Dit is de machinekamer. We ontwerpen de blauwdruk voor het schaalbare MSP-model. Technische diepgang en architectuur staan centraal.",
    
    goal: "Een gestandaardiseerde, veilige en schaalbare architectuur neerzetten die voor Capri werkt én herhaalbaar is als MSP-product. De MSP Blueprint is eigendom van Tap-IT; Capri is hierbij onze validatie- en use-case partner. Na deze fase weet Capri exact welke blauwdruk de basis wordt en welke keuzes door Tap-IT zijn vastgelegd.",
    
    activities: [
      {
        title: "Architectuur Workshop (1 Dag)",
        content: ["Kwaliteits- en challenge-sessie: we toetsen architectuurprincipes en standaardkeuzes met Tap-IT engineers/architecten én externe solution experts (zoals Frans)."],
        callout: "We bouwen een fundament dat klaar is voor toekomstige groei."
      },
      {
        title: "Technische Domeinen Uitwerken",
        content: ["Standaardiseren van de bouwblokken: identity, devices, security en monitoring als herhaalbare MSP-principes en patronen."]
      },
      {
        title: "Review & Validatie",
        content: ["Review en validatie van de MSP Blueprint v1.0 op herhaalbaarheid, beheersbaarheid en kwaliteit (met Capri als use-case toets)."]
      }
    ],
    
    deliverables: ["Tap-IT MSP Blueprint v1.0"],
    
    checklist: {
      needs: ["Input Capri: technische requirements (indien specifiek)", "Input Capri: toegang tot huidige omgevingen (read-only)"],
      roles: ["Tap-IT Engineers", "Externe Experts"],
      decisions: ["Tap-IT besluit: MSP Blueprint gevalideerd", "Tap-IT besluit: standaard MSP-tooling en architectuurprincipes vastgesteld", "Tap-IT besluit: detailinvulling per klant volgt in Fase 3"]
    },
    nextPhase: "fase-3"
  },
  {
    id: "fase-3",
    slug: "fase-3",
    number: 3,
    title: "LLD & Proof of Concept",
    shortDescription: "Detailontwerp en technische validatie",
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
