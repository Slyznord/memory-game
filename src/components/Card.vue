<template>
  <div>
    <transition name="fade">
      <div
        v-if="!isMatched"
        :class="[
          'card',
          { 'card_select' : element.isOpened }
        ]"
        @click="handleClick"
      >
        <div class="card__front"></div>
        <div class="card__back">
          {{ element.value }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState } from 'vuex'
import { Card as CardInt } from '@/interfaces'

@Options({
  props: {
    element: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState([
      'matchedCards'
    ]),
    isMatched ():CardInt | undefined {
      return this.matchedCards.find((item:CardInt) => item.id === this.element.id)
    }
  },
  methods: {
    handleClick ():boolean | void {
      if (this.disabled || this.element.isOpened) return
      this.$emit('onClick')
    }
  }
})
export default class Card extends Vue {}
</script>
