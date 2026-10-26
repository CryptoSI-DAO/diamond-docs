---
title: Contracts Reference
sidebar_position: 2
---

# Contracts Reference

Deployment transaction hashes and block numbers for all mainnet deployments. All addresses are identical across chains — the txs differ per chain.

## Base Mainnet (8453) — 2026-09-15 · first deployment

| Contract | Address | Deployment tx | Block |
|---|---|---|---|
| DHPImplementation | `0x75a7…1D94` | [`0x2bcf…a458`](https://base.blockscout.com/tx/0x2bcfec48fe1f8eec49a14c5bfb5f28a842a3d8c9d1d0242b31ab95d15a6fa458) | 51,343,897 |
| DHPFeeCollector | `0x0D48…5499` | [`0xe23d…6cc2`](https://base.blockscout.com/tx/0xe23de5041d8fb98b5bf19433baea99938fd375223e2bbcfc6b6b457491e96cc2) | 51,343,898 |
| DHPFactory | `0x64BE…6929` | [`0xcbe9…9f8a`](https://base.blockscout.com/tx/0xcbe933ea581f19177ee0716b986ac9d9ae0d64eb9ebc56b1da16cf63c903f98a) | 51,343,899 |

## Ethereum (1) — 2026-09-22

| Contract | Deployment tx | Block |
|---|---|---|
| DHPImplementation | [`0x9f51…3d0e`](https://etherscan.io/tx/0x9f516a9d605b436e5ba6019c44e0fe3772d77b61b9c36ee5d89bca0279ff3d0e) | 26,032,989 |
| DHPFeeCollector | [`0xc2eb…1d58`](https://etherscan.io/tx/0xc2eb1c134398de571ce5a276513596c992590b2d6503ca45626bb0fc05ef1d58) | 26,032,990 |
| DHPFactory | [`0x0559…ccb4`](https://etherscan.io/tx/0x05590348167bb1334ada3f039ccd3c62a6d9647f867134622717e4b1636cc2b4) | 26,032,991 |

## BNB Smart Chain (56) — 2026-09-22

| Contract | Deployment tx | Block |
|---|---|---|
| DHPImplementation | [`0x22e6…99b0`](https://bscscan.com/tx/0x22e965a546d3b0fabff1b46f2b3b76a15f2856b560e72927351139058c0a99b0) | 123,371,417 |
| DHPFeeCollector | [`0x3c4d…f447`](https://bscscan.com/tx/0x3c4d254daeaf13897cd0ca2e9c1a7fc7e6c9efe55e62349eb9d69ec6a6bb4f47) | 123,371,421 |
| DHPFactory | [`0x5da1…8d23`](https://bscscan.com/tx/0x5da1e7056273d5658e8136a67a346f7499da2290bbcc459a408cdec5ac078d23) | 123,371,426 |

## Robinhood Chain (4663) — 2026-09-22

| Contract | Deployment tx | Block |
|---|---|---|
| DHPImplementation | [`0x2dda…c9e5`](https://robinhoodchain.blockscout.com/tx/0x2dda4f27858e1f9fefa0ff87e50790bb52990218b5b7ef8733c9932b5285c9e5) | 69,646,575 |
| DHPFeeCollector | [`0xe990…ca36`](https://robinhoodchain.blockscout.com/tx/0xe990c2794ffe71620e135d4e59ea063ebef48749a5621018a8f66154eaabca36) | 69,646,596 |
| DHPFactory | [`0x6e12…9d7f`](https://robinhoodchain.blockscout.com/tx/0x6e120ede1cfcb971279f12f1b9d9e1f940bdb966bcceac0bda3a6f08df909d7f) | 69,646,599 |

## Arc Mainnet (5042) — 2026-09-22 · launch day

| Contract | Deployment tx | Block |
|---|---|---|
| DHPImplementation | [`0x5e20…e0cb`](https://explorer.arc.io/tx/0x5e2017535b40ab435ecea363922adf0c965f6ffb3f7fe84bfbcd83f601f4e0cb) | 22,191,425 |
| DHPFeeCollector | [`0x06d1…6e77`](https://explorer.arc.io/tx/0x06d1eb5ba8269249e3d2d2711f59757f084c8ba45f1e74d385794ae43f26e77d) | 22,191,428 |
| DHPFactory | [`0xa2e9…c235`](https://explorer.arc.io/tx/0xa2e9764df9dfcdae324325efa019107ad12664261d31a3548658a236ec1c235a) | 22,191,433 |

## Source verification

- **Sourcify:** `match`/`exact_match` on **all 15 contract/chain pairs** (implementation + fee collector + factory × 5 chains). Factory on Robinhood Chain holds `exact_match` (creation + runtime). [Repository](https://repository.sourcify.dev/protocol/1/0x64BE13cE698684846Ae0642c1c63bb5eDE8F6929).
- **Blockscout:** all three contracts verified on Base (implementation + collector at deploy time, factory propagated from Sourcify ~1h after its 2026-10-05 submission).
- **Basescan (Etherscan-family):** pending API-key provisioning.
- Full ledger: `deployments.json` → `verificationLedger` in the contracts repo.
