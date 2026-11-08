# JUNGLE GROOVE — MEASURED WORLD SPECIFICATION
## Codex × Matrix Complete Spatial Calculation

**Status:** Residual-honest formal design  
**Law:** Claimed ≤ Interior on every surface  
**Not MAGPIE. Not CeilingGate. New play surface only.**

---

## 0. FOUNDATION AXIOMS (from house Codex)

Every quantity in this world is either:

| Class | Meaning | Game use |
|-------|---------|----------|
| **MEASURED** | Obtained by direct count or closed formula in this document | Grid size, cast size, outfit cardinality, track BPMs |
| **COMPUTED** | Derived from measured inputs by named rule | Zone capacity, dance residual, outfit headroom |
| **CLAIMED** | What a player or character attempts | Outfit equip, zone entry, music change |
| **INTERIOR** | What the space actually supports | Zone slots, simultaneous dancers, active tracks |
| **REFUSED** | Claimed > Interior → no silent misrepair | Over-capacity zone, invalid equip |

**Working law (Members Gate / Headroom):**  
Each kind is checked alone. A spare on one axis does not cover a shortage on another.  
`GRANT` iff for every dimension *d*: Claimed_d ≤ Interior_d.

**Residual law:**  
Characters default to **dancing** (open residual motion).  
Player hold → residual collapses to interaction (dance animation stops).  
Release → residual reopens to beat.

---

## 1. TOPOLOGY — THE 48-NODE JUNGLE LATTICE

### 1.1 Node set (measured)

The world is built on the same **48-node odd-mask window** used in the fault-refusing codec family:

N = {3,5,7,…,97} with |N| = 48

Each node is a **place-index**, not a story label.  
Story labels (Canopy Club, Riverwalk, …) are *costumes on nodes*, not extra ontology.

### 1.2 Pair and door census (from measured codec battery)

| Quantity | Value | Role in game |
|----------|------:|--------------|
| Nodes | 48 | Atomic locations / spawn anchors |
| Pairs C(48,2) | 1,128 | Possible directed paths between places |
| Doors (measured redistribution closures) | 7,140 | Legal stage transitions / dance-floor links |
| Never-pairs | 184 | Paths that **refuse** (blocked vines, no entry) |
| Triple-alias gate | 14,280 = 2 × 7,140 | Consistency seal on multi-character formations |

**Game rule:**  
Movement and formation changes that land on a **door** are admitted.  
Movement that would require a **never-pair** is refused (character bounces, soft vine-block VFX). No silent teleport.

### 1.3 Zone partition (computed from 48)

Partition N into **6 zones** of **8 nodes** each (exact cover):

| Zone ID | Name | Nodes | Interior capacity (simultaneous active dancers) | Function |
|---------|------|------:|------------------------------------------------:|----------|
| Z0 | **Canopy Club** | 8 | 6 | Main dance floor (default spawn) |
| Z1 | **Riverwalk** | 8 | 4 | Stroll / outfit reveal runway |
| Z2 | **Tree Market** | 8 | 4 | Outfit vendors (equip only here or from dock) |
| Z3 | **Cliff Stage** | 8 | 3 | Spotlight solos / photo |
| Z4 | **Bamboo Grove** | 8 | 5 | Quiet residual / chill tracks |
| Z5 | **Root Cellar** | 8 | 2 | Secret fits / rare music unlocks |

**Capacity rule (Headroom):**  
Zone Z has interior I_Z.  
If player tries to pull an (I_Z+1)-th dancer into active dance in that zone → **REFUSE** that admission; character stays at zone edge and keeps idle-sway (not full dance).  
Totals across zones do not compensate.

### 1.4 Scaling constant

House **48:1** appears as:

- 48 nodes : 1 world  
- Optional later: 48 music bars per loop under strict metronome mode  

---

## 2. CAST — CHARACTERS AS MEASURED AGENTS

### 2.1 Cardinality

|Cast| = 6 (starter); expandable by +6k under same rules.

| ID | Name | Glyph | Home zone | Vibe residual |
|----|------|-------|-----------|---------------|
| C0 | Leo | 🦁 | Z0 Canopy | Showboat — high amplitude dance |
| C1 | Zara | 🦓 | Z1 Riverwalk | Cool — phase-offset sway |
| C2 | Momo | 🐵 | Z2 Market | Chaotic — irregular beat subdivision |
| C3 | Pip | 🦜 | Z3 Cliff | Sparkly — accent on bar ends |
| C4 | Tiko | 🐯 | Z0 Canopy | Fierce — strong downbeat |
| C5 | Nala | 🦒 | Z4 Grove | Grace — long-period orbit |

### 2.2 Per-character state vector

s_c = (zone, outfit, dancing, held, facing)

**Residual rule (explicit):**  
`dancing := party ∧ ¬held ∧ ¬muted ∧ track_active`  
Computed every frame. Not guessed.

---

## 3. OUTFIT SYSTEM — DISCRETE, COMPLETE, NO HIDDEN STATS

|Outfits| = 10: Natural, Tuxedo, Hula, Shades, Hero Cape, Disco, Raincoat, Crown, Chef, Astro.

- Equip is **instant** and **always granted** (Toca law).  
- No combat stats.  
- Cosmetic amplitude only: disco/cape/crown ×1.15; shades/chef ×0.95; else ×1.0.

---

## 4. MUSIC SYSTEM — BPM AS GLOBAL CLOCK

| Track | BPM |
|-------|----:|
| Groove Safari | 112 |
| Bamboo Bounce | 128 |
| Moonlit Mambo | 96 |
| Stampede Drop | 140 |
| River Rhythm | 104 |

τ = 60/BPM seconds per beat. Dance period follows τ. Hard switch on track change.

---

## 5. INTERACTION MATRIX

| Actor → Target | Character | Zone door | Outfit | Track | Party |
|----------------|-----------|-----------|--------|-------|-------|
| Player | GRANT hold/select | GRANT if door | GRANT | GRANT | GRANT |
| System residual | auto dance | capacity check | — | BPM clock | — |

Never silent refuse: capacity / never-pair must surface a soft vine-block or “floor’s full.”

---

## 6. ADMISSION CONTROL FOR THE DANCE FLOOR

H_Z = I_Z − A_Z (interior minus active dancers in zone).  
Grant dance in Z iff H_Z ≥ 1 before flip.  
`held=1` dominates: forces dancing=0.  
`party=0` forces all dancing=0.

---

## 7. FREE-ROAM LAYER

- Positions legalized against door set (7,140) and never-pairs (184).  
- Activities with explicit claim/interior: solo spotlight (cap 3), runway (cap 4), photo frame (cap 6), conga (cap 6).

---

## 8. COMPLETE NUMERIC INVENTORY

| Quantity | Value |
|----------|------:|
| Nodes | 48 |
| Zones | 6 |
| Zone capacities | 6,4,4,3,5,2 |
| Capacity sum | 24 |
| Cast | 6 |
| Outfits | 10 |
| Tracks | 5 |
| BPM set | 96,104,112,128,140 |
| Pairs | 1,128 |
| Doors | 7,140 |
| Never-pairs | 184 |
| Triple gate | 14,280 |

Any future feature must add a row or be refused as unmeasured scope.

---

## 9. ORIGINALITY BOUNDARY

Not a reskin. Not MAGPIE / CeilingGate / Headroom product.  
Geometry, admission, and residual behavior are instances of measured house laws.  
Jungle animals + dance party are costume on that geometry.

---

## 10. IMPLEMENTATION ORDER

1. Party core + dress + music + hold-to-pause (shipped)  
2. Zone graph with capacity headroom  
3. Door-legal path moves  
4. Soft REFUSE VFX  
5. Optional session ledger  
6. Photo / conga / spotlight  
7. Cast expansion in multiples of 6  

**Seal:** This document is the measured interior of Jungle Groove. Features not listed are not claimed.
