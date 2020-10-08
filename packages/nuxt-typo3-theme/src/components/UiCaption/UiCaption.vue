<template>
  <component :is="tag" class="ui-caption">
    <span v-if="description" class="title">
      {{ description }}
    </span>
    <time v-if="date" class="date">
      {{ date }}
    </time>
  </component>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'UiCaption',
  props: {
    description: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'figcaption'
    }
  }
})
</script>

<style lang="scss">
.ui-caption {
  display: flex;

  .title {
    margin-right: auto;
  }

  .date {
    margin-left: auto;
  }
}
</style>
