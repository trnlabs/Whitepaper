import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'whitepaper/index',
      label: 'Overview',
    },
    {
      type: 'doc',
      id: 'whitepaper/0-the-root-network-trn-a-new-journey-and-philosophical-transition',
      label: '0. The ROOT Network (TRN)',
    },
    {
      type: 'category',
      label: '1. Economic Design',
      link: {
        type: 'generated-index',
        slug: '/whitepaper/1-economic-design',
        title: '1. Economic Design',
        description:
          'ROOT token mechanics, utility, distribution, and supporting liquidity infrastructure.',
      },
      items: [
        'whitepaper/economic-design/1-1-overview',
        'whitepaper/economic-design/1-2-token-utility',
        // 'whitepaper/economic-design/1-3-token-distribution', // temporarily removed
        'whitepaper/economic-design/1-4-economic-flywheel',
        'whitepaper/economic-design/1-5-vault-operation-summary',
        'whitepaper/economic-design/1-6-root-s-economic-characteristics',
      ],
    },
    {
      type: 'category',
      label: '2. Governance Roadmap',
      link: {
        type: 'generated-index',
        slug: '/whitepaper/2-governance-roadmap',
        title: '2. Governance Roadmap',
        description:
          'The phased rollout for governance, voting, and community participation.',
      },
      items: [
        'whitepaper/governance-roadmap/2-1-vision',
        'whitepaper/governance-roadmap/2-2-governance-phases',
        'whitepaper/governance-roadmap/2-3-voting-mechanism',
        'whitepaper/governance-roadmap/2-4-governance-process',
        'whitepaper/governance-roadmap/2-5-community-voting-post-governance-phase',
      ],
    },
    {
      type: 'category',
      label: '3. Treasury Policy',
      link: {
        type: 'generated-index',
        slug: '/whitepaper/3-treasury-policy',
        title: '3. Treasury Policy',
        description:
          'Treasury responsibilities, routing rules, and risk controls for sustainable liquidity.',
      },
      items: [
        'whitepaper/treasury-policy/3-1-role-of-the-treasury',
        'whitepaper/treasury-policy/3-2-revenue-routing-architecture',
        'whitepaper/treasury-policy/3-3-buyback-and-burn-policy',
        'whitepaper/treasury-policy/3-4-transparency-and-reporting',
        'whitepaper/treasury-policy/3-5-risk-management-framework',
        'whitepaper/treasury-policy/3-6-treasury-governance-feedback-loop',
      ],
    },
    {
      type: 'doc',
      id: 'whitepaper/4-timeline-and-roadmap',
      label: '4. Timeline and Roadmap',
    },
    {
      type: 'doc',
      id: 'whitepaper/5-conclusion',
      label: '5. Conclusion',
    },
  ],
};

export default sidebars;
