import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'The Root Network',
  tagline: '',
  favicon: 'img/profile1.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.trnlabs.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'trnlabs', // Usually your GitHub org/user name.
  projectName: 'Whitepaper', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/trnlabs/Whitepaper/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/trn-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'The Root Network Logo',
        src: 'img/Group.png',
      },
      items: [
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Whitepaper',
          items: [
            {
              label: 'Overview',
              to: '/',
            },
            {
              label: 'Economic Design',
              to: '/whitepaper/1-economic-design',
            },
            {
              label: 'Governance Roadmap',
              to: '/whitepaper/2-governance-roadmap',
            },
            {
              label: 'Treasury Policy',
              to: '/whitepaper/3-treasury-policy',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/eduTbtnrnc',
            },
            {
              label: 'X',
              href: 'https://x.com/TRNLabs',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'TRN Labs',
              href: 'https://trnlabs.org/',
            },
            {
              label: 'Blog',
              href: 'https://trnlabs.inblog.io/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/trnlabs',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} TRN Labs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
