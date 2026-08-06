# BRAIN.md — the knowledge layer

Every word of content in this application comes from this file. Claude Code must not invent
capability claims, product names, metrics or client references. If something is needed and isn't
here, stop and ask.

Sources: Indegene Commercial Brain (enterprise, 15 sources S1–S15), the Pharma OS concept slides,
and public Indegene material. Confidence is marked on every claim.

**Confidence key**
`[V]` verified in the Commercial Brain or public Indegene material.
`[C]` from the concept slides only — directionally agreed, not source-verified.
`[?]` unconfirmed — must be checked before any external showing. Render with a visible marker.

---

## 0. What Pharma OS is — the one-paragraph version

Pharma OS is the enterprise decision operating system for life sciences. It connects data,
context, intelligence, agents, workflows and human decision-making into one governed layer, so a
life sciences organisation can move from fragmented activity management to coordinated decisions
with measurable outcomes. It is platform-agnostic: it sits above whichever cloud, CRM, data
platform and content system the client already runs. `[V]`

**What it is not.** Not another AI tool. Not another analytics platform. Not a services catalogue.
The differentiator is the operating layer where pharma data becomes decisions, decisions become
workflows, and workflows create measurable business impact. `[V]`

---

## 1. The six layers

Layers are numbered bottom to top. Governance wraps all six — it is not a seventh layer.

### Layer 1 — Data Foundation
*Trusted, governed enterprise data.*

**What it does.** Connects to source systems, ingests, harmonises, standardises, enriches and
serves data as reusable governed products. Produces the CDM → ARD → RRD progression: common data
model, then analytics-ready datasets, then report-ready data. `[V]`

**Domains covered.** Commercial, Medical, Clinical, Safety, Manufacturing, External. `[C]`

**Commercial data sources.** Sales and demand, field engagement/CRM, patient and APLD, market
access, digital and social, enterprise and finance, marketing automation, web, campaign and content
metadata. `[V]`

**Controls at this layer.** Data quality rules, RBAC, consent capture, de-identification,
auditability, lineage. `[V]`

**Why a CCO should care.** Every downstream number is only as trustworthy as this layer. When
brand, field, access and content teams disagree about the truth, this is where the disagreement
starts. `[V]`

**Indegene assets.** NEXT Data & Insight Platform / Unified Data Platform (UDP) `[V]`;
Data Quality / Data Catalog Agent `[V]`.

---

### Layer 2 — Pharma Context
*Domain context that gives data meaning. This is where Cortex sits.*

**What it does.** Converts raw data into meaning through ontology, taxonomy, business glossary,
knowledge graphs, business rules, content metadata and context history. Holds the 360° context
objects the rest of the OS reasons over. `[V]`

**The 360s.** HCP360, Patient360, Product360, Brand360, Trial360, Evidence360. `[C]`

**Cortex.** Indegene's enterprise GenAI platform, purpose-built for life sciences — a knowledge
engineering and multi-agent orchestration platform with enterprise-grade governance. Its Knowledge
Engineering Interface lets subject matter experts codify domain knowledge and build agents through
a domain-friendly interface, separating domain knowledge from application development. Agents are
LLM-agnostic. Publicly launched February 2025. `[V]`

**Why this is the moat.** Anyone can build a data lake. The defensible asset is 25+ years of
codified domain expertise expressed as ontologies and knowledge graphs, where every validated
decision, approved claim and workflow signal becomes reusable precedent for the next agent. It
compounds in the client's favour. `[V]`

**Honesty note.** Internal materials describe parts of the Cortex architecture as a conceptual
design view rather than a delivered system specification. The claim to make is that the
architecture and operating pattern are being proven through domain packs and client workflows —
not that every component is productised everywhere. `[V]`

---

### Layer 3 — Decision Intelligence
*Reason, predict, optimise.*

**What it does.** Turns context into recommendations. Forecasting and planning, scoring and
prioritisation, simulation and what-if, knowledge retrieval, decision optimisation, natural
language reasoning. `[C]`

**Commercial applications.** Next Best Action, segmentation and targeting, channel and content
affinity, propensity models, marketing mix modelling, channel effectiveness, budget optimisation,
territory alignment, IC and quota, sales force effectiveness. `[V]`

**Why a CCO should care.** This is where "what happened" becomes "what should we do". Most
organisations have reporting at this layer and call it intelligence. `[V]`

**Indegene assets.** NEXT Omnichannel Commercial Intelligence `[V]`; CEM — Channel Effectiveness
Modeling `[V]`; NEXT Forecasting / ForeSight `[V]`; Customer 360 / HCP 360 `[V]`; Invisage `[V]`.

---

### Layer 4 — Agent Network
*Execute specialised work.*

**What it does.** Domain agents collaborate to complete tasks and drive outcomes. Agents are
governed consumers of the layers below — permissioned, versioned, observable, rate-limited, and
human-validated where the work is regulated. `[V]`

**Agent domains.** Field, Medical, Content, Regulatory, Access, Patient, Safety, Supply,
Compliance, Finance, IT Ops. `[C]`

**Verified commercial agents.** Research & Planning, Concepting, Pre-MLR / Compliance / Claims,
Replicator / Localization, Content, Insights (Insight Genie), Omni NBA, Field Intelligence
(Rep Buddy / AI Coach), Planner, Personalization, Data Quality / Data Catalog, Commercial
Knowledge Assistant. `[V]`

**Operating principles.** Start with workflow value, not text generation. Use pharma-specific
context and guardrails. Keep humans in the loop for regulated, promotional, medical or high-impact
decisions. Measure work outcomes — adoption, cycle time, review iterations, campaign velocity,
field productivity — not token or activity volume. Separate commercial and medical data. `[V]`

**Autonomy tiers.** T1 acts within guardrails. T2 queues for human approval. T3 advises only and
cannot act without a named human. Regulated agents (MLR, consent) are T3 by design.

---

### Layer 5 — Business Workflows
*Orchestrate end-to-end execution.*

**What it does.** Turns decisions into coordinated, compliant work across functions. Consistent
workflows enterprise-wide, adapted locally. `[C]`

**Workflow set.** Launch Management → MLR & Content Review → Field Engagement → Patient Journey →
Trial Operations → Access & Pricing → Case & Adverse Event Management. `[C]`

**Why a CCO should care.** The challenge is not making one good decision. It is making thousands
every week, consistently, across markets and brands. Most firms optimise tasks; the operating
layer re-engineers the end-to-end workflow. `[V]`

**Indegene assets.** NEXT MLR / MLR 2.0 `[V]`; NEXT Campaign Collaboration / Collaborator `[V]`;
NEXT Launch Planning `[V]`; Activation as a Service — transition, PMO, governance, training,
playbooks, adoption `[V]`.

---

### Layer 6 — Decision Cockpits & Copilots
*Surface insights and guide decisions. Where accountability sits.*

**What it does.** Role-based experiences for every executive and function. The cockpit is where a
human decides and owns the outcome — the OS does not remove accountability, it locates it. `[C]`

**Cockpits.** CIO/CTO Control Tower · CCO Commercial Cockpit · CMO Marketing Cockpit ·
CMO (Medical) Medical Cockpit · Brand/GM Brand Cockpit · Clinical Leader Trial Cockpit ·
Market Access Cockpit · Patient Services & Supply Cockpit. `[C]`

**Why this layer must exist.** An operating system with no visible place for a human is exactly
what buyers have been burned by. The cockpit is the trust surface.

---

## 2. Governance — wraps every layer

Six controls, present at all six layers, never a separate stage. `[C]` for the naming, `[V]` for
the underlying practice.

| Control | What it means in practice |
|---|---|
| AI Governance & Ethics | Agent permissions, versioned skills, observability, human validation, escalation paths |
| Security & Privacy (Zero Trust) | Persona-based RBAC, sensitivity tiers, least privilege, consent filtering, de-identification |
| Regulatory Compliance | MLR, GxP, HIPAA, GDPR, 21 CFR Part 11 |
| Data Quality & Lineage | Provenance, transformation records, quality scoring, source-of-truth definition |
| Auditability & Observability | Audit logs, drift monitoring, decision traceability |
| Responsible AI & Guardrails | Claims libraries, approved-module constraints, off-label refusal, frequency caps |

**The rule that earns the most credibility:** commercial and medical data stay separated. Commercial
roles receive aggregate signals, never medical insight content. There is no override path. `[V]`

---

## 3. Business outcomes — the top band

Growth · Faster Launches · Operational Efficiency · Better HCP Engagement · Better Patient
Outcomes · Compliance Excellence. `[C]`

---

## 4. Platform agnostic — the bottom band

| Category | Named |
|---|---|
| AI models | OpenAI, Anthropic, Google `[C]` |
| Data platforms | Snowflake, Databricks, Palantir `[C]`; Databricks is a gold/strategic partner `[V]` |
| Applications & platforms | Veeva, Salesforce, Adobe `[V]` |
| Cloud | AWS, Microsoft Azure, Google Cloud `[V]` |

Alliance posture is neutral and outcome-led: choose the ecosystem pattern that fits the client's
architecture, maturity and compliance needs. `[V]`

---

## 5. The Commercial Growth OS — seven steps

Pharma OS in action for commercial. One intelligence foundation, every commercial decision,
measurable impact. `[C]`

Platform mapping below uses **verified** Indegene assets. Where the concept slide named a product
that is not in the verified catalogue, both are shown and the unverified one is marked `[?]`.

### 01 · Market Intelligence
Identify opportunities, prioritise markets, understand HCP, patient and competitor dynamics.
**Verified platforms:** NEXT Social Listening `[V]` · NEXT Data & Insight Platform `[V]` ·
disease landscaping, market sizing, primary research `[V]`
**Concept slide names:** Tandem™ — AI Opportunity Scout `[?]`
**Impact claimed:** 20–30% better opportunity identification; 15–25% improved forecast accuracy `[C]`

### 02 · Brand Strategy & Planning
Build winning strategies, forecast scenarios, optimise brand plans across markets.
**Verified platforms:** NEXT Forecasting / ForeSight `[V]` · NEXT Launch Planning `[V]` ·
Digital Excellence Maturity Assessment / CS-EMA / OmniIQ `[V]`
**Concept slide names:** BrandIQ™ — AI Planning & Forecasting Scenario Simulator `[?]`
**Impact claimed:** 50–75% reduction in planning cycle; 30–40% faster scenario analysis `[C]`

### 03 · Content Supply Chain
Create, review, localise and approve compliant content at scale.
**Verified platforms:** Content Super App `[V]` · NEXT Commercial Content Intelligence (NCCI) `[V]` ·
NEXT MLR / MLR 2.0 `[V]` · Immersive Studio `[V]`
**Concept slide names:** Design Connect™ `[?]`
**Impact claimed:** 75% faster content creation; 50% lower production cost; 3–5x faster MLR `[C]`
**Verified proof points:** 65% savings delivered; 60% content repurpose; 56% increase in content
reuse; 40% better speed-to-market; >45% content reuse and 97% SLA adherence in a masked case `[V]`

### 04 · Omnichannel Engagement
Deliver personalised engagement across channels and optimise field execution.
**Verified platforms:** NEXT Omnichannel Commercial Intelligence `[V]` · Invisage `[V]` ·
Omni NBA Agent `[V]` · NEXT Campaign Collaboration / Collaborator `[V]` · CDP capability `[V]`
**Impact claimed:** 2–3x more campaigns per year; 20–25% higher HCP engagement;
30–40% higher field productivity `[C]`
**Verified proof points:** 45% engagement increase and 65% time-to-market reduction in a masked
CDP case; 1M+ HCP profiles; 17+ personalised channels `[V]`

### 05 · Performance Intelligence
Measure impact, optimise investment, drive continuous improvement.
**Verified platforms:** CEM — Channel Effectiveness Modeling `[V]` · Customer 360 / HCP 360 `[V]` ·
Insights Agent / Insight Genie `[V]` · Commercial Knowledge Assistant `[V]`
**Impact claimed:** 20–30% higher marketing ROI; 15–25% improvement in brand performance `[C]`
**Verified proof points:** 30–40% leaner operations; 75% faster insights; 20% NBA adoption
increase; 20% decrease in speed-to-market for launch analytics `[V]`

### 06 · Market Access & Affordability
Generate evidence, engage payers, optimise pricing and access strategies.
**Verified capability:** market access analytics, payer/formulary data integration, HEOR when
connected to commercialisation `[V]`
**Concept slide names:** HEOR & Pricing Intelligence — Value & Evidence Generator `[?]`
**Impact claimed:** 2–3x faster evidence generation; 20–30% faster access approvals `[C]`

### 07 · Patient Services & Adherence
Deliver personalised patient support, improve adherence and outcomes.
**Verified capability:** PSP strategy and design, care coordinator / nurse navigator models,
adherence SMS engagement, reimbursement and hub reporting, co-pay analysis, patient journey
analytics translated to HCP-level intelligence `[V]`
**Concept slide names:** Patient Services AI — Adherence Intelligence Hub Optimization `[?]`
**Impact claimed:** 20–30% higher patient adherence; 15–25% lower patient support costs `[C]`

---

## 6. Personas — the login

Each persona sees a different cockpit. Scope is enforced, not cosmetic.

| Persona | Owns | Opens on | Sees | Never sees |
|---|---|---|---|---|
| Chief Commercial Officer | Commercial P&L | Portfolio share, spend efficiency, launch trajectory | All brands, all regions, spend and ROI | Individual HCP identity |
| Brand / General Manager | One brand's P&L | Brand growth signals, competitive moves, access barriers | One brand, all regions | Other brands' financials |
| Omnichannel Lead | Journeys and channel mix | Campaign performance, content effectiveness, channel ROI | Journeys, assets, consent state | Field IC and quota |
| Field Excellence | Force productivity | Territory attainment, call quality, coaching signals | Territories, reps, call plans | Medical insight content |
| Market Access | Payer and affordability | Coverage, prior auth, time to therapy | Plans, formulary, access barriers | Rep compensation |
| Suite Admin | Configuration | Data sources, agent tiers, audit | Everything structural | Nothing restricted by policy |

**Enforce commercial–medical separation on every persona.** A commercial persona attempting to open
a medical insight gets a firewall response with no override path.

---

## 7. Differentiator bank — what to say when challenged

| Challenge | Response |
|---|---|
| "How is this different from generic AI?" | Pharma-native context, regulatory guardrails, life-sciences workflows, practitioner-level execution. Generic AI has horsepower; this has domain context and embedded execution. `[V]` |
| "The big SIs can do this." | They can modernise platforms. The differentiator is connecting the platform layer to pharma workflows, compliance, content, medical, patient and commercial execution. `[V]` |
| "We already have a CRM programme." | CRM is one execution surface inside a commercial-intelligence architecture that also includes data, decisioning, journeys, content, governance and measurement. `[V]` |
| "Why not a platform vendor?" | Platforms integrate strongly inside their own domain and weakly across domains. They solve local truth, not the cross-value-chain truth. `[V]` |
| "Prove it's not vapourware." | Show what is live, what is pilot, what is roadmap — and say so on screen. `[V]` |

---

## 8. Rules for using this file

1. **No invented metrics.** Every number rendered must carry `[V]` or `[C]` in this file, and the
   UI must show which.
2. **No client names.** All case evidence is masked: "a top-10 pharma", "a global pharma", "a US
   launch client".
3. **`[?]` items render with a visible marker** until confirmed. Do not quietly promote them.
4. **Maturity honesty.** Where a capability is conceptual, the UI says so. This is a feature.
5. **When content is missing, stop and ask.** Do not fill gaps with plausible-sounding capability
   claims — that is the single fastest way to lose a technical buyer.
