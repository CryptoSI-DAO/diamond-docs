---
title: Deployed Chains
sidebar_position: 1
---

# Deployed Chains

**One protocol, five chains.** Identical bytecode + deterministic nonce-0 deploys = **the same contract addresses on every chain**.

| Chain | Chain ID | Status | Deployed | Gas token | Explorer |
|---|---|---|---|---|---|
| **Base Mainnet** | 8453 | 🟢 LIVE | 2026-09-15 | ETH | [Blockscout](https://base.blockscout.com) |
| **Ethereum** | 1 | 🟢 LIVE | 2026-09-22 | ETH | [Etherscan](https://etherscan.io) |
| **BNB Smart Chain** | 56 | 🟢 LIVE | 2026-09-22 | BNB | [BscScan](https://bscscan.com) |
| **Robinhood Chain** (Arbitrum Orbit L2) | 4663 | 🟢 LIVE | 2026-09-22 | ETH | [Blockscout](https://robinhoodchain.blockscout.com) |
| **Arc Mainnet** (Circle, USDC-native) | 5042 | 🟢 LIVE | 2026-09-22 | **USDC** | [Arc Explorer](https://explorer.arc.io) |
| Arc Testnet | 5042002 | 🟢 rehearsal — full smoke test passed | 2026-09-22 | USDC | [Arcscan Testnet](https://testnet.arcscan.app) |
| Base Sepolia | 84532 | 🔵 testnet lineage (v1.3.0) | 2026-09-12 | ETH | [Blockscout Sepolia](https://base-sepolia.blockscout.com) |

## Same on every mainnet

| Contract | Address (identical on all 5 chains) |
|---|---|
| **DHPFactory** | `0x64BE13cE698684846Ae0642c1c63bb5eDE8F6929` |
| **DHPImplementation** | `0x75a7Fee6e8c17F6A7C39136C69A869fe99961D94` |
| **DHPFeeCollector** | `0x0D48743923D8fcE041325F98B5Ce884a323f5499` |

**Deployer:** `0x525aCf49bb68EF5e76D2B40917da0Dc335D14cd0` · **DAO treasury & curator:** `0x0B172a4E265AcF4c2E0aB238F63A44bf29bBd158` · **Creation fee:** 0.004 ETH · CRDD tier dormant (`crddToken = 0x0`)

## Testnet lineage

| Contract | Base Sepolia (v1.3.0, 2026-09-12) |
|---|---|
| DHPImplementation | `0xa69459881ec5fc7393e6a9212cb4232ec96b7d96` |
| DHPFeeCollector | `0x412fa6073e977bdf57dabed1336dc7bd70d6e8c1` |
| DHPFactory | `0x85d6436aabcba27888bc673a7f7cf6be3d2e4b9d` |

The Arc testnet dress rehearsal (2026-09-22) ran the **full vault lifecycle on-chain** with a mock token → vault `0xd91ba3f495ee2ef66aebefe46a9731e985753a8b` → deposit (5% entry tax collected) → dividend accrual → claim → redeem, proving the USDC-gas path before Arc mainnet launch.

## Full deployment transaction hashes

Every creation tx, per chain and per contract, is listed in [Contracts Reference](contracts.md) and the repo's `deployments.json`. Renounce transactions have their own [verifiable page](renounce-txs.md).
