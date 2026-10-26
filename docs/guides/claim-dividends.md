---
title: Claim Dividends
sidebar_position: 3
---

# Claim Dividends

## Where dividends come from

**80% of every entry and exit tax** on the vault flows to the dividend pool. Your share is pro-rata to your vault-share balance and accrues **in the underlying token** — there is no second reward token to dump.

## Claiming

1. Open your vault position — the app shows **pending dividends** live.
2. Click **Claim**. The app prompts for a `minAmountOut` slippage guard (pre-filled) — this protects your claim from being front-run.
3. Confirm. Pending tokens transfer to your wallet. No tax is charged on claiming — dividends are paid from tax that was already split.

## Mechanics worth knowing

- **Accrual is continuous but lazy:** the dividend index updates on every tax event; your balance settles automatically whenever your share balance changes.
- **Unclaimed dividends are reserved liabilities** — excluded from share backing, so the vault is solvent for every claim by construction. Your claim cannot be diluted by later burns.
- **Claims pay in the underlying token, never in shares.**
- **If churn stops, dividends stop** — the pool is literally other users' taxes. There is no yield source behind it.

:::tip
Dividend claims are a normal token transfer from the vault — they are not taxed a second time. Only entering (5%) and leaving (10%) carry tax.
:::
