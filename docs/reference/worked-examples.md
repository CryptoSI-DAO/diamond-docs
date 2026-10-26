---
title: Worked Examples
sidebar_position: 2
---

# Worked Examples

Concrete numbers for the two moves everyone makes. Assumptions: a vault with `totalSupply` unchanged except by you, so share price stays flat within the example; real arithmetic depends on live state.

## Example 1 — Deposit 100 tokens

Entry tax: **5%** = 5.00 tokens.

| Sink | Share | Tokens |
|---|---|---|
| Dividend pool | 80% | 4.00 |
| Burn (locked out of backing) | 10% | 0.50 |
| DAO | 4% | 0.20 |
| Vault creator | 2% | 0.10 |
| Creation platform | 2% | 0.10 |
| Usage platform | 2% | 0.10 |
| **Net to depositor** | — | **95.00** → minted as shares |

## Example 2 — Redeem shares worth 100 tokens

Exit tax: **10%** = 10.00 tokens of value.

| Sink | Share | Tokens |
|---|---|---|
| Dividend pool | 80% | 8.00 |
| Burn | 10% | 1.00 |
| DAO | 4% | 0.40 |
| Vault creator | 2% | 0.20 |
| Creation platform | 2% | 0.20 |
| Usage platform | 2% | 0.20 |
| **Net to exiter** | — | **90.00** |

## Example 3 — The round trip

Deposit 100 today, redeem tomorrow:

- In: 95.00 of shares
- Out: 90% of 95.00 = **85.50 of tokens**
- Cost: **14.50 tokens (14.5%)** — split across the six sinks above

This is the protocol working exactly as designed: churn is taxed, holding is subsidised by churn.

## Example 4 — One month of holding with churn

100 tokens deposited → 95 in shares. Over the month, 10,000 tokens of churn flows through the vault (entry + exit taxes):

- Total tax collected: ~1,400 tokens of value across events
- → 80% (1,120) accrues pro-rata via the dividend index
- Your pro-rata slice depends on your share of `totalSupply` — claimable any time in tokens
- → 10% (140) is locked out of backing: every remaining share is worth more
- Exit after the month (not during): 90% of position value, plus any claimed dividends already in your wallet

The spread between "exit tomorrow" and "hold through churn" is roughly **24.5 points of position value** in the whitepaper's scenario — the entire thesis in two behaviours.

:::note
Floor-division dust from each split lands on the burn portion — nothing is lost, and `totalAssets()` reverts loudly if backing ever contradicts its liabilities.
:::
