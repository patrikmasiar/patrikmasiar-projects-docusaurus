// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Projects - Patrik Mäsiar 🚀 | Sofware developer',
  tagline: 'My projects are reactive',
  url: 'https://projects.patrikmasiar.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'patrikmasiar',
  projectName: 'patrikmasiar-projects-docusaurus',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Patrik Mäsiar | Projects',
        logo: {
          alt: 'Patrik Mäsiar projects Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://patrikmasiar.com',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://github.com/patrikmasiar',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `🚀 Patrik Mäsiar`,
      },
    }),
};

module.exports = config;
