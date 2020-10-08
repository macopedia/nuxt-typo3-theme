import CwFooter from '../CwFooter/index'
import { mockData } from './CwFooter.data'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default {
  title: 'TYPO3 Theme/Content Elements/CwFooter',
  component: CwFooter,
}

export const Standard = (args: any, { argTypes }: { argTypes: any }) => ({
  components: { CwFooter },
  store: new Vuex.Store({
      state: {
        ...mockData
      },
      getters: {
        footerContactData: state => state.contactData,
        footerNavigation: state => state.footerNavigation,
        socialMenu: state => state.socialMenu
      }
    }),
  template: '<CwFooter />'
})

Standard.args = mockData
