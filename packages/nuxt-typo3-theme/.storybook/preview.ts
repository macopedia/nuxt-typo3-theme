import Vue from 'vue';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles/core.scss';
import UiPlugin from '../src/plugin';

Vue.component('NuxtLink', {
  props: {
    to: String
  },
  template: '<a :href="to" nuxt-link><slot/></a>'
})
Vue.use(UiPlugin);

const viewports = {
  iphone12: {
    name: 'iPhone 12',
    styles: {
      width: '390px',
      height: '844px',
    }
  }
}


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...viewports
    },
    defaultViewport: 'iphone12'
  },
}
