import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import type {ReactNode} from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="dhp-hero">
      <div className="container">
        <img src="/img/logo-gem-192.png" alt="Diamond Hands Protocol" />
        <h1>Diamond Hands Protocol</h1>
        <p className="hero-tagline">{siteConfig.tagline}</p>
        <div className="hero-cta-row">
          <Link className="hero-cta primary" to="/docs/">
            Read the Docs
          </Link>
          <Link
            className="hero-cta ghost"
            href="https://app.dhp.cryptosidao.org">
            Open the App →
          </Link>
        </div>
        <div className="hero-stat-row">
          <div className="hero-stat">
            <div className="num">5</div>
            <div className="label">Mainnets live</div>
          </div>
          <div className="hero-stat">
            <div className="num">0</div>
            <div className="label">Vault admin keys</div>
          </div>
          <div className="hero-stat">
            <div className="num">80%</div>
            <div className="label">Tax → holders</div>
          </div>
          <div className="hero-stat">
            <div className="num">101/101</div>
            <div className="label">Tests passing</div>
          </div>
        </div>
      </div>
    </header>
  );
}

const cards = [
  {
    emoji: '🧭',
    title: 'Start here',
    link: '/docs/',
    text: 'What DHP is, what it is not, and the thesis: churn funds conviction.',
  },
  {
    emoji: '⚙️',
    title: 'How it works',
    link: '/docs/how-it-works/architecture',
    text: 'Factory, clones, the fixed 5/10 tax engine and the six-way split.',
  },
  {
    emoji: '⛓️',
    title: 'Deployments',
    link: '/docs/deployments/chains',
    text: 'Identical deterministic contracts on Base, Ethereum, BNB, Robinhood & Arc.',
  },
  {
    emoji: '🛡️',
    title: 'Security',
    link: '/docs/security/audits',
    text: '7 audit passes, all findings closed. 101 permanent tests. Fuzz-verified.',
  },
  {
    emoji: '📘',
    title: 'Guides',
    link: '/docs/guides/create-a-vault',
    text: 'Create a vault, deposit, claim dividends — step by step.',
  },
  {
    emoji: '❓',
    title: 'FAQ',
    link: '/docs/guides/faq',
    text: 'Where do my taxes go? Why is the factory renounced? Round-trip cost?',
  },
];

function QuickCards(): ReactNode {
  return (
    <div className="container">
      <div className="quick-cards">
        {cards.map((c) => (
          <Link key={c.title} className="quick-card" to={c.link}>
            <div className="qc-emoji">{c.emoji}</div>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description="Official documentation for Diamond Hands Protocol — key-less, admin-free ERC-20 vaults where the exit tax funds the holders. Live on 5 chains.">
      <HomepageHeader />
      <QuickCards />
      <div className="container" style={{paddingBottom: '3rem', textAlign: 'center'}}>
        <p style={{color: 'var(--ifm-color-emphasis-600)', fontSize: '0.85rem', maxWidth: '46rem', margin: '0 auto'}}>
          Every Diamond Hands Vault is a zero-sum game by design: payouts come from
          other users' taxes, not from yield. Users can lose tokens. Nothing on this
          site is financial advice.
        </p>
      </div>
    </Layout>
  );
}
