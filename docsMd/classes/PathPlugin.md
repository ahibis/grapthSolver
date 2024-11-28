[**graph_solver v0.0.1**](../README.md)

***

[graph_solver](../globals.md) / PathPlugin

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

[plugins/pathPlugin/PathPlugin.ts:7](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/plugins/pathPlugin/PathPlugin.ts#L7)

## Methods

### onPathTransform()

> **onPathTransform**(`node`, `parent`): [`Path`](../interfaces/Path.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Parameters

##### node

[`Path`](../interfaces/Path.md)\<`T`, `TCtx`, `TNodeCtx`\>

##### parent

[`Path`](../interfaces/Path.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Returns

[`Path`](../interfaces/Path.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Implementation of

[`GraphPlugin`](../interfaces/GraphPlugin.md).[`onPathTransform`](../interfaces/GraphPlugin.md#onpathtransform)

#### Defined in

[plugins/pathPlugin/PathPlugin.ts:8](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/plugins/pathPlugin/PathPlugin.ts#L8)
