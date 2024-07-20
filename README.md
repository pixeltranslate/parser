# @pixeltranslate/parser

This is the translation file parser used by [PixelTranslate](https://pixeltranslate.com) to import pre-existing translation files.

## Development

### Setup

Make sure to install the dependencies:

```bash
pnpm install
```

### Development Server

Start the development server on http://localhost:3000

```bash
pnpm run dev
```

### Installing the layer

To use the layer, add the following into your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  layers: [
    'github:pixeltranslate/parser', // Current main branch
    'github:pixeltranslate/parser#v1.0.0' // From a certain release tag
  ]
})
```
