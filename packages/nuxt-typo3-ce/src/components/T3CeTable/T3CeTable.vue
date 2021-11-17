<template>
  <div :class="`t3-ce-table--${tableClass}`" class="t3-ce-table">
    <T3CeHeader v-bind="sharedProps" />
    <table>
      <caption v-if="tableCaption">
        {{
          tableCaption
        }}
      </caption>
      <thead v-if="thead.length">
        <tr>
          <th v-for="(col, colKey) in thead" :key="colKey">
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody v-if="tbody">
        <tr v-for="(row, rowKey) in tbody" :key="rowKey">
          <td
            :is="tableHeaderPosition === 2 && colKey === 0 ? 'th' : 'td'"
            v-for="(col, colKey) in row"
            :key="colKey"
          >
            {{ col }}
          </td>
        </tr>
      </tbody>
      <tfoot v-if="tfoot.length">
        <tr>
          <td v-for="(col, colKey) in tfoot" :key="colKey">
            {{ col }}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { T3CeSharedProps } from '../../../types'
import useSharedProps, {
  getSharedProps
} from '../../composables/useSharedProps'

type BodyTextType = string[][]

export default defineComponent({
  name: 'CeTable',
  props: {
    ...useSharedProps(),
    tableCaption: {
      type: String,
      default: ''
    },
    tableHeaderPosition: {
      type: Number,
      default: 0
    },
    tableClass: {
      type: String,
      default: ''
    },
    tableTfoot: {
      type: String,
      default: '0'
    },
    bodytext: {
      type: Array as PropType<BodyTextType>,
      required: true
    }
  },
  setup (props: T3CeSharedProps) {
    const sharedProps = getSharedProps(props)
    return {
      sharedProps
    }
  },
  computed: {
    thead (): string[] {
      return (
        (this.tableHeaderPosition === 1 &&
          [...(this.bodytext as BodyTextType)].shift()) ||
        []
      )
    },
    tbody (): BodyTextType {
      const tbody = [...(this.bodytext as BodyTextType)]
      if (this.thead.length) {
        tbody.shift()
      }
      if (this.tfoot.length) {
        tbody.pop()
      }
      return tbody
    },
    tfoot (): string[] {
      return (
        (this.tableTfoot === '1' &&
          [...(this.bodytext as BodyTextType)].pop()) ||
        []
      )
    }
  }
})
</script>
