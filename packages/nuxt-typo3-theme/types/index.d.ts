// shims
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue

  module 'vue/types/vue' {
    interface Vue {
      $style: Record<string, string>
      $mq: 'sm' | 'md' | 'lg'
    }
    interface VueConstructor {
      $style: Record<string, string>
      $mq: 'sm' | 'md' | 'lg'
      // eslint-disable-next-line camelcase
      __nuxt_typo3_overrides_mixin__: boolean
    }
  }
}

declare module 'body-scroll-lock'

declare module 'vue-mq' {
  import { PluginObject } from 'vue/types'
  const VueMq: PluginObject<unknown>
  export default VueMq
}
