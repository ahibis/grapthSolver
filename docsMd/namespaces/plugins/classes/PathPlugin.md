[**graph_solver v0.0.1**](../../../README.md)

***

[graph_solver](../../../globals.md) / [plugins](../README.md) / PathPlugin

# Class: PathPlugin\<T, TCtx, TNodeCtx\>

## Type Parameters

• **T**

• **TCtx** = `unknown`

• **TNodeCtx** = `unknown`

## Implements

- [`GraphPlugin`](../interfaces/GraphPlugin.md)\<`T`, `TCtx`, `TNodeCtx`\>

## Constructors

### new PathPlugin()

> **new PathPlugin**\<`T`, `TCtx`, `TNodeCtx`\>(): [`PathPlugin`](PathPlugin.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Returns

[`PathPlugin`](PathPlugin.md)\<`T`, `TCtx`, `TNodeCtx`\>

## Properties

### priority

> **priority**: `number` = `-10000`

#### Implementation of

[`GraphPlugin`](../interfaces/GraphPlugin.md).[`priority`](../interfaces/GraphPlugin.md#priority)

#### Defined in

[plugins/pathPlugin/PathPlugin.ts:7](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/plugins/pathPlugin/PathPlugin.ts#L7)

## Methods

### onPathTransform()

> **onPathTransform**(`node`, `parent`): [`Path`](../../../interfaces/Path.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Parameters

##### node

[`Path`](../../../interfaces/Path.md)\<`T`, `TCtx`, `TNodeCtx`\>

##### parent

[`Path`](../../../interfaces/Path.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Returns

[`Path`](../../../interfaces/Path.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Implementation of

[`GraphPlugin`](../interfaces/GraphPlugin.md).[`onPathTransform`](../interfaces/GraphPlugin.md#onpathtransform)

#### Defined in

[plugins/pathPlugin/PathPlugin.ts:8](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/plugins/pathPlugin/PathPlugin.ts#L8)