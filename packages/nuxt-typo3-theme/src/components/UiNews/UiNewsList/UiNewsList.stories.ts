import UiNewsList from './index'

import { newsElementMockup } from '../UiNewsElement/UiNewsElement.data'

export default {
  title: 'TYPO3 Theme/UI/UiNewsList',
  component: UiNewsList,
  args: {
    news: [newsElementMockup]
  }
}

export const standard = (_: any, types: any) => ({
  components: {
    UiNewsList
  },
  props: Object.keys(types.args),
  methods: {
    addNews (): void {
      (this as any).news.push(newsElementMockup)
    }
  },
  template: `
    <div>
      <UiNewsList v-bind="$props" />
      <button @click="addNews">test button - add more news</button>
    </div>
    `
})
