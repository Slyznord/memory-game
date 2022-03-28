<template>
  <div class="memory-game">
    <div class="wrapper">
      <Grid>
        <template #content>
          <Card
            v-for="(item, index) in cards"
            :key="index"
            :index="index"
            :element="item"
            :disabled="isDisabledAllCards"
            @on-click="cardClickHandler(index)"
          />
        </template>
      </Grid>

      <div
        v-if="!hasGameStarted"
        class="start-game"
      >
        <h2 class="start-game__h2">Нажмите кнопку старт чтобы начать игру</h2>
      </div>

      <div
        v-if="isGameOver"
        class="game-over"
      >
        <h2 class="game-over__h2">Игра окончена</h2>
        <form class="game-over__form">
          <input
            v-model="username"
            type="text"
            placeholder="Введите имя игрока"
            class="input game-over__input"
          >

          <Button
            value="Сохранить"
            class="button_primary"
            @onClick="saveResultHandler"
          />
        </form>
      </div>
    </div>

    <div class="wrapper">
      <Timer
        class="timer_mb-1"
        duration="10:00"
        :is-timer-started="hasGameStarted"
        @reset-timer="resetTimer($event)"
      />

      <Button
        v-if="hasGameStarted"
        value="Стоп"
        class="button_error"
        @onClick="stopGameHandler"
      />

      <Button
        v-else
        value="Старт"
        class="button_primary"
        @onClick="startGameHandler"
      />
    </div>

    <Table :elements="results">
      <template #header>
        <tr class="table__header">
          <td>Имя игрока</td>
          <td>Время прохождения</td>
        </tr>
      </template>
      <template #row="{ item }">
        <td>{{ item.username }}</td>
        <td>{{ item.time }}</td>
      </template>
    </Table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState, mapActions, mapMutations } from 'vuex'
import { Card as CardInt } from '@/interfaces'
import shuffle from '@/utils/shuffle.ts'
import formattedTime from '@/utils/formattedTime'

import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import Grid from '@/components/Grid.vue'
import Table from '@/components/Table.vue'
import Timer from '@/components/Timer.vue'

@Options({
  components: {
    Button,
    Card,
    Grid,
    Table,
    Timer
  },
  data () {
    return {
      spentTime: 0,
      username: ''
    }
  },
  computed: {
    ...mapState([
      'cards',
      'hasGameStarted',
      'isDisabledAllCards',
      'isGameOver',
      'openedCards',
      'results'
    ])
  },
  async mounted () {
    await this.init()
  },
  methods: {
    ...mapActions([
      'getCards',
      'getResults'
    ]),
    ...mapMutations([
      'checkingEndOfGame',
      'closeAllCards',
      'compareCards',
      'openCard',
      'saveResult',
      'setCards',
      'setResults',
      'startGame',
      'stopGame',
      'switchCardState',
      'switchGameStatus',
      'updateTimer'
    ]),
    async init () {
      const cards = await this.getCards()
      const doubleArr:CardInt[] = cards.concat(cards)
      const shuffleArray:any[] = shuffle(doubleArr)
      const mappingArray = shuffleArray.map((item:any):any => {
        item.isOpened = false
        return item
      })
      const results = JSON.parse(await this.getResults()) || []

      this.setCards(mappingArray)
      this.setResults(results)
    },
    async startGameHandler () {
      await this.init()
      this.startGame()
    },
    stopGameHandler ():void {
      this.stopGame()
      this.closeAllCards()
    },
    resetTimer (spentTime:number):void {
      if (this.isGameOver) this.spentTime = spentTime

      this.stopGame()
      this.closeAllCards()
    },
    cardClickHandler (index:number):void {
      let timer:number

      this.openCard(index)

      if (this.openedCards.length === 2) {
        const compare = ():void => {
          this.compareCards()
          this.checkingEndOfGame()
          this.switchCardState(false)
        }

        this.switchCardState(true)
        timer = this.setTimer(compare, 1000)
      } else {
        timer = this.setTimer(this.closeAllCards, 5000)
      }

      this.updateTimer(timer)
    },
    setTimer (fn: () => void = () => false, delay:number):number {
      return setTimeout(fn, delay)
    },
    saveResultHandler ():void {
      if (!this.username) return

      this.saveResult({
        username: this.username,
        time: formattedTime(this.spentTime)
      })
      this.switchGameStatus(false)
    }
  }
})
export default class App extends Vue {}
</script>
