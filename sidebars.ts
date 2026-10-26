import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'How It Works',
      link: {type: 'doc', id: 'how-it-works/architecture'},
      items: [
        'how-it-works/architecture',
        'how-it-works/tax-engine',
        'how-it-works/dividends-burn-shares',
        'how-it-works/trust-architecture',
        'how-it-works/vault-creation',
      ],
    },
    {
      type: 'category',
      label: 'Deployments',
      link: {type: 'doc', id: 'deployments/chains'},
      items: [
        'deployments/chains',
        'deployments/contracts',
        'deployments/renounce-txs',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      link: {type: 'doc', id: 'security/audits'},
      items: [
        'security/audits',
        'security/verification',
        'security/risk-disclosure',
        'security/disclosure',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      link: {type: 'doc', id: 'guides/create-a-vault'},
      items: [
        'guides/create-a-vault',
        'guides/deposit-withdraw',
        'guides/claim-dividends',
        'guides/integrators',
        'guides/faq',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {type: 'doc', id: 'reference/tokenomics'},
      items: [
        'reference/tokenomics',
        'reference/worked-examples',
        'reference/erc4626-notes',
        'reference/glossary',
      ],
    },
  ],
};

export default sidebars;
