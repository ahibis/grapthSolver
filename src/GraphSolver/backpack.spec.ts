import { it } from 'vitest'
import { GraphSolver } from './GraphSolver'
it('Backpack', () => {
  interface Item {
    i: number
    w: number
    p: number
  }
  const widthMax = 20
  const items: Item[] = []
  new GraphSolver((item: Item) => [items[item.i + 1]], {
    data: { w: 0, p: 0 },
  })
    .disablePathPop()
    .pathDataInit(({ node }, { data }) => ({
      w: data.w + node.w,
      p: data.p + node.p,
    }))
    .rejectPath(({ data: { w } }) => w > widthMax)
    .rejectPathsDynamic(({ data: { w } }, { data: { w: wL } }) => w > wL)
    .checkPathIsResult(({ data: { p } }, { data: { p: pL } }) => p < pL)
    .calculate(items[0])
})
