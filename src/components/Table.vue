<template>
  <table class="table">
    <slot name="header" />
    <tr
      v-for="(item, index) in elements"
      :key="index"
      class="table__content"
    >
      <slot
        name="row"
        :item="item"
      />
    </tr>
  </table>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
  props: {
    elements: {
      type: Array,
      default: () => []
    }
  }
})
export default class Table extends Vue {}
</script>
