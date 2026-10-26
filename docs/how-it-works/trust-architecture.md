---
title: Trust Architecture
sidebar_position: 4
---

# Trust Architecture — Who Can Do What

The honest answer to "who controls DHP": **on vaults, nobody. At the factory, nobody** (ownership renounced on all five chains). The only live administrative surface in the entire protocol is the fee collector's sweep — and its policy is fixed in public.

| Component | Admin surface | Status on all 5 mainnets |
|---|---|---|
| **DHPVault** (every clone) | None — no pause, no setter, no upgrade, no owner functions | Permanently key-less |
| **DHPFactory** | Owner could set curator / curation flag / CRDD tier — **renounced 2026-09-22** | `owner = 0x000…000` — immutable |
| **DHPFeeCollector** | Owner may sweep to treasury and re-point the treasury | Held by deployer; policy: transfer to DAO Safe, **never renounce** |

## Why the factory renounce is safe — and the collector renounce never is

Renouncing the factory only freezes curation cosmetics and tier config; permissionless `createVault()` works forever. The collector is the opposite: `sweep()` is its only path from "fees accumulated" to "treasury funded", so renouncing would brick every future DAO fee inside the contract (audit finding M-NEW-1, v1.2.2).

**The two contracts deliberately have opposite governance endgames — this asymmetry is a documented design decision, not an oversight.** See [Renounce Transactions](../deployments/renounce-txs.md) for the verifiable on-chain txs.

## Free market, one curator

- **Anyone** can create a vault for any qualifying token — including duplicates of existing vaults. The first vault per token is canonical forever; duplicates can never overwrite it.
- The **DAO curator** (a single fixed address) is the only wallet capped at one vault per token — the curated tier visible in the app cannot be squatted, including by the curator themselves.
- The factory's `isVerified` flag is presentation-only curation (now frozen); it gates nothing on-chain. Unverified vaults work identically.
- **CRDD tier (#28):** once wired, holders of a threshold balance of CRDD mint vaults fee-free. **Dormant** (`crddToken = 0x0`); wiring it required an owner call that no longer exists post-renounce — the tier stays dormant until a factory redeploy deliberately re-enables it.

## Token eligibility

**On-chain gate** (enforced by the factory):

1. Token exposes `decimals()` ∈ [0, 18]
2. No canonical vault exists for the token yet (first-vault-wins registry)
3. Exact 0.004 ETH creation fee (no refund path — prevents griefing via bad-receive contracts)

**Off-chain gate** (the app checks before creation):

1. GoPlus honeypot check clean (`buy_tax=0`, `sell_tax=0`, `cannot_buy=0`)
2. Meaningful DEX liquidity (default ≥ $5,000 on Uniswap V3)
3. Minimum holder count (default ≥ 100)
4. Token source verified

The layered gate keeps the free market open while making junk vaults economically pointless (0.004 ETH each).
