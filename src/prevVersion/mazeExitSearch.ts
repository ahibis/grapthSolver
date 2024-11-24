import { dfs, dfsOption } from './dfs'

const map = ['.#####.', '.#...#.', '.#.....', '.#...#.', '...###']

const path = dfs([[0, 0]], {
  getChildren([y, x]: [number, number]) {
    return [
      [y - 1, x],
      [y + 1, x],
      [y, x + 1],
      [y, x - 1],
    ]
  },
  isFinished([y, x]: [number, number]) {
    return y === 0 && x === 6
  },
  getHash([y, x]: [number, number]) {
    return `${y}_${x}`
  },
  checkChildren([y, x]: [number, number]) {
    if (y < 0 || y > 4 || x < 0 || x > 6) {
      return false
    }
    if (map[y][x] === '#') {
      return false
    }
    return true
  },
  getScore(data: [number, number], depth: number) {
    const [y, x] = data
    return -(Math.abs(0 - y) + Math.abs(6 - x) + depth * 0.5)
  },
} as dfsOption<[number, number], undefined>).reverse()
const mapNew = map.map((e) => e.split(''))

path.forEach((p, i) => {
  mapNew[p[0]][p[1]] = (i + 1).toString()
})
console.log(mapNew.map((e) => e.join('')).join('\n'))
