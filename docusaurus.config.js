// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config



import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blog',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/0_medium.png',

  // Set the production url of your site here
  url: 'https://blog.kunull.net/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Kunull', // Usually your GitHub org/user name.
  projectName: 'Blog', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          blogSidebarCount: 'ALL',
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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
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
              {
                label: 'Reports',
                href: 'https://reports.kunull.net/',
              },
              {
                label: 'Writeups',
                href: 'https://writeups.kunull.net/',
              },
              {
                label: 'Main',
                href: 'https://kunull.net/',
              },
            ],
          },

          {
            type: 'dropdown',
            label: 'Socials',
            position: 'right',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/kunull',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/kunull/',
              },  
            ],
          },

          {
            type: 'dropdown',
            label: 'Contact',
            position: 'right',
            items: [
              {
                label: 'Email',
                href: 'mailto:contact@kunull.net',
              },
              {
                label: 'Matrix',
                href: 'https://matrix.to/#/@kunull:matrix.org',
              },
            ],
          },
          
          // {
          //     href: 'https://kunalwalavalkarblog.vercel.app',
          //     label: 'Blog',
          //     position: 'right',
          // },         

          // {
          //   href: 'https://kunalwalavalkar.vercel.app',
          //   label: 'Main site',
          //   position: 'right',
          // },
          
          // {
          //     href: 'https://github.com/kunull',
          //     label: 'GitHub',
          //     position: 'right',
          // },
          
          // {
          //     href: 'https://www.linkedin.com/in/kunalwalavalkar/',
          //     label: 'LinkedIn',
          //     position: 'right',
          // },  
        ],
      },
      // footer: {
      //   style: 'light',
      //   links: [
      //     {
      //       title: 'Other collections',
      //       items: [
      //         {
      //           label: 'Write-ups',
      //           href: 'https://kunalwalavalkarwrite-ups.vercel.app',
      //         },
      //       ],
      //     },
          
      //     {
      //       title: 'Socials',
      //       items: [
      //         {
      //           label: 'Main site',
      //           href: 'https://kunalwalavalkar.vercel.app',
      //         },
      //         {
      //           label: 'Github',
      //           href: 'https://github.com/Knign',
      //         },
      //         {
      //           href: 'https://www.linkedin.com/in/kunalwalavalkar/',
      //           label: 'LinkedIn',
      //         },
      //         // {
      //         //   label: 'Email',
      //         //   href: 'walavalkarkunal@skiff.com',
      //         // },
      //       ],
      //     },
          
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Kunal Walavalkar.`,
      // },
      prism: {
        theme: prismThemes.oneDark,
      },
      algolia: {
          // The application ID provided by Algolia
        appId: 'ERR3RMELLO',
          // Public API key: it is safe to commit it
        apiKey: 'dd4bfe1f81798866108d44a6cf7b57d2',
        indexName: 'kunull',
        // contextualSearch: false,
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
