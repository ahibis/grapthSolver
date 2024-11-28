# GraphSolver

## Definitions

- Objects:
  - Graph -
  - Node -
  - Path -
  - Edge - ?
  - Data -
  - PathData -
  - NodeData -
  - Parent -
  - Child -
  - Children -
  - Result -
- Actions
  - Init -
  - Update -
  - Destroy -
  - Reject -
  - Check
  - Stop -
  - Visit -
  - Enable -
  - Disable -

## Plugins

- Data init
  - ParentInitPlugin
  - ChildrenInitPlugin
  - PathDataInitPlugin
  - NodeDataInitPlugin
  - DepthInitPlugin
- Results
  - ResultPlugin
- Stop Graph
  - StopGraph
  - VisitPlugin

## Examples

### backPack

```typescript
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
  .pathsDynamicReject(({ data: { w } }, { data: { w: wL } }) => w > wL)
  .checkPathIsResult(({ data: { p } }, { data: { p: pL } }) => p < pL)
  .calculate(items[0], ({ data }) => data)
```

### FiendShortedSum

```typescript
const result = 343
new GraphSolver((num) => [num + 3, num - 2], { data: 0 })
  .rejectPath(({ data }) => data > 343)
  .calculateDepth()
  .makePathOrderByScore(({ data, depth }) => -Math.abs(343 - data) - depth * 15)
  .rejectPathByNodeVisit(2)
  .checkPathIsResult(({ data }) => (data = 343))
  .limitResults(1)
  .calculate(0, ({ node }) => node)
```

### MazeExitSearch By A\*

```typescript
const map = ['.#####.', '.#...#.', '.#.....', '.#...#.', '...###']
type cords = [number, number]
new GraphSolver<cords>((x, y) => [
  [y - 1, x],
  [y + 1, x],
  [y, x + 1],
  [y, x - 1],
])
  .calculateDepth()
  .enableNodeParent()
  .makePathOrderByScore(
    ({ node: [x, y], depth }) =>
      -(Math.abs(0 - y) + Math.abs(6 - x) + depth * 0.5)
  )
  .rejectPath(({ node: [x, y] }) => y < 0 || y > 4 || x < 0 || x > 6)
  .rejectPath(({ node: [x, y] }) => map[y][x] === '#')
  .checkPathIsResult(({ node: [x, y] }) => y === 0 && x === 6)
  .limitResults(1)
  .calculate([0, 0])
```

### Short path by Dijkstra

```typescript
const Graph = {
    'A': {'B': 4, 'C': 7},
    'B': {'A': 4, 'D': 2, 'E': 8},
    'C': {'A': 7, 'D': 2, 'E': 5},
    'D': {'B': 2, 'C': 2, 'E': 1,'F': 4},
    'E': {'C': 5, 'D': 1, 'F': 11},
    'F': {'B': 8, 'D': 4, 'E': 11}
}
type Vertex = [string, number]
new GraphSolver<Vertex, boolean, number>(vertex=> Object.entries(Graph[vertex[0]]),{
    data: false
    nodeData: 0
})
    .enableNodeParent()
    .pathDataInit(()=>false)
    .nodeDataKey((vertex)=>vertex.node[0])
    .nodeDataInit((vertex,parent)=>{
        const oldDistance = vertex.nodeData ||Math.Inf
        const newDistance = parent.nodeData + vertex.node[1]
        if(oldDistance< newDistance){
            vertex.data = true
            return oldDistance
        }
        return newDistance
    })
    .rejectPath((node)=>node.data == "true")
    .resultKey(vertex=> vertex.node[0])
    .checkPathIsResult((vertex, result)=> vertex.nodeData < result.nodeData)
    .calculate(["A",0])
```
