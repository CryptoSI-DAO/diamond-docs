---
title: Create a Vault
sidebar_position: 1
---

# Create a Vault

The full mechanics live in [Vault Creation](../how-it-works/vault-creation.md) — this is the hands-on checklist.

## Checklist

1. **Token qualifies?** `decimals()` ∈ [0, 18], no canonical vault yet for that token.
2. **Pick your chain** in the app (wallet must be on the same chain to transact).
3. **Have 0.004 ETH** + gas for the creation fee.
4. **Decide the creator wallet** — it receives 2% of every tax forever. Immutable.
5. Open [app.dhp.cryptosidao.org](https://app.dhp.cryptosidao.org) → **Create**.
6. Paste the token address → the app probes decimals, symbol and FOT profile.
7. Preview must read: **factory `0x64BE…6929` · 0.004 ETH · `createVault`**.
8. Confirm. Your vault is live on the vault list immediately.

:::tip
If your wallet (e.g. Coinbase Wallet) shows a security warning, it is a known Blockaid false positive for freshly verified contracts — see [Verification Ledger](../security/verification.md).
:::

## Common questions

**Can I create a vault for a token that already has one?**
Yes — duplicates are allowed (free market). The first vault stays canonical in the registry; your duplicate gets an independent vault with its own economics.

**Can I change the creator wallet later?**
No. It is immutable at `initialize()`. Choose deliberately.

**What does the creator get?**
2% of every entry AND exit tax on the vault, every event, forever — routed via the fee rail. It is revenue for growing the holding community, not exit liquidity.
