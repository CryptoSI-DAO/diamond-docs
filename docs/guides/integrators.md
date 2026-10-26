---
title: For Integrators
sidebar_position: 4
---

# For Integrators

Building a frontend, bot or indexer on DHP? Start here.

## Addresses

All five chains, identical deterministic addresses:

```text
Factory:          0x64BE13cE698684846Ae0642c1c63bb5eDE8F6929
Implementation:   0x75a7Fee6e8c17F6A7C39136C69A869fe99961D94
FeeCollector:     0x0D48743923D8fcE041325F98B5Ce884a323f5499
DAO Treasury:     0x0B172a4E265AcF4c2E0aB238F63A44bf29bBd158
```

Chain IDs: Base `8453` · Ethereum `1` · BNB `56` · Robinhood `4663` · Arc `5042`.

## Creating vaults (and earning the 2% platform share)

```solidity
factory.createVault{value: 0.004 ether}(
  token,                    // ERC-20 with decimals() in [0,18]
  creatorWallet,            // earns 2% of every tax forever
  creationPlatformWallet    // YOUR address — earns 2% forever
);
```

The third argument is how platforms monetise: pass **your** wallet as `creationPlatformWallet` and you receive 2% of every entry/exit tax on vaults you spawn, immutably, on every chain.

## Read-path notes

- `getVault(token)` returns the **canonical** vault (first created per token, never overwritten). Duplicates exist but only the canonical entry is registry-indexed.
- Use `vaultCount()` / `allVaultsAt(index)` to enumerate vaults — batch the calls; scanning `VaultCreated` logs over wide block ranges will hit per-chain `eth_getLogs` caps (Base rejects ranges > 2,000 blocks).
- `previewDeposit/Mint/Withdraw/Redeem` are **exact** — execution matches preview (fuzz-verified invariant). Safe to display without hedging.

## ERC-4626 divergences

DHP vaults implement the ERC-4626 surface but intentionally **do not inherit** OpenZeppelin's `ERC4626` (it fixes the asset at deploy time — incompatible with per-token clones). The full divergence list lives in [`ERC4626_COMPATIBILITY.md`](https://github.com/CryptoSI-DAO/diamond-hands-protocol/blob/main/ERC4626_COMPATIBILITY.md) — read it before assuming OZ semantics. Key items:

- `totalAssets()` excludes unclaimed dividend liabilities, stuck partner revenue and burned balances
- `mint()` cannot seed an empty vault (first position must be `deposit()`)
- FOT/rebase tokens revert under strict mode unless the vault opted into permissive mode at creation

## Fee collector facts

- Each vault's DAO-rail pointer is immutable; partners are paid **per tax event** (push), not per claim.
- Payouts to blacklisted/reverting partner wallets are booked as **stuck revenue** — claimable permissionlessly by the entitled wallet via `claimStuck()`. They never revert the user's transaction.
- `sweep()` on the collector moves accumulated DAO fees to the treasury — the only admin surface in the protocol, retained by policy (never renounced).
