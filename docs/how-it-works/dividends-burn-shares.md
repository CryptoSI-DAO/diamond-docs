---
title: Dividends, Burn & Share Math
sidebar_position: 3
---

# Dividends, Burn & Share Math

## Dividend accrual — Synthetix StakingRewards pattern

Each vault keeps a cumulative index `rewardPerTokenStored`. Every tax event bumps it:

```text
rewardPerTokenStored += (dividendPortion × 1e18) / totalSupply
pending[user] = balance[user] × (index_now − index_paid[user]) / 1e18
```

- Accrual is **lazy and exact**: balances are settled automatically on every share change (deposits, exits, even vault-share transfers settle both parties).
- Claims pay **in the underlying token** — never in shares — via `claimDividend(minAmountOut)` with a slippage guard against front-running.
- Unclaimed dividends are **reserved liabilities** (`totalUnclaimed`), excluded from share backing. The vault is solvent for every claim by construction — issue #26 closed the "burn outruns backing" freeze class.

## Lock-in-vault burn

Burned tokens **never leave the vault** (USDT/USDC blacklist burn addresses) but are subtracted from `totalAssets()`:

```text
totalAssets = balance − burnedBalance − totalUnclaimed − totalStuckRevenue   (reverts loudly if violated)
```

Effect: share price rises for everyone as taxes accumulate, and the backing invariant is machine-checked on every pricing call. A token balance that drops below its liabilities (e.g. a hostile negative rebase) fails **loudly**, never silently.

## Share accounting — ERC-4626 semantics, hardened

| Property | Mechanism |
|---|---|
| **Share price** | `totalAssets / totalSupply`, monotonically non-decreasing through normal operation (taxes only remove backing from sellers' side) |
| **Preview parity** | `previewDeposit/Mint/Withdraw/Redeem` read pre-transaction state — execution matches preview exactly (fuzz-verified; a 56× under-credit divergence was found and fixed by the fuzz harness) |
| **First-deposit guard** | 1.0-token minimum (`10^decimals`) + `mint()` cannot seed an empty vault — donation/squat inflation attacks are closed at all decimal scales |
| **Anti-fee-on-transfer** | Strict mode verifies the vault's balance delta equals the transferred amount on **both** sides of every operation — FOT, rebase and hook tokens revert on contact |
| **Stuck partner revenue** | Partner payouts that fail (blacklists, reverting receivers) never revert the user's tx and never get stolen: booked as named liabilities, excluded from backing, claimable **permissionlessly** only by the entitled partner (`claimStuck`). No admin path exists. |
| **Reentrancy** | Every state-mutating entry point carries `nonReentrant` (transient-storage guard); the asset-token ≠ share-token split makes cross-contract reentry inert by design |

:::note Permissive mode for hook tokens
A vault can be created with `acceptFeesFromTransfer: true` in its `TaxConfig`, which bypasses the anti-FOT check. This is **opt-in per vault** for known hook tokens (rebasing, marketing-fee, gas-burn tokens). Default is strict, and the flag is immutable post-`initialize()`.
:::

:::info Integrator note
DHP vaults implement the ERC-4626 surface but intentionally do **not** inherit OpenZeppelin's `ERC4626` (it fixes the asset at deploy time, incompatible with per-token clones). Every divergence is enumerated in [ERC-4626 Notes](../reference/erc4626-notes.md).
:::
