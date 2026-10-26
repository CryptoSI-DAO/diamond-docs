---
title: Risk Disclosure
sidebar_position: 3
---

# Risk Disclosure

:::danger This section is the product, not the disclaimer
DHP's economics are **intentionally asymmetric against churn and indifferent to your P&L**. Read it before using any vault.
:::

## What can go wrong, mechanically

| Risk | Mechanics |
|---|---|
| **Round-trip cost** | Enter + exit = 5% + 10% ≈ **14.5%** of position value transferred away on the spot. Active trading through vaults is structurally loss-making. |
| **Zero-sum payouts** | Dividends come solely from other users' taxes. No external yield exists. If volume dries up, dividend income stops — permanently, and by design. |
| **Token risk passthrough** | Vaults hold the underlying token as-is. If the token goes to zero, every vault share does too. DHP cannot and will not "protect" you from the asset. |
| **Malicious underlying tokens** | Strict anti-FOT blocks fee/rebase/hook tokens, but no on-chain gate can read intent. The vault holds whatever it wraps — including tokens whose own contracts later mint, pause or blacklist. |
| **Share-price ≠ market price** | Rising share price (backing per share) says nothing about the token's market price. Both can fall simultaneously. |
| **Chain risk** | Vaults inherit sequencer/validator risks of their chain, including the young Robinhood Chain and Arc network. |
| **Regulatory** | Tax-and-dividend mechanics may be regulated as securities-like instruments in some jurisdictions. Users are responsible for their own compliance. |

## A worked scenario (illustrative, not a projection)

100 tokens deposited → 95 in shares. Churn of 10,000 tax-tokens flows through the vault that month while you hold: your pro-rata dividend share accrues from the 80% pool; your claim is payable any time in tokens.

Exit the next day instead, and you pay 10% of your position for the privilege. The spread between those two behaviours — roughly **24.5 points of position value** — is the entire protocol. Nothing else is promised, modelled or implied.

## No expectations

No team. No roadmap-dependent returns. No treasury backing vault shares. No bailout. Vaults are entropy engines for token communities: entertainment-grade social infrastructure with real financial consequences. **Use funds you can afford to lock or lose entirely.**
