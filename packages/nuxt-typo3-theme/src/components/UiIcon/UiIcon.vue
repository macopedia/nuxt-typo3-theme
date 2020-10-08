<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'UiIcon',
  functional: true,
  inheritAttrs: false,
  render (createElement, ctx) {
    return createElement('svg-icon', {
      props: ctx.props,
      class: [ctx.data.class, ctx.data.staticClass]
    })
  }
})
</script>
<style>
.svg-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  color: inherit;
  vertical-align: middle;
  fill: none;
  stroke: currentColor;
}

.svg-fill {
  fill: currentColor;
  stroke: none;
}

.svg-fill-stroke,
.svg-fill-stroke .svg-icon {
  fill: currentColor;
  stroke: currentColor;
}

.svg-up {
  /* default */
  transform: rotate(0deg);
}

.svg-right {
  transform: rotate(90deg);
}

.svg-down {
  transform: rotate(180deg);
}

.svg-left {
  transform: rotate(-90deg);
}
</style>
