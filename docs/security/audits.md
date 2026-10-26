---
title: Audits & Tests
sidebar_position: 1
---

# Audits & Tests

## Seven sequential audit passes — every finding closed

| Pass | Critical | High | Medium | Notes |
|---|---|---|---|---|
| v1.0 | 2 | 4 | 7 | Original full audit of the initial codebase |
| v1.1 | 1 | 1 | 3 | Re-audit caught issues the v1.1 fixes themselves introduced |
| v1.2 | 0 | 0 | 2 | Carried mediums fixed |
| v1.2.1 | 0 | 0 | 0 | Permissive-FOT opt-in redesign |
| v1.2.2 | 0 | 0 | 1 | Fresh-eyes full-codebase pass; dead code & doc-rot sweep |
| v1.3.0 | 0 | 0 | 0 | Dividend IOUs excluded from share backing (solvency fix #26) |
| **v1.4.0** | **1** | 0 | **1** | Fresh-eyes pass over #27–#29 stack — see [case study](#the-v140-case-study--proof-the-process-works) |

All reports are public in the contracts repo (`SELF_AUDIT*.md`). **All findings across all passes are closed.**

## The v1.4.0 case study — proof the process works

The partner-payout surface (#29) introduced new external-call windows. A cross-function reentrancy path through `claimStuck()` was found, proven with an **executable proof-of-concept** (double extraction + ~8.9% silent impairment of an innocent depositor), **fixed the same day** with a `nonReentrant` guard, and both PoCs were converted into permanent regression tests. The fuzz harness was rebuilt to cover the partner/hook surface and **tripwire-validated** — it demonstrably detects the pre-fix bug.

## Test suite — 101 / 101 passing

| Suite | Tests |
|---|---|
| Vault (implementation) | 28 |
| Factory | 21 |
| Fee collector | 18 |
| Curator exemption (#27) | 8 |
| CRDD tier (#28) | 9 |
| Partner split (#29) | 9 |
| Regression (audit pins) | 4 |
| Fuzz walk (10k-run invariant walks) | 2 |
| v1.2.2 audit pins | 2 |
| **Total** | **101** |

**Fuzz harness property checks:** token conservation, solvency, burn-lock, dividend-ledger integrity and preview/execution parity across random 40-operation walks including hook-capable tokens and partner wallets.

## Security foundations

- Built on **OpenZeppelin Contracts v5.1** (battle-tested primitives).
- ERC-4626 share math re-implemented to fit the per-token-clone model ([divergences documented](../reference/erc4626-notes.md)).
- Dividend math follows the **Synthetix StakingRewards** pattern (audited across billions in TVL).
- Reentrancy protection via `ReentrancyGuardTransient` (OZ v5 transient storage). The asset-token ≠ share-token split is a deliberate invariant that makes cross-contract reentry inert by design.
- **External audit:** RFP prepared (`RFP_AUDIT.md`); not yet commissioned.
- Full disclosure policy: [Responsible Disclosure](disclosure.md).
