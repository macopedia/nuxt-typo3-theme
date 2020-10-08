<script lang="ts">
import Vue, { VNode, CreateElement } from 'vue'

export default Vue.extend({
  name: 'UiOrder',
  functional: true,
  render (h: CreateElement): VNode {
    return h()
  }
})
</script>
<style lang="scss">
@import '../../../styles/shared';
@import '../shared/breakpoints';
@import '../shared/grid';
@import './UiOrder';

@include make-grid-columns-order();
</style>
