<template>
  <div class="timer">
    <p class="timer__p">{{ formattedTime }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import formattingTime from '@/utils/formattedTime'

@Options({
  props: {
    duration: {
      type: String,
      default: '04:30'
    },
    isTimerStarted: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      timer: null,
      currentTime: null
    }
  },
  computed: {
    formattedTime ():string {
      return formattingTime(this.currentTime)
    }
  },
  mounted () {
    this.currentTime = this.getSeconds(this.duration)
  },
  methods: {
    startTimer () {
      this.timer = setInterval(() => {
        this.currentTime--
      }, 1000)
    },
    resetTimer () {
      this.$emit('resetTimer', this.getSpentTime())
      clearTimeout(this.timer)
      this.currentTime = this.getSeconds(this.duration)
    },
    getSeconds (time:string):number {
      const [minutes, seconds]:string[] = time.split(':')
      return (parseInt(minutes) * 60) + parseInt(seconds)
    },
    getSpentTime ():number {
      return this.getSeconds(this.duration) - this.currentTime
    }
  },
  watch: {
    currentTime (time) {
      if (time === 0) this.resetTimer()
    },
    isTimerStarted (value) {
      value ? this.startTimer() : this.resetTimer()
    }
  }
})
export default class Timer extends Vue {}
</script>
