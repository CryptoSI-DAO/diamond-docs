---
title: Tokenomics Reference
sidebar_position: 1
---

# Tokenomics Reference

The frozen numbers, in one place. **These are constants in code — not parameters.**

## Fixed canon (every vault, every chain)

| Parameter | Value | Enforced |
|---|---|---|
| Entry tax | **5%** of every deposit | Immutable constant, passed at clone init |
| Exit tax | **10%** of every withdrawal | Immutable constant, passed at clone init |
| Dividend share of tax | **80%** | Immutable split, in code |
| Burn share of tax | **10%** | Immutable split, in code |
| DAO share of tax | **4%** | Immutable split, in code |
| Vault creator share | **2%** | Immutable split, in code |
| Creation platform share | **2%** | Immutable split, in code |
| Usage platform share | **2%** | Immutable split, in code |
| Minimum first deposit | **1.0 token unit** (`10^decimals`) | Set from token decimals at init |
| Vault creation fee | **0.004 ETH** (exact) | Factory constant |
| Token decimals accepted | **0–18** | Factory eligibility gate |
| Vaults per token (curator) | **1** | Curator exemption cap |
| Vaults per token (everyone else) | **Unlimited** | Free market |

## Split totals

- Holders (dividends): **80%**
- Permanent lock (burn): **10%**
- DAO: **4%**
- Partners (creator 2% + creation platform 2% + usage platform 2%): **6%**

## Protocol-level facts

| Fact | Value |
|---|---|
| Protocol version live | v1.4.0 |
| Mainnet chains | Base · Ethereum · BNB · Robinhood · Arc |
| Vault standard | ERC-4626-style, per EIP-1167 clone |
| Admin keys on vaults | 0 |
| Factory owner | `0x000…000` (renounced 2026-09-22, all chains) |
| Audit passes | 7, all findings closed |
| Permanent tests | 101 / 101 passing |
| Source verification | Sourcify on all 15 contract/chain pairs |
| External yield sources | 0 — zero-sum by design |
