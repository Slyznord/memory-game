<template>
  <div
    class="button"
    @click="$emit('onClick')"
  >
    {{ value }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    value: {
      type: String,
      required: true
    }
  }
})
export default class Button extends Vue {}
</script>
