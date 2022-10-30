---
description: Generate a single cached CSS file for performance.
---

# Production

Winden uses a hybrid approach to integrate Tailwind CSS into WordPress.

In development mode, Winden will load Tailwind CSS CDN, which will generate the on-demand styles of the page on-the-fly. The usage of CDN is very fast and convenient, but it is not suitable for production.

Therefore, for the production mode, Winden will use the Worker to generate a tiny single cached CSS file for the entire website with less than 10KB. It will make your site lightweight and load fast.

## Generate the cached CSS file

To generate the CSS cache file, navigate to Winden setting page and below the Settings tab. Tick the "Use the cached CSS file instead of CDN" field and save. Once saved, click the "(Re-)Generate cache" link located below the checkbox.

![Generate cache](/img/generate-cache.png)

The task will be queued and will be run in the background. The process will take a few seconds (avg. 45 seconds) to complete.