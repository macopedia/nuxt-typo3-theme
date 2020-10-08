<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="ce-rte" v-html="content" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
// source: https://github.com/nuxt/nuxtjs.org/blob/master/components/HtmlParser.vue
export default defineComponent({
  name: 'CeHtmlParser',
  props: {
    /**
     * HTML Content to parse
     */
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      links: ([] as unknown) as HTMLCollection
    }
  },
  watch: {
    content: 'contentUpdated'
  },
  mounted () {
    this.$nextTick(this.addListeners)
  },
  beforeDestroy () {
    this.removeListeners()
  },
  methods: {
    navigate (e: Event) {
      let target = e.target as HTMLElement
      let i = 0
      // Go throught 5 parents max to find a tag
      while (
        i < 5 &&
        !(target instanceof HTMLAnchorElement) &&
        target &&
        target.parentNode
      ) {
        target = target.parentNode as HTMLElement
        i++
      }
      // If target is still not a link, ignore
      if (!(target instanceof HTMLAnchorElement)) return
      return this.redirect(e, target)
    },
    redirect (e: Event, target: HTMLAnchorElement) {
      const href = target.getAttribute('href')
      // Get link target, if local link, navigate with router link
      if (href && href[0] === '/' && this.$router) {
        e.preventDefault()
        // Edge case: run this code only if vue router is installed
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore-next-line
        this.$router.push(href)
      }
    },
    contentUpdated () {
      this.removeListeners()
      this.$nextTick(() => {
        this.addListeners()
      })
    },
    addListeners () {
      this.links = this.$el.getElementsByTagName('a')
      for (let i = 0; i < this.links.length; i++) {
        this.links[i].addEventListener('click', this.navigate, false)
      }
    },
    removeListeners () {
      if (this.links) {
        for (let i = 0; i < this.links.length; i++) {
          this.links[i].removeEventListener('click', this.navigate, false)
        }
        this.links = ([] as unknown) as HTMLCollection
      }
    }
  }
})
</script>
