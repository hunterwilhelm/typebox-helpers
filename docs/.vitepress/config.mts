import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Typebox Helpers',
  description: 'Type-safe helpers for TypeBox',
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico', type: 'image/x-icon' }],
    // ['meta', { property: 'og:image', content: 'https://typebox-helpers.hunterwilhelm.com/og.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Typebox Helpers' }],
    ['meta', { property: 'og:description', content: 'Type-safe helpers for TypeBox' }],
    ['meta', { property: 'og:url', content: 'https://typebox-helpers.hunterwilhelm.com' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:title', content: 'Typebox Helpers' }],
    ['meta', { property: 'twitter:description', content: 'Type-safe helpers for TypeBox' }],
    // ['meta', { property: 'twitter:image', content: 'https://typebox-helpers.hunterwilhelm.com/og.png' }],
  ],
  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hunterwilhelm/typebox-helpers' },
    ],
  },
  markdown: {
    codeTransformers: [
      transformerTwoslash({}),
    ],
    languages: ['js', 'jsx', 'ts', 'tsx'],
  },
})
