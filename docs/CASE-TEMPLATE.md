# Fox & Found — Case-Authoring Template

How to author one fox case, from intake story to final outcome. Every fox in
`data/foxes.json` should be built from this template so the full roster stays
consistent in structure, voice, and welfare philosophy.

## The one rule

Every case has one clear primary design purpose. Write it down as
`designPurpose` before writing anything else.

- FOX-002's primary purpose is teaching intake and assessment; it also
  carries secondary beats (positive human avoidance, naming, the release
  structure).

Secondary educational or emotional beats are allowed, but they must be
compatible with the primary purpose — never undercutting it. A case whose
primary lesson is "referral is success" must not carry a secondary beat
that makes referral feel like failure.

If you cannot name the primary lesson, the case is not ready to author.

## The welfare razor

Test every mechanic and case against this question:

> Does the optimal game strategy ever conflict with the best welfare decision?

If yes, redesign the mechanic. Do not merely tell the player to behave
ethically while rewarding them for doing otherwise.

(Proposed by ChatGPT in the design-lab thread.)

## Case kinds

Pick one per case:

1. **Release case** — release-directed rehabilitation arc. Uses
   rehabilitation milestones.
2. **Permanent resident** — cannot be released safely. Uses wellbeing
   milestones. (Examples: Loki; the surrendered pet fox bred for pelt colour.)
3. **Referral case** — needs care beyond Fox & Found's current capabilities.
   The correct action is referral, and the authored partner-update chain
   continues the fox's story afterward. (Example: FOX-004.)

A case may change kinds mid-story (a rehab case becomes non-releasable) only
if authored deliberately — never as a surprise punishment.

## Required fields (`data/foxes.json`)

| Field | Notes |
| --- | --- |
| `id` | Stable rescue ID, `FOX-###`. Never reused, even after release. |
| `name` | `null` until named, or fixed (Loki was named by Harley before play). |
| `species` | Common + Latin, e.g. red fox (*Vulpes vulpes*). |
| `sex`, `ageClass` | e.g. female / young adult. |
| `playerCanRename` | Usually true. False only for fixed names (Loki). |
| `permanentResident` | True for sanctuary lifers. |
| `transferable` | False for Loki. True otherwise unless authored otherwise. |
| `releasePotential` | high / good / guarded / non-releasable. |
| `intake` | `reason`, `reportedConcern`, `assessment`. The gap between reported concern and assessment findings is where the teaching lives (FOX-002: suspected fracture → soft-tissue injury). |
| `appearance` | Distinctive, observable traits. Coat, markings, injuries that persist (FOX-003's notched ear). |
| `temperament` / `personality` | Direction, not a stat block. How the fox behaves, in words. |
| `generalCondition`, `prognosis` | Honest medical picture, realistic timelines. |
| `requiredCapabilities` | Every entry must exist in `docs/CAPABILITIES.md`. This is what makes upgrades meaningful rather than stat boosts. |
| `expectedDurationWeeks` | Realistic rehab length. Mark as tunable. |
| `milestones` | See milestone tracks below. |
| `partnerOutcomeDirection` | For referral/transfer cases: where the story goes next. |
| `designPurpose` | Required. One paragraph identifying the primary design purpose; compatible secondary beats allowed. |
| `image` | Path under `images/foxes/`, or `null` — never a generated placeholder. |

## Milestone tracks

Start each case on one track. A deliberately authored transition between
tracks is allowed — for example, a release-directed case whose fox becomes
permanently non-releasable shifts to wellbeing milestones. The transition
itself must be authored as part of the story: never a surprise punishment,
and never framed as player failure.

### Rehabilitation milestones (release-directed)

Ordered steps from intake to release. Each step:

- `title` — short, case-record voice ("Mobility improving")
- `body` — what is observed, clinical warmth
- `harley` — optional note in Harley's voice (dry, lowercase, texting-style)
- `action` — the player decision that advances the step ("Request reassessment")

Release is the normal endpoint of a release-directed arc: release assessment,
then release. But a responsible transfer to a qualified partner facility is
also a valid resolution — the case continues through authored partner
updates. Reference: the prototype's `rehabSteps` for FOX-002.

### Wellbeing milestones (permanent residents)

Quality-of-life markers with no release endpoint. Progress is a good life in
care, not a countdown. Examples:

- First proper den dug
- First cached meal
- Settles into a daily routine
- Chooses a favourite spot in the enclosure
- Responds to a preferred enrichment

Write them as small, observable victories. The player should feel each one.

One hard rule: wellbeing milestones must never reward tameness. Becoming
more comfortable with humans is not a welfare goal for sanctuary wildlife —
it is only ever an accommodation for animals that cannot be released.
A milestone like "accepts necessary health checks with minimal stress" is
case-specific, never generic, and must be framed as reducing the animal's
stress, never as the animal learning to like people.

## Writing guidance

- **Case-record voice:** clinical warmth, like a real rehab file. Precise,
  never cutesy about medical facts.
- **Welfare before collection.** Foxes are individuals, not entries.
- **Educational accuracy is the appeal.** Real conditions, real timelines.
  If unsure about a condition, research it before authoring.
- **Harley's voice:** dry, lowercase, texting-style. Expertise delivered
  through character, never through a hints panel.
- **Naming:** the player names first. If they skip, Harley picks from
  `data/names.json` using the trait tags — keep tags honest to the fox.
  Never reuse a name (case-insensitive check).
- **Failure affects the organization, not the animals.** Author setbacks
  accordingly.
- **No real-world waiting, no prestige treadmill.** The campaign is finite;
  every case serves it.

## Photo & licensing checklist

Real wildlife photography only. **No generative AI imagery** — locked
principle for this game.

- [ ] Source from Wikimedia Commons or equivalent; license must allow reuse
      (CC BY, CC BY-SA, and similar).
- [ ] Record in `data/assets.json`, following the existing entry shape:
      file, title, creator, source page, original source, license name + URL,
      crop/changes info.
- [ ] Add a `docs/CREDITS.md` entry with full attribution.
- [ ] Include the fiction notice: the photograph shows a real fox; the
      character and rescue history are fictional.
- [ ] Prototype may use a lower-resolution copy; replace with the
      full-resolution file before release, keeping the filename.

## Worked sketch: permanent resident (illustrative, not canon)

A surrendered pet fox, bred for pelt colour (silver morph). Human-habituated
and never learned to live as a wild fox — the mirror image of FOX-002's arc.

- **Lesson:** raising a wild animal as a pet causes harm even with love.
- **Track:** wellbeing milestones (first den, first cached meal, routine).
- **Mechanical role:** motivates the long-term sanctuary housing upgrade.
- **Pairing note:** Loki is wild-born and habituated; this fox never knew
  the wild at all. Two different answers to "not every fox leaves."

## Pre-merge checklist

- [ ] `designPurpose` written — one paragraph, one primary lesson
      (compatible secondary beats allowed)
- [ ] Milestone track chosen; any track transition authored deliberately
- [ ] All `requiredCapabilities` exist in `docs/CAPABILITIES.md`
- [ ] Naming handled (player / Harley / fixed)
- [ ] Photo licensed, credited, in `assets.json` + `CREDITS.md`,
      fiction notice present
- [ ] Harley notes drafted in voice
- [ ] Intake story has a reported-concern vs. assessment gap (where it fits)
