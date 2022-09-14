---
description: Integrate Winden to your plugins/themes easily
---

# Integration

Winden is a page builder agnostic Tailwind CSS integration for Wordpress. It is designed to work with any page builder or theme — no vendor lock-in.

## Built-in integration

Winden comes with built-in integration with the following page builders:

- [Gutenberg](https://wordpress.org/gutenberg)
- [Elementor](https://elementor.com)
- [Bricks Builder](https://bricksbuilder.io)
- [Oxygen Builder](https://oxygenbuilder.com)
- [Zion Builder](https://zionbuilder.io)

And we plan to add more first-class integration in the future.

## WordPress hooks

Winden provides simple WordPress hooks to integrate with your page builder.

### `f!winden/core/runtime:is_inside_builder`

This filter hook is used to determine if the current page is being edited in a page builder.

Winden will load the CDN instead of the cached CSS file when the page is edited in a page builder's editor.

```php
<?php

add_filter('f!winden/core/runtime:is_inside_builder', 'example_is_inside_builder', 10);

/**
 * @param bool $is By default, this is false.
 */
function example_is_inside_builder(bool $is): bool
{
    // Check if the current page is inside the Bricks Builder.
    if (bricks_is_builder()) {
        return true;
    }

    return $is;
}
```

### `f!winden/core/runtime:tailwind_config`

This filter hook is used to modify the Tailwind CSS configuration before it is used on the CDN and Worker. 

```php
<?php

add_filter('f!winden/core/runtime:tailwind_config', 'example_breakpoint_placeholder', 10);

/**
 * [Bricks Builder] Replace the breakpoint placeholder `SYNC_BREAKPOINT` with the actual value.
 */
function example_breakpoint_placeholder(string $config): string
{
    // return $config immediately if $config doesn't contain 'SYNC_BREAKPOINT' placeholder
    if (false === strpos($config, 'SYNC_BREAKPOINT')) {
        return $config;
    }

    $breakpoints = \Bricks\Breakpoints::get_breakpoints();
    $base_width  = \Bricks\Breakpoints::$base_width;

    $theme = [];

    foreach ($breakpoints as $breakpoint) {
        $key = apply_filters('f!winden/builder/bricks/runtime:breakpoint_key', $breakpoint['key']);

        /**
         * Larger than base breakpoint:  use 'min-width'
         * Smaller than base breakpoint: use 'max-width'
         */
        $min_max = $breakpoint['width'] > $base_width ? 'min-width' : 'max-width';

        $raw = ['raw' => sprintf('(%s: %spx)', $min_max, $breakpoint['width'])];

        // Is base breakpoint, but not mobile-frist: Add first
        if (!\Bricks\Breakpoints::$is_mobile_first && (isset($breakpoint['base']) || $breakpoint['width'] > $base_width)) {
            $theme = [$key => $raw] + $theme;
        } else {
            $theme[$key] = $raw;
        }
    }

    return str_replace('SYNC_BREAKPOINT', json_encode($theme, JSON_FORCE_OBJECT), $config);
}
```

### `f!winden/core/worker:compile_content_payload`

This filter hook is used to modify the HTML content before sending it to the Worker. You can append additional HTML content to the payload.

```php
<?php

add_filter('f!winden/core/worker:compile_content_payload', 'example_gutenberg_append_content_payload', 10);

/**
 * [Gutenberg] Append the rendered Gutenberg content to the payload.
 */
function example_gutenberg_append_content_payload(string $content): string
{
    $posts = [];

    $query = new WP_Query([
        'posts_per_page' => -1,
        'post_type' => [
            'post',
            'page',
            'wp_template',
        ],
    ]);

    foreach ($query->posts as $post) {
        if (!empty(trim($post->post_content))) {
            $post_content = $post->post_content;

            $post_content = do_blocks($post_content);
            $post_content = wptexturize($post_content);
            $post_content = convert_smilies($post_content);
            $post_content = shortcode_unautop($post_content);
            $post_content = wp_filter_content_tags($post_content);
            $post_content = do_shortcode($post_content);

            $posts[] = $post_content;
        }
    }

    $content .= implode("\n", $posts);

    return $content;
}
```

### Render the Tailwind CSS CDN

If you want to render the Tailwind CSS CDN manually, you can use the `\Wakaloka\Winden\Plugin::get_instance()->runtime->enqueue_cdn()` function to render the CDN.

```php
<?php

add_action('init', 'example_bricks_iframe_render_cdn');

function example_bricks_iframe_render_cdn()
{
    if (bricks_is_builder_iframe()) {
        add_action('wp_head', function() {
            \Wakaloka\Winden\Plugin::get_instance()->runtime->enqueue_cdn();
        }, 1000001);
    }
}
```

## Custom integration

While Winden provides built-in integration, we also provide a collection of custom integration snippets that you can copy-paste into your themes' `function.php` file or use the [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin.

### Scripts Organizer - ACF Gutenberg Addon

[Scripts Organizer – ACF Gutenberg Addon](https://dplugins.com/products/scripts-organizer-acf-gutenberg-addon/) is an add-on for [Scripts Organizer](https://dplugins.com/products/scripts-organizer/) plugin that allows you to Create Gutenberg blocks with ease and extend it with ACF Pro dynamic fields.

Since the Gutenberg integration uses the rendered content, you will probably not need this snippet, but we will keep it here for future reference.

```php
<?php

add_filter('f!winden/core/worker:compile_content_payload', 'example_scorg_acf_append_content_payload', 10);

/**
 * Append the Scripts Organizer – ACF Gutenberg Addon content to the payload.
 */
function example_scorg_acf_append_content_payload(string $content): string
{
    $postmeta_key = 'SCORG_GACF_php_script';

    $query = new WP_Query([
        'posts_per_page' => -1,
        'fields' => 'ids',
        'post_type' => ['scorg_ga'],
        'meta_query' => [
            'relation' => 'OR',
            ['key' => $postmeta_key,],
        ],
    ]);

    foreach ($query->posts as $post_id) {
        $meta_value = get_post_meta($post_id, $postmeta_key, true);
        if ($meta_value) {
            $content .= base64_decode($meta_value);
        }
    }

    return $content;
}
```

### Meta Box Views

[MB Views](https://metabox.io/plugins/mb-views/) is an extension for [Meta Box](https://metabox.io/), which helps you to get Meta Box fields and build your templates on the front end fast and easily.

```php
<?php

add_filter('f!winden/core/worker:compile_content_payload', 'example_mb_views_append_content_payload', 10);

/**
 * [Meta Box Views] Append the MB Views content to the payload.
 */
function example_mb_views_append_content_payload(string $content): string
{
    $posts = [];

    $query = new WP_Query([
        'posts_per_page' => -1,
        'post_type' => [
            'mb-views',
        ],
    ]);

    foreach ($query->posts as $post) {
        if (!empty(trim($post->post_content))) {
            $content .= $post->post_content;
        }
    }

    return $content;
}
```