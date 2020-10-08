<template>
  <nav class="ui-pagination">
    <ul class="ui-pagination__list">
      <li v-if="currentPage !== 1">
        <UiButton
          size="extra-small"
          class="ui-pagination__btn"
          :to="previousPage"
        >
          <UiIcon name="chevron" class="svg-right" />
        </UiButton>
      </li>
      <li v-for="(page, index) in totalPages" :key="index">
        <UiButton
          v-if="typeof page === 'number'"
          size="extra-small"
          :to="`${slug}/${page}`"
          :variant="currentPage === page ? 'primary' : 'inverted'"
          class="ui-pagination__btn"
        >
          {{ page }}
        </UiButton>
        <span v-else class="ui-pagination__more">
          {{ page }}
        </span>
      </li>
      <li v-if="currentPage !== length">
        <UiButton size="extra-small" class="ui-pagination__btn" :to="nextPage">
          <UiIcon name="chevron" class="svg-left" />
        </UiButton>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import UiButton from '../UiButton'
import UiIcon from '../UiIcon'

export default defineComponent({
  name: 'UiPagination',
  components: {
    UiButton,
    UiIcon
  },
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    length: {
      type: Number,
      required: true
    },
    slug: {
      type: String,
      default: '/'
    }
  },
  computed: {
    totalPages (): (string | number)[] {
      const totalVisible = 6

      if (this.length < totalVisible) {
        return [...this.range(1, this.length)]
      }

      const even = totalVisible % 2 === 0 ? 1 : 0
      const left = Math.floor(totalVisible / 2)
      const right = this.length - left + 1 + even

      if (this.currentPage > left && this.currentPage < right) {
        const start = this.currentPage - left + 2
        const end = this.currentPage + left - 2 - even

        return [1, '...', ...this.range(start, end), '...', this.length]
      } else if (this.currentPage === left) {
        const end = this.currentPage + left - 1 - even
        return [...this.range(1, end), '...', this.length]
      } else if (this.currentPage === right) {
        const start = this.currentPage - left + 1
        return [1, '...', ...this.range(start, this.length)]
      } else {
        return [
          ...this.range(1, left),
          '...',
          ...this.range(right, this.length)
        ]
      }
    },
    nextPage (): string {
      return `${this.slug}/${this.currentPage + 1}`
    },
    previousPage (): string {
      return `${this.slug}/${this.currentPage - 1}`
    }
  },
  methods: {
    range (from: number, to: number): number[] {
      const arrayLength = (to - from) / 1 + 1

      return Array.from({ length: arrayLength }, (_, i) => from + i * 1)
    }
  }
})
</script>

<style lang="scss" scoped>
.ui-pagination {
  margin-top: var(--space-5);
  text-align: center;

  &__btn {
    margin: 0 var(--space-2);
    padding: 0;
    height: 1.5em;
    min-width: 1.5em;
    width: 100%;
  }

  &__more {
    margin: 0 var(--space-2);
  }

  &__list {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    margin: 0;

    & > li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
