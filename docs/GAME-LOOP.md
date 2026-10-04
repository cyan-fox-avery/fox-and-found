# Fox & Found — Game Loop

## Core loop

**Review current foxes → make weekly care decisions → assess capacity → open for intake → receive authored case → accept or refer → rehabilitation / partner updates → welfare outcome → reputation → funding → upgrades → greater capability → repeat**

## Time scale

One turn represents **one in-game week**.

Routine daily care happens in the background as long as Fox & Found has the required supplies, facilities, and capacity. The player makes meaningful weekly decisions rather than clicking through repetitive daily chores.

The game should show passage of time through:
- Week number
- Calendar dates
- Season
- Intake and outcome dates in fox records

Campaign duration emerges from case content and rehabilitation timelines.

## Weekly structure

### Beginning-of-week briefing
Possible updates:
- Harley's notes
- New fox observations
- Rehabilitation milestones
- Partner-facility updates
- Supply warnings
- Funding/grant notices
- Seasonal changes
- Intake calls if Fox & Found is open

### Fox rounds
Each active fox has an individual care plan. Player decisions may include:
- Choose/change enrichment
- Review camera observations
- Adjust feeding method
- Request reassessment
- Move a fox to an appropriate rehabilitation stage
- Prepare for release assessment
- Leave the fox undisturbed when that is the best choice

Not every fox needs a decision every week.

Possible status labels:
- Needs attention
- Routine care only
- Ready for assessment
- Awaiting facility
- Release ready

## Rehabilitation philosophy

Avoid generic pet-style hunger/happiness bars as the primary rehabilitation mechanic.

Progress is represented through case-specific milestones.

Examples:
- Adult injury: Stabilized → normal weight-bearing → full use of limb → outdoor conditioning → natural foraging/hunting confirmed → release assessment
- Orphaned kit: Stable → self-feeding → appropriate social development → minimal human habituation → independent foraging → release assessment

Underlying numerical values may exist in code, but player-facing progress should use meaningful language.

Less-than-ideal choices should teach rather than punish. Ordinary mistakes should not cause severe harm.

## Rescue management

The player may:
- Restock supplies
- Review funds
- Purchase upgrades
- Inspect capacity
- Review facilities
- Decide whether Fox & Found should remain open for intake

## Intake

The player deliberately marks Fox & Found as ready for another case.

The player chooses:
- **Accept case**
- **Refer to partner facility**

If accepted, the fox arrives under its rescue ID and the player manages assessment, naming, rehabilitation, and outcome.

If referred, the fox remains part of the rescue network's history and can generate authored partner updates.

## Advance to next week

At week transition:
- Routine care consumes supplies
- Rehabilitation progresses
- Authored events may resolve
- New observations may appear
- Partner cases may progress
- Calendar and season advance

No real-world waiting is used.

## Case ordering

The campaign uses a curated shuffle:
- Loki is fixed as FOX-001.
- The first intake case is intended to be fixed.
- Most later cases come from authored progression pools.
- Season, capability, occupancy, and recent case types may influence selection.
- The system should avoid repetitive case sequences and poor pacing.
- Some beyond-capability cases should appear so referral remains meaningful.

## Fail state

If Fox & Found can no longer guarantee safe care:
- Intake closes.
- Active rehabilitation foxes are transferred safely before welfare is compromised.
- Loki is never transferred; Harley personally ensures his care.
- Transferred foxes continue receiving authored partner updates.
- Fox & Found enters a recoverable rebuilding state.
