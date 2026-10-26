---
title: Architecture
sidebar_position: 1
---

# Architecture

Three contracts per chain. The factory deploys unlimited user-facing vaults as cheap EIP-1167 clones of one audited implementation; a separate collector aggregates the DAO's fee rail. **All five chains run byte-identical code at identical addresses.**

```
DHPFactory           Permissionless createVault() · 0.004 ETH fee · decimals gate · owner renounced
   │  EIP-1167 clone
   ▼
DHPVault (clone)     One per token · ERC-4626 shares · fixed 5/10 tax · dividend index · ZERO admin functions
   │  DAO rail
   ▼
DHPFeeCollector      4% of every tax (+2% usage fallback) aggregated per token · sweeps to treasury on demand
```

| Contract | Role | Admin surface |
|---|---|---|
| **DHPFactory** | Deploys vault clones, holds the registry, enforces eligibility | Owner **renounced 2026-09-22** |
| **DHPVault** (clone) | What users interact with: deposit / withdraw / claim dividends | **None** — no pause, no setter, no upgrade, no owner |
| **DHPFeeCollector** | Aggregates the DAO's 4% fee rail per token, sweeps to treasury | Owner retained (policy: DAO Safe, never renounce) |

## Vault creation flow

1. **Any wallet** calls `createVault(token, creatorWallet, creationPlatformWallet)` and pays exactly **0.004 ETH** (0 for CRDD tier members while the tier is wired — currently dormant).
2. Duplicates are allowed — **free market**. Anyone can create a vault for any qualifying token, including duplicates of existing vaults.
3. The factory validates the token's `decimals()` ∈ [0, 18], clones the implementation via EIP-1167, and initialises it with the **fixed canon**: 5% entry tax, 10% exit tax, 80% dividend share, strict anti-fee-on-transfer mode. **Creators cannot configure taxes** — the canon is hardwired.
4. The **first** vault per token becomes the canonical registry entry (`getVault`) and is never overwritten.
5. The DAO curator (one exempt wallet) is capped at one vault per token — the curated layer stays squat-proof.

## Deterministic deployments

Nonce-0 deterministic deploys mean the factory `0x64BE…6929`, implementation `0x75a7…1D94` and collector `0x0D48…5499` resolve to the **same bytecode on every chain**. Deployments ran through a hard-gated script (`script/DeployDHP.s.sol`):

- hard chain-ID allowlist
- per-chain gas-price caps
- treasury ≠ deployer guard
- in-script post-deploy read-backs (`implementation()`, `feeCollector()`, decimals policy, owner)

A full vault-lifecycle smoke test passed on-chain on Arc testnet before the Arc mainnet launch.

## Why a separate fee collector?

Each vault's DAO-rail pointer is immutable at clone init. Routing through an intermediate collector means the DAO can migrate its treasury (one `setDefaultTreasury()` call) **without redeploying a single vault**.

## Next

- [The Tax Engine](tax-engine.md) — what happens to every taxed token
- [Dividends, Burn & Share Math](dividends-burn-shares.md) — the vault's internal accounting
- [Trust Architecture](trust-architecture.md) — who can do what
