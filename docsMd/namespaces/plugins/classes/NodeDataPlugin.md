[**graph_solver v0.0.1**](../../../README.md)

***

[graph_solver](../../../globals.md) / [plugins](../README.md) / NodeDataPlugin

# Class: NodeDataPlugin\<TData, TPathData, TNodeData, TPath\>

## Type Parameters

• **TData**

• **TPathData** = `unknown`

• **TNodeData** = `unknown`

• **TPath** *extends* [`Path`](../../../interfaces/Path.md)\<`TData`, `TPathData`, `TNodeData`\> = [`Path`](../../../interfaces/Path.md)\<`TData`, `TPathData`, `TNodeData`\>

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

[plugins/nodeDataPlugin/NodeDataPlugin.ts:18](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/plugins/nodeDataPlugin/NodeDataPlugin.ts#L18)

## Properties

### keyToData

> **keyToData**: `Map`\<`TKey`\<`TData`\>, `TNodeData`\>

#### Defined in

[plugins/nodeDataPlugin/NodeDataPlugin.ts:17](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/plugins/nodeDataPlugin/NodeDataPlugin.ts#L17)

***

### priority

> **priority**: `number` = `-15000`

#### Implementation of

[`GraphPlugin`](../interfaces/GraphPlugin.md).[`priority`](../interfaces/GraphPlugin.md#priority)

#### Defined in

[plugins/nodeDataPlugin/NodeDataPlugin.ts:16](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/plugins/nodeDataPlugin/NodeDataPlugin.ts#L16)

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

[plugins/nodeDataPlugin/NodeDataPlugin.ts:23](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/plugins/nodeDataPlugin/NodeDataPlugin.ts#L23)

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

[plugins/nodeDataPlugin/NodeDataPlugin.ts:29](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/plugins/nodeDataPlugin/NodeDataPlugin.ts#L29)