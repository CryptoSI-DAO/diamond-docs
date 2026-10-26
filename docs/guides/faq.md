---
title: FAQ
sidebar_position: 5
---

# FAQ

## Money & mechanics

**Where do my taxes go?**
80% to the vault's dividend pool (pro-rata to holders, paid in the underlying token), 10% locked out of backing forever, 4% to the DAO treasury, 2% to the vault creator, 2% to the creation platform, 2% to the usage platform. Six sinks, hardwired. See [The Tax Engine](../how-it-works/tax-engine.md).

**What's my round-trip cost if I change my mind?**
~14.5%: 5% entry + 10% exit. Entering and exiting immediately is the most expensive thing you can do — by design.

**Where does the yield come from?**
There is none. Dividends are **other users' taxes**. If churn stops, dividends stop — permanently, and by design.

**Does the share price always go up?**
Backing per share rises monotonically through normal operation (taxes only remove backing from sellers' side). That says **nothing** about the token's market price — both can fall together.

## Trust & control

**Who can pause or upgrade a vault?**
Nobody. There is no function for it. See [Trust Architecture](../how-it-works/trust-architecture.md).

**Who controls the factory?**
Nobody — `owner()` is `0x000…000` on all five chains since 2026-09-22. [Verify the renounce txs](../deployments/renounce-txs.md).

**Why isn't the fee collector renounced too?**
`sweep()` is the only path for DAO fees to reach the treasury — renouncing would brick them forever (audit finding M-NEW-1). Standing policy: transfer to a DAO Safe, then hold forever. The opposite endgames are a documented design decision, not an oversight.

**Can the taxes be changed?**
No setter exists. The 5/10 canon lives in immutable constants baked into the implementation the factory clones.

**What is the CRDD tier?**
A dormant feature: CRDD holders would mint vaults fee-free. Wiring it required a factory owner call — impossible post-renounce. It stays dormant unless a brand-new factory deliberately re-enables it.

## Creating vaults

**Someone already made a vault for my token. Can I make another?**
Yes — free market. The first vault stays canonical; duplicates get independent vaults.

**Can I set custom taxes for my vault?**
No. Creators cannot configure taxes — that's the anti-rug guarantee.

**Why 0.004 ETH to create?**
It makes junk vaults economically pointless while keeping the market open to anyone. The fee routes to the DAO treasury.

## Tokens & compatibility

**My token takes fees on transfer / rebases.**
Strict-mode vaults revert on contact (`FeeOnTransferToken()`). A vault created with `acceptFeesFromTransfer: true` can accept hook tokens — check the vault page.

**USDT/USDC supported?**
Yes. The burn stays **inside the vault** (burn-by-accounting) precisely because those tokens blacklist external burn addresses.

**Is my token safe in a vault?**
The vault holds it as-is and never swaps, stakes or lends it. But it cannot protect you from the token itself — if the token's own contract mints, pauses or blacklists, the vault inherits that. See [Risk Disclosure](../security/risk-disclosure.md).
