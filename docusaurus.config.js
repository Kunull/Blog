// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blog',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/0_medium.png',

  url: 'https://blog.kunull.net/',
  baseUrl: '/',

  organizationName: 'Kunull',
  projectName: 'Blog',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          blogSidebarCount: 'ALL',
          blogTitle: 'Kunull // Blog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      titleDelimiter: ' // ', // ✅ GLOBAL TITLE SEPARATOR

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      navbar: {
        title: 'BLOG',
        logo: {
          alt: 'My Site Logo',
          src: 'img/0_medium.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Other sites',
            position: 'right',
            items: [
              { label: 'Reports', href: 'https://reports.kunull.net/' },
              { label: 'Writeups', href: 'https://writeups.kunull.net/' },
              { label: 'Main', href: 'https://kunull.net/' },
            ],
          },
          {
            type: 'dropdown',
            label: 'Socials',
            position: 'right',
            items: [
              { label: 'GitHub', href: 'https://github.com/kunull' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kunull/' },
            ],
          },
          {
            type: 'dropdown',
            label: 'Contact',
            position: 'right',
            items: [
              { label: 'Email', href: 'mailto:contact@kunull.net' },
              { label: 'Matrix', href: 'https://matrix.to/#/@kunull:matrix.org' },
            ],
          },
        ],
      },

      prism: {
        theme: prismThemes.oneDark,
      },

      algolia: {
        appId: 'ERR3RMELLO',
        apiKey: 'dd4bfe1f81798866108d44a6cf7b57d2',
        indexName: 'kunull',
        typoTolerance: false,
        maxResultsPerGroup: 9999,
      },

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
};

export default config;
