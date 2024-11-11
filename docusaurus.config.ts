import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Austin Sternberg Personal Website',
  tagline: 'Computer Science Student at Kent State University',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://yoyojesus.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yoyojesus', // Usually your GitHub org/user name.
  projectName: 'website2.0', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Austin Sternberg',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/YoyoJesus',
          label: 'My Github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Connect With Me',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/yoyoje_sus/',
            },
            {
              label: 'Twitter (X)',
              href: 'https://x.com/Yoyojesus45',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UClPq39i7rc0DrfKMlvWr4AQ',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/austin-sternberg-765620218/',
            },
            {
              label: 'Email',
              href: 'mailto:austinsternberg45@gmail.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/YoyoJesus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Austin Sternberg - Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
