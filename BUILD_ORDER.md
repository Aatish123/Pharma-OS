# Build order

Seven steps. One per Claude Code session. Each ends with something visible on screen.

Paste the prompt exactly. Everything in a prompt is plain English — you don't need to understand
the technical words for it to work.

---

## Step 1 — Get it running

> Read CLAUDE.md and BRAIN.md fully before doing anything.
>
> Create `index.html`, `styles.css` and `content.js` — plain HTML, CSS and JavaScript with no build
> step, as CLAUDE.md requires. Load the three fonts from Google Fonts with a link tag. Put the
> colour tokens from CLAUDE.md into `styles.css` as CSS custom properties.
>
> Then build one thing only: `index.html` showing the six layers as stacked blocks, bottom to top,
> each with its number, name and one-line description from BRAIN.md section 1, in its own colour.
> No interaction yet.
>
> Put the layer content into `content.js` as a data structure so later steps can reuse it.
>
> Explain in plain English what each file does. Confirm `index.html` opens correctly with no
> console errors.

**Then:** merge the pull request, wait a minute, refresh your Pages URL. Six coloured blocks
stacked up the page — the skeleton of everything else.

---

## Step 2 — Make the stack the hero

> Add the rest of the Pharma OS diagram to `/`, using BRAIN.md sections 1–4 as the only source of
> content.
>
> Across the top: the six business outcomes.
> Down the left: the governance rail with its six controls, lit across all six layers at once.
> Across the bottom: the platform-agnostic band, four categories.
> Inside each layer block: the component icons and labels for that layer.
>
> Clicking a layer expands it in place — pushing the layers above it upward, not opening a popup.
> The expanded panel shows: what it does, what's inside it, why a commercial leader should care,
> and the Indegene assets at that layer. All from BRAIN.md.
>
> Add a confidence tag component: `[V]` plain, `[C]` as "concept", `[?]` amber, reading "pending
> confirmation".

**You'll see:** Act 1, finished. This is the screen you could show tomorrow.

---

## Step 3 — Commercial Growth OS

> Build `/commercial` from BRAIN.md section 5. Seven steps across the page, numbered 01 to 07,
> running magenta to blue. Each shows what it does, the verified Indegene platforms behind it, and
> the impact claimed.
>
> Where BRAIN.md marks a platform `[?]`, show it with the amber pending-confirmation marker
> alongside the verified alternatives. Do not hide it and do not promote it.
>
> Beneath the seven steps, show the six Pharma OS layers again as a thin band, so it's obvious the
> commercial chain runs on the same foundation.
>
> Add a route from the layer-6 cockpit block on `/` into this page.

**You'll see:** Act 2. The bridge from vision to domain.

---

## Step 4 — Personas

> Build `/login` from BRAIN.md section 6. Six persona cards, each showing what that person owns and
> what their cockpit opens on. Selecting one and continuing goes to `/os`.
>
> Pass the chosen persona to `os.html` through the URL, for example `os.html?persona=brand`. No
> browser storage.

**You'll see:** Act 3. Short screen, quick session.

---

## Step 5 — Cockpit data

> Create realistic synthetic data for the cockpit in `data.js`, for a fictional oncology brand
> in the US, fourteen months post-launch, with a fictional client company. About 1,800 HCPs, 240
> accounts, 48 territories, 24 months of history.
>
> Build it bottom-up so the numbers reconcile: HCP volumes sum to territory, territory sums to
> national. Prove it by printing the totals at all three levels and showing me they match. This
> matters — a client will add a column up.
>
> Keep `data.js` under about 1 MB. Store per-HCP detail for only about 40 spotlight HCPs and store
> the rest as territory and regional aggregates.
>
> Plant one finding that a summary number hides: national volume flat while share falls, because
> two regions grew and two declined.
>
> No real HCPs, accounts, payers, patients or clients.

**You'll see:** nothing on screen. This is plumbing, and it's the step that makes Act 4 credible.

---

## Step 6 — The cockpit

> Build `/os` as the Brand/GM cockpit, scoped to the persona chosen at login.
>
> Lead with the national trend, then the regional split that contradicts it. Then the findings,
> each showing which layers of the OS produced it, which agents were involved, and which function
> owns the response.
>
> Every number is clickable to reveal where it came from: which source system, how fresh, and
> whether a human or an agent produced it.
>
> Show the agent autonomy tiers from BRAIN.md section 1, layer 4 — T1 acts, T2 queues for approval,
> T3 advises only.

**You'll see:** Act 4. The whole story now runs end to end.

---

## Step 7 — Governance and polish

> Add three governance moments to `/os` that I can trigger during a demo, from BRAIN.md section 2:
> a send blocked by expired consent; an agent draft refused for drifting outside approved claims;
> and a commercial persona blocked from opening medical insight content with no override path.
>
> Then: add "As of" dates to every data surface, the synthetic-data mark to every footer, check
> keyboard navigation works, and check all four pages look right at 1280 pixels wide.

**You'll see:** something you can present without worrying.

---

## If something goes wrong

Paste this:

> Something isn't working. Explain in plain English what broke and why, fix it, and show me the app
> running again. If the fix is risky, undo the last change instead.

## If it starts looking generic

Paste this:

> This is drifting toward a standard dashboard look. Re-read the design direction in CLAUDE.md and
> bring it back — the ascending colour stack, the always-lit governance rail, restraint everywhere
> else.

## After every step

1. Claude Code opens a pull request. Open it and click **Merge pull request**, then **Confirm merge**.
2. Wait about a minute, then refresh your Pages URL.
3. Look at it before starting the next step.

## Rhythm

One step per sitting. After each, look at it and ask: would I show this to a client? If not, say
what feels wrong in plain English — Claude Code will fix it. Vague feedback like "make it look
better" works less well than "the layers feel cramped and I can't tell which one I clicked".
