# SETUP — read this first

Everything you need to do before building, in order. No technical knowledge assumed. Roughly
20 minutes.

You will not install anything on your computer. All the work happens in your web browser.

---

## Part 1 — Put the files on GitHub (10 minutes)

Claude Code on the web reads and writes files stored in a GitHub repository. A repository is just a
folder that lives online. You need one.

**1. Get a GitHub account.**
Go to **github.com** and sign up if you don't already have one. Free is fine.

**2. Make the repository.**
Go to **github.com/new**.
- Repository name: `pharma-os`
- Choose **Public**. This matters — the free preview service only works on public repositories. There
  is nothing confidential in these files, but see the warning at the bottom of this page.
- Tick **Add a README file**.
- Click **Create repository**.

**3. Upload the four files.**
On your new repository page, click **Add file** → **Upload files**.
Drag in all four: `BRAIN.md`, `CLAUDE.md`, `BUILD_ORDER.md`, `SETUP.md`.
Scroll down and click **Commit changes**.

You should now see all four files listed. That's your project.

---

## Part 2 — Turn on the preview (3 minutes)

This gives you a web address where you can see what you've built.

In your repository, click **Settings** (along the top), then **Pages** (in the left sidebar).

Under "Build and deployment":
- Source: **Deploy from a branch**
- Branch: **main**, folder: **/ (root)**
- Click **Save**

Your address will be:

```
https://YOUR-USERNAME.github.io/pharma-os/
```

It will show an error page right now. That's expected — there's nothing to show until Step 1 is
built. Bookmark it.

---

## Part 3 — Connect Claude Code (2 minutes)

Go to **claude.ai/code**.

Follow the prompts to connect your GitHub account. When asked which repositories Claude may access,
choose `pharma-os`.

When it offers to create an environment, **keep the default settings**. The default has the network
access this project needs.

Then select `pharma-os` as the repository for your first task.

---

## Part 4 — Build Step 1 (5 minutes of your time)

Open `BUILD_ORDER.md`, copy the Step 1 prompt exactly, and paste it into Claude Code.

Then leave it alone. It works in the cloud, so you can close the tab and come back.

When it finishes, it will have created a **pull request** — a proposed set of changes waiting for
your approval.

**To approve it:**
1. Go to your repository and click the **Pull requests** tab.
2. Click the open request.
3. Click **Merge pull request**, then **Confirm merge**.

Wait about a minute, then open your Pages address. You should see six coloured blocks stacked up
the page.

That's Step 1 done. Repeat for Steps 2 through 7.

---

## The loop, once you're going

```
paste the next prompt  →  wait  →  merge the pull request  →  refresh your page  →  look at it
```

That's the whole job. Seven times.

---

## If something goes wrong

**The page shows an error, or looks broken.**
Paste this into Claude Code:
> The page at my GitHub Pages URL is broken. Explain in plain English what's wrong, fix it, and
> confirm all pages open with no console errors.

**Claude Code suggests installing something.**
Say no:
> CLAUDE.md requires plain HTML, CSS and JavaScript with no build step, because I can only preview
> through GitHub Pages. Please do it without adding any dependencies.

**You don't like how it looks.**
Be specific. "The layers feel cramped and I can't tell which one I clicked" gets a good result.
"Make it look better" doesn't. Screenshots help — you can paste them straight into Claude Code.

**It invented a product name or a statistic.**
Paste this:
> That content isn't in BRAIN.md. Remove it and use only what BRAIN.md contains, with the right
> confidence marker.

---

## Two things to be careful about

**The repository is public.** Anyone with the address can read it. Everything in these files is
already safe — no client names, no confidential material, and all case evidence is masked. But
don't add real client data, contracts, pricing, or internal decks to this repository. If you later
need it private, GitHub Pages on private repositories requires a paid plan.

**The demo data is synthetic.** The fictional brand, company and numbers exist to make the cockpit
feel real. Say so out loud when you present. Nobody minds synthetic data in a concept
demonstration; people mind very much when they find out afterwards.
