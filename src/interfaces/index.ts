export interface Card {
  id: string,
  value: string,
  isOpened: boolean
}

export interface Result {
  username: string | number,
  timer: string
}

export interface State {
  cards: Card[],
  openedCards: Card[],
  matchedCards: Card[],
  timer: number,
  hasGameStarted: boolean,
  isDisabledAllCards: boolean,
  isGameOver: boolean,
  results: Result[]
}
