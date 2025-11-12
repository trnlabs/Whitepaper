import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a9e'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '425'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '555'),
            routes: [
              {
                path: '/0-the-root-network-trn-a-new-journey-and-philosophical-transition',
                component: ComponentCreator('/0-the-root-network-trn-a-new-journey-and-philosophical-transition', '447'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/4-timeline-and-roadmap',
                component: ComponentCreator('/4-timeline-and-roadmap', '69e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/5-conclusion',
                component: ComponentCreator('/5-conclusion', 'b37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/1-economic-design',
                component: ComponentCreator('/whitepaper/1-economic-design', '5fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/2-governance-roadmap',
                component: ComponentCreator('/whitepaper/2-governance-roadmap', 'bd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/3-treasury-policy',
                component: ComponentCreator('/whitepaper/3-treasury-policy', '31c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/economic-design/1-1-overview',
                component: ComponentCreator('/whitepaper/economic-design/1-1-overview', '9f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/economic-design/1-2-token-utility',
                component: ComponentCreator('/whitepaper/economic-design/1-2-token-utility', 'd12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/economic-design/1-4-economic-flywheel',
                component: ComponentCreator('/whitepaper/economic-design/1-4-economic-flywheel', '614'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/economic-design/1-5-vault-operation-summary',
                component: ComponentCreator('/whitepaper/economic-design/1-5-vault-operation-summary', 'f36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/economic-design/1-6-root-s-economic-characteristics',
                component: ComponentCreator('/whitepaper/economic-design/1-6-root-s-economic-characteristics', 'be8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/governance-roadmap/2-1-vision',
                component: ComponentCreator('/whitepaper/governance-roadmap/2-1-vision', '9d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/governance-roadmap/2-2-governance-phases',
                component: ComponentCreator('/whitepaper/governance-roadmap/2-2-governance-phases', 'd04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/governance-roadmap/2-3-voting-mechanism',
                component: ComponentCreator('/whitepaper/governance-roadmap/2-3-voting-mechanism', 'fe9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/governance-roadmap/2-4-governance-process',
                component: ComponentCreator('/whitepaper/governance-roadmap/2-4-governance-process', '251'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/governance-roadmap/2-5-community-voting-post-governance-phase',
                component: ComponentCreator('/whitepaper/governance-roadmap/2-5-community-voting-post-governance-phase', '93f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/treasury-policy/3-1-role-of-the-treasury',
                component: ComponentCreator('/whitepaper/treasury-policy/3-1-role-of-the-treasury', '614'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/treasury-policy/3-2-revenue-routing-architecture',
                component: ComponentCreator('/whitepaper/treasury-policy/3-2-revenue-routing-architecture', '105'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/treasury-policy/3-3-buyback-and-burn-policy',
                component: ComponentCreator('/whitepaper/treasury-policy/3-3-buyback-and-burn-policy', '0e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/treasury-policy/3-4-transparency-and-reporting',
                component: ComponentCreator('/whitepaper/treasury-policy/3-4-transparency-and-reporting', 'a0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/treasury-policy/3-5-risk-management-framework',
                component: ComponentCreator('/whitepaper/treasury-policy/3-5-risk-management-framework', 'eeb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/whitepaper/treasury-policy/3-6-treasury-governance-feedback-loop',
                component: ComponentCreator('/whitepaper/treasury-policy/3-6-treasury-governance-feedback-loop', 'f12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'b14'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
