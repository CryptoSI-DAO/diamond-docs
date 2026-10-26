---
title: Glossary
sidebar_position: 4
---

# Glossary

| Term | Meaning |
|---|---|
| **DHP** | Diamond Hands Protocol — the factory + vault + fee collector system documented here |
| **Vault** | An EIP-1167 clone of DHPImplementation wrapping exactly one ERC-20 token |
| **Canon** | The immutable economics: 5% entry / 10% exit / 80-10-4-2-2-2 split. No setter exists |
| **Entry tax** | 5% charged on every deposit, split six ways |
| **Exit tax** | 10% charged on every withdrawal, split six ways (double the entry rate — leaving is the expensive sin) |
| **Dividend pool** | The 80% of taxes that accrues pro-rata to vault shares; claims pay in the underlying token |
| **Dividend index** | `rewardPerTokenStored` — Synthetix StakingRewards accumulator bumped on every tax event |
| **Burn (lock-in-vault)** | 10% of taxes recorded in `burnedBalance` and excluded from `totalAssets()`; tokens stay in the contract but never back shares |
| **Burn-by-accounting** | Burn mechanism that works with USDT/USDC (which blacklist external burn addresses): subtract from backing, don't transfer to `0x0` |
| **Share** | The vault's ERC-4626 position token; backing per share rises monotonically through normal operation |
| **Paper hands** | Users who churn; their taxes fund the dividends and the burn |
| **Diamond hands** | Users who hold; they receive the dividends and the rising backing |
| **Curator** | The single DAO address capped at one vault per token; powers the app's Curated tab |
| **Canonical vault** | The first vault created per token; permanently recorded by `getVault()` |
| **CRDD tier** | Dormant factory feature for fee-free vault creation by CRDD holders; un-wirable post-renounce |
| **Fee collector** | Per-token aggregator of the DAO's 4% rail (+2% usage fallback); `sweep()` moves fees to the treasury |
| **Stuck revenue** | Partner payouts that fail (blacklist/revert) — booked as liabilities, claimable permissionlessly by the entitled wallet |
| **Strict mode** | Default anti-fee-on-transfer enforcement: balance deltas verified on both sides of every operation |
| **Permissive mode** | Opt-in `acceptFeesFromTransfer: true` for known hook tokens; immutable after creation |
| **Round trip** | Deposit + later withdrawal; costs ~14.5% of position value |
| **Zero-sum** | Payouts originate entirely from other users' taxes; no external yield exists |
| **Renounce** | Setting `owner()` to `0x000…000` — done on the factory across all five chains 2026-09-22 |
