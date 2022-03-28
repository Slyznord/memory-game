export default function shuffle (array:any[]):any[] {
  const copyOfArray:any[] = JSON.parse(JSON.stringify(array))

  for (let i:number = copyOfArray.length - 1; i > 0; i--) {
    const j:number = Math.floor(Math.random() * (i + 1));
    [copyOfArray[i], copyOfArray[j]] = [copyOfArray[j], copyOfArray[i]]
  }

  return copyOfArray
}
