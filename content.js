// content.js — Pharma OS content.
// Commercial content is sourced from BRAIN.md. Medical content is sourced from
// the Indegene Medical Brain (evidence-graded, A-D, with a masked source
// register). Clinical content is sourced from the Indegene Clinical Brain —
// a thinner, structural-only draft (its own closing note says a full,
// evidence-verified Clinical Brain still needs to be built from more source
// material), so treat Clinical detail as the least mature of the three.
// Also holds small render helpers shared across pages, so each page's own
// script stays a thin layer of layout and event wiring.

// ---------------------------------------------------------------------------
// The six layers of the stack, numbered bottom to top. Each entry's colorVar
// points at a custom property defined in styles.css. "domains" holds the
// commercial / medical / clinical variants of "why it matters" and "what's
// inside it" — the three tabs each layer block switches between.
// ---------------------------------------------------------------------------

const PHARMA_OS_LAYERS = [
  {
    number: 1,
    name: "Data Foundation",
    tagline: "Trusted, governed and interoperable enterprise data.",
    colorVar: "--l1-data",
    headerChips: { items: ["Commercial", "Medical", "Clinical", "Safety", "Manufacturing", "External"] },
    flow: ["Connect", "Harmonise", "Govern", "Serve"],
    whatItDoes: "Connects to source systems, ingests, harmonises, standardises, enriches and serves reusable, governed data products. It turns disconnected data into a trusted foundation for analytics, AI, cockpits and workflow decisions. Produces the CDM → ARD → RRD progression: common data model, then analytics-ready datasets, then report-ready data.",
    domains: {
      commercial: {
        whyItMatters: "One trusted view of market, HCP, channel, access and patient signals lets commercial teams identify opportunities faster, improve engagement and resolve arguments about the numbers.",
        insideGroups: [
          { label: "Commercial data sources", items: ["Sales and demand", "Field engagement / CRM", "Patient and APLD", "Market access", "Digital and social", "Enterprise and finance", "Marketing automation", "Web, campaign and content metadata"] }
        ]
      },
      medical: {
        whyItMatters: "Medical Affairs decisions are only as good as the evidence behind them. Unifying literature, congress, MSL, medical information and RWE signals into one governed data model means insight generation and MSL engagement start from a trusted source, not a fragmented one.",
        insideGroups: [
          { label: "Medical data sources", items: ["Literature and publications", "Congress abstracts", "Labels", "Medical information inquiries and SRDs", "MSL notes and CRM comments", "RWE and claims data", "Congress and social listening"] }
        ]
      },
      clinical: {
        whyItMatters: "Trial data is scattered across EDC, CTMS, eTMF and safety systems. Connecting it into one governed foundation is what makes site, enrollment and risk intelligence possible downstream, instead of a status report after the fact.",
        insideGroups: [
          { label: "Clinical data sources", items: ["EDC", "CTMS", "eTMF", "IRT", "Safety", "RWD", "Genomics", "Imaging", "Wearables"] }
        ]
      }
    },
    sharedGroups: [
      { label: "Controls at this layer", items: ["Data quality rules", "Purpose-based access (RBAC)", "Consent and privacy", "De-identification", "Lineage and provenance", "Auditability", "Data residency", "GxP controls"] }
    ],
    indegeneAssets: [
      { name: "NEXT Data & Insight Platform / UDP", blurb: "Indegene's core data-platform accelerator for connecting enterprise sources, creating governed data products and enabling analytics, AI and reporting without a wholesale platform replacement." },
      { name: "Data Quality / Data Catalog Agent", blurb: "Automates data-quality monitoring, metadata discovery, cataloguing and issue triage so teams can find, trust and govern the data products they consume." },
      { name: "Medical 360 (Evidence Layer)", blurb: "Unifies literature, congress, MSL notes, CRM comments, medical information and RWE into one governed medical data model." },
      { name: "NPR Platform", blurb: "Indegene's clinical data and trial-intelligence platform, named as a strategic clinical priority." },
      { name: "Clinical Data Fabric", blurb: "A governed layer connecting EDC, CTMS, eTMF and safety systems into one clinical data foundation." }
    ]
  },
  {
    number: 2,
    name: "Pharma Context",
    tagline: "Domain context that gives data meaning. This is where Cortex sits.",
    colorVar: "--l2-context",
    headerChips: { items: ["HCP360", "Patient360", "Product360", "Brand360", "Trial360", "Evidence360"] },
    flow: ["Ontology", "Knowledge graph", "Reasoning", "Provenance"],
    whatItDoes: "Converts raw data into meaning through ontology, taxonomy, business glossary, knowledge graphs, business rules, content metadata and context history. Cortex is Indegene's enterprise GenAI platform, purpose-built for life sciences — a knowledge engineering and multi-agent orchestration platform with enterprise-grade governance. Its Knowledge Engineering Interface lets subject matter experts codify domain knowledge and build agents through a domain-friendly interface, separating domain knowledge from application development. Agents are LLM-agnostic.",
    domains: {
      commercial: {
        whyItMatters: { label: "Why this is the moat", text: "Anyone can build a data lake. The defensible asset is 25+ years of codified domain expertise expressed as ontologies and knowledge graphs, where every validated decision, approved claim and workflow signal becomes reusable precedent for the next agent. It compounds in the client's favour." },
        insideGroups: [
          { label: "The 360s", items: ["HCP360", "Patient360", "Product360", "Brand360", "Trial360", "Evidence360"] }
        ]
      },
      medical: {
        whyItMatters: "Medical AI must cite sources, preserve provenance and abstain when evidence is thin. A knowledge graph that connects claim to evidence to asset to approval — and KOL to publication to congress to insight — is what makes that possible instead of aspirational.",
        insideGroups: [
          { label: "Cortex Knowledge Core components", items: ["Ontology (claim, evidence, source span, label, KOL, indication, approval, policy)", "Semantic knowledge graph", "Reasoning framework (source authority, abstention, evidence scoring)", "Signal connectors (literature, congress, CRM/MSL, MI, labels, RWE)", "Governance and provenance (citation chains, HITL gates, audit logs)"] }
        ]
      },
      clinical: {
        whyItMatters: "A shared knowledge graph of protocol, endpoint, eligibility and site knowledge is what lets site-selection and risk models reason across a trial, instead of just reporting on it after the fact.",
        insideGroups: [
          { label: "Clinical Knowledge Graph", items: ["Protocol knowledge", "Endpoint knowledge", "Eligibility criteria", "Investigator knowledge", "Site knowledge", "Scientific literature"] }
        ]
      }
    },
    honestyNote: "Internal materials describe parts of the Cortex architecture as a conceptual design view rather than a delivered system specification. The architecture and operating pattern are being proven through domain packs and client workflows — not every component is productised everywhere.",
    indegeneAssets: [
      { name: "Cortex", blurb: "Indegene's enterprise GenAI platform, purpose-built for life sciences — a knowledge engineering and multi-agent orchestration platform with enterprise-grade governance." },
      { name: "Cortex Knowledge Core", blurb: "The same Cortex platform, encoding Medical Affairs concepts — claim, evidence, source, label, KOL, indication, approval — as one reasoning graph agents can cite from." },
      { name: "Clinical Knowledge Graph", blurb: "Connects protocol, endpoint, eligibility, investigator and site knowledge so trial decisions can reason across them, not just report on them." }
    ]
  },
  {
    number: 3,
    name: "Decision Intelligence",
    tagline: "Reason, predict, optimise.",
    colorVar: "--l3-intel",
    headerChips: { items: ["Forecasting & planning", "Scoring & prioritisation", "Simulation & what-if", "Knowledge retrieval", "Decision optimisation", "NL reasoning"] },
    flow: ["Sense", "Interpret", "Recommend", "Act"],
    whatItDoes: "Turns context into recommendations. Forecasting and planning, scoring and prioritisation, simulation and what-if, knowledge retrieval, decision optimisation, natural language reasoning.",
    domains: {
      commercial: {
        whyItMatters: "This is where “what happened” becomes “what should we do”. Most organisations have reporting at this layer and call it intelligence.",
        insideGroups: [
          { label: "Commercial applications", items: ["Next Best Action", "Segmentation and targeting", "Channel and content affinity", "Propensity models", "Marketing mix modelling", "Channel effectiveness", "Budget optimisation", "Territory alignment", "IC and quota", "Sales force effectiveness"] }
        ]
      },
      medical: {
        whyItMatters: "Medical 360 unifies fragmented medical data into an insight-generation engine and action surfaces for leadership, Medical Directors, MSLs and field medical users — so evidence turns into a prioritised call, not just a dashboard.",
        insideGroups: [
          { label: "Medical applications", items: ["Insight prioritisation", "KOL influence and scoring", "Evidence gap mapping", "Scientific engagement recommendations", "Share of scientific voice", "NBA pull-through to compliant channels"] }
        ]
      },
      clinical: {
        whyItMatters: "Trial teams historically detect enrollment and monitoring risk after it shows up in a status report. This layer is built to surface it while there's still time to act.",
        insideGroups: [
          { label: "Clinical applications", items: ["Site selection", "Recruitment prediction", "Enrollment forecasting", "Monitoring prioritisation", "Protocol optimisation", "Risk detection"] }
        ]
      }
    },
    indegeneAssets: [
      { name: "NEXT Omnichannel Commercial Intelligence", blurb: "Channel and content affinity, engagement scoring and omnichannel planning inputs for commercial teams." },
      { name: "CEM — Channel Effectiveness Modeling", blurb: "Measures which channels and touchpoints actually move HCP behaviour, so investment follows what works." },
      { name: "NEXT Forecasting / ForeSight", blurb: "Demand and uptake forecasting for planning, budgeting and scenario analysis." },
      { name: "Customer 360 / HCP 360", blurb: "One unified view of an HCP's interactions, preferences and history across CRM, digital and field." },
      { name: "Invisage", blurb: "Digital interaction and affinity insight that strengthens audience understanding, channel planning and performance optimisation." },
      { name: "Medical Intelligence Engine", blurb: "Turns evidence signals into prioritised insights, KOL scoring and next-best-engagement recommendations for MSLs." },
      { name: "Trial Intelligence", blurb: "Site selection, recruitment prediction, enrollment forecasting and risk detection in one decision layer for study teams." }
    ]
  },
  {
    number: 4,
    name: "Agent Network",
    tagline: "Execute specialised work.",
    colorVar: "--l4-agents",
    headerChips: { items: ["Field", "Medical", "Content", "Regulatory", "Access", "Patient", "Safety", "Supply", "Compliance", "Finance", "IT Ops"] },
    flow: ["Prepare", "Draft", "Check", "Route"],
    whatItDoes: "Domain agents collaborate to complete tasks and drive outcomes. Agents are governed consumers of the layers below — permissioned, versioned, observable, rate-limited, and human-validated where the work is regulated. T1 acts within guardrails. T2 queues for human approval. T3 advises only and cannot act without a named human. Regulated agents are T3 by design.",
    domains: {
      commercial: {
        whyItMatters: { label: "Operating principles", text: "Start with workflow value, not text generation. Use pharma-specific context and guardrails. Keep humans in the loop for regulated, promotional, medical or high-impact decisions. Measure work outcomes — adoption, cycle time, review iterations, campaign velocity, field productivity — not token or activity volume. Separate commercial and medical data." },
        insideGroups: [
          { label: "Agent domains", items: ["Field", "Medical", "Content", "Regulatory", "Access", "Patient", "Safety", "Supply", "Compliance", "Finance", "IT Ops"] }
        ]
      },
      medical: {
        whyItMatters: "AI can prepare and check; qualified humans must decide and approve. Every medical agent here drafts, flags, synthesises or routes — none of them autonomously approves a regulated decision.",
        insideGroups: [
          { label: "Medical agent families", items: ["Literature surveillance agent", "Medical writing / SRD agent", "Scientific content authoring agent", "MLR content, review and process agents", "MedInfo virtual agent / MI copilot", "KOL influence graph / MSL copilot", "Congress insights agent", "Medical insights synthesis agent", "Evidence gap mapping agent", "Medical omnichannel orchestrator", "AI governance / assurance agent"] }
        ]
      },
      clinical: {
        whyItMatters: "Four agents, one rule: they draft, flag and rank — a trial team member still decides.",
        insideGroups: [
          { label: "Clinical agents", items: ["Protocol Agent — drafts, amendments, study design options", "Data Review Agent — outliers, missing data, protocol deviations", "Safety Agent — potential signals, SAEs, risk patterns", "Site Intelligence Agent — ranks sites, investigators, countries"] }
        ]
      }
    },
    indegeneAssets: [
      { name: "Research & Planning", blurb: "Prepares market, brand and channel inputs for planning cycles." },
      { name: "Concepting", blurb: "Generates early creative and campaign concepts for review." },
      { name: "Pre-MLR / Compliance / Claims", blurb: "Checks content against approved claims and compliance rules before it reaches formal MLR review." },
      { name: "Replicator / Localization", blurb: "Adapts approved content across markets and languages while preserving approved claims." },
      { name: "Content", blurb: "Assembles and manages content assets across the production pipeline." },
      { name: "Insights (Insight Genie)", blurb: "Turns commercial data into plain-language answers and recommended next steps." },
      { name: "Omni NBA", blurb: "Recommends the next best channel, message and timing for each HCP." },
      { name: "Field Intelligence (Rep Buddy / AI Coach)", blurb: "Prepares reps for calls and coaches on call quality using field data." },
      { name: "Planner", blurb: "Builds and sequences omnichannel journeys and campaign plans." },
      { name: "Personalization", blurb: "Tailors content and messaging to individual HCP preferences and context." },
      { name: "Commercial Knowledge Assistant", blurb: "Answers commercial team questions using the organisation's own governed knowledge base." },
      { name: "Literature surveillance agent", blurb: "Identifies new evidence, labels, congress abstracts and emerging scientific signals, with citations captured for SME validation." },
      { name: "Medical writing / SRD agent", blurb: "Drafts first-pass scientific content and standard responses from approved sources and templates, under human review." },
      { name: "Scientific content authoring agent", blurb: "Drafts slides, decks, infographics and messages grounded in the approved evidence and claim libraries." },
      { name: "MLR content, review and process agents", blurb: "Run claims validation, reference checks and label-alignment checks ahead of formal MLR review; humans remain the approvers." },
      { name: "MedInfo virtual agent", blurb: "Triages medical inquiries and drafts standard response content, with automatic handoff to a human for adverse events." },
      { name: "KOL influence graph / MSL copilot", blurb: "Gives MSLs account context, KOL influence, evidence updates and approved content ahead of a visit." },
      { name: "Congress insights agent", blurb: "Synthesises congress narratives, topic trends and share-of-scientific-voice into a prioritised readout." },
      { name: "Medical omnichannel orchestrator", blurb: "Supports journey design, consent checks and channel activation for compliant scientific engagement." },
      { name: "Protocol Agent", blurb: "Drafts protocol language, amendments and study design options for review." },
      { name: "Data Review Agent", blurb: "Flags outliers, missing data and protocol deviations in trial data." },
      { name: "Safety Agent", blurb: "Flags potential safety signals, serious adverse events and risk patterns for review." },
      { name: "Site Intelligence Agent", blurb: "Ranks sites, investigators and countries for study placement." }
    ]
  },
  {
    number: 5,
    name: "Business Workflows",
    tagline: "Orchestrate end-to-end execution.",
    colorVar: "--l5-workflow",
    headerChips: { items: ["Launch Management", "MLR & Content Review", "Field Engagement", "Patient Journey", "Trial Operations", "Access & Pricing", "Case & Adverse Event Management"] },
    flow: ["Plan", "Execute", "Review", "Adopt"],
    whatItDoes: "Turns decisions into coordinated, compliant work across functions. Consistent workflows enterprise-wide, adapted locally.",
    domains: {
      commercial: {
        whyItMatters: "The challenge is not making one good decision. It is making thousands every week, consistently, across markets and brands. Most firms optimise tasks; the operating layer re-engineers the end-to-end workflow.",
        insideGroups: [
          { label: "Workflow set", items: ["Launch Management", "MLR & Content Review", "Field Engagement", "Patient Journey", "Trial Operations", "Access & Pricing", "Case & Adverse Event Management"] }
        ]
      },
      medical: {
        whyItMatters: "Value is realised when intelligence is embedded into workflows and operating rhythms, not left as a one-off pilot.",
        insideGroups: [
          { label: "Medical operating models", items: ["Future-Fit Medical Content Hub", "Medical Omnichannel Operations Model", "Medical Intelligence OS", "Managed services + transformation pod"] }
        ]
      },
      clinical: {
        whyItMatters: "This is where Indegene differentiates: not a single clinical system, but the workflow that combines feasibility, site and regulatory readiness into one activation timeline.",
        insideGroups: [
          { label: "Clinical process products", items: ["Intelligent Study Start-up — feasibility, site, country, regulatory readiness → faster activation", "Intelligent Recruitment OS — RWD, site data, claims, patient matching → better enrollment", "Clinical Control Tower — CTMS, eTMF, EDC, safety → real-time study visibility"] }
        ]
      }
    },
    indegeneAssets: [
      { name: "NEXT MLR / MLR 2.0", blurb: "Automates pre-MLR readiness checks so content reaches formal review with fewer errors and faster cycles." },
      { name: "NEXT Campaign Collaboration / Collaborator", blurb: "Coordinates campaign planning and content collaboration across brand, agency and field teams." },
      { name: "NEXT Launch Planning", blurb: "Plans and sequences launch activities and readiness milestones." },
      { name: "Activation as a Service", blurb: "Transition, PMO, governance, training, playbooks and adoption support to operationalise a new workflow." },
      { name: "Future-Fit Medical Content Hub", blurb: "A dedicated centre of excellence combining human scientific leads, therapy-area pods and agentic drafting, reuse and review under human sign-off." },
      { name: "Medical SFMC / Consent Ops", blurb: "Runs compliant medical email and journey engagement — SFMC build, consent validation, QA, deployment and reporting." },
      { name: "Veeva Medical / MedInquiry Services", blurb: "Implementation and migration of Veeva's medical inquiry platform, from architecture through go-live and support." },
      { name: "Intelligent Study Start-up", blurb: "Combines feasibility, site selection, country selection and regulatory readiness into one activation timeline." },
      { name: "Intelligent Recruitment OS", blurb: "Combines real-world data, site data, claims data and patient matching to improve enrollment." },
      { name: "Clinical Control Tower", blurb: "Combines CTMS, eTMF, EDC and safety data into one real-time view of study status." }
    ]
  },
  {
    number: 6,
    name: "Decision Cockpits & Copilots",
    tagline: "Surface insights and guide decisions. Where accountability sits.",
    colorVar: "--l6-cockpit",
    headerChips: { items: ["CIO/CTO Control Tower", "CCO Commercial Cockpit", "CMO Marketing Cockpit", "CMO (Medical) Medical Cockpit", "Brand/GM Brand Cockpit", "Clinical Leader Trial Cockpit", "Market Access Cockpit", "Patient Services & Supply Cockpit"] },
    flow: ["Surface", "Decide", "Own"],
    whatItDoes: "Role-based experiences for every executive and function. The cockpit is where a human decides and owns the outcome — the OS does not remove accountability, it locates it.",
    domains: {
      commercial: {
        whyItMatters: { label: "Why this layer must exist", text: "An operating system with no visible place for a human is exactly what buyers have been burned by. The cockpit is the trust surface." },
        insideGroups: [
          { label: "Commercial cockpits", items: ["CIO/CTO Control Tower", "CCO Commercial Cockpit", "CMO Marketing Cockpit", "Brand/GM Brand Cockpit", "Market Access Cockpit", "Patient Services & Supply Cockpit"] }
        ]
      },
      medical: {
        whyItMatters: "Medical leadership needs its own surface — separate from commercial — where evidence and scientific judgment stay accountable to a named medical reviewer.",
        insideGroups: [
          { label: "Medical cockpits", items: ["CMO (Medical) Medical Cockpit"] }
        ]
      },
      clinical: {
        whyItMatters: "A trial only stays on track if a study lead has one place accountable for site, enrollment and risk decisions, not a dashboard nobody owns.",
        insideGroups: [
          { label: "Clinical cockpits", items: ["Clinical Leader Trial Cockpit"] }
        ]
      }
    },
    indegeneAssets: [
      { name: "Medical AI Control Tower", blurb: "Governs Medical AI agents in production — registry, observability, risk classification and human-in-the-loop gates." },
      { name: "Clinical AI Control Tower", blurb: "Governs protocol, statistical, safety and medical agents across a trial's AI footprint." }
    ],
    route: { href: "commercial.html", label: "See it in action — Commercial Growth OS →" }
  }
];

const DOMAIN_TABS = [
  { id: "commercial", label: "Commercial" },
  { id: "medical", label: "Medical" },
  { id: "clinical", label: "Clinical" }
];

// Governance — six controls that wrap all six layers at once.
const GOVERNANCE_CONTROLS = [
  { name: "AI Governance & Ethics", detail: "Agent permissions, versioned skills, observability, human validation, escalation paths" },
  { name: "Security & Privacy (Zero Trust)", detail: "Persona-based RBAC, sensitivity tiers, least privilege, consent filtering, de-identification" },
  { name: "Regulatory Compliance", detail: "MLR, GxP, HIPAA, GDPR, 21 CFR Part 11" },
  { name: "Data Quality & Lineage", detail: "Provenance, transformation records, quality scoring, source-of-truth definition" },
  { name: "Auditability & Observability", detail: "Audit logs, drift monitoring, decision traceability" },
  { name: "Responsible AI & Guardrails", detail: "Claims libraries, approved-module constraints, off-label refusal, frequency caps" }
];

const SEPARATION_RULE = {
  text: "Commercial and medical data stay separated. Commercial roles receive aggregate signals, never medical insight content. There is no override path."
};

// Business outcomes — the top band.
const BUSINESS_OUTCOMES = {
  items: ["Growth", "Faster Launches", "Operational Efficiency", "Better HCP Engagement", "Better Patient Outcomes", "Compliance Excellence"]
};

// Platform-agnostic band — the bottom band, four categories.
const PLATFORM_BANDS = [
  { category: "AI models", items: ["OpenAI", "Anthropic", "Google"] },
  { category: "Data platforms", items: ["Snowflake", "Databricks", "Palantir"], note: "Databricks is a gold / strategic partner" },
  { category: "Applications & platforms", items: ["Veeva", "Salesforce", "Adobe", "Medidata", "Oracle Clinical"] },
  { category: "Cloud", items: ["AWS", "Microsoft Azure", "Google Cloud"] }
];

const ALLIANCE_NOTE = {
  text: "Alliance posture is neutral and outcome-led: choose the ecosystem pattern that fits the client's architecture, maturity and compliance needs."
};

// The Commercial Growth OS — seven steps, magenta to blue.
const COMMERCIAL_INTRO = {
  text: "Pharma OS in action for commercial. One intelligence foundation, every commercial decision, measurable impact."
};

const COMMERCIAL_STEPS = [
  {
    number: "01",
    name: "Market Intelligence",
    colorVar: "--step-01",
    description: "Identify opportunities, prioritise markets, understand HCP, patient and competitor dynamics.",
    verified: { label: "Platforms", items: ["NEXT Social Listening", "NEXT Data & Insight Platform", "Disease landscaping, market sizing, primary research"] },
    conceptNames: ["Tandem™ — AI Opportunity Scout"],
    impact: "20–30% better opportunity identification; 15–25% improved forecast accuracy"
  },
  {
    number: "02",
    name: "Brand Strategy & Planning",
    colorVar: "--step-02",
    description: "Build winning strategies, forecast scenarios, optimise brand plans across markets.",
    verified: { label: "Platforms", items: ["NEXT Forecasting / ForeSight", "NEXT Launch Planning", "Digital Excellence Maturity Assessment / CS-EMA / OmniIQ"] },
    conceptNames: ["BrandIQ™ — AI Planning & Forecasting Scenario Simulator"],
    impact: "50–75% reduction in planning cycle; 30–40% faster scenario analysis"
  },
  {
    number: "03",
    name: "Content Supply Chain",
    colorVar: "--step-03",
    description: "Create, review, localise and approve compliant content at scale.",
    verified: { label: "Platforms", items: ["Content Super App", "NEXT Commercial Content Intelligence (NCCI)", "NEXT MLR / MLR 2.0", "Immersive Studio"] },
    conceptNames: ["Design Connect™"],
    impact: "75% faster content creation; 50% lower production cost; 3–5x faster MLR",
    proofPoints: ["65% savings delivered", "60% content repurpose", "56% increase in content reuse", "40% better speed-to-market", ">45% content reuse and 97% SLA adherence in a masked case"]
  },
  {
    number: "04",
    name: "Omnichannel Engagement",
    colorVar: "--step-04",
    description: "Deliver personalised engagement across channels and optimise field execution.",
    verified: { label: "Platforms", items: ["NEXT Omnichannel Commercial Intelligence", "Invisage", "Omni NBA Agent", "NEXT Campaign Collaboration / Collaborator", "CDP capability"] },
    impact: "2–3x more campaigns per year; 20–25% higher HCP engagement; 30–40% higher field productivity",
    proofPoints: ["45% engagement increase and 65% time-to-market reduction in a masked CDP case", "1M+ HCP profiles", "17+ personalised channels"]
  },
  {
    number: "05",
    name: "Performance Intelligence",
    colorVar: "--step-05",
    description: "Measure impact, optimise investment, drive continuous improvement.",
    verified: { label: "Platforms", items: ["CEM — Channel Effectiveness Modeling", "Customer 360 / HCP 360", "Insights Agent / Insight Genie", "Commercial Knowledge Assistant"] },
    impact: "20–30% higher marketing ROI; 15–25% improvement in brand performance",
    proofPoints: ["30–40% leaner operations", "75% faster insights", "20% NBA adoption increase", "20% decrease in speed-to-market for launch analytics"]
  },
  {
    number: "06",
    name: "Market Access & Affordability",
    colorVar: "--step-06",
    description: "Generate evidence, engage payers, optimise pricing and access strategies.",
    verified: { label: "Capability", items: ["Market access analytics", "Payer / formulary data integration", "HEOR when connected to commercialisation"] },
    conceptNames: ["HEOR & Pricing Intelligence — Value & Evidence Generator"],
    impact: "2–3x faster evidence generation; 20–30% faster access approvals"
  },
  {
    number: "07",
    name: "Patient Services & Adherence",
    colorVar: "--step-07",
    description: "Deliver personalised patient support, improve adherence and outcomes.",
    verified: { label: "Capability", items: ["PSP strategy and design", "Care coordinator / nurse navigator models", "Adherence SMS engagement", "Reimbursement and hub reporting", "Co-pay analysis", "Patient journey analytics translated to HCP-level intelligence"] },
    conceptNames: ["Patient Services AI — Adherence Intelligence Hub Optimization"],
    impact: "20–30% higher patient adherence; 15–25% lower patient support costs"
  }
];

// ---------------------------------------------------------------------------
// Render helpers — reused across pages
// ---------------------------------------------------------------------------

function renderChips(items) {
  return items.map((item) => `<span class="chip"><span class="chip-dot" aria-hidden="true"></span>${item}</span>`).join("");
}

function renderChipGroup(group) {
  const body = group.items
    ? `<ul class="chip-list">${group.items.map((i) => `<li class="chip"><span class="chip-dot" aria-hidden="true"></span>${i}</li>`).join("")}</ul>`
    : `<p>${group.text}</p>`;
  return `
    <div class="detail-subgroup">
      <div class="detail-subgroup-head"><h4>${group.label}</h4></div>
      ${body}
    </div>`;
}

// Assets render as hoverable/focusable buttons that reveal a short
// explanation of what each one does — no separate detail panel needed.
function renderAssetList(assets) {
  if (!assets || !assets.length) {
    return '<p class="detail-empty">No named accelerator for this layer yet.</p>';
  }
  return `<div class="asset-list">${assets.map((a) => `<button class="asset" type="button" data-tooltip="${a.blurb.replace(/"/g, "&quot;")}">${a.name}</button>`).join("")}</div>`;
}

function renderFlow(steps) {
  if (!steps || !steps.length) return "";
  return `<div class="flow-row">${steps.map((s, i) => (i === 0 ? "" : '<span class="flow-arrow" aria-hidden="true">→</span>') + `<span class="chip flow-chip">${s}</span>`).join("")}</div>`;
}

function renderLayerBlock(layer) {
  const n = layer.number;
  const domainIds = Object.keys(layer.domains);

  const tabs = domainIds.map((d, i) => `<button class="domain-tab${i === 0 ? " is-active" : ""}" type="button" data-domain="${d}" aria-pressed="${i === 0 ? "true" : "false"}">${DOMAIN_TABS.find((t) => t.id === d).label}</button>`).join("");

  const leaderPanels = domainIds.map((d, i) => {
    const why = layer.domains[d].whyItMatters;
    const label = (why && why.label) || `Why a ${DOMAIN_TABS.find((t) => t.id === d).label.toLowerCase()} leader should care`;
    const text = why && why.text ? why.text : why;
    return `<div class="leader-panel${i === 0 ? " is-active" : ""}" data-leader-panel="${d}">
      <h3>${label}</h3>
      <p>${text}</p>
    </div>`;
  }).join("");

  const sourceGroups = domainIds.map((d, i) => {
    const groups = layer.domains[d].insideGroups || [];
    return `<div class="source-group${i === 0 ? " is-active" : ""}" data-source-group="${d}">
      ${groups.map(renderChipGroup).join("")}
    </div>`;
  }).join("");

  const sharedGroups = (layer.sharedGroups || []).map(renderChipGroup).join("");

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
          <span class="layer-chevron" aria-hidden="true">⌄</span>
        </button>
      </h2>
      <div class="layer-detail-wrapper" id="layer-detail-${n}" role="region" aria-labelledby="layer-header-${n}">
        <div class="layer-detail-inner">
          <div class="detail-toolbar">
            <div class="domain-tabs" role="tablist" aria-label="Select a domain">${tabs}</div>
          </div>
          <div class="detail-grid">
            <div class="detail-block">
              <h3>What it does</h3>
              <p>${layer.whatItDoes}</p>
              ${renderFlow(layer.flow)}
              <div class="leader-panels">
                ${leaderPanels}
                <p class="detail-separation-note">Shared intelligence, protected domains. Data is available only for an approved purpose, role and jurisdiction. Commercial, medical and patient information is not freely combined.</p>
              </div>
            </div>
            <div class="detail-block">
              <h3>What's inside it</h3>
              ${sourceGroups}
              ${sharedGroups}
              ${layer.honestyNote ? `<p class="detail-honesty">${layer.honestyNote}</p>` : ""}
              <div class="asset-area">
                <h4>Indegene assets <span class="asset-hint">hover or focus to explore</span></h4>
                ${renderAssetList(layer.indegeneAssets)}
              </div>
            </div>
          </div>
          ${layer.route ? `<div class="detail-route"><a class="detail-route-link" href="${layer.route.href}">${layer.route.label}</a></div>` : ""}
        </div>
      </div>
    </div>`;
}

function renderOutcomesBand() {
  return `
    <div class="band-head"><h2>Business outcomes</h2></div>
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
          <div class="governance-name">${c.name}</div>
          <div class="governance-detail">${c.detail}</div>
        </li>`).join("")}
    </ul>
    <p class="governance-separation">${SEPARATION_RULE.text}</p>`;
}

function renderPlatformBand() {
  return PLATFORM_BANDS.map((band) => `
    <div class="platform-category">
      <div class="platform-category-head"><h3>${band.category}</h3></div>
      <ul class="chip-list">${band.items.map((i) => `<li class="chip"><span class="chip-dot" aria-hidden="true"></span>${i}</li>`).join("")}</ul>
      ${band.note ? `<p class="platform-note">${band.note}</p>` : ""}
    </div>`).join("") + `<p class="platform-alliance-note">${ALLIANCE_NOTE.text}</p>`;
}

// ---------------------------------------------------------------------------
// Personas (/login)
// ---------------------------------------------------------------------------

const PERSONAS = [
  { id: "cco", name: "Chief Commercial Officer", owns: "Commercial P&L", opensOn: "Portfolio share, spend efficiency, launch trajectory" },
  { id: "brand", name: "Brand / General Manager", owns: "One brand's P&L", opensOn: "Brand growth signals, competitive moves, access barriers" },
  { id: "omnichannel", name: "Omnichannel Lead", owns: "Journeys and channel mix", opensOn: "Campaign performance, content effectiveness, channel ROI" },
  { id: "field", name: "Field Excellence", owns: "Force productivity", opensOn: "Territory attainment, call quality, coaching signals" },
  { id: "access", name: "Market Access", owns: "Payer and affordability", opensOn: "Coverage, prior auth, time to therapy" },
  { id: "admin", name: "Suite Admin", owns: "Configuration", opensOn: "Data sources, agent tiers, audit" }
];

const PERSONA_SEPARATION_NOTE = {
  text: "Enforce commercial–medical separation on every persona. A commercial persona attempting to open a medical insight gets a firewall response with no override path."
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

function renderStepChipList(items) {
  return `<ul class="chip-list">${items.map((i) => `<li class="chip"><span class="chip-dot" aria-hidden="true"></span>${i}</li>`).join("")}</ul>`;
}

function renderCommercialStep(step) {
  return `
    <div class="cstep" style="--step-color: var(${step.colorVar})">
      <div class="cstep-head">
        <span class="cstep-number">${step.number}</span>
        <h2 class="cstep-name">${step.name}</h2>
      </div>
      <p class="cstep-description">${step.description}</p>

      <div class="cstep-block">
        <h3>${step.verified.label}</h3>
        ${renderStepChipList(step.verified.items)}
      </div>

      ${step.conceptNames ? `
        <div class="cstep-block cstep-concept">
          <h3>Also referenced as</h3>
          <ul class="chip-list">
            ${step.conceptNames.map((c) => `<li class="chip chip-flag">${c}</li>`).join("")}
          </ul>
        </div>` : ""}

      <div class="cstep-block">
        <h3>Impact</h3>
        <p>${step.impact}</p>
      </div>

      ${step.proofPoints ? `
        <div class="cstep-block">
          <h3>Proof points</h3>
          ${renderStepChipList(step.proofPoints)}
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

const AUTONOMY_TIERS = [
  { tier: "T1", label: "Acts within guardrails" },
  { tier: "T2", label: "Queues for human approval" },
  { tier: "T3", label: "Advises only — cannot act without a named human" }
];

function renderAutonomyLegend() {
  return `
    <div class="autonomy-legend-head"><h3>Agent autonomy tiers</h3></div>
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
