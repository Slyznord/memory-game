export default (time:number):string => {
  let minutes:number | string = Math.floor(time / 60)
  let seconds:number | string = time % 60

  minutes = minutes.toString().length > 1 ? minutes : `0${minutes}`
  seconds = seconds.toString().length > 1 ? seconds : `0${seconds}`

  return `${minutes}:${seconds}`
}
