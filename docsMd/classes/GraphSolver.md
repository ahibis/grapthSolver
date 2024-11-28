[**graph_solver v0.0.1**](../README.md)

***

[graph_solver](../globals.md) / GraphSolver

# Class: GraphSolver\<TNode, TPathData, TNodeCtx, TPath, TGraphPlugin\>

## Extends

- [`BaseGraphSolver`](BaseGraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

## Type Parameters

• **TNode**

• **TPathData** = `unknown`

• **TNodeCtx** = `unknown`

• **TPath** *extends* [`Path`](../interfaces/Path.md)\<`TNode`, `TPathData`, `TNodeCtx`\> = [`Path`](../interfaces/Path.md)\<`TNode`, `TPathData`, `TNodeCtx`\>

• **TGraphPlugin** *extends* [`GraphPlugin`](../interfaces/GraphPlugin.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`\> = [`GraphPlugin`](../interfaces/GraphPlugin.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`\>

## Constructors

### new GraphSolver()

> **new GraphSolver**\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>(`getChildrenByNode`, `options`?): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Creates an instance of the GraphSolver.

#### Parameters

##### getChildrenByNode

(`node`) => `TNode`[]

A function that takes a node and returns an array of its children.

##### options?

`GraphOptions` & `Omit`\<[`Path`](../interfaces/Path.md)\<`undefined`, `TPathData`, `TNodeCtx`\>, `"node"`\>

An options object that can be used to customize the behavior of the GraphSolver.
The available options are:
- queueType: The type of queue to use. Defaults to arrayQueue.
- [all other Path options except 'node']: These options are passed to the Path constructor
and can be used to customize the behavior of the Path class.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Overrides

[`BaseGraphSolver`](BaseGraphSolver.md).[`constructor`](BaseGraphSolver.md#constructors)

#### Defined in

[GraphSolver/GraphSolver.ts:33](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L33)

## Properties

### orderOfPathPass

> **orderOfPathPass**: `ILinkedQueue`\<`TNode`, `TPath`\>

#### Inherited from

[`BaseGraphSolver`](BaseGraphSolver.md).[`orderOfPathPass`](BaseGraphSolver.md#orderofpathpass)

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:27](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/BaseGraphSolver/BaseGraphSolver.ts#L27)

***

### results

> **results**: `TPath`[] = `[]`

#### Inherited from

[`BaseGraphSolver`](BaseGraphSolver.md).[`results`](BaseGraphSolver.md#results)

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:30](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/BaseGraphSolver/BaseGraphSolver.ts#L30)

## Methods

### calculate()

> **calculate**\<`TResult`\>(`firstNode`, `onGetResults`?): `void`

Starts the graph solver with the given node as the starting point.

#### Type Parameters

• **TResult**

#### Parameters

##### firstNode

`TNode`

The node to start the graph solver from.

##### onGetResults?

(`results`) => `TResult`

An optional callback that is called whenever a new result
is found. The callback is passed the result path.

#### Returns

`void`

#### Example

```ts
const graphSolver = new GraphSolver()
graphSolver.calculate(firstNode, (result) => console.log(result))
```

#### Defined in

[GraphSolver/GraphSolver.ts:250](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L250)

***

### calculateByNode()

> **calculateByNode**(`data`): `TPath`[]

#### Parameters

##### data

`TNode`

#### Returns

`TPath`[]

#### Inherited from

[`BaseGraphSolver`](BaseGraphSolver.md).[`calculateByNode`](BaseGraphSolver.md#calculatebynode)

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:138](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/BaseGraphSolver/BaseGraphSolver.ts#L138)

***

### calculateDepth()

> **calculateDepth**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Enables Calculating Depth of the path.
All Path will have .depth property which increases by 1 as you move through the graph

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:79](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L79)

***

### checkPathIsResult()

> **checkPathIsResult**(`conditionPathIsResult`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Sets the condition to determine if a path is a result.

#### Parameters

##### conditionPathIsResult

(`path`, `prevPath`) => `boolean`

A function that takes the current path and the
previous path and returns a boolean indicating whether the path is a result.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .checkPathIsResult((path) => path.data.totalDistance >= 10)
```

#### Defined in

[GraphSolver/GraphSolver.ts:213](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L213)

***

### disablePathPop()

> **disablePathPop**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:40](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L40)

***

### enableChildren()

> **enableChildren**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Enables adding children Paths to the parent path
All Path will have .children property with the children paths

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:72](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L72)

***

### enableNodeChildren()

> **enableNodeChildren**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Enables adding children Nodes to the parent path
All Path will have .childrenNodes property with the children nodes

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:65](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L65)

***

### enableNodeParent()

> **enableNodeParent**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Enables adding a parent node to the path.
All Path will have .parentNode property with the parent node

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .enableNodeParent()
```

#### Defined in

[GraphSolver/GraphSolver.ts:51](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L51)

***

### enableParent()

> **enableParent**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Enables adding a parent path to the path
All Path will have .parent property with the parent path

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:58](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L58)

***

### getResultsData()

> **getResultsData**(): `TNode`[]

#### Returns

`TNode`[]

#### Inherited from

[`BaseGraphSolver`](BaseGraphSolver.md).[`getResultsData`](BaseGraphSolver.md#getresultsdata)

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:132](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/BaseGraphSolver/BaseGraphSolver.ts#L132)

***

### getResultsPathData()

> **getResultsPathData**(): `TPathData`[]

#### Returns

`TPathData`[]

#### Inherited from

[`BaseGraphSolver`](BaseGraphSolver.md).[`getResultsPathData`](BaseGraphSolver.md#getresultspathdata)

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:135](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/BaseGraphSolver/BaseGraphSolver.ts#L135)

***

### limitResults()

> **limitResults**(`limit`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Limits the number of results returned by the graph solver.
When the limit is reached, the graph solver stops calculating new paths.

#### Parameters

##### limit

`number`

The maximum number of results to return.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .limitResults(10)
```

#### Defined in

[GraphSolver/GraphSolver.ts:237](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L237)

***

### makePathOrder()

> **makePathOrder**(`conditionMakePathOrder`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Sets the order in which the following nodes will be
examined by sorting the node queue.

#### Parameters

##### conditionMakePathOrder

(`path`, `parent`) => `number`

function for comparing paths

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .makePathOrder((path, parent) => {
    return path.data.totalDistance - parent.data.totalDistance
  })
```

#### Defined in

[GraphSolver/GraphSolver.ts:93](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L93)

***

### makePathOrderByScore()

> **makePathOrderByScore**(`conditionMakePathOrderByScore`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Sets the order in which the following nodes will be
examined by sorting the node queue by some scores.

#### Parameters

##### conditionMakePathOrderByScore

(`path`) => `number`

function for getting scores by path

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .makePathOrderByScore(path => path.data.score)
```

#### Defined in

[GraphSolver/GraphSolver.ts:107](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L107)

***

### nodeDataInit()

> **nodeDataInit**(`nodeDataInit`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Initializes the node data for the each nodes.

#### Parameters

##### nodeDataInit

(`path`, `prevPath`) => `number`

function which takes the current path and the previous path
and returns the node data for the current node.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .nodeDataInit((path, prevPath) => {
    // initializes the node data
    const nodeData = {
      visitCount: 0,
      totalDistance: 0
    }
    return nodeData
  })
```

#### Defined in

[GraphSolver/GraphSolver.ts:155](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L155)

***

### nodeDataKey()

> **nodeDataKey**(`nodeDataKey`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Sets the key for the node data. The key is used to
identify the node data in the node data map.

#### Parameters

##### nodeDataKey

(`node`) => `string`

function which takes the current node and returns
the key for the node data.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .nodeDataKey(node => node.id)
```

#### Defined in

[GraphSolver/GraphSolver.ts:137](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L137)

***

### pathDataInit()

> **pathDataInit**(`pathDataInit`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Initializes the path data on the each paths.

#### Parameters

##### pathDataInit

(`path`, `prevPath`) => `TPathData`

function which takes the current path and the previous path
and returns the path data for the current path.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .pathDataInit((path, prevPath) => {
    const pathData = {
      ...prevPath.data,
      totalDistance: prevPath.data.totalDistance + 1
    }
    return pathData
  })
```

#### Defined in

[GraphSolver/GraphSolver.ts:125](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L125)

***

### pathsDynamicReject()

> **pathsDynamicReject**(...`conditionsRejectPaths`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Adds multiple conditions to reject the paths of the graph. The conditions are
applied in the order they are given. If one of the conditions
returns true, the path is rejected.

#### Parameters

##### conditionsRejectPaths

...(`path`, `prevPath`) => `boolean`[]

functions which take the current path and the
previous path and return a boolean indicating whether the path should be
rejected.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .pathsDynamicReject(
    // rejects the path if the total distance is 10
    (path, prevPath) => path.data.totalDistance >= 10,
    // rejects the path if the node has already been visited
    (path, prevPath) => !!prevPath.nodeData?.visitCount
  )
```

#### Defined in

[GraphSolver/GraphSolver.ts:189](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L189)

***

### registerPlugin()

> **registerPlugin**(`plugin`): `void`

#### Parameters

##### plugin

`TGraphPlugin`

#### Returns

`void`

#### Inherited from

[`BaseGraphSolver`](BaseGraphSolver.md).[`registerPlugin`](BaseGraphSolver.md#registerplugin)

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:122](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/BaseGraphSolver/BaseGraphSolver.ts#L122)

***

### rejectPath()

> **rejectPath**(`conditionRejectPath`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Adds a condition to reject the path.

#### Parameters

##### conditionRejectPath

(`path`, `prevPath`) => `boolean`

function which takes the current path and the previous path
and returns a boolean indicating whether the path should be rejected.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .rejectPath((path, prevPath) => {
    // rejects the path if the total distance is 10
    return path.data.totalDistance >= 10
  })
```

#### Defined in

[GraphSolver/GraphSolver.ts:170](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L170)

***

### rejectPathByNodeVisit()

> **rejectPathByNodeVisit**(`visitCount`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Rejects paths based on the number of times a node has been visited.

#### Parameters

##### visitCount

`number`

The maximum number of times a node can be visited
before the path is rejected.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .rejectPathByNodeVisit(2)
```

#### Defined in

[GraphSolver/GraphSolver.ts:226](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L226)

***

### resultKey()

> **resultKey**(`resultKey`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Sets the function to determine the key for a given result path.
This key is used to uniquely identify paths in the result set.

#### Parameters

##### resultKey

(`path`) => `string`

A function that takes a path and returns a string key.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .resultKey(path => `${path.node.id}-${path.depth}`)
```

#### Defined in

[GraphSolver/GraphSolver.ts:202](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/GraphSolver/GraphSolver.ts#L202)
