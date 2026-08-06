# Pharma OS — interactive concept demonstration

## What this is

A clickable web application that explains Pharma OS and then demonstrates it, in four acts:

1. **`/`** — What Pharma OS is. The six-layer stack, governance wrapping every layer, business
   outcomes above, platform-agnostic foundation below. Click any layer to expand it in place.
2. **`/commercial`** — How it powers Commercial Growth OS. The seven-step commercial value chain,
   each step showing the Indegene platforms behind it and the impact claimed.
3. **`/login`** — Persona selection. Six roles.
4. **`/os`** — The working cockpit for that persona, with realistic data.

Audience: life sciences commercial and IT leadership. The person presenting is a solution
consultant, not a developer. It runs locally in a browser.

**All content comes from `BRAIN.md`.** Read it before writing any copy. Never invent a product
name, a capability claim, a metric or a client reference.

## The person building this

Non-technical, first project. Explain what you are doing in plain language. End every session with
the app running and something visible on screen. Never leave the project in a broken state — if a
change doesn't work, revert it and say so. Do not assume knowledge of terminals, package managers
or git.

## Stack — no build step, deliberately

This project is built by a non-technical person using Claude Code on the web, which runs in the
cloud and publishes through GitHub Pages. Anything requiring a local build (npm, Vite, bundlers)
cannot be previewed and must not be used.

- **Plain HTML, CSS and JavaScript.** No framework, no npm, no build step, no bundler.
- Four pages: `index.html`, `commercial.html`, `login.html`, `os.html`. Plain links between them.
- Shared styling in `styles.css`. Shared content in `content.js`. Cockpit data in `data.js`.
- Fonts loaded from Google Fonts via a `<link>` tag.
- Charts hand-rolled as inline SVG. No chart library.
- Persona choice passed between pages via the URL query string, not browser storage.

**The test:** every file must work when opened directly in a browser and when served from GitHub
Pages. If a change would break either, don't make it.

Decline all suggestions to add a framework, a build tool or a package manager. The constraint is
what keeps this buildable by its owner.

## Design direction

The concept slides already have a visual language. Bring it to life rather than replacing it.

**The stack ascends in colour** — cool at the data layer, warm at the decision layer. This is the
signature idea: you can tell how high up the OS you are from colour alone.

```css
--l1-data:      #1E88E5;  /* Data Foundation      */
--l2-context:   #2E9E6B;  /* Pharma Context       */
--l3-intel:     #0FA3A3;  /* Decision Intelligence*/
--l4-agents:    #2D5FD0;  /* Agent Network        */
--l5-workflow:  #7B4BC4;  /* Business Workflows   */
--l6-cockpit:   #A32BA8;  /* Decision Cockpits    */

--ink:        #0F172A;
--ink-muted:  #5A6577;
--ink-faint:  #94A0B3;
--paper:      #FFFFFF;
--canvas:     #F6F8FB;
--hairline:   #E3E8EF;
--gov:        #475569;   /* governance rail — deliberately neutral */
--flag:       #B45309;   /* unconfirmed [?] items                 */
```

Commercial value chain steps 01–07 run magenta → blue across the row, matching the concept slide.

**Type.** Display: Sora. Body: Inter. Data and IDs: JetBrains Mono with tabular numerals. Load from
Google Fonts with a single `<link>` tag. Display is used only for page titles, layer names and the
single largest number on a screen — nowhere else.

**Signature interaction.** On `/`, clicking a layer expands it *in place*, pushing the layers above
it upward, rather than opening a modal. The stack stays one object. The governance rail on the left
stays lit across all six layers at all times — that is the visual argument that governance is not a
stage you pass through.

**Restraint.** No gradients except the two specified. No drop shadows beyond a single hairline
border. No animation except the layer expansion and hover states. Respect
`prefers-reduced-motion`. The failure mode is drifting toward a generic SaaS dashboard one small
decision at a time.

**Quality floor.** Keyboard navigable. Visible focus rings. Works at 1280px, which is the
presentation laptop. Mobile is not required.

## Non-negotiables

1. **Content comes from BRAIN.md.** If it isn't there, ask — don't invent.
2. **Confidence is visible.** `[V]` renders plainly. `[C]` renders as "concept". `[?]` renders with
   an amber marker reading "pending confirmation". Never hide a `[?]`.
3. **Synthetic data only.** No real HCPs, accounts, payers, patients or clients. A discreet
   "Synthetic demonstration data" mark sits in the footer of every screen.
4. **Commercial–medical separation is enforced in the UI**, with no override path.
5. **No client names anywhere.** Masked archetypes only.

## Structure

```
pharma-os/
  BRAIN.md          <- all content, all claims
  CLAUDE.md         <- you are here
  SETUP.md          <- how the owner runs and previews this
  BUILD_ORDER.md    <- what to build, in order
  index.html        <- Act 1, the six-layer stack
  commercial.html   <- Act 2, Commercial Growth OS
  login.html        <- Act 3, personas
  os.html           <- Act 4, the cockpit
  styles.css        <- all styling, one file
  content.js        <- BRAIN content as data
  data.js           <- synthetic cockpit data
```

## Conventions

- Keep each page under about 400 lines of markup. Move repeated blocks into `content.js` and render
  them with small JavaScript functions.
- Every rendered claim carries its confidence marker from `content.js`.
- No `localStorage`. No network calls at runtime.
- Work on one branch per step and open a pull request, so the owner can merge and preview.
- After every change, confirm all four pages still open without errors.
