[**graph_solver v0.0.1**](../../../README.md)

***

[graph_solver](../../../globals.md) / [plugins](../README.md) / PathTransformPlugin

# Class: PathTransformPlugin\<TData, TPathData, TNodeData, TPath\>

## Type Parameters

• **TData**

• **TPathData** = `unknown`

• **TNodeData** = `unknown`

• **TPath** *extends* [`Path`](../../../interfaces/Path.md)\<`TData`, `TPathData`, `TNodeData`\> = [`Path`](../../../interfaces/Path.md)\<`TData`, `TPathData`, `TNodeData`\>

## Implements

- [`GraphPlugin`](../interfaces/GraphPlugin.md)\<`TData`, `TPathData`, `TNodeData`, `TPath`\>

## Constructors

### new PathTransformPlugin()

> **new PathTransformPlugin**\<`TData`, `TPathData`, `TNodeData`, `TPath`\>(`pathTransform`): [`PathTransformPlugin`](PathTransformPlugin.md)\<`TData`, `TPathData`, `TNodeData`, `TPath`\>

#### Parameters

##### pathTransform

(`path`, `parent`) => `TPath`

#### Returns

[`PathTransformPlugin`](PathTransformPlugin.md)\<`TData`, `TPathData`, `TNodeData`, `TPath`\>

#### Defined in

[plugins/pathTransformPlugin/PathTransformPlugin.ts:15](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/plugins/pathTransformPlugin/PathTransformPlugin.ts#L15)

## Methods

### onPathTransform()

> **onPathTransform**(`path`, `parent`): `TPath`

#### Parameters

##### path

`TPath`

##### parent

`TPath`

#### Returns

`TPath`

#### Implementation of

[`GraphPlugin`](../interfaces/GraphPlugin.md).[`onPathTransform`](../interfaces/GraphPlugin.md#onpathtransform)

#### Defined in

[plugins/pathTransformPlugin/PathTransformPlugin.ts:17](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/plugins/pathTransformPlugin/PathTransformPlugin.ts#L17)
