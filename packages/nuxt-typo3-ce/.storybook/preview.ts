import Vue from 'vue';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import CePlugin from '../index';

Vue.use(CePlugin);

// Define global components, directives / mock components
Vue.component('NuxtLink', {
  props: {
    to: String
  },
  template: '<a :href="to" nuxt-link><slot/></a>'
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  }
}
