---
title: Deposit & Withdraw
sidebar_position: 2
---

# Deposit & Withdraw

## Depositing

1. Find the vault on [app.dhp.cryptosidao.org](https://app.dhp.cryptosidao.org) (use the chain selector to browse chains; no wallet needed for browsing).
2. Connect your wallet — it must be on the **same chain as the vault** to transact. If not, the app prompts *"Switch wallet to X to transact"*.
3. Enter the amount. **Minimum first deposit: 1.0 token unit** (`10^decimals`) — this kills first-depositor inflation attacks.
4. Preview: you receive vault **shares** worth **95%** of your deposit (5% entry tax). The preview is exact — execution matches it.
5. Confirm. Shares land in your wallet; your dividend meter starts immediately.

## Withdrawing

1. On the vault page, choose **Withdraw** (by shares) or **Redeem** (by token amount).
2. Preview: you receive **90%** of the position value (10% exit tax — double the entry rate).
3. Confirm. Tokens arrive; your unclaimed dividends stay claimable afterwards.

## What the taxes do at the moment of your transaction

| | Deposit (100 tokens) | Withdraw (100 tokens of value) |
|---|---|---|
| Entry/exit tax | 5.00 | 10.00 |
| → Dividend pool (80%) | 4.00 | 8.00 |
| → Burn (10%) | 0.50 | 1.00 |
| → DAO (4%) | 0.20 | 0.40 |
| → Creator + platforms (2%×3) | 0.30 | 0.60 |
| **You receive** | **95.00 in shares** | **90.00 in tokens** |

:::danger Round-trip math
Enter then immediately exit: ~**14.5%** of position value gone. DHP is built so that churning loses and holding wins. If you plan to trade, this is not your protocol.
:::

## Token compatibility

Vaults run **strict anti-fee-on-transfer mode** by default: if the token takes fees, rebases or runs transfer hooks, the transaction reverts (`FeeOnTransferToken()`). A few vaults were created with `acceptFeesFromTransfer: true` for known hook tokens — the vault page flags which mode a vault uses.
