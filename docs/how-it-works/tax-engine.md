---
title: The Tax Engine
sidebar_position: 2
---

# The Tax Engine

Every deposit is taxed **5%**; every withdrawal **10%**. The rates are **constants in the factory** — not parameters, not governance proposals. Each tax unit splits **six ways, in code, on every event**.

## The six-way split

| Sink | Share of tax | 100-token deposit (5.00 taxed) | Destination & mechanics |
|---|---|---|---|
| **Dividend pool** | 80% | 4.00 | Stays in vault; accrues pro-rata to all holders via the dividend index; claimable in the underlying token |
| **Lock-in-vault burn** | 10% | 0.50 | Recorded in `burnedBalance` and subtracted from `totalAssets()` — permanently unbacked |
| **DAO** | 4% | 0.20 | Fee collector → DAO treasury (owner-swept) |
| **Vault creator** | 2% | 0.10 | Immutable per-vault address; paid every event, forever |
| **Creation platform** | 2% | 0.10 | The frontend that hosted creation; immutable |
| **Usage platform** | 2% | 0.10 | Attributed per-transaction; headless calls fall back to the DAO rail |
| **Net to depositor** | — | **95.00** | Minted as vault shares at the running exchange rate |

Exit mirrors entry at **double the rate**: redeeming shares worth 100 tokens burns 10 tokens of value — 8.0 to dividends, 1.0 to burn, 0.4 DAO, 0.2 + 0.2 + 0.2 partners — delivering **90** to the exiter. Floor-division dust from the split lands on the burn portion; nothing is lost.

## Why fixed taxes matter

- **Un-ruggable by construction.** The classic tax-token rug is a two-line upgrade: `entryTax = 95%`. In DHP there is no setter — the canon lives in immutable constants the factory passes at clone init.
- **Honest expectations.** Every user, on every chain, in every vault, faces identical economics. Nothing for a creator to renegotiate, nothing for a DAO to vote up.
- **Aligned partners.** Creators and platforms earn 2% + 2% of every in/out flow on vaults they spawn — recurring revenue for growing holding communities, not exit liquidity.

:::danger Read this part twice
The taxes make DHP a **zero-sum game between users**. Dividends are other users' taxes — **not yield**. If churn stops, dividends stop. If you enter and exit immediately, you pay ~14.5% round-trip. DHP is designed to reward holding and penalise churn; it can do nothing else.
:::

## Next

- [Dividends, Burn & Share Math](dividends-burn-shares.md) — where each sink lives mechanically
- [Worked Examples](../reference/worked-examples.md) — full entry/exit walkthroughs
