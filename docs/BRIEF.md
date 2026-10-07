# FOX & FOUND

Game Concept Brief

(Avery, with ChatGPT and Muse — via the design-lab thread)

---

## Core concept

Fox & Found is a finite fox-rescue management game about running a small wildlife rehabilitation centre with honesty, competence, and care.

The player begins with a modest but legitimate rescue property: one permanent resident, basic facilities, and room for a single uncomplicated case. Week by week, they take in authored individual foxes, provide appropriate care and rehabilitation, decide when the rescue has capacity for more, and work toward the best welfare outcome for every animal.

The campaign is finite, with a real ending and optional post-win play. There is no prestige-reset treadmill and no manipulative real-world waiting. Campaign length is determined by authored content, not stretched to hit an arbitrary runtime.

At its heart, Fox & Found is not really about building a bigger rescue. It is about knowing when to hold on, when to let go, and when to admit someone else can do better.

---

## The emotional thesis

Most management games reward attachment and collection. Fox & Found inverts the whole emotional economy.

The win condition is a fox that wants nothing to do with you.

A successful release means the animal is healthy, wild, and gone — ideally without so much as a thank-you. A successful referral means you recognized your own limits and got the fox to someone better equipped. A successful sanctuary placement means an unreleasable animal gets a good life in care, measured in small observable victories rather than a countdown to release.

The game's happiest moments look like absence. Its proudest moments look like humility.

---

## Tone

The game should balance:

* clinical warmth — case records read like a real rehab file: precise, never cutesy about medical facts
* dry humour — mostly through Harley, who is funny in a way that never undercuts sincerity
* genuine educational curiosity — real conditions, real timelines, real wildlife medicine
* emotional sincerity — grief and joy are both allowed to land

It should never become grim, preachy, or cynical. The game teaches through cases, not lectures.

The game is not specifically a children's game, but older children should be able to play and understand it. There should be no graphic suffering, and the game's two deaths are handled with deliberate care (see below).

Failure should feel like an organizational setback, never a punishment inflicted on the animals.

---

## Harley

Harley (they/them) is the rescue's animal-care and rehabilitation specialist, the player's main coworker, and the game's emotional centre.

* Nonbinary, bisexual. Wears a small bisexual pride pin as an ordinary part of their outfit. Their identity is represented naturally, never as a gimmick.
* Has cared for Loki since he was a kit.
* The expert voice of the game: dry, lowercase, texting-style. Expertise is delivered through character, never through a hints panel.
* Recommends pairings for cohabitation; the player approves. Ignoring Harley's advice has consequences — "pride is not a treatment plan" is a lesson, not just a saying.
* Carries the game's two hardest moments: Harley has messages for both deaths.

Harley is named for and inspired by Avery's best friend, the way the shark game's Sarah is named for hers.

---

## Loki — FOX-001

Loki is the permanent tutorial resident: a red fox (*Vulpes vulpes*), clever, mischievous, appropriately chaotic, already named by Harley before play begins. Human habituation is the provisional reason he cannot be released.

Loki teaches sanctuary care, enrichment, records, and enclosure management — and, most importantly, the idea that permanent sanctuary placement is a successful welfare outcome, not a failed release.

Loki is never transferred. If the rescue collapses, Harley personally ensures his continued care.

---

## The foxes

The campaign is built around approximately **50 hand-authored fox cases**. Foxes are individual characters with stable rescue IDs, authored intake stories, rehabilitation needs, personality direction, and possible outcomes — never procedurally generated animals.

Case order is partially randomized from curated pools (gated by progression stage and season), with fixed milestone cases at key points. Loki is always FOX-001; FOX-002 is the fixed first intake.

### The opening five

* **FOX-002** — first rehabilitation and release. Young female sideswiped by a vehicle; suspected fracture turns out to be soft-tissue injury. She hates the staff, which is an excellent sign. Teaches intake, assessment, camera observation, naming, and that human avoidance is a good sign.
* **FOX-003** — diagnosis before assumption. Older male with patchy hair loss; demodectic mange, not the contagious sarcoptic kind. Teaches that "mange" is not a complete diagnosis. Coat regrowth is visible progress.
* **FOX-004** — first responsible referral. Subadult female with sarcoptic mange; the rescue lacks infectious-disease isolation, so the correct action is referral. Partner updates continue through her treatment and release. Teaches that referral is a successful welfare decision.
* **FOX-005** — capacity planning. Subadult male entangled in garden netting; arrives while the only rehab run may still be occupied. Teaches that an empty intake room is not the same as capacity for a whole case.

### Case kinds

Every case is one of three kinds: **release case** (rehabilitation arc), **permanent resident** (unreleasable; wellbeing arc), or **referral case** (beyond current capability; partner-update chain continues the story). Deliberately authored transitions between kinds are allowed — never as surprise punishment.

### Milestone tracks

* **Rehabilitation milestones** are release-directed: ordered steps from intake to release assessment, each with observations and a player decision.
* **Wellbeing milestones** are for permanent residents: quality-of-life markers with no release endpoint — first den dug, first cached meal, settling into routine. Progress is a good life in care, not a countdown.

One hard rule: wellbeing milestones must never reward tameness. Becoming comfortable with humans is an accommodation for the unreleasable, never a goal.

### The pet fox

A planned permanent resident: a surrendered pet fox bred for pelt colour (silver morph), unreleasable because of human habituation and because it never learned to live as a wild fox. The mirror image of FOX-002's arc — she must relearn to fear humans; this fox never had wildness to return to. Its lesson: raising a wild animal as a pet causes harm even with love. It justifies visual variation within reds without turning the roster into a rainbow checklist, and motivates the long-term sanctuary housing upgrade.

### Intake seeds

Sixty real-world-grounded intake scenarios (vehicle trauma, mange, orphaned kits, fur-farm rescues, rodenticide poisoning, and more) are catalogued in `docs/INTAKE-SEEDS.md` on the design-lab branch as raw material for the remaining cases.

---

## Core gameplay loop

One turn is one in-game week. Routine daily care happens in the background; the player makes meaningful weekly decisions, not repetitive clicks.

**Review foxes → weekly care decisions → assess capacity → open for intake → receive authored case → accept or refer → rehabilitate or transfer → partner updates → welfare outcome → professional standing → funding → upgrades → greater capability → repeat**

The interface has five tabs, introduced by a welcome screen before Week 1:

* **Overview** — Harley's briefing, alerts, week summary, priorities
* **Foxes** — residents, active cases, care plans, milestones, observations
* **Intake** — open/close intake, review and accept or refer incoming cases
* **Facilities** — capacity, supplies, equipment, upgrades
* **Records** — released, transferred, referred, and sanctuary outcomes plus partner updates

Funds, week/season, professional standing, and intake status stay visible outside the tabs.

### Weekly structure

Each week opens with Harley's briefing: observations, milestones, partner updates, supply warnings, grant notices, seasonal changes, intake calls. Fox rounds follow — enrichment choices, camera observations, feeding adjustments, reassessments, stage moves, release prep, or the deliberate choice to leave a fox undisturbed. Not every fox needs a decision every week.

### Intake and referral

The player deliberately marks the rescue ready for another case. A partner organization calls with a specific authored case; the player accepts or refers. Referral is not failure — referred foxes stay in the rescue network's history and generate authored partner updates.

Accepted foxes may later be voluntarily transferred to a qualified partner. A responsible voluntary transfer does **not** reduce Professional Standing. Only organizational collapse carries consequences — and the consequence is for letting the rescue become unstable, not for moving animals to safety.

### Capacity is case flow

Capacity is not the number of empty rooms. Taking a case means having somewhere to assess it now, somewhere for it to go after quarantine, a rehab space freeing up in time, and the supplies and capabilities for the whole stay.

---

## Welfare-first design

The ethics are load-bearing, not decorative. Every system is tested against the welfare razor:

> Does the optimal game strategy ever conflict with the best welfare decision?
> If yes, redesign the mechanic — don't just tell the player to behave ethically.

Locked principles:

* Welfare comes before collection, growth, or score.
* A successful release is a major success; permanent sanctuary placement and responsible referral are successes too.
* Failure affects the organization, not the animals. If the rescue can't guarantee safe care, intake closes and active cases transfer safely before welfare is compromised.
* Foxes are wild animals, not collectible pets.
* Cohabitation is companionship, never a capacity cheat: Harley-recommended pairings, compatibility assessed, large-enclosure requirement, real stress consequences for bad matches.

### The two-death rule

The finished game contains exactly two deaths, and neither happens at the player's facility:

1. An elderly fox dying of natural causes, late in the game — a natural death in care as a welfare success. (Possibly a fox the player already knows; undecided.)
2. A younger fox euthanized to prevent suffering from a terminal illness — explicitly **not** the player's decision. The partner facility's vets decide, off-screen.

Both occur at the sister sanctuary. Harley has messages for both. Otherwise, likely-fatal cases become referral/recognition cases: the skill tested is knowing when a fox is beyond you.

---

## Sanctuary life

Permanent and long-term residents live in a large naturalistic enclosure with bigger enrichment upgrades. Enrichment is their core loop — not a daily click chore, but periodic meaningful choices: choosing rotations, observing preferences, learning what each fox likes. Attentiveness to the individual is the mechanic.

Compatible residents may share the enclosure. Pairings are Harley-recommended and player-approved, with managed introductions and the ability to separate. Companionship is enrichment for the foxes, not a discount for the player.

---

## Economy and upgrades

One currency: **Funds**, for supplies, upgrades, and expansion. Operating support arrives roughly every four in-game weeks as a **funding floor** rather than a stackable payment — so the optimal strategy can never become "close intake and advance time forever."

The core balancing rule: normal responsible operation should be financially sustainable; growth should require planning. No "feed fox or buy fencing" dilemmas, no punishing debt spirals, no grinding trivial tasks for cash.

Upgrades unlock **capabilities, not stat boosts**. Every upgrade must answer: *what can Fox & Found safely do now that it could not safely do before?* If the answer is only "+10% efficiency," it gets reconsidered. Early horizontal choices include improved food storage, office/records (unlocking grants), a second rehab enclosure, and infectious-disease isolation — the last motivated by FOX-004's referral.

---

## Art direction

Real, properly licensed wildlife photography — no generative AI imagery, an explicit locked principle. Photographs represent fictional rescue cases and never describe the real photographed animals; every asset carries full attribution, licensing, and a fiction notice (`data/assets.json`, `docs/CREDITS.md`).

No "collect every colour fox": the roster stays realistic, with variation *within* reds justified narratively (the pet fox's bred colour morph, natural coat variation).

---

## Naming

Accepted foxes arrive under their rescue ID. The player may name them; if they skip, Harley picks a suitable unused name from a curated pool (`data/names.json`, 121 names with trait tags matched to the fox's personality and appearance). Loki is the fixed exception — named by Harley before play.

---

## Technical scope

Browser game, static hosting (GitHub Pages), no backend. HTML/CSS/JS with data-driven content: fox cases, names, and asset manifests live in JSON (`data/foxes.json`, `data/names.json`, `data/assets.json`), so authoring fifty cases is writing data, not code.

A playable vertical slice of the opening loop exists in `prototype/` (welcome screen, five tabs, Loki, FOX-002's intake through release, naming, transfer, records).

---

## Collaboration

* **Avery** — creative direction, final say on everything. Doing the writing.
* **ChatGPT** — main build collaborator; reviews and drafts via the design-lab thread.
* **Muse** — design experiments on branches, research, review.

The `design-lab` branch (draft PR #2, never merged) is the permanent shared sketchbook. Finished work graduates to `main` via its own pull request. The case-authoring template (`docs/CASE-TEMPLATE.md`) is canon on main.

---

## Open questions

* Which two cases are the deaths — is the elderly fox a fox the player already knows?
* What does the endgame look like? (The campaign has a real ending; its shape will shape every system upstream.)
* Full economy balancing — the numbers are still prototype values.
* The remaining ~45 cases, their order, and the partner-update chains.
* Photo pipeline for fifty licensed fox portraits.

---

## TL;DR

Fox & Found is a finite fox-rescue management game where the win condition is a fox that wants nothing to do with you. You run the rescue week by week — taking in hand-authored cases, rehabilitating the releasable, giving lifers a good life in care, and referring out whatever you're not equipped for — while Harley, your dry-witted rehab specialist, keeps you honest. Referral and transfer are successes, failure lands on the organization instead of the animals, and the whole game is engineered so the ethical choice is never the losing one. Real fox photography, no AI art, ~50 individual foxes, one real ending.
