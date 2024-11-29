[**graph_solver v0.0.1**](../../../README.md)

***

[graph_solver](../../../globals.md) / [plugins](../README.md) / PathValidatePlugin

# Class: PathValidatePlugin\<T, TCtx, TNodeCtx\>

## Type Parameters

• **T**

• **TCtx** = `unknown`

• **TNodeCtx** = `unknown`

## Implements

- [`GraphPlugin`](../interfaces/GraphPlugin.md)\<`T`, `TCtx`, `TNodeCtx`\>

## Constructors

### new PathValidatePlugin()

> **new PathValidatePlugin**\<`T`, `TCtx`, `TNodeCtx`\>(`graph`, `checkPathIsValid`): [`PathValidatePlugin`](PathValidatePlugin.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Parameters

##### graph

[`BaseGraphSolver`](../../../classes/BaseGraphSolver.md)\<`T`, `TCtx`, `TNodeCtx`, [`Path`](../../../interfaces/Path.md)\<`T`, `TCtx`, `TNodeCtx`\>, [`GraphPlugin`](../interfaces/GraphPlugin.md)\<`T`, `TCtx`, `TNodeCtx`, [`Path`](../../../interfaces/Path.md)\<`T`, `TCtx`, `TNodeCtx`\>\>\>

##### checkPathIsValid

(`node`, `graph`) => `boolean`

#### Returns

[`PathValidatePlugin`](PathValidatePlugin.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Defined in

[plugins/pathValidatePlugin/PathValidatePlugin.ts:8](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/plugins/pathValidatePlugin/PathValidatePlugin.ts#L8)

## Methods

### onCheckStopCalculate()

> **onCheckStopCalculate**(`node`): `boolean`

#### Parameters

##### node

[`Path`](../../../interfaces/Path.md)\<`T`, `TCtx`, `TNodeCtx`\>

#### Returns

`boolean`

#### Implementation of

[`GraphPlugin`](../interfaces/GraphPlugin.md).[`onCheckStopCalculate`](../interfaces/GraphPlugin.md#oncheckstopcalculate)

#### Defined in

[plugins/pathValidatePlugin/PathValidatePlugin.ts:15](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/plugins/pathValidatePlugin/PathValidatePlugin.ts#L15)
