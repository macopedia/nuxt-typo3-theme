declare module '*.vue' {
  import Vue from 'vue'
  export default Vue

  declare module 'vue/types/vue' {
    interface Vue {
      $style: Record<string, string>
      $typo3: Record<string, unknown>
      $store: Record<string, unknown>
    }
  }
}
