# nuxt-typo3-theme

Customizable UI theme for [nuxt-typo3](https://github.com/TYPO3-Initiatives/nuxt-typo3).

# Features

✅ Mobile First

✅ UI for all content elements

✅ Storybook documentation

✅ TypeScript

✅ Unit test for content elements

## Requirements

This module uses Nuxt+TypeScript - please setup it beforehand:
https://typescript.nuxtjs.org/guide/setup

```bash
yarn add --dev @nuxt/typescript-build @nuxt/types
```

edit `nuxt.config.js`
```js
export default {
  buildModules: ['@nuxt/typescript-build']
}
```

Please remember to setup the `tsconfig.json`. More info [here](https://typescript.nuxtjs.org/guide/setup/)
## Installation 

```bash
yarn add nuxt-typo3-theme
```

edit `nuxt.config.js`:

```js
  buildModules: [
    '@nuxt/typescript-build',
    'nuxt-typo3-theme',
    'nuxt-typo3'
  ],
```

⚠️ This module installs default layouts for you, so you may see warning in the console:

```bash
WARN  Duplicate layout registration, "default" has been registered as "./layouts.default.bc51ceba.vue"
```

If this happens, you can delete your `layouts/default.vue` file or disable layouts provided by the theme in `nuxt.config.js`:

```js
  typo3theme: {
    layouts: false
  }
```
## Customization


### CSS

You can override CSS by SCSS or CSS variables:

`layouts/default.vue`:
```vue
<style>
:root {
    --color-primary: red;
    --color-bg-secondary: blue;
    --color-bg-primary: var(--color-primary);
    --font-family-primary: Helvetica;
}
</style>
```

If you need to override SCSS variables, please use https://www.npmjs.com/package/@nuxtjs/style-resources to import them as global ones.

### Override components
Some components are registered as a local components, for instance `UiLogo` in `CwHeader`.
You can replace `UiLogo` by registering your own component as a global one.

`components/UiLogo.vue`
```html
<template>
  <div>My logo</div>
</template>
<script>
export default {
  name: 'UiLogo'
}
</script>
```

`plugins/components.js`:
```js
import Vue from 'vue'
import UiLogo from '../components/Logo.vue'

Vue.component('UiLogo', UiLogo)
```

Use `components` file as a plugin in `nuxt.config.js`

`nuxt.config.js`:
```js
plugins: [
  '~plugins/components'
],
```

## Resources
+ [Nuxt-TYPO3 Documentation ](https://typo3-initiatives.github.io/nuxt-typo3/)
+ [Nuxt documentation](https://nuxtjs.org/)