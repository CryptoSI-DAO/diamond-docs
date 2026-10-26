---
title: Creating a Vault
sidebar_position: 5
---

# Creating a Vault

Vault creation is **permissionless** — any wallet can create a vault for any qualifying ERC-20 token, on any of the five chains.

## Before you start

- **Cost:** exactly **0.004 ETH** (paid to the factory → routed to the DAO treasury). On Arc, gas is USDC but the creation fee is still 0.004 ETH-equivalent per the factory's fixed fee.
- **Qualifying token:** exposes `decimals()` ∈ [0, 18] and has no canonical vault yet (first vault per token wins, forever).
- The app additionally screens for honeypot patterns, DEX liquidity and holder count — junk vaults are possible on-chain but economically pointless.

## Steps

1. **Open the app** at [app.dhp.cryptosidao.org](https://app.dhp.cryptosidao.org) and connect your wallet.
2. **Pick the chain** with the chain selector (Base is the default view). Vault creation happens on the chain your wallet is connected to.
3. Go to **Create a Vault**, paste the token contract address. The app probes `decimals()`, symbol and the anti-FOT profile automatically.
4. Fill in the two immutable payout addresses:
   - **Creator wallet** — receives 2% of every tax on this vault, forever.
   - **Creation platform wallet** — receives 2% of every tax, forever (the app pre-fills its own address; integrators can substitute theirs).
5. Preview the transaction. It must read: **factory `0x64BE…6929`, value 0.004 ETH, `createVault`**. Nothing else.
6. Confirm in your wallet. The vault address appears instantly; the **first** vault per token becomes the canonical registry entry (`getVault`).

:::warning Wallet security notice
Coinbase Wallet (Blockaid-powered) may flag the creation tx as "high-risk transfer / untrusted contract". This is a **known false positive** for freshly verified contracts. The app shows a SecurityNotice at the creation step — check the preview reads exactly: factory, 0.004 ETH, `createVault`.
:::

## What you cannot do

- ❌ Set custom taxes — the 5/10 canon is hardwired
- ❌ Upgrade or pause the vault — zero admin functions exist
- ❌ Change the creator or platform payout addresses — immutable at init
- ❌ Overwrite an existing canonical vault for the same token — duplicates get their own independent vault instead

## After creation

Share the vault page — deposits are open immediately. As the creator you accrue **2% of every entry and exit tax** on the vault, claimable via the fee rail. Your upside is community growth, not exit liquidity.
