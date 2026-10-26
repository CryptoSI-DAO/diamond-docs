---
title: Renounce Transactions
sidebar_position: 3
---

# Renounce Transactions

The factory's `owner()` is `0x000…000` on **all five mainnets** — renounced 2026-09-22. Every renounce is a public, verifiable on-chain transaction:

| Chain | Renounce tx | Date |
|---|---|---|
| **Base** | [`0xb14ecb1b628c8ab4c47dfe24fa38a68a53947b2d60501f0e37653f7e80a0e4d2`](https://base.blockscout.com/tx/0xb14ecb1b628c8ab4c47dfe24fa38a68a53947b2d60501f0e37653f7e80a0e4d2) | 2026-09-22 |
| **Ethereum** | [`0x51666ee1c26ca16b82db08eacececf73ed1e53bf6a577fc040cf1050d2d60a43`](https://etherscan.io/tx/0x51666ee1c26ca16b82db08eacececf73ed1e53bf6a577fc040cf1050d2d60a43) | 2026-09-22 |
| **BNB Chain** | [`0x0a65f25c00913c321c8618538d0bc10473984fed7216f4472870e81923cee2a6`](https://bscscan.com/tx/0x0a65f25c00913c321c8618538d0bc10473984fed7216f4472870e81923cee2a6) | 2026-09-22 |
| **Robinhood Chain** | [`0xba50bb3b4f5e89fe96b3f0c43a0044dfb87c586706883028a2ae7563339b7a5a`](https://robinhoodchain.blockscout.com/tx/0xba50bb3b4f5e89fe96b3f0c43a0044dfb87c586706883028a2ae7563339b7a5a) | 2026-09-22 |
| **Arc** | [`0x140668e45f8b3f8f093055465613f59e4f29849ff63c42bcaa78b914f8f199ea`](https://explorer.arc.io/tx/0x140668e45f8b3f8f093055465613f59e4f29849ff63c42bcaa78b914f8f199ea) | 2026-09-22 |

## What this means

- **Creation fee, decimals policy and curation params are now immutable** — creation, registry and canon cannot be changed by anyone, ever.
- Permissionless `createVault()` works forever; renouncing only froze curation cosmetics and tier config.
- The **fee collector** was deliberately **not** renounced: `sweep()` is the only path for DAO fees to reach the treasury, so renouncing would brick them (audit finding M-NEW-1). Standing policy: two-step transfer to a DAO Safe, then held forever — never renounced. See [Trust Architecture](../how-it-works/trust-architecture.md).

You can verify the current owner yourself on any explorer:

```bash
cast call 0x64BE13cE698684846Ae0642c1c63bb5eDE8F6929 "owner()(address)" --rpc-url <BASE_RPC>
# → 0x0000000000000000000000000000000000000000
```
