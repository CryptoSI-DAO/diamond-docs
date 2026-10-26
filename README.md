# Diamond Hands Protocol — Documentation

Official documentation site for [Diamond Hands Protocol](https://dhp.cryptosidao.org) — key-less, admin-free ERC-20 vaults where the exit tax funds the holders. Live on 5 chains.

**Live:** https://docs.dhp.cryptosidao.org · **Fallback:** https://dhp-docs.vercel.app

## Editing

Docs live in `docs/` as Markdown (`.md` / `.mdx`). Every number is canon from the contracts repo (`deployments.json`, `SELF_AUDIT*.md`) and the whitepaper v1.4.0 — do not drift it.

```bash
npm install
npm start        # dev server
npm run build    # must pass — build throws on broken links
```

Deploys via Vercel (`dhp-docs` project). Protocol source: [diamond-hands-protocol](https://github.com/CryptoSI-DAO/diamond-hands-protocol).
