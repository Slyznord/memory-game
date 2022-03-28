import { createStore } from 'vuex'
import { Card, Result, State } from '@/interfaces'
import Api from '@/API/api'

export default createStore<State>({
  state: {
    cards: [],
    openedCards: [],
    matchedCards: [],
    timer: 0,
    hasGameStarted: false,
    isDisabledAllCards: true,
    isGameOver: false,
    results: []
  },
  mutations: {
    setCards (state, payload:Card[]):void {
      state.cards = payload
    },
    startGame (state):void {
      state.hasGameStarted = true
      state.isDisabledAllCards = false
    },
    stopGame (state):void {
      state.hasGameStarted = false
      state.isDisabledAllCards = true
      state.matchedCards = []
      state.openedCards = []
    },
    openCard (state, index:number):void {
      if (state.openedCards.length === 2) {
        state.openedCards.forEach((item:Card):void => { item.isOpened = false })
        state.openedCards = []
      }

      state.openedCards.push(state.cards[index])
      state.cards[index].isOpened = true
    },
    closeAllCards (state):void {
      state.cards.forEach((item:Card):void => {
        item.isOpened = false
      })
      state.openedCards = []
    },
    compareCards (state):void {
      if (state.openedCards[0].id === state.openedCards[1].id) {
        state.matchedCards.push(state.openedCards[0])
      } else {
        state.openedCards.forEach((item:Card):void => { item.isOpened = false })
        state.openedCards = []
      }
    },
    checkingEndOfGame (state):void {
      if (state.matchedCards.length === (state.cards.length / 2)) {
        state.hasGameStarted = false
        state.isGameOver = true
        state.matchedCards = []
        state.openedCards = []
      }
    },
    updateTimer (state, value:number):void {
      clearInterval(state.timer)
      state.timer = value
    },
    switchCardState (state, value:boolean):void {
      state.isDisabledAllCards = value
    },
    saveResult (state, payload:Result):void {
      state.results.push(payload)
      localStorage.setItem('memoryGame', JSON.stringify(state.results))
    },
    setResults (state, results):void {
      state.results = results
    },
    switchGameStatus (state, value:boolean):void {
      state.isGameOver = value
    }
  },
  actions: {
    async getCards ():Promise<any> {
      return await Api.get('/jsons/cards.json')
    },
    async getResults ():Promise<any> {
      return localStorage.getItem('memoryGame')
    }
  }
})
