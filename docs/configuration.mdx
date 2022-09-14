---
description: Configuring your winden's behavior through the plugin setting page.
---

# Configuration

Tailwind CSS has been designed from the ground up to be extensible and customizable, so that no matter what you’re building you never feel like you’re fighting the framework. Because Tailwind CSS is a framework for building bespoke user interfaces, it has been designed from the ground up with customization in mind.

Winden tries to preserve this customization flexibility when integrating the Tailwind CSS with the page builders.

Some customization may more conveniently be done in your favorite text editors, such as [VS Code](https://code.visualstudio.com) or [Sublime Text](https://www.sublimetext.com). These customizations can be stored as a file in the `wp-content/uploads/winden` folder of your sites, given the following directory structure:

```
.
└── wp-content
   └── uploads
      └── winden
         ├── global.css
         └── cdn.config.js
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```mdx-code-block
<Tabs>
<TabItem value="wp-content/uploads/winden/global.css">
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .winden-card {
    background-color: theme('colors.black');
    border-radius: theme('borderRadius.lg');
    padding: theme('spacing.6');
    box-shadow: theme('boxShadow.xl');
  }
  .winden-avatar {
    @apply h-12 w-12 rounded-full ring-2 ring-white;
  }
}
```

```mdx-code-block
</TabItem>
<TabItem value="wp-content/uploads/winden/cdn.config.js">
```

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },
      // ...
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
```

```mdx-code-block
</TabItem>
</Tabs>
```

## Global CSS

The Global CSS is the main CSS that the Tailwind CSS refers to when generating the style of the website.

Tailwind CSS official documentation has covered this topic in-depth. Some of them are:
- https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer
- https://tailwindcss.com/docs/functions-and-directives

If you want to customize your Global CSS, add your customizations to the "Global CSS" field on the Winden setting page and under the Settings tab.

![Global CSS field](/img/global-css.png)

The Global CSS can also be stored as a file on `wp-content/uploads/winden/global.css`.

## Tailwind CSS Configuration

The development and production phases have different workflow and environments, so the configuration could be different because of the environment specification.

The development phase used the CDN (which runs directly on your browser) to generate the design style on the fly, and the production phase used the Worker (which runs on the Node.js process) to produce the CSS cache file.

If you want to customize the configuration, add your customizations to the "Tailwind Config" field on the Winden setting page and under the Settings tab.

![Tailwind Config field](/img/tailwind-config.png)

The configuration can also be stored as a file on `wp-content/uploads/winden/cdn.config.js`.

:::note
Your configuration and Tailwind CSS plugin will be bundled into the CDN and Worker, so you must ensure that the configuration and its dependencies are compatible with the Node.js and browser.
:::

### Tailwind CSS plugin

Winden supports the Tailwind CSS plugin. You can add the plugin by adding them with the `require` function on the "Tailwind Config" field.

```js title="wp-content/uploads/winden/cdn.config.js"
module.exports = {
  plugins: [
    // highlight-next-line
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),

    // flowbite components
    require('flowbite/plugin')

    // daisyUI components
    require('daisyui')
  ],
}
```

Winden automatically bundles the plugin and its dependencies into the CDN and Worker. The Tailwind CSS plugin on the CDN environment will be loaded via [Skypack](https://www.skypack.dev), and the Worker will install the plugin via [npm](https://www.npmjs.com). 

We also provide a filter hook `f!winden/core/worker:worker_npm_package` to give you the ability to change the Tailwind CSS plugin list before it is bundled into the Worker.

```php
<?php

// highlight-next-line
add_filter('f!winden/core/worker:worker_npm_package', 'example_filter_worker_npm_package', 10);

function example_filter_worker_npm_package(string $npm_package): string 
{
    // rename the `flowbite/plugin` plugin to `flowbite` on the plugin list
    $npm_package = str_replace('flowbite/plugin', 'flowbite', $npm_package);

    // remove `tailwindcss/colors` from the plugin list 
    $npm_package = str_replace('tailwindcss/colors', '', $npm_package);

    return $npm_package;
}
```
