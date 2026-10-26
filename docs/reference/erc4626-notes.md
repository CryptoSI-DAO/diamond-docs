---
title: ERC-4626 Notes
sidebar_position: 3
---

# ERC-4626 Notes

DHP vaults implement the **ERC-4626 surface** but intentionally do **not** inherit OpenZeppelin's `ERC4626`: OZ's implementation fixes the asset at deploy time, which is incompatible with a single audited implementation being cloned for thousands of different tokens. The authoritative divergence list is [`ERC4626_COMPATIBILITY.md`](https://github.com/CryptoSI-DAO/diamond-hands-protocol/blob/main/ERC4626_COMPATIBILITY.md) in the contracts repo; this page summarises what integrators must know.

## Deliberate divergences

| Property | Standard ERC-4626 | DHP vault | Why |
|---|---|---|---|
| Asset | Fixed at construction | Stored per clone, set at `initialize()` | One implementation, unlimited tokens |
| `totalAssets()` | `token.balanceOf(this)` | `balance − burnedBalance − totalUnclaimed − totalStuckRevenue` (reverts loudly if violated) | Burned tokens and reserved liabilities must not back shares |
| `mint()` on empty vault | Allowed | **Reverts** — first position must be `deposit()` | Kills the 1-wei donation/squat inflation attack |
| First deposit | No minimum | **≥ 1.0 token unit** (`10^decimals`) | Inflation-attack guard at every decimal scale |
| Transfer taxes | Assumed absent | **Strict mode verifies balance deltas on both sides** — FOT/rebase/hook tokens revert (`FeeOnTransferToken()`) | Solvency depends on receiving exactly what was sent |
| Permissive mode | — | Opt-in `acceptFeesFromTransfer: true` at creation, immutable afterwards | Known hook tokens only; default remains strict |
| Preview functions | Should match execution | **Proven** to match — fuzz-verified invariant (a 56× under-credit divergence was caught and fixed by the fuzz harness) | Integrators can display previews without hedging |
| Dividends | — | Synthetix-index accrual on 80% of taxes; claims in underlying via `claimDividend(minAmountOut)` | Not part of ERC-4626 at all |
| `claimStuck()` | — | Permissionless recovery of stuck partner revenue by the entitled wallet only | Failed partner payouts never revert user txs |
| Reentrancy | — | `nonReentrant` on every state-mutating entry point (transient storage) + asset≠share token invariant | Cross-function reentrancy found & pinned in v1.4.0 |

## What stays standard

- `asset()`, `balanceOf`/`totalSupply` semantics, share decimals
- `deposit / mint / withdraw / redeem` call shapes and events
- `preview*` returns the exact outcome of the corresponding operation
- `max*` views reflect real limits (including the first-deposit minimum)

## Reading the code

Contracts are at [github.com/CryptoSI-DAO/diamond-hands-protocol](https://github.com/CryptoSI-DAO/diamond-hands-protocol) — `src/DHPImplementation.sol` (the vault logic clones everywhere), with the Natspec carrying the invariants. 101 tests + a 10k-run fuzz harness pin every behaviour above.
