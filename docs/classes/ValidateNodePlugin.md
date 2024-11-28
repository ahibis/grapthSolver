[**graph_solver v0.0.1**](../README.md)

***

[graph_solver](../globals.md) / ValidateNodePlugin

# Class: ValidateNodePlugin\<T, TCtx, TNodeCtx\>

## Type Parameters

• **T**

• **TCtx** = `unknown`

• **TNodeCtx** = `unknown`

## Implements

- [`GraphPlugin`](../interfaces/GraphPlugin.md)\<`T`, `TCtx`, `TNodeCtx`\>

## Constructors

### new ValidateNodePlugin()

> **new ValidateNodePlugin**\<`T`, `TCtx`, `TNodeCtx`\>(`checkNodeIsValid`): [`ValidateNodePlugin`](ValidateNodePlugin.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Parameters

##### checkNodeIsValid

(`node`, `parent`) => `boolean`

#### Returns

[`ValidateNodePlugin`](ValidateNodePlugin.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Defined in

[plugins/validateNodePlugin/ValidateNodePlugin.ts:8](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/plugins/validateNodePlugin/ValidateNodePlugin.ts#L8)

## Properties

### priority

> **priority**: `number` = `1000`

#### Implementation of

[`GraphPlugin`](../interfaces/GraphPlugin.md).[`priority`](../interfaces/GraphPlugin.md#priority)

#### Defined in

[plugins/validateNodePlugin/ValidateNodePlugin.ts:7](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/plugins/validateNodePlugin/ValidateNodePlugin.ts#L7)

## Methods

### onPathValidate()

> **onPathValidate**(`node`, `parent`): `boolean`

#### Parameters

##### node

[`Path`](../interfaces/Path.md)\<`T`, `TCtx`, `TNodeCtx`\>

##### parent

[`Path`](../interfaces/Path.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Returns

`boolean`

#### Implementation of

[`GraphPlugin`](../interfaces/GraphPlugin.md).[`onPathValidate`](../interfaces/GraphPlugin.md#onpathvalidate)

#### Defined in

[plugins/validateNodePlugin/ValidateNodePlugin.ts:14](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/plugins/validateNodePlugin/ValidateNodePlugin.ts#L14)
