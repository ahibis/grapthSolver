[**graph_solver v0.0.1**](../../../README.md)

***

[graph_solver](../../../globals.md) / [plugins](../README.md) / PathDataPlugin

# Class: PathDataPlugin\<T, TPathData, TNodeData\>

## Type Parameters

• **T**

• **TPathData** = `unknown`

• **TNodeData** = `unknown`

## Implements

- [`GraphPlugin`](../interfaces/GraphPlugin.md)\<`T`, `TPathData`, `TNodeData`\>

## Constructors

### new PathDataPlugin()

> **new PathDataPlugin**\<`T`, `TPathData`, `TNodeData`\>(`initDataPath`, `getPathDataForNewNode`): [`PathDataPlugin`](PathDataPlugin.md)\<`T`, `TPathData`, `TNodeData`\>

#### Parameters

##### initDataPath

(`node`) => `TPathData`

##### getPathDataForNewNode

(`path`, `parent`) => `TPathData`

#### Returns

[`PathDataPlugin`](PathDataPlugin.md)\<`T`, `TPathData`, `TNodeData`\>

#### Defined in

[plugins/pathDataPlugin/PathDataPlugin.ts:8](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/plugins/pathDataPlugin/PathDataPlugin.ts#L8)

## Properties

### priority

> **priority**: `number` = `-10000`

#### Implementation of

[`GraphPlugin`](../interfaces/GraphPlugin.md).[`priority`](../interfaces/GraphPlugin.md#priority)

#### Defined in

[plugins/pathDataPlugin/PathDataPlugin.ts:7](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/plugins/pathDataPlugin/PathDataPlugin.ts#L7)

## Methods

### onFirstPath()

> **onFirstPath**(`path`): [`Path`](../../../interfaces/Path.md)\<`T`, `TPathData`, `TNodeData`\>

#### Parameters

##### path

[`Path`](../../../interfaces/Path.md)\<`T`, `TPathData`, `TNodeData`\>

#### Returns

[`Path`](../../../interfaces/Path.md)\<`T`, `TPathData`, `TNodeData`\>

#### Implementation of

[`GraphPlugin`](../interfaces/GraphPlugin.md).[`onFirstPath`](../interfaces/GraphPlugin.md#onfirstpath)

#### Defined in

[plugins/pathDataPlugin/PathDataPlugin.ts:15](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/plugins/pathDataPlugin/PathDataPlugin.ts#L15)

***

### onPathTransform()

> **onPathTransform**(`path`, `parent`): [`Path`](../../../interfaces/Path.md)\<`T`, `TPathData`, `TNodeData`\>

#### Parameters

##### path

[`Path`](../../../interfaces/Path.md)\<`T`, `TPathData`, `TNodeData`\>

##### parent

[`Path`](../../../interfaces/Path.md)\<`T`, `TPathData`, `TNodeData`\>

#### Returns

[`Path`](../../../interfaces/Path.md)\<`T`, `TPathData`, `TNodeData`\>

#### Implementation of

[`GraphPlugin`](../interfaces/GraphPlugin.md).[`onPathTransform`](../interfaces/GraphPlugin.md#onpathtransform)

#### Defined in

[plugins/pathDataPlugin/PathDataPlugin.ts:21](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/plugins/pathDataPlugin/PathDataPlugin.ts#L21)
