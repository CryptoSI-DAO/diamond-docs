---
title: Verification Ledger
sidebar_position: 2
---

# Verification Ledger

Status of every source-verification and wallet-safety layer, last updated 2026-10-05.

| Layer | Status |
|---|---|
| **Sourcify** | `match`/`exact_match` on **all 15 contract/chain pairs**; Robinhood factory `exact_match` (creation + runtime) |
| **Blockscout** | All three contracts verified on Base |
| **Blockaid** | Developer verification submitted 2026-10-05 — review in progress |
| **Basescan (Etherscan-family)** | Pending API-key provisioning |
| **External audit firm** | RFP drafted (`RFP_AUDIT.md`); not yet commissioned |

## The Blockaid false-positive story (why this ledger exists)

Coinbase Wallet (Blockaid-powered) flagged the `createVault` transaction as *"high-risk transfer / untrusted contract"*. Root cause: DHPFactory had **no Sourcify record on Base** at the time — young + unverified = default flag. The factory was verified on Sourcify the same day (2026-10-05); verification propagated to Blockscout automatically within ~1 hour.

**What this means for users:** the warning can persist for vendor caches. Before signing a creation transaction, verify the preview reads exactly:

- **To:** factory `0x64BE…6929`
- **Value:** 0.004 ETH
- **Function:** `createVault`

The app shows this notice inline at the creation step.

## Verify it yourself

```bash
# Contract source + verification status (Blockscout v2 API)
curl -s https://base.blockscout.com/api/v2/smart-contracts/0x64BE13cE698684846Ae0642c1c63bb5eDE8F6929 | jq '.is_verified, .name'

# Sourcify repository entry
curl -s https://repository.sourcify.dev/protocol/8453/0x64BE13cE698684846Ae0642c1c63bb5eDE8F6929/metadata.json | jq '.compiler.version'
```

Audit reports and PoCs are preserved in the contracts repo: `SELF_AUDIT*.md`, with PoC code pinned in git history.
