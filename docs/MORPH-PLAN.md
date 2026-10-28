# Fox & Found — Morph Plan

Which foxes look different, and why. The broader morph assignments remain planning direction, not canon. **Avery approved silver-coated Loki on 2026-10-27**; implementing the new photos/assets is a separate follow-up.

## The rule

- **Red-fox rescue.** *Vulpes vulpes* throughout; no "collect every colour fox."
- **Rarity = story weight, never desirability.** The rarer the coat, the heavier the history. Colour must never read as a reward tier.
- **Variation generally arrives in clusters with shared narratives** (one event, several foxes), not as scattered rare spawns. Loki is the established mascot, not an unlockable rarity.

## The realistic baseline

For the ~50-case roster:

- Most of the ~50 foxes retain classic red coats — and "red" itself ranges from pale yellowish-red to deep reddish-brown.
- **FOX-001 Loki is a silver-coated red fox** (a colour morph within *Vulpes vulpes*), present from the opening, never a rare unlock or collection reward.
- A natural wild variant (e.g. a cross fox) remains possible.
- Captive-bred morphs still appear via individual captivity stories and shared events; exact counts remain to be decided. The earlier rough proportions should be rebalanced to account for Loki.

(Research: wild red foxes are overwhelmingly classic red — one study found 100% of 132 wild foxes red-coated; natural cross/silver phases are uncommon and region-dependent; platinum/amber/pearl are fur-farm creations.)

## Assignments

- **FOX-001 Loki → silver morph (approved).** Harley's resident troublemaker and the first permanent fox the player meets. Silver is Harley's favourite red-fox coat variation. Keep Loki's existing individual history, temperament, permanent-resident care and infamous bell-enrichment moment; changing his coat does **not** turn him into a captive-bred fox or change why he is non-releasable. No gameplay rarity bonus.
- **Pet rescue → platinum morph.** A surrendered pet fox, bred for pelt colour. The owner picked the prettiest one — the story tells itself. Unreleasable: human-habituated and never learned to live as a wild fox. Mirror image of FOX-002's arc; wellbeing milestones, enrichment-led mechanics.
- **Breeder seizure → amber + silver morphs.** A private breeder shutdown; foxes seized, mid-scale between the pet and the farm.
- **Fur farm closure → mixed morphs.** Mostly silvers (the classic farm fox), plus others. The single biggest story event: a mixed group arrives at once.
- **Arctic pair → referral north.** A pair of white arctic foxes arrives with the farm closure group. Harley identifies them as a different species the rescue cannot keep safely; they are referred to a specialist sanctuary in northern Canada. They pass through — a bonded pair, so the referral reads as a beginning, not a goodbye.

## The arctic referral case

- **Design purpose:** not every fox is a red fox — a different species means different needs, and recognizing that *is* the welfare decision. The player learns it the same way: by falling for the white foxes first.
- **Flow:** intake → Harley identifies the species → player asks Harley to call the northern sanctuary → transport arranged → partner updates.
- **Success condition is the referral itself.**
- **Lesson distinction:** FOX-004's referral is "not yet" (build isolation later); this one is "not us, ever." Two different lessons about limits.
- Decision history: arctic foxes were considered as residents and nixed (species-scope decision — red-fox rescue, deliberately); they return here as a referral pair, which keeps the roster rule intact.

## Loki photography decision (approved direction; assets pending)

The photograph-availability condition for making Loki silver has been met **at the candidate-collection level**. Wikimedia Commons has two useful multi-image sources:

- [Silver fox in Heimat-Tierpark Olderdissen Bielefeld (11 files)](https://commons.wikimedia.org/wiki/Category:Silver_fox_in_Heimat-Tierpark_Olderdissen_Bielefeld)
- [Silver foxes in Zoo Osnabrück (13 files)](https://commons.wikimedia.org/wiki/Category:Silver_foxes_in_Zoo_Osnabr%C3%BCck)

Photos from both collections **may be combined** to portray the same *fictional* Loki, provided selected animals look sufficiently consistent in coat, face, size and overall appearance. We do **not** claim the real photographed animals are the same individual. Treat these as candidate photos, not production-cleared assets. Before changing `images/foxes/fox-001-loki.jpg` or adding extra Loki poses: inspect individual images and crops, verify their specific licenses (including share-alike obligations where applicable), record each creator and source in `data/assets.json` and `CREDITS.md`, and preserve the fiction notice. Make the asset/roster changes in a separate focused PR; the design-lab PR is never merged.

## Reference photos

Choosing reference only — **not licensed game assets**: `~/workspace/fox-morphs/` holds verified real photographs of silver, cross, platinum, and amber morphs. Game assets still need the full licensed-photo pipeline per `docs/CASE-TEMPLATE.md` (Wikimedia Commons or equivalent, attribution, fiction notice).

## Open questions

- Exact morph mix of the farm closure group.
- The northern sanctuary: name, location, recurring partner?
- Placement and order of the three captivity beats in the campaign.
- Transport mechanics for the arctic referral (ties to the Advanced transport capability).
