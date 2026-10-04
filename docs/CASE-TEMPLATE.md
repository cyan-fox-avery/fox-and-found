# Fox & Found — Case-Authoring Template

How to author one fox case, from intake story to final outcome. Every fox in
`data/foxes.json` should be built from this template so the full roster stays
consistent in structure, voice, and welfare philosophy.

## The one rule

Every case teaches exactly one thing. Write it down as `designPurpose`
before writing anything else.

- FOX-002 teaches intake, assessment, and that human avoidance is a good sign.
- FOX-003 teaches that "mange" is not a complete diagnosis.
- FOX-004 teaches that referral is a successful welfare decision.
- FOX-005 teaches that capacity is case flow, not empty rooms.

If you cannot name the lesson, the case is not ready to author.

## Case kinds

Pick one per case:

1. **Release case** — rehabilitation arc ending in release. Uses
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
| `designPurpose` | Required. One paragraph, one lesson. |
| `image` | Path under `images/foxes/`, or `null` — never a generated placeholder. |

## Milestone tracks

Pick one track per case. Never mix them in a single arc.

### Rehabilitation milestones (release-directed)

Ordered steps from intake to release. Each step:

- `title` — short, case-record voice ("Mobility improving")
- `body` — what is observed, clinical warmth
- `harley` — optional note in Harley's voice (dry, lowercase, texting-style)
- `action` — the player decision that advances the step ("Request reassessment")

The arc must end in a release assessment and release. Reference: the
prototype's `rehabSteps` for FOX-002.

### Wellbeing milestones (permanent residents)

Quality-of-life markers with no release endpoint. Progress is a good life in
care, not a countdown. Examples:

- First proper den dug
- First cached meal
- Settles into a daily routine
- Tolerates health checks calmly
- Chooses a favourite spot in the enclosure
- Responds to a preferred enrichment

Write them as small, observable victories. The player should feel each one.

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

- [ ] `designPurpose` written — one paragraph, one lesson
- [ ] Milestone track chosen; milestones ordered and complete
- [ ] All `requiredCapabilities` exist in `docs/CAPABILITIES.md`
- [ ] Naming handled (player / Harley / fixed)
- [ ] Photo licensed, credited, in `assets.json` + `CREDITS.md`,
      fiction notice present
- [ ] Harley notes drafted in voice
- [ ] Intake story has a reported-concern vs. assessment gap (where it fits)
