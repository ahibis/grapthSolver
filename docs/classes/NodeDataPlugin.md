[**graph_solver v0.0.1**](../README.md)

***

[graph_solver](../globals.md) / NodeDataPlugin

# Class: NodeDataPlugin\<TData, TPathData, TNodeData, TPath\>

## Type Parameters

• **TData**

• **TPathData** = `unknown`

• **TNodeData** = `unknown`

• **TPath** *extends* [`Path`](../interfaces/Path.md)\<`TData`, `TPathData`, `TNodeData`\> = [`Path`](../interfaces/Path.md)\<`TData`, `TPathData`, `TNodeData`\>

## Implements

- [`GraphPlugin`](../interfaces/GraphPlugin.md)\<`TData`, `TPathData`, `TNodeData`, `TPath`\>

## Constructors

### new NodeDataPlugin()

> **new NodeDataPlugin**\<`TData`, `TPathData`, `TNodeData`, `TPath`\>(`initNodeData`, `getNodeKey`): [`NodeDataPlugin`](NodeDataPlugin.md)\<`TData`, `TPathData`, `TNodeData`, `TPath`\>

#### Parameters

##### initNodeData

(`node`) => `TNodeData`

##### getNodeKey

(`node`) => `TKey`\<`TData`\>

#### Returns

[`NodeDataPlugin`](NodeDataPlugin.md)\<`TData`, `TPathData`, `TNodeData`, `TPath`\>

#### Defined in

[plugins/nodeDataPlugin/NodeDataPlugin.ts:18](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/plugins/nodeDataPlugin/NodeDataPlugin.ts#L18)

## Properties

### keyToData

> **keyToData**: `Map`\<`TKey`\<`TData`\>, `TNodeData`\>

#### Defined in

[plugins/nodeDataPlugin/NodeDataPlugin.ts:17](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/plugins/nodeDataPlugin/NodeDataPlugin.ts#L17)

***

### priority

> **priority**: `number` = `-15000`

#### Implementation of

[`GraphPlugin`](../interfaces/GraphPlugin.md).[`priority`](../interfaces/GraphPlugin.md#priority)

#### Defined in

[plugins/nodeDataPlugin/NodeDataPlugin.ts:16](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/plugins/nodeDataPlugin/NodeDataPlugin.ts#L16)

## Methods

### onFirstPath()

> **onFirstPath**(`path`): `TPath`

#### Parameters

##### path

`TPath`

#### Returns

`TPath`

#### Implementation of

[`GraphPlugin`](../interfaces/GraphPlugin.md).[`onFirstPath`](../interfaces/GraphPlugin.md#onfirstpath)

#### Defined in

[plugins/nodeDataPlugin/NodeDataPlugin.ts:23](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/plugins/nodeDataPlugin/NodeDataPlugin.ts#L23)

***

### onPathTransform()

> **onPathTransform**(`path`): `TPath`

#### Parameters

##### path

`TPath`

#### Returns

`TPath`

#### Implementation of

[`GraphPlugin`](../interfaces/GraphPlugin.md).[`onPathTransform`](../interfaces/GraphPlugin.md#onpathtransform)

#### Defined in

[plugins/nodeDataPlugin/NodeDataPlugin.ts:29](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/plugins/nodeDataPlugin/NodeDataPlugin.ts#L29)
