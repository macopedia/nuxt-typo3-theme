<template>
  <div>
    <template v-if="isNewsList">
      <UiNewsList :news="data.list" />
      <UiPagination
        v-if="showPagination"
        :length="length"
        :current-page="data.pagination.current"
        :slug="slug"
      />
    </template>
    <UiNewsDetail v-else :article="data">
      <T3CeRenderer v-if="data.contentElements" :content="data.contentElements" />
    </UiNewsDetail>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { mapState, mapMutations } from 'vuex'

import type { RootState } from '../../store/index'
import type { NewsData } from './T3CeNewsPi1.types'

import UiPagination from '../UiPagination'
import { UiNewsList, UiNewsDetail } from '../UiNews'

export default defineComponent({
  name: 'T3CeNewsPi1',
  components: {
    UiPagination,
    UiNewsList,
    UiNewsDetail
  },
  props: {
    data: {
      type: Object as PropType<NewsData>,
      required: true
    }
  },
  computed: {
    ...mapState({
      slug: state => (state as RootState).typo3?.page?.page?.navigation?.slug
    }),
    isNewsList (): boolean {
      return this.data.settings.action === 'list'
    },
    length (): number {
      return this.data.pagination.numberOfPages
    },
    showPagination (): boolean {
      return this.length > 1
    }
  },
  watch: {
    isNewsList: {
      immediate: true,
      handler (value: boolean) {
        const breadcrumb = {
          title: this.data.detail?.title,
          link: this.data.detail?.canonical,
          target: '',
          active: 1,
          current: 0,
          spacer: 0
        }
        this.SET_BREADCRUMB(value ? null : breadcrumb)
      }
    }
  },
  destroyed () {
    this.SET_BREADCRUMB(null)
  },
  methods: {
    ...mapMutations(['SET_BREADCRUMB'])
  }
})
</script>
