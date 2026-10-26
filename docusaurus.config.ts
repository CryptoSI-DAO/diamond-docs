import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Diamond Hands Protocol',
  tagline: 'Paper hands fund diamond hands. On-chain. Forever.',
  favicon: 'img/favicon.svg',

  url: 'https://docs.dhp.cryptosidao.org',
  baseUrl: '/',

  organizationName: 'CryptoSI-DAO',
  projectName: 'diamond-docs',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/CryptoSI-DAO/diamond-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/og.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: 'live_banner',
      content:
        '💎 <b>v1.4.0 live on 5 mainnets</b> — factory renounced, 101/101 tests passing. <a href="https://app.dhp.cryptosidao.org" target="_blank" rel="noopener noreferrer">Open the App →</a>',
      backgroundColor: '#0b1a33',
      textColor: '#9ed3ff',
      isCloseable: false,
    },
    navbar: {
      title: 'Diamond Hands Protocol',
      logo: {
        alt: 'Diamond Hands Protocol logo',
        src: 'img/logo-gem-192.png',
      },
      items: [
        {to: '/docs/', label: 'Docs', position: 'left'},
        {to: '/docs/deployments/chains', label: 'Deployments', position: 'left'},
        {to: '/docs/security/audits', label: 'Security', position: 'left'},
        {to: '/docs/guides/faq', label: 'FAQ', position: 'left'},
        {
          href: 'https://github.com/CryptoSI-DAO/diamond-hands-protocol',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://app.dhp.cryptosidao.org',
          label: 'Open App',
          position: 'right',
          className: 'navbar__app-cta',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Protocol',
          items: [
            {label: 'Introduction', to: '/docs/'},
            {label: 'How It Works', to: '/docs/how-it-works/architecture'},
            {label: 'Tax Engine', to: '/docs/how-it-works/tax-engine'},
            {label: 'Deployed Chains', to: '/docs/deployments/chains'},
          ],
        },
        {
          title: 'Trust',
          items: [
            {label: 'Audits & Tests', to: '/docs/security/audits'},
            {label: 'Trust Architecture', to: '/docs/how-it-works/trust-architecture'},
            {label: 'Risk Disclosure', to: '/docs/security/risk-disclosure'},
            {label: 'Responsible Disclosure', to: '/docs/security/disclosure'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Website', href: 'https://dhp.cryptosidao.org'},
            {label: 'Open the App', href: 'https://app.dhp.cryptosidao.org'},
            {label: 'Contracts', href: 'https://github.com/CryptoSI-DAO/diamond-hands-protocol'},
            {label: 'CryptoSI DAO', href: 'https://cryptosidao.org'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} CryptoSI DAO · Contracts MIT-licensed · Zero-sum by design — nothing here is financial advice.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['solidity'],
    },
    metadata: [
      {name: 'description', content: 'Official documentation for Diamond Hands Protocol (DHP) — key-less, admin-free ERC-20 vaults where the exit tax funds the holders. Live on Base, Ethereum, BNB, Robinhood Chain and Arc.'},
      {property: 'og:type', content: 'website'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
  } satisfies Preset.ThemeConfig,

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap',
      },
    },
  ],
};

export default config;
