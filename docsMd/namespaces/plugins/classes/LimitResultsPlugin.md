[**graph_solver v0.0.1**](../../../README.md)

***

[graph_solver](../../../globals.md) / [plugins](../README.md) / LimitResultsPlugin

# Class: LimitResultsPlugin\<T, TCtx, TNodeCtx\>

## Type Parameters

• **T**

• **TCtx** = `unknown`

• **TNodeCtx** = `unknown`

## Implements

- [`GraphPlugin`](../interfaces/GraphPlugin.md)\<`T`, `TCtx`, `TNodeCtx`\>

## Constructors

### new LimitResultsPlugin()

> **new LimitResultsPlugin**\<`T`, `TCtx`, `TNodeCtx`\>(`graph`, `limitOfCount`): [`LimitResultsPlugin`](LimitResultsPlugin.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Parameters

##### graph

[`BaseGraphSolver`](../../../classes/BaseGraphSolver.md)\<`T`, `TCtx`, `TNodeCtx`, [`Path`](../../../interfaces/Path.md)\<`T`, `TCtx`, `TNodeCtx`\>, [`GraphPlugin`](../interfaces/GraphPlugin.md)\<`T`, `TCtx`, `TNodeCtx`, [`Path`](../../../interfaces/Path.md)\<`T`, `TCtx`, `TNodeCtx`\>\>\>

##### limitOfCount

`number` = `1`

#### Returns

[`LimitResultsPlugin`](LimitResultsPlugin.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Defined in

[plugins/limitResultsPlugin/LimitCountResultsPlugin.ts:7](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/plugins/limitResultsPlugin/LimitCountResultsPlugin.ts#L7)

## Methods

### onCheckStopCalculate()

> **onCheckStopCalculate**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[`GraphPlugin`](../interfaces/GraphPlugin.md).[`onCheckStopCalculate`](../interfaces/GraphPlugin.md#oncheckstopcalculate)

#### Defined in

[plugins/limitResultsPlugin/LimitCountResultsPlugin.ts:11](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/plugins/limitResultsPlugin/LimitCountResultsPlugin.ts#L11)
