// content.js — Pharma OS content, sourced entirely from BRAIN.md.
// Do not invent or edit claims here; edit BRAIN.md first, then mirror the change.
// Also holds small render helpers shared across pages, so each page's own
// script stays a thin layer of layout and event wiring.

// ---------------------------------------------------------------------------
// Data — BRAIN.md sections 1-4
// ---------------------------------------------------------------------------

// The six layers of the stack (BRAIN.md section 1), numbered bottom to top.
// Each entry's colorVar points at a custom property defined in styles.css.
const PHARMA_OS_LAYERS = [
  {
    number: 1,
    name: "Data Foundation",
    tagline: "Trusted, governed enterprise data.",
    colorVar: "--l1-data",
    headerChips: {
      label: "Domains covered",
      items: ["Commercial", "Medical", "Clinical", "Safety", "Manufacturing", "External"],
      confidence: "C"
    },
    whatItDoes: {
      text: "Connects to source systems, ingests, harmonises, standardises, enriches and serves data as reusable governed products. Produces the CDM → ARD → RRD progression: common data model, then analytics-ready datasets, then report-ready data.",
      confidence: "V"
    },
    insideGroups: [
      {
        label: "Data progression",
        items: ["CDM", "ARD", "RRD"],
        confidence: "V"
      },
      {
        label: "Commercial data sources",
        items: [
          "Sales and demand", "Field engagement / CRM", "Patient and APLD", "Market access",
          "Digital and social", "Enterprise and finance", "Marketing automation",
          "Web, campaign and content metadata"
        ],
        confidence: "V"
      },
      {
        label: "Controls at this layer",
        items: ["Data quality rules", "RBAC", "Consent capture", "De-identification", "Auditability", "Lineage"],
        confidence: "V"
      }
    ],
    whyItMatters: {
      text: "Every downstream number is only as trustworthy as this layer. When brand, field, access and content teams disagree about the truth, this is where the disagreement starts.",
      confidence: "V"
    },
    indegeneAssets: [
      { name: "NEXT Data & Insight Platform / Unified Data Platform (UDP)", confidence: "V" },
      { name: "Data Quality / Data Catalog Agent", confidence: "V" }
    ]
  },
  {
    number: 2,
    name: "Pharma Context",
    tagline: "Domain context that gives data meaning. This is where Cortex sits.",
    colorVar: "--l2-context",
    headerChips: {
      label: "The 360s",
      items: ["HCP360", "Patient360", "Product360", "Brand360", "Trial360", "Evidence360"],
      confidence: "C"
    },
    whatItDoes: {
      text: "Converts raw data into meaning through ontology, taxonomy, business glossary, knowledge graphs, business rules, content metadata and context history. Holds the 360° context objects the rest of the OS reasons over.",
      confidence: "V"
    },
    insideGroups: [
      {
        label: "The 360s",
        items: ["HCP360", "Patient360", "Product360", "Brand360", "Trial360", "Evidence360"],
        confidence: "C"
      },
      {
        label: "Cortex",
        text: "Indegene's enterprise GenAI platform, purpose-built for life sciences — a knowledge engineering and multi-agent orchestration platform with enterprise-grade governance. Its Knowledge Engineering Interface lets subject matter experts codify domain knowledge and build agents through a domain-friendly interface, separating domain knowledge from application development. Agents are LLM-agnostic. Publicly launched February 2025.",
        confidence: "V"
      }
    ],
    whyItMatters: {
      label: "Why this is the moat",
      text: "Anyone can build a data lake. The defensible asset is 25+ years of codified domain expertise expressed as ontologies and knowledge graphs, where every validated decision, approved claim and workflow signal becomes reusable precedent for the next agent. It compounds in the client's favour.",
      confidence: "V"
    },
    honestyNote: {
      text: "Internal materials describe parts of the Cortex architecture as a conceptual design view rather than a delivered system specification. The claim to make is that the architecture and operating pattern are being proven through domain packs and client workflows — not that every component is productised everywhere.",
      confidence: "V"
    },
    indegeneAssets: [
      { name: "Cortex — enterprise GenAI platform for life sciences", confidence: "V" }
    ]
  },
  {
    number: 3,
    name: "Decision Intelligence",
    tagline: "Reason, predict, optimise.",
    colorVar: "--l3-intel",
    headerChips: {
      label: "What it does",
      items: [
        "Forecasting & planning", "Scoring & prioritisation", "Simulation & what-if",
        "Knowledge retrieval", "Decision optimisation", "NL reasoning"
      ],
      confidence: "C"
    },
    whatItDoes: {
      text: "Turns context into recommendations. Forecasting and planning, scoring and prioritisation, simulation and what-if, knowledge retrieval, decision optimisation, natural language reasoning.",
      confidence: "C"
    },
    insideGroups: [
      {
        label: "Commercial applications",
        items: [
          "Next Best Action", "Segmentation and targeting", "Channel and content affinity",
          "Propensity models", "Marketing mix modelling", "Channel effectiveness",
          "Budget optimisation", "Territory alignment", "IC and quota", "Sales force effectiveness"
        ],
        confidence: "V"
      }
    ],
    whyItMatters: {
      text: "This is where “what happened” becomes “what should we do”. Most organisations have reporting at this layer and call it intelligence.",
      confidence: "V"
    },
    indegeneAssets: [
      { name: "NEXT Omnichannel Commercial Intelligence", confidence: "V" },
      { name: "CEM — Channel Effectiveness Modeling", confidence: "V" },
      { name: "NEXT Forecasting / ForeSight", confidence: "V" },
      { name: "Customer 360 / HCP 360", confidence: "V" },
      { name: "Invisage", confidence: "V" }
    ]
  },
  {
    number: 4,
    name: "Agent Network",
    tagline: "Execute specialised work.",
    colorVar: "--l4-agents",
    headerChips: {
      label: "Agent domains",
      items: [
        "Field", "Medical", "Content", "Regulatory", "Access", "Patient",
        "Safety", "Supply", "Compliance", "Finance", "IT Ops"
      ],
      confidence: "C"
    },
    whatItDoes: {
      text: "Domain agents collaborate to complete tasks and drive outcomes. Agents are governed consumers of the layers below — permissioned, versioned, observable, rate-limited, and human-validated where the work is regulated.",
      confidence: "V"
    },
    insideGroups: [
      {
        label: "Agent domains",
        items: [
          "Field", "Medical", "Content", "Regulatory", "Access", "Patient",
          "Safety", "Supply", "Compliance", "Finance", "IT Ops"
        ],
        confidence: "C"
      },
      {
        label: "Autonomy tiers",
        text: "T1 acts within guardrails. T2 queues for human approval. T3 advises only and cannot act without a named human. Regulated agents (MLR, consent) are T3 by design.",
        confidence: "C"
      }
    ],
    whyItMatters: {
      label: "Operating principles",
      text: "Start with workflow value, not text generation. Use pharma-specific context and guardrails. Keep humans in the loop for regulated, promotional, medical or high-impact decisions. Measure work outcomes — adoption, cycle time, review iterations, campaign velocity, field productivity — not token or activity volume. Separate commercial and medical data.",
      confidence: "V"
    },
    indegeneAssets: [
      { name: "Research & Planning", confidence: "V" },
      { name: "Concepting", confidence: "V" },
      { name: "Pre-MLR / Compliance / Claims", confidence: "V" },
      { name: "Replicator / Localization", confidence: "V" },
      { name: "Content", confidence: "V" },
      { name: "Insights (Insight Genie)", confidence: "V" },
      { name: "Omni NBA", confidence: "V" },
      { name: "Field Intelligence (Rep Buddy / AI Coach)", confidence: "V" },
      { name: "Planner", confidence: "V" },
      { name: "Personalization", confidence: "V" },
      { name: "Data Quality / Data Catalog", confidence: "V" },
      { name: "Commercial Knowledge Assistant", confidence: "V" }
    ]
  },
  {
    number: 5,
    name: "Business Workflows",
    tagline: "Orchestrate end-to-end execution.",
    colorVar: "--l5-workflow",
    headerChips: {
      label: "Workflow set",
      items: [
        "Launch Management", "MLR & Content Review", "Field Engagement", "Patient Journey",
        "Trial Operations", "Access & Pricing", "Case & Adverse Event Management"
      ],
      confidence: "C"
    },
    whatItDoes: {
      text: "Turns decisions into coordinated, compliant work across functions. Consistent workflows enterprise-wide, adapted locally.",
      confidence: "C"
    },
    insideGroups: [
      {
        label: "Workflow set",
        items: [
          "Launch Management", "MLR & Content Review", "Field Engagement", "Patient Journey",
          "Trial Operations", "Access & Pricing", "Case & Adverse Event Management"
        ],
        confidence: "C"
      }
    ],
    whyItMatters: {
      text: "The challenge is not making one good decision. It is making thousands every week, consistently, across markets and brands. Most firms optimise tasks; the operating layer re-engineers the end-to-end workflow.",
      confidence: "V"
    },
    indegeneAssets: [
      { name: "NEXT MLR / MLR 2.0", confidence: "V" },
      { name: "NEXT Campaign Collaboration / Collaborator", confidence: "V" },
      { name: "NEXT Launch Planning", confidence: "V" },
      { name: "Activation as a Service — transition, PMO, governance, training, playbooks, adoption", confidence: "V" }
    ]
  },
  {
    number: 6,
    name: "Decision Cockpits & Copilots",
    tagline: "Surface insights and guide decisions. Where accountability sits.",
    colorVar: "--l6-cockpit",
    headerChips: {
      label: "Cockpits",
      items: [
        "CIO/CTO Control Tower", "CCO Commercial Cockpit", "CMO Marketing Cockpit",
        "CMO (Medical) Medical Cockpit", "Brand/GM Brand Cockpit", "Clinical Leader Trial Cockpit",
        "Market Access Cockpit", "Patient Services & Supply Cockpit"
      ],
      confidence: "C"
    },
    whatItDoes: {
      text: "Role-based experiences for every executive and function. The cockpit is where a human decides and owns the outcome — the OS does not remove accountability, it locates it.",
      confidence: "C"
    },
    insideGroups: [
      {
        label: "Cockpits",
        items: [
          "CIO/CTO Control Tower", "CCO Commercial Cockpit", "CMO Marketing Cockpit",
          "CMO (Medical) Medical Cockpit", "Brand/GM Brand Cockpit", "Clinical Leader Trial Cockpit",
          "Market Access Cockpit", "Patient Services & Supply Cockpit"
        ],
        confidence: "C"
      }
    ],
    whyItMatters: {
      label: "Why this layer must exist",
      text: "An operating system with no visible place for a human is exactly what buyers have been burned by. The cockpit is the trust surface.",
      confidence: "C"
    },
    indegeneAssets: [],
    route: { href: "commercial.html", label: "See it in action — Commercial Growth OS →" }
  }
];

// Governance (BRAIN.md section 2) — six controls that wrap all six layers at once.
// Naming is [C], the underlying practice each control describes is [V].
const GOVERNANCE_CONTROLS = [
  { name: "AI Governance & Ethics", detail: "Agent permissions, versioned skills, observability, human validation, escalation paths" },
  { name: "Security & Privacy (Zero Trust)", detail: "Persona-based RBAC, sensitivity tiers, least privilege, consent filtering, de-identification" },
  { name: "Regulatory Compliance", detail: "MLR, GxP, HIPAA, GDPR, 21 CFR Part 11" },
  { name: "Data Quality & Lineage", detail: "Provenance, transformation records, quality scoring, source-of-truth definition" },
  { name: "Auditability & Observability", detail: "Audit logs, drift monitoring, decision traceability" },
  { name: "Responsible AI & Guardrails", detail: "Claims libraries, approved-module constraints, off-label refusal, frequency caps" }
];
const GOVERNANCE_NAME_CONFIDENCE = "C";
const GOVERNANCE_DETAIL_CONFIDENCE = "V";

const SEPARATION_RULE = {
  text: "Commercial and medical data stay separated. Commercial roles receive aggregate signals, never medical insight content. There is no override path.",
  confidence: "V"
};

// Business outcomes (BRAIN.md section 3) — the top band.
const BUSINESS_OUTCOMES = {
  items: [
    "Growth", "Faster Launches", "Operational Efficiency",
    "Better HCP Engagement", "Better Patient Outcomes", "Compliance Excellence"
  ],
  confidence: "C"
};

// Platform-agnostic band (BRAIN.md section 4) — the bottom band, four categories.
const PLATFORM_BANDS = [
  { category: "AI models", items: ["OpenAI", "Anthropic", "Google"], confidence: "C" },
  {
    category: "Data platforms",
    items: ["Snowflake", "Databricks", "Palantir"],
    confidence: "C",
    note: { text: "Databricks is a gold / strategic partner", confidence: "V" }
  },
  { category: "Applications & platforms", items: ["Veeva", "Salesforce", "Adobe"], confidence: "V" },
  { category: "Cloud", items: ["AWS", "Microsoft Azure", "Google Cloud"], confidence: "V" }
];

const ALLIANCE_NOTE = {
  text: "Alliance posture is neutral and outcome-led: choose the ecosystem pattern that fits the client's architecture, maturity and compliance needs.",
  confidence: "V"
};

// The Commercial Growth OS (BRAIN.md section 5) — seven steps, magenta to blue.
// Description lines carry no explicit marker in BRAIN.md; they inherit the
// section's own framing ("Pharma OS in action for commercial ... `[C]`").
const COMMERCIAL_INTRO = {
  text: "Pharma OS in action for commercial. One intelligence foundation, every commercial decision, measurable impact.",
  confidence: "C"
};

const COMMERCIAL_STEPS = [
  {
    number: "01",
    name: "Market Intelligence",
    colorVar: "--step-01",
    description: { text: "Identify opportunities, prioritise markets, understand HCP, patient and competitor dynamics.", confidence: "C" },
    verified: {
      label: "Verified platforms",
      items: ["NEXT Social Listening", "NEXT Data & Insight Platform", "Disease landscaping, market sizing, primary research"],
      confidence: "V"
    },
    conceptNames: [{ name: "Tandem™ — AI Opportunity Scout", confidence: "?" }],
    impact: { text: "20–30% better opportunity identification; 15–25% improved forecast accuracy", confidence: "C" }
  },
  {
    number: "02",
    name: "Brand Strategy & Planning",
    colorVar: "--step-02",
    description: { text: "Build winning strategies, forecast scenarios, optimise brand plans across markets.", confidence: "C" },
    verified: {
      label: "Verified platforms",
      items: ["NEXT Forecasting / ForeSight", "NEXT Launch Planning", "Digital Excellence Maturity Assessment / CS-EMA / OmniIQ"],
      confidence: "V"
    },
    conceptNames: [{ name: "BrandIQ™ — AI Planning & Forecasting Scenario Simulator", confidence: "?" }],
    impact: { text: "50–75% reduction in planning cycle; 30–40% faster scenario analysis", confidence: "C" }
  },
  {
    number: "03",
    name: "Content Supply Chain",
    colorVar: "--step-03",
    description: { text: "Create, review, localise and approve compliant content at scale.", confidence: "C" },
    verified: {
      label: "Verified platforms",
      items: ["Content Super App", "NEXT Commercial Content Intelligence (NCCI)", "NEXT MLR / MLR 2.0", "Immersive Studio"],
      confidence: "V"
    },
    conceptNames: [{ name: "Design Connect™", confidence: "?" }],
    impact: { text: "75% faster content creation; 50% lower production cost; 3–5x faster MLR", confidence: "C" },
    proofPoints: {
      items: ["65% savings delivered", "60% content repurpose", "56% increase in content reuse", "40% better speed-to-market", ">45% content reuse and 97% SLA adherence in a masked case"],
      confidence: "V"
    }
  },
  {
    number: "04",
    name: "Omnichannel Engagement",
    colorVar: "--step-04",
    description: { text: "Deliver personalised engagement across channels and optimise field execution.", confidence: "C" },
    verified: {
      label: "Verified platforms",
      items: ["NEXT Omnichannel Commercial Intelligence", "Invisage", "Omni NBA Agent", "NEXT Campaign Collaboration / Collaborator", "CDP capability"],
      confidence: "V"
    },
    impact: { text: "2–3x more campaigns per year; 20–25% higher HCP engagement; 30–40% higher field productivity", confidence: "C" },
    proofPoints: {
      items: ["45% engagement increase and 65% time-to-market reduction in a masked CDP case", "1M+ HCP profiles", "17+ personalised channels"],
      confidence: "V"
    }
  },
  {
    number: "05",
    name: "Performance Intelligence",
    colorVar: "--step-05",
    description: { text: "Measure impact, optimise investment, drive continuous improvement.", confidence: "C" },
    verified: {
      label: "Verified platforms",
      items: ["CEM — Channel Effectiveness Modeling", "Customer 360 / HCP 360", "Insights Agent / Insight Genie", "Commercial Knowledge Assistant"],
      confidence: "V"
    },
    impact: { text: "20–30% higher marketing ROI; 15–25% improvement in brand performance", confidence: "C" },
    proofPoints: {
      items: ["30–40% leaner operations", "75% faster insights", "20% NBA adoption increase", "20% decrease in speed-to-market for launch analytics"],
      confidence: "V"
    }
  },
  {
    number: "06",
    name: "Market Access & Affordability",
    colorVar: "--step-06",
    description: { text: "Generate evidence, engage payers, optimise pricing and access strategies.", confidence: "C" },
    verified: {
      label: "Verified capability",
      items: ["Market access analytics", "Payer / formulary data integration", "HEOR when connected to commercialisation"],
      confidence: "V"
    },
    conceptNames: [{ name: "HEOR & Pricing Intelligence — Value & Evidence Generator", confidence: "?" }],
    impact: { text: "2–3x faster evidence generation; 20–30% faster access approvals", confidence: "C" }
  },
  {
    number: "07",
    name: "Patient Services & Adherence",
    colorVar: "--step-07",
    description: { text: "Deliver personalised patient support, improve adherence and outcomes.", confidence: "C" },
    verified: {
      label: "Verified capability",
      items: [
        "PSP strategy and design", "Care coordinator / nurse navigator models", "Adherence SMS engagement",
        "Reimbursement and hub reporting", "Co-pay analysis", "Patient journey analytics translated to HCP-level intelligence"
      ],
      confidence: "V"
    },
    conceptNames: [{ name: "Patient Services AI — Adherence Intelligence Hub Optimization", confidence: "?" }],
    impact: { text: "20–30% higher patient adherence; 15–25% lower patient support costs", confidence: "C" }
  }
];

// ---------------------------------------------------------------------------
// Render helpers — reused across pages
// ---------------------------------------------------------------------------

// [V] renders plainly, [C] renders as "concept", [?] renders amber as
// "pending confirmation". Never omit this on a rendered claim.
function confidenceTag(level) {
  if (level === "V") return '<span class="tag tag-v">V</span>';
  if (level === "C") return '<span class="tag tag-c">concept</span>';
  if (level === "?") return '<span class="tag tag-flag">pending confirmation</span>';
  return "";
}

function renderChips(items) {
  return items.map((item) => `<span class="chip"><span class="chip-dot" aria-hidden="true"></span>${item}</span>`).join("");
}

function renderChipGroup(group) {
  const body = group.items
    ? `<ul class="chip-list">${group.items.map((i) => `<li class="chip"><span class="chip-dot" aria-hidden="true"></span>${i}</li>`).join("")}</ul>`
    : `<p>${group.text}</p>`;
  return `
    <div class="detail-subgroup">
      <div class="detail-subgroup-head"><h4>${group.label}</h4>${confidenceTag(group.confidence)}</div>
      ${body}
    </div>`;
}

function renderAssetList(assets) {
  if (!assets || !assets.length) {
    return '<p class="detail-empty">No Indegene assets named for this layer in BRAIN.md.</p>';
  }
  return `<ul class="asset-list">${assets.map((a) => `<li>${a.name} ${confidenceTag(a.confidence)}</li>`).join("")}</ul>`;
}

function renderLayerBlock(layer) {
  const n = layer.number;
  const whyLabel = layer.whyItMatters.label || "Why a commercial leader should care";

  return `
    <div class="layer" data-layer="${n}" style="--layer-color: var(${layer.colorVar})">
      <h2 class="layer-heading-wrap">
        <button class="layer-header" id="layer-header-${n}" aria-expanded="false" aria-controls="layer-detail-${n}">
          <span class="layer-number">L${n}</span>
          <span class="layer-heading-text">
            <span class="layer-name">${layer.name}</span>
            <span class="layer-tagline">${layer.tagline}</span>
          </span>
          <span class="layer-chips">${renderChips(layer.headerChips.items)}</span>
          <span class="layer-chip-tag">${confidenceTag(layer.headerChips.confidence)}</span>
          <span class="layer-chevron" aria-hidden="true">⌄</span>
        </button>
      </h2>
      <div class="layer-detail-wrapper" id="layer-detail-${n}" role="region" aria-labelledby="layer-header-${n}">
        <div class="layer-detail-inner">
          <div class="detail-grid">
            <div class="detail-block">
              <h3>What it does</h3>
              <p>${layer.whatItDoes.text} ${confidenceTag(layer.whatItDoes.confidence)}</p>
            </div>
            <div class="detail-block">
              <h3>What's inside it</h3>
              ${layer.insideGroups.map(renderChipGroup).join("")}
            </div>
            <div class="detail-block">
              <h3>${whyLabel}</h3>
              <p>${layer.whyItMatters.text} ${confidenceTag(layer.whyItMatters.confidence)}</p>
              ${layer.honestyNote ? `<p class="detail-honesty">${layer.honestyNote.text} ${confidenceTag(layer.honestyNote.confidence)}</p>` : ""}
            </div>
            <div class="detail-block">
              <h3>Indegene assets</h3>
              ${renderAssetList(layer.indegeneAssets)}
            </div>
          </div>
          ${layer.route ? `<div class="detail-route"><a class="detail-route-link" href="${layer.route.href}">${layer.route.label}</a></div>` : ""}
        </div>
      </div>
    </div>`;
}

function renderOutcomesBand() {
  return `
    <div class="band-head"><h2>Business outcomes</h2>${confidenceTag(BUSINESS_OUTCOMES.confidence)}</div>
    <ul class="outcomes-list">
      ${BUSINESS_OUTCOMES.items.map((o) => `<li class="outcome-chip">${o}</li>`).join("")}
    </ul>`;
}

function renderGovernanceRail() {
  return `
    <div class="governance-rail-head">
      <h2>Governance</h2>
      <p class="governance-sub">Wraps all six layers — not a seventh layer.</p>
    </div>
    <ul class="governance-list">
      ${GOVERNANCE_CONTROLS.map((c) => `
        <li class="governance-item">
          <div class="governance-name">${c.name} ${confidenceTag(GOVERNANCE_NAME_CONFIDENCE)}</div>
          <div class="governance-detail">${c.detail} ${confidenceTag(GOVERNANCE_DETAIL_CONFIDENCE)}</div>
        </li>`).join("")}
    </ul>
    <p class="governance-separation">${SEPARATION_RULE.text} ${confidenceTag(SEPARATION_RULE.confidence)}</p>`;
}

function renderPlatformBand() {
  return PLATFORM_BANDS.map((band) => `
    <div class="platform-category">
      <div class="platform-category-head"><h3>${band.category}</h3>${confidenceTag(band.confidence)}</div>
      <ul class="chip-list">${band.items.map((i) => `<li class="chip"><span class="chip-dot" aria-hidden="true"></span>${i}</li>`).join("")}</ul>
      ${band.note ? `<p class="platform-note">${band.note.text} ${confidenceTag(band.note.confidence)}</p>` : ""}
    </div>`).join("") + `<p class="platform-alliance-note">${ALLIANCE_NOTE.text} ${confidenceTag(ALLIANCE_NOTE.confidence)}</p>`;
}

// ---------------------------------------------------------------------------
// Personas (/login) — BRAIN.md section 6
// ---------------------------------------------------------------------------

const PERSONAS = [
  {
    id: "cco",
    name: "Chief Commercial Officer",
    owns: "Commercial P&L",
    opensOn: "Portfolio share, spend efficiency, launch trajectory"
  },
  {
    id: "brand",
    name: "Brand / General Manager",
    owns: "One brand's P&L",
    opensOn: "Brand growth signals, competitive moves, access barriers"
  },
  {
    id: "omnichannel",
    name: "Omnichannel Lead",
    owns: "Journeys and channel mix",
    opensOn: "Campaign performance, content effectiveness, channel ROI"
  },
  {
    id: "field",
    name: "Field Excellence",
    owns: "Force productivity",
    opensOn: "Territory attainment, call quality, coaching signals"
  },
  {
    id: "access",
    name: "Market Access",
    owns: "Payer and affordability",
    opensOn: "Coverage, prior auth, time to therapy"
  },
  {
    id: "admin",
    name: "Suite Admin",
    owns: "Configuration",
    opensOn: "Data sources, agent tiers, audit"
  }
];

const PERSONA_SEPARATION_NOTE = {
  text: "Enforce commercial–medical separation on every persona. A commercial persona attempting to open a medical insight gets a firewall response with no override path.",
  confidence: "V"
};

function renderPersonaCards() {
  return PERSONAS.map((p) => `
    <label class="persona-card">
      <input type="radio" name="persona" value="${p.id}" required>
      <span class="persona-radio" aria-hidden="true"></span>
      <span class="persona-name">${p.name}</span>
      <span class="persona-field"><span class="persona-field-label">Owns</span> ${p.owns}</span>
      <span class="persona-field"><span class="persona-field-label">Opens on</span> ${p.opensOn}</span>
    </label>`).join("");
}

// ---------------------------------------------------------------------------
// Commercial Growth OS (/commercial) — reused render helpers
// ---------------------------------------------------------------------------

function renderStepChipList(items, confidence) {
  return `<ul class="chip-list">${items.map((i) => `<li class="chip"><span class="chip-dot" aria-hidden="true"></span>${i}</li>`).join("")}</ul> ${confidenceTag(confidence)}`;
}

function renderCommercialStep(step) {
  return `
    <div class="cstep" style="--step-color: var(${step.colorVar})">
      <div class="cstep-head">
        <span class="cstep-number">${step.number}</span>
        <h2 class="cstep-name">${step.name}</h2>
      </div>
      <p class="cstep-description">${step.description.text} ${confidenceTag(step.description.confidence)}</p>

      <div class="cstep-block">
        <h3>${step.verified.label}</h3>
        ${renderStepChipList(step.verified.items, step.verified.confidence)}
      </div>

      ${step.conceptNames ? `
        <div class="cstep-block cstep-concept">
          <h3>Concept slide name</h3>
          <ul class="chip-list">
            ${step.conceptNames.map((c) => `<li class="chip chip-flag">${c.name} ${confidenceTag(c.confidence)}</li>`).join("")}
          </ul>
        </div>` : ""}

      <div class="cstep-block">
        <h3>Impact claimed</h3>
        <p>${step.impact.text} ${confidenceTag(step.impact.confidence)}</p>
      </div>

      ${step.proofPoints ? `
        <div class="cstep-block">
          <h3>Verified proof points</h3>
          ${renderStepChipList(step.proofPoints.items, step.proofPoints.confidence)}
        </div>` : ""}
    </div>`;
}

function renderCommercialChain() {
  return COMMERCIAL_STEPS.map(renderCommercialStep).join("");
}

// The thin band beneath the seven steps: the same six layers, reduced to a
// caption strip, so the commercial chain is visibly running on one foundation.
function renderFoundationBand() {
  return PHARMA_OS_LAYERS.map((layer) => `
    <div class="foundation-segment" style="--layer-color: var(${layer.colorVar})">
      <span class="foundation-number">L${layer.number}</span>
      <span class="foundation-name">${layer.name}</span>
    </div>`).join("");
}

// ---------------------------------------------------------------------------
// Cockpit (/os) — reused render helpers
// ---------------------------------------------------------------------------

function formatMonthLabel(ym) {
  const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [y, m] = ym.split("-");
  return `${MONTH_NAMES[parseInt(m, 10) - 1]} ${y}`;
}

// Agent autonomy tiers (BRAIN.md section 1, layer 4). No explicit marker in
// BRAIN.md; treated as [C] like the rest of the layer's operating framework.
const AUTONOMY_TIERS = [
  { tier: "T1", label: "Acts within guardrails" },
  { tier: "T2", label: "Queues for human approval" },
  { tier: "T3", label: "Advises only — cannot act without a named human" }
];
const AUTONOMY_TIERS_CONFIDENCE = "C";

function renderAutonomyLegend() {
  return `
    <div class="autonomy-legend-head"><h3>Agent autonomy tiers</h3>${confidenceTag(AUTONOMY_TIERS_CONFIDENCE)}</div>
    <ul class="autonomy-legend-list">
      ${AUTONOMY_TIERS.map((t) => `<li><span class="tier-badge tier-${t.tier.toLowerCase()}">${t.tier}</span> ${t.label}</li>`).join("")}
    </ul>`;
}

// A hand-rolled inline SVG line chart. No chart library, per CLAUDE.md.
function renderLineChart(values, opts) {
  opts = opts || {};
  const width = opts.width || 560;
  const height = opts.height || 160;
  const pad = 20;
  const color = opts.color || "var(--l4-agents)";
  const max = Math.max(...values) * 1.12;
  const stepX = (width - pad * 2) / (values.length - 1);
  const points = values.map((v, i) => {
    const x = pad + i * stepX;
    const y = height - pad - (v / max) * (height - pad * 2);
    return [x, y];
  });
  const pathD = points.map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");
  const baseY = (height - pad).toFixed(1);
  const areaD = `${pathD} L${points[points.length - 1][0].toFixed(1)},${baseY} L${points[0][0].toFixed(1)},${baseY} Z`;
  const dots = opts.dots === false ? "" : points.map((p) => `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="2.5" fill="${color}"></circle>`).join("");
  return `
    <svg viewBox="0 0 ${width} ${height}" class="line-chart" role="img" aria-label="${opts.ariaLabel || ""}">
      ${opts.area === false ? "" : `<path d="${areaD}" fill="${color}" opacity="0.12"></path>`}
      <path d="${pathD}" fill="none" stroke="${color}" stroke-width="2"></path>
      ${dots}
    </svg>`;
}

// A number that reveals its provenance (source system, freshness, human or
// agent origin) when clicked, in place — the same interaction language as
// the layer accordion on /.
function renderMetric(m) {
  return `
    <div class="metric">
      <button class="metric-toggle" aria-expanded="false" aria-controls="detail-${m.id}">
        <span class="metric-value">${m.value}</span>
        <span class="metric-label">${m.label}</span>
      </button>
      <div class="metric-detail" id="detail-${m.id}" hidden>
        ${m.detail ? `<p class="metric-detail-line">${m.detail}</p>` : ""}
        <p class="metric-provenance">Source: ${m.source} · As of ${m.asOf} · ${m.origin === "agent" ? "Agent-generated" : "Human-reported"}</p>
      </div>
    </div>`;
}

function renderRegionCard(region, values) {
  const latest = values[values.length - 1];
  const threeAgo = values[values.length - 4];
  const change = ((latest - threeAgo) / threeAgo) * 100;
  const direction = change >= 0 ? "up" : "down";
  const sign = change >= 0 ? "+" : "";
  return `
    <div class="region-card">
      <div class="region-card-head">
        <h3>${region.name}</h3>
        <span class="region-change region-change-${direction}">${sign}${change.toFixed(1)}%</span>
      </div>
      ${renderLineChart(values, { width: 220, height: 64, dots: false, color: direction === "up" ? "var(--trend-up)" : "var(--trend-down)", ariaLabel: `${region.name} brand TRx trend` })}
      <p class="region-latest">${latest.toLocaleString()} TRx · Jul 2026</p>
    </div>`;
}

function renderFindingLayers(layerNumbers) {
  return layerNumbers.map((n) => {
    const layer = PHARMA_OS_LAYERS.find((l) => l.number === n);
    return `<span class="finding-layer-chip" style="--chip-color: var(${layer.colorVar})">L${n} · ${layer.name}</span>`;
  }).join("");
}

function renderFindingAgents(agents) {
  return agents.map((a) => `<span class="finding-agent-chip">${a.name} <span class="tier-badge tier-${a.tier.toLowerCase()}">${a.tier}</span></span>`).join("");
}

function renderFindingCard(finding) {
  return `
    <article class="finding-card">
      <h3>${finding.title}</h3>
      <p class="finding-summary">${finding.summary}</p>
      <div class="finding-metrics">${finding.metrics.map(renderMetric).join("")}</div>
      ${finding.regions ? `
        <ul class="finding-regions">
          ${finding.regions.map((r) => `<li class="region-change region-change-${r.direction}">${r.name} ${r.change}</li>`).join("")}
        </ul>` : ""}
      <div class="finding-meta">
        <div class="finding-meta-row"><span class="finding-meta-label">OS layers involved</span><div class="finding-layers">${renderFindingLayers(finding.layers)}</div></div>
        <div class="finding-meta-row"><span class="finding-meta-label">Agents involved</span><div class="finding-agents">${renderFindingAgents(finding.agents)}</div></div>
        <div class="finding-meta-row"><span class="finding-meta-label">Owns the response</span><span class="finding-owner">${finding.owner}</span></div>
      </div>
    </article>`;
}
