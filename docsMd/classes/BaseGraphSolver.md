[**graph_solver v0.0.1**](../README.md)

***

[graph_solver](../globals.md) / BaseGraphSolver

# Class: BaseGraphSolver\<TNode, TPathData, TNodeData, TPath, TGraphPlugin\>

Class for manipulating graphs without a declarative style

 BaseGraphSolver

## Extended by

- [`GraphSolver`](GraphSolver.md)

## Type Parameters

• **TNode**

• **TPathData** = `unknown`

• **TNodeData** = `unknown`

• **TPath** *extends* [`Path`](../interfaces/Path.md)\<`TNode`, `TPathData`, `TNodeData`\> = [`Path`](../interfaces/Path.md)\<`TNode`, `TPathData`, `TNodeData`\>

• **TGraphPlugin** *extends* [`GraphPlugin`](../namespaces/plugins/interfaces/GraphPlugin.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`\> = [`GraphPlugin`](../namespaces/plugins/interfaces/GraphPlugin.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`\>

## Constructors

### new BaseGraphSolver()

> **new BaseGraphSolver**\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>(`getChildrenByNode`, `queueType`): [`BaseGraphSolver`](BaseGraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

Creates an instance of BaseGraphSolver.

#### Parameters

##### getChildrenByNode

(`node`) => `TNode`[]

A function that takes a node and returns an array of its children.

##### queueType

[`QueueType`](../enumerations/QueueType.md) = `QueueType.arrayQueue`

The type of queue to use for processing paths. Defaults to QueueType.arrayQueue.

#### Returns

[`BaseGraphSolver`](BaseGraphSolver.md)\<`TNode`, `TPathData`, `TNodeData`, `TPath`, `TGraphPlugin`\>

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:151](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/BaseGraphSolver.ts#L151)

## Properties

### resultPaths

> **resultPaths**: `TPath`[] = `[]`

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

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:187](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/BaseGraphSolver.ts#L187)

***

### getResultsData()

> **getResultsData**(): `TNode`[]

Returns the data from all the nodes in the result paths.

#### Returns

`TNode`[]

An array of node data, where each element is the data from a node
in one of the result paths.

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

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:173](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/BaseGraphSolver.ts#L173)

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

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:142](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/BaseGraphSolver.ts#L142)
