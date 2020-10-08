import { getCurrentInstance } from '@vue/composition-api'
export default function useOverrideLocalComponents (
  rules: string[] = ['Cw', 'Ui']
): void {
  const scopeTest = new RegExp(`^${rules.join('|^')}`, 'i')
  const vm = getCurrentInstance()

  if (vm && vm.proxy.$options.name) {
    if (
      scopeTest.test(vm.proxy.$options.name) &&
      vm.root &&
      vm.proxy.$options.components
    ) {
      Object.keys(vm.proxy.$options.components).forEach(key => {
        if (typeof vm.root.proxy?.$options?.components?.[key] !== 'undefined') {
          delete vm.proxy.$options?.components?.[key]
        }
      })
    }
  }
}
