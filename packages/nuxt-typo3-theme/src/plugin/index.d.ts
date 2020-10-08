import { PluginFunction } from 'vue'

declare interface UiPlugin {
  install: PluginFunction<Vue>
}

declare const UiPlugin: UiPlugin

export default UiPlugin
