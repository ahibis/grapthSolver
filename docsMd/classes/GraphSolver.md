[**graph_solver v0.0.1**](../README.md)

***

[graph_solver](../globals.md) / GraphSolver

# Class: GraphSolver\<TNode, TPathData, TNodeData, TPath, TGraphPlugin\>

Class for manipulating graphs in a declarative style
 GraphSolver

## Extends

- [`BaseGraphSolver`](BaseGraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

## Type Parameters

• **TNode**

Type of node graph

• **TPathData** = `unknown`

This type describes the data required to calculate values during a pass

• **TNodeData** = `unknown`

This type describes additional mutable node data. Such as the number of visits, the maximum length to the node, and others

• **TPath** *extends* [`Path`](../interfaces/Path.md)\<`TNode`, `TPathData`, `TNodeData`\> = [`Path`](../interfaces/Path.md)\<`TNode`, `TPathData`, `TNodeData`\>

This type describes the path created during the graph pass. It can be redefined to add new values inside

• **TGraphPlugin** *extends* [`GraphPlugin`](../namespaces/plugins/interfaces/GraphPlugin.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`\> = [`GraphPlugin`](../namespaces/plugins/interfaces/GraphPlugin.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`\>

Plugin class type

## Constructors

### new GraphSolver()

> **new GraphSolver**\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>(`getChildrenByNode`, `options`?): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

Creates an instance of the GraphSolver.

#### Parameters

##### getChildrenByNode

(`node`) => `TNode`[]

A function that takes a node and returns an array of its children.

##### options?

`GraphOptions` & `Omit`\<[`Path`](../interfaces/Path.md)\<`undefined`, `TPathData`, `TNodeData`\>, `"node"`\>

An options object that can be used to customize the behavior of the GraphSolver.
The available options are:
- queueType: The type of queue to use. Defaults to arrayQueue.
- [all other Path options except 'node']: These options are passed to the Path constructor
and can be used to customize the behavior of the Path class.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

#### Overrides

[`BaseGraphSolver`](BaseGraphSolver.md).[`constructor`](BaseGraphSolver.md#constructors)

#### Defined in

[GraphSolver/GraphSolver.ts:43](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L43)

## Properties

### resultPaths

> **resultPaths**: `TPath`[] = `[]`

#### Inherited from

[`BaseGraphSolver`](BaseGraphSolver.md).[`resultPaths`](BaseGraphSolver.md#resultpaths)

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:42](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/BaseGraphSolver.ts#L42)

## Methods

### calculate()

> **calculate**\<`TResult`\>(`data`, `transformResults`?): `TPath`[]

Executes the path calculation process starting from the given node data.
It applies plugins to modify the behavior and appearance of the pathfinding
process, sorts plugins by priority and utilizes various helper functions
to transform, validate, and observe paths during the calculation.

#### Type Parameters

• **TResult**

The result type after applying the optional transformation.

#### Parameters

##### data

`TNode`

The initial node data to start the path calculation.

##### transformResults?

(`results`) => `TResult`[]

An optional function to transform the resulting paths.

#### Returns

`TPath`[]

An array of paths that represent the result of the pathfinding process.

#### Inherited from

[`BaseGraphSolver`](BaseGraphSolver.md).[`calculate`](BaseGraphSolver.md#calculate)

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:187](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/BaseGraphSolver.ts#L187)

***

### calculateDepth()

> **calculateDepth**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

Enables Calculating Depth of the path.
All Path will have .depth property which increases by 1 as you move through the graph

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:89](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L89)

***

### checkPathIsResult()

> **checkPathIsResult**(`conditionPathIsResult`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

Sets the condition to determine if a path is a result.

#### Parameters

##### conditionPathIsResult

(`path`, `prevPath`) => `boolean`

A function that takes the current path and the
previous path and returns a boolean indicating whether the path is a result.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .checkPathIsResult((path) => path.data.totalDistance >= 10)
```

#### Defined in

[GraphSolver/GraphSolver.ts:223](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L223)

***

### disablePathPop()

> **disablePathPop**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:50](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L50)

***

### enableChildren()

> **enableChildren**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

Enables adding children Paths to the parent path
All Path will have .children property with the children paths

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:82](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L82)

***

### enableNodeChildren()

> **enableNodeChildren**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

Enables adding children Nodes to the parent path
All Path will have .childrenNodes property with the children nodes

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:75](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L75)

***

### enableNodeParent()

> **enableNodeParent**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

Enables adding a parent node to the path.
All Path will have .parentNode property with the parent node

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .enableNodeParent()
```

#### Defined in

[GraphSolver/GraphSolver.ts:61](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L61)

***

### enableParent()

> **enableParent**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

Enables adding a parent path to the path
All Path will have .parent property with the parent path

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:68](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L68)

***

### getResultsData()

> **getResultsData**(): `TNode`[]

Returns the data from all the nodes in the result paths.

#### Returns

`TNode`[]

An array of node data, where each element is the data from a node
in one of the result paths.

#### Inherited from

[`BaseGraphSolver`](BaseGraphSolver.md).[`getResultsData`](BaseGraphSolver.md#getresultsdata)

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:164](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/BaseGraphSolver.ts#L164)

***

### getResultsPathData()

> **getResultsPathData**(): `TPathData`[]

Retrieves the path data from all result paths.

#### Returns

`TPathData`[]

An array where each element is the path data associated
with a node in the result paths.

#### Inherited from

[`BaseGraphSolver`](BaseGraphSolver.md).[`getResultsPathData`](BaseGraphSolver.md#getresultspathdata)

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:173](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/BaseGraphSolver.ts#L173)

***

### limitResults()

> **limitResults**(`limit`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

Limits the number of results returned by the graph solver.
When the limit is reached, the graph solver stops calculating new paths.

#### Parameters

##### limit

`number`

The maximum number of results to return.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .limitResults(10)
```

#### Defined in

[GraphSolver/GraphSolver.ts:247](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L247)

***

### makePathOrder()

> **makePathOrder**(`conditionMakePathOrder`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

Sets the order in which the following nodes will be
examined by sorting the node queue.

#### Parameters

##### conditionMakePathOrder

(`path`, `parent`) => `number`

function for comparing paths

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .makePathOrder((path, parent) => {
    return path.data.totalDistance - parent.data.totalDistance
  })
```

#### Defined in

[GraphSolver/GraphSolver.ts:103](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L103)

***

### makePathOrderByScore()

> **makePathOrderByScore**(`conditionMakePathOrderByScore`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

Sets the order in which the following nodes will be
examined by sorting the node queue by some scores.

#### Parameters

##### conditionMakePathOrderByScore

(`path`) => `number`

function for getting scores by path

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .makePathOrderByScore(path => path.data.score)
```

#### Defined in

[GraphSolver/GraphSolver.ts:117](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L117)

***

### pathDataInit()

> **pathDataInit**(`pathDataInit`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

Initializes the path data on the each paths.

#### Parameters

##### pathDataInit

(`path`, `prevPath`) => `TPathData`

function which takes the current path and the previous path
and returns the path data for the current path.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

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

[GraphSolver/GraphSolver.ts:135](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L135)

***

### registerPlugin()

> **registerPlugin**(`plugin`): `void`

Registers a plugin to the graph solver.

#### Parameters

##### plugin

`TGraphPlugin`

The plugin to be registered, which should implement
the TGraphPlugin interface. This plugin will be added to the list
of plugins used by the solver to modify or enhance its behavior.

#### Returns

`void`

#### Inherited from

[`BaseGraphSolver`](BaseGraphSolver.md).[`registerPlugin`](BaseGraphSolver.md#registerplugin)

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:142](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/BaseGraphSolver.ts#L142)

***

### rejectPath()

> **rejectPath**(`conditionRejectPath`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

Adds a condition to reject the path.

#### Parameters

##### conditionRejectPath

(`path`, `prevPath`) => `boolean`

function which takes the current path and the previous path
and returns a boolean indicating whether the path should be rejected.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .rejectPath((path, prevPath) => {
    // rejects the path if the total distance is 10
    return path.data.totalDistance >= 10
  })
```

#### Defined in

[GraphSolver/GraphSolver.ts:180](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L180)

***

### rejectPathByNodeVisit()

> **rejectPathByNodeVisit**(`visitCount`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

Rejects paths based on the number of times a node has been visited.

#### Parameters

##### visitCount

`number`

The maximum number of times a node can be visited
before the path is rejected.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .rejectPathByNodeVisit(2)
```

#### Defined in

[GraphSolver/GraphSolver.ts:236](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L236)

***

### rejectPathsDynamic()

> **rejectPathsDynamic**(...`conditionsRejectPaths`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

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

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

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

[GraphSolver/GraphSolver.ts:199](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L199)

***

### setInitNodeData()

> **setInitNodeData**(`initNodeData`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

Initializes the node data for the each nodes.

#### Parameters

##### initNodeData

(`path`, `prevPath`) => `number`

function which takes the current path and the previous path
and returns the node data for the current node.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

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

[GraphSolver/GraphSolver.ts:165](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L165)

***

### setNodeDataKey()

> **setNodeDataKey**(`nodeDataKey`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

Sets the key for the node data. The key is used to
identify the node data in the node data map.

#### Parameters

##### nodeDataKey

(`node`) => `string`

function which takes the current node and returns
the key for the node data.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .nodeDataKey(node => node.id)
```

#### Defined in

[GraphSolver/GraphSolver.ts:147](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L147)

***

### setResultKey()

> **setResultKey**(`getResultKeyByPath`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

Sets the function to determine the key for a given result path.
This key is used to uniquely identify paths in the result set.

#### Parameters

##### getResultKeyByPath

(`path`) => `string`

A function that takes a path and returns a string key.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

#### Example

```ts
const graphSolver = new GraphSolver()
  .resultKey(path => `${path.node.id}-${path.depth}`)
```

#### Defined in

[GraphSolver/GraphSolver.ts:212](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/GraphSolver/GraphSolver.ts#L212)
