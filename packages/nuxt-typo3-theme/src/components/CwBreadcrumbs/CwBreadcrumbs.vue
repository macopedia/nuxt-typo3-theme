<template>
  <div class="container">
    <UiBreadcrumbsList :breadcrumbs="breadcrumbs" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapGetters } from 'vuex'
import UiBreadcrumbsList from '../UiBreadcrumbsList'

export default defineComponent({
  name: 'CwBreadcrumbs',
  components: {
    UiBreadcrumbsList
  },
  computed: {
    ...mapGetters(['breadcrumbs'])
  }
})
</script>
