// content.js — Pharma OS content, sourced entirely from BRAIN.md.
// Do not invent or edit claims here; edit BRAIN.md first, then mirror the change.
//
// PHARMA_OS_LAYERS holds the six layers of the stack (BRAIN.md section 1),
// numbered bottom to top. Each entry's colorVar points at a custom property
// defined in styles.css, so the layer's colour lives in one place.

const PHARMA_OS_LAYERS = [
  {
    number: 1,
    name: "Data Foundation",
    tagline: "Trusted, governed enterprise data.",
    colorVar: "--l1-data"
  },
  {
    number: 2,
    name: "Pharma Context",
    tagline: "Domain context that gives data meaning. This is where Cortex sits.",
    colorVar: "--l2-context"
  },
  {
    number: 3,
    name: "Decision Intelligence",
    tagline: "Reason, predict, optimise.",
    colorVar: "--l3-intel"
  },
  {
    number: 4,
    name: "Agent Network",
    tagline: "Execute specialised work.",
    colorVar: "--l4-agents"
  },
  {
    number: 5,
    name: "Business Workflows",
    tagline: "Orchestrate end-to-end execution.",
    colorVar: "--l5-workflow"
  },
  {
    number: 6,
    name: "Decision Cockpits & Copilots",
    tagline: "Surface insights and guide decisions. Where accountability sits.",
    colorVar: "--l6-cockpit"
  }
];
