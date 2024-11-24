import { dfs, dfsOption } from './dfs'
console.log(
  dfs([1], {
    getChildrens(data: number) {
      return [data * 2, data - 5]
    },
    isFinished(data: number) {
      return data === 343
    },
    checkChildren(data: number) {
      return data > -100 && data <= 1000
    },
    getHash(data: number) {
      return data.toString()
    },
    getScore(data: number, depth: number) {
      return -Math.abs(343 - data) - depth * 15
    },
  } as dfsOption<number, undefined>).reverse()
)
