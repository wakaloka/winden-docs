---
sidebar_position: 1
description: Winden is a Tailwind CSS integration for WordPress page builders.
slug: /
---

# Introduction

🪄 Winden will help you to enjoy **building a beautiful website using page builder and Tailwind CSS**.

🤝 It works on any server, even shared-hosting. **No need to install Node.js**!

👋 Winden is a WordPress plugin that allows you to use [Tailwind CSS](https://tailwindcss.com/) inside your favorite page builders. It is agnostic and has no vendor lock-in, so you can use it with any page builders like [Gutenberg](https://wordpress.org/gutenberg), [Elementor](https://elementor.com), [Bricks Builder](https://bricksbuilder.io), [Oxygen Builder](https://oxygenbuilder.com), [Zion Builder](https://zionbuilder.io), etc.

## Features

Winden is built with the following features in mind:

- **⚛️ Tiny Final CSS** :
  - A single CSS file for the entire website with less than 10KB
  - Cache the final CSS file for production
- **🔓 Agnostic Integration** :
  - No vendor lock-in. Work with any of your favorite page builders
  - Simple WordPress hooks to integrate with your page builder
  - We will add the built-in support for more page builders in the future
- **✂️ Developer Experience** :
  - The latest Tailwind CSS version (3.x) is always available
  - Support for Tailwind CSS plugins, powered by [Skypack](https://skypack.dev)
  - WordPress hooks to customize the behavior of Winden
- **⚖️ Hybrid** :
  - Development — Developing your site accompanied by Tailwind CSS CDN and get the feedback instantly
  - Production — Generate a single cached CSS file using the Worker
- **⚡️ Lightning-fast and 🪶 Lightweight** : Production-ready with no performance impact

:::info Prerequisites
The rest of the documentation assumes basic familiarity with Tailwind CSS. If you are new to Tailwind CSS, it might not be the best idea to jump right into the Winden as your first step - grasp the [basics](https://tailwindcss.com/), then come back! 💪
:::

## Comparison with other tools {#comparison}

Across all CSS frameworks specified to page builder, Winden is the only one that is agnostic and not tied to any page builder, giving you the freedom to use any page builder you want.

Winden essentially is only a WordPress plugin that integrates Tailwind CSS with page builders seamlessly. We are standing on the shoulder of giants and are not trying to reinvent the wheel. Single learning curve, and use the same knowledge everywhere, not limited only to the page builder. 

We've also studied other CSS frameworks specified for page builders and would like to share our insights on the comparison, hopefully helping you navigate the prismatic choices.

### OxyNinja

[OxyNinja](https://oxyninja.com/core/) is a lightweight, responsive and modern utility CSS framework created exclusively for Oxygen Builder<sup title="citation"><a href="https://oxyninja.com/help/core-documentation/">[1]</a></sup>. It comes with a collection of pre-made components and templates to boost your productivity.

On the other hand, Winden is not tied to Oxygen Builder and doesn't come with any pre-made components or templates. However, there is tons of pre-made components and template already available out there, such as:
<div className="[&_ul]:columns-3">

- [Tailwind UI](https://tailwindui.com/)
- [Flowbite](https://flowbite.com/)
- [daisyUI](https://daisyui.com/)
- [Meraki UI](https://merakiui.com/)
- [Tailwind UI kit](https://tailwinduikit.com/)
- [Preline UI](https://preline.co/)
- [TailGrids](https://tailgrids.com/)
- [Flowrift](https://flowrift.com/)
- [HyperUI](https://www.hyperui.dev/)
- [Tailwind Components](https://tailwindcomponents.com/)
- [Tailwind Toolbox](https://www.tailwindtoolbox.com/)
- [Tailwind Templates](https://tailwindtemplates.io/)
- [Tailwind Elements](https://tailwind-elements.com/)
- [Razor UI](https://razorui.com/)
- etc.

</div>

### OxyMade

[OxyMade](https://oxymade.com/) has the same goal, to bring the power of Tailwind CSS into the page builder. 

Oxymade is a fork of the Tailwind CSS framework that exclusive to Oxygen Builder. The objective of the fork is to overcome the limitation of Tailwind CSS version 2.x, which requires Node.js to output the CSS styles. The fork is also made to be compatible with Oxygen Builder, in which the class name are limited to alphanumeric characters only. Therefore, OxyMade only synced up to Tailwind CSS 2.x, where the latest Tailwind CSS version is 3.x.

OxyMade comes with a collection of pre-made components and templates to boost your productivity. However, the component and templates are exclusive to be used inside the Oxygen Builder only, and you can't use it with other page builders or even plain HTML.

### Automatic.css

[Automatic.css](https://automaticcss.com/) is a utility CSS framework that is self-proclaimed to be the #1 and most practical, no-nonsense utility CSS framework for WordPress page builder, despite there are better, successful, and popular solutions out there such as [OxyNinja](#oxyninja) and [OxyMade](#oxymade).

The origin of Automatic.css is a forked of OxyNinja with the addition of the extensive usage of `clamp` and `calc` CSS functions everywhere to bring fluid typography and marketed as "automatic" typography, colors, and spacing.

Prior to the creation of Automatic.css, the author was promoting OxyNinja exclusively on their channel and company. It was changed after the introduction of Automatic.css, and the author published a comparison article between OxyNinja and Automatic.css, which is an apparent conflict of interest and to degrade or put down OxyNinja.

The same attitude was made<sup><a href="https://www.facebook.com/groups/1626639680763454/posts/4955803564513699/">[2]</a></sup> by the author when the Winden was teased<sup><a href="https://www.facebook.com/groups/1626639680763454/posts/4923666124394110/">[3]</a></sup> to public and it become clear when the author publishing an article 3 hours before in the countdown of the official launch<sup><a href="https://www.facebook.com/groups/1626639680763454/posts/4954812177946171/">[4]</a></sup> of Winden.
The article succeeded in holding Winden as the Winden developer was not prepared for that kind of attack, and the author was able to take advantage of the situation and gain more attention and traction.

Even though the result of the official launch doesn't meet the expectation as a result of the attack, the Winden developer keeps focusing on the development, and we are proud of the progress made so far. It also motivated us to be the first to introduce the agnostic integration, which now supports a wide range of page builders and will be supported more in the future.

Tailwind CSS is the most popular framework alongside Bootstrap and others. Use the battle-tested CSS Framework instead of an unpopular foreign framework with a limited maintainer. Learn once and use everywhere, not limited only to the page builder.

### OxyProps

[OxyProps](https://oxyprops.com/) is a modern CSS custom properties first CSS Framework for Oxygen Builder. It is inspired, and built on top of Open Props, an open source collection of expertly crafted web design token, aimed at creating consistent components<sup><a href="https://docs.oxyprops.com/en/getting-started-with-oxyprops/#what-is-oxyprops">[5]</a></sup>.

It has the same purpose as Winden, to integrate an existing CSS framework with the page builder. However, OxyProps is not agnostic and only works with Oxygen Builder.

### TailPress

[TailPress](https://wordpress.org/plugins/tailpress/) is a WordPress plugin similar to Winden, which integrates Tailwind CSS with WordPress. However, TailPress uses a fixed Tailwind CSS version embedded in the plugin and doesn't support Tailwind CSS plugins.
It also produces multiple CSS files — a file for each page that you require to load the page on your browser to generate the cache, which is not ideal for production.