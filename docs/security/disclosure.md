---
title: Responsible Disclosure
sidebar_position: 4
---

# Responsible Disclosure

Full policy lives at [`SECURITY.md`](https://github.com/CryptoSI-DAO/diamond-hands-protocol/blob/main/SECURITY.md) in the contracts repo.

## Summary

- **Found a vulnerability?** Report it privately — do not open a public issue.
- **Scope:** DHPFactory, DHPImplementation (vaults), DHPFeeCollector, and the deployed bytecode on all five chains.
- **Out of scope:** the underlying tokens wrapped by vaults (their own bugs are theirs), UI-only issues without contract impact, and the already-documented [risks](risk-disclosure.md).

## How findings are handled

1. **Private triage** — acknowledged, severity-rated against the same Crit/High/Med scale used in the [seven self-audit passes](audits.md).
2. **Fix + regression** — fixes ship with a permanent regression test; the v1.4.0 reentrancy fix (same-day, PoC-converted-to-regression) is the template.
3. **Public report** — findings and fixes are published in-repo once resolved, with PoCs preserved in git history.

## Publication trail

| Artifact | Where |
|---|---|
| Self-audit reports (v1.0 → v1.4.0) | `SELF_AUDIT*.md` in the contracts repo |
| Latest audit PDF | `SELF_AUDIT_V1.4.0.pdf` in the contracts repo |
| PoC code | Preserved in git history |
| Verification ledger | `deployments.json` → `verificationLedger` |

:::note
There is no bug bounty pool at this time; the protocol has no treasury-controlled upgrade surface to indemnify. Reports are still honoured and credited.
:::
