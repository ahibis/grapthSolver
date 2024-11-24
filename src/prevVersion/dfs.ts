export interface dfsOption<T, Y> {
  getHash?<T>(data: T): string
  getChildren<T>(data: T, payload?: Y): T[]
  isFinished<T>(data: T, payload?: Y): boolean
  checkChildren?(data: T, payload?: Y): boolean
  getScore?(data: T, depth: number, payload?: Y): number
  compareNode?(a: withParent<T>, b: withParent<T>): number
}
interface withParent<T> {
  parent?: withParent<T>
  data: T
  depth: number
}
export function dfs<T, Y>(data: T[], options: dfsOption<T, Y>, payload?: Y) {
  const {
    getHash,
    getChildren,
    isFinished,
    checkChildren,
    getScore,
    compareNode,
  } = options
  const queue: withParent<T>[] = data.map((d) => ({
    data: d,
    parent: undefined,
    depth: 0,
  }))
  const cash = new Map<string, withParent<T>>()

  let counter = 0
  while (queue.length > 0) {
    counter += 1

    const dataWithParent = queue.shift()!
    const data = dataWithParent.data

    if (isFinished(data, payload)) {
      const result: T[] = []
      let dataWithP: withParent<T> | undefined = dataWithParent
      while (dataWithP !== undefined) {
        result.push(dataWithP.data)
        dataWithP = dataWithP.parent
      }
      console.log('нашел за', counter)
      return result
    }

    let children = getChildren(data, payload)
    if (getHash) {
      const nodesToDelete: withParent<T>[] = []

      children = children.filter((child) => {
        const hash = getHash(child)
        if (cash.has(hash)) {
          const comapare = compareNode
            ? compareNode(dataWithParent, cash.get(hash)!)
            : -1
          if (comapare > 0) {
            nodesToDelete.push(cash.get(hash)!)
          } else {
            return false
          }
        }

        cash.set(hash, dataWithParent)
        return true
      })
      queue.filter((e) => nodesToDelete.includes(e))
    }

    if (checkChildren) {
      children = children.filter((child) => checkChildren(child, payload))
    }

    queue.push(
      ...children.map((d) => ({
        data: d,
        parent: dataWithParent,
        depth: dataWithParent.depth + 1,
      }))
    )

    if (getScore) {
      queue.sort(
        (a, b) =>
          getScore(b.data, b.depth, payload) -
          getScore(a.data, a.depth, payload)
      )
    }
  }
  return []
}
