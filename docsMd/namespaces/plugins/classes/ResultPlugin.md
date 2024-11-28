[**graph_solver v0.0.1**](../../../README.md)

***

[graph_solver](../../../globals.md) / [plugins](../README.md) / ResultPlugin

# Class: ResultPlugin\<T, TCtx, TNodeCtx\>

## Type Parameters

• **T**

• **TCtx** = `unknown`

• **TNodeCtx** = `unknown`

## Implements

- [`GraphPlugin`](../interfaces/GraphPlugin.md)\<`T`, `TCtx`, `TNodeCtx`\>

## Constructors

### new ResultPlugin()

> **new ResultPlugin**\<`T`, `TCtx`, `TNodeCtx`\>(`checkNodeIsResult`): [`ResultPlugin`](ResultPlugin.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Parameters

##### checkNodeIsResult

(`node`) => `boolean`

#### Returns

[`ResultPlugin`](ResultPlugin.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Defined in

[plugins/resultPlugin/ResultPlugin.ts:7](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/plugins/resultPlugin/ResultPlugin.ts#L7)

## Methods

### onCheckIsResult()

> **onCheckIsResult**(`node`): `boolean`

#### Parameters

##### node

[`Path`](../../../interfaces/Path.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Returns

`boolean`

#### Implementation of

[`GraphPlugin`](../interfaces/GraphPlugin.md).[`onCheckIsResult`](../interfaces/GraphPlugin.md#oncheckisresult)

#### Defined in

[plugins/resultPlugin/ResultPlugin.ts:10](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/plugins/resultPlugin/ResultPlugin.ts#L10)