/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'installation',
        'configuration',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'guides/production',
        {
          type: 'category',
          label: 'Integration',
          link: {
            type: 'doc',
            id: 'guides/integration',
          },
          items: [
            'guides/integration/bricks-builder',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced Guides',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'advanced/worker',
      ],
    },
  ]
};

module.exports = sidebars;
