# GraphSolver
## Definitions
Graph - 
Node -
Path -
Edge - ?
PathData - 
NodeData - 
Init - 
Update - 
Destroy - 
Parent -
Child - 
Children -
Result - 
Visit - 
Stop - 
## Plugins
### 
ParentInitPlugin
ChildrenInitPlugin
### Data
PathDataInitPlugin
NodeDataInitPlugin

### Data transform
NodeDataTransformPlugin
PathTransformPlugin
### Result Plugin
ResultPlugin
### Stop Graph
StopGraph
VisitPlugin

## Examples
### backPack
```typescript
Type Item = {i:number, w:number, p:number}
Type BackPack = {w:number, p:number}
const widthMax = 20;
const items:Item = [...]
new GraphSolver<Item, BackPack>(item=>[items[item.i+1]])
    .disablePathPop()
    .firstPathInit(path=>path.data={w:0,p:0})
    .pathDataInit(({node}, {data})=>(
        {
            w: data.w + node.w
            p: data.p + node.p
        })
    .pathReject((data:{w})=>w>widthMax)
    .pathsDynamicReject(
        (path, PathLast)=>path.data.w > pathLast.data.w,
        (path, PathLast)=>path.data.p < pathLast.data.p
    )
    .makePathAsResultWhen((result,path)=>result.data.p < path.data.p )
    .calculate(items[0])
```
Shorted
```typescript
Type Item = {i:number, w:number, p:number}
Type BackPack = {w:number, p:number}
const widthMax = 20;
const items:Item = [...]
new GraphSolver<Item, BackPack>(item=>[items[item.i+1]])
    .disablePathPop()
    .setFirstPathData({w:0,p:0})
    .pathDataInit(({node}, {data})=>(
        {
            w: data.w + node.w
            p: data.p + node.p
        })
    .rejectPathWhen((data:{w})=>w>widthMax)
    .pathsDynamicReject(
        pathDataCompare("w",(w,wP)=>w > wP),
        pathDataCompare("p",(p,pP)=>p< pP)
    )
    .makePathAsResultWhen(pathDataCompare(({p},{p:pL})=>p < pL) )
    .calculate(items[0], ({data})=>data)
```
### FiendShortedSum
```typescript
const result = 343
new GraphSolver<number>(num=>[num+3, num-2])
    .setFirstPathData(0)
    .rejectPathWhen(({data})=>data > 343)
    .calculateDepth()
    .makePathOrderByScore(({data, depth})=>-Math.abs(343 - data) - depth * 15)
    .rejectPathByDoubleVisit()
    .makePathAsResultWhen(({data})=> data = 343)
    .limitResults(1)
    .calculate(0, ({node})=>node)
```
### MazeExitSearch By A*

```typescript
const map = ['.#####.', '.#...#.', '.#.....', '.#...#.', '...###']
type cords = [number, number]
new GraphSolver<cords>((x,y)=>[
      [y - 1, x],
      [y + 1, x],
      [y, x + 1],
      [y, x - 1],
    ])
    .calculateDepth()
    .enableNodeParent()
    .makePathOrderByScore(({node:[x,y], depth}) => 
    -(Math.abs(0 - y) + Math.abs(6 - x) + depth * 0.5))
    .rejectPathWhen(({node:[x,y]})=>y < 0 || y > 4 || x < 0 || x > 6)
    .rejectPathWhen(({node:[x,y]})=>map[y][x] === '#')
    .makePathAsResultWhen(({node:[x,y]})=>y === 0 && x === 6)
    .limitResults(1)
    .calculate([0,0])

```

