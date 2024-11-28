[**graph_solver v0.0.1**](../README.md)

***

[graph_solver](../globals.md) / BaseGraphSolver

# Class: BaseGraphSolver\<T, TPathData, TNodeCtx, TPath, TGraphPlugin\>

## Extended by

- [`GraphSolver`](GraphSolver.md)

## Type Parameters

• **T**

• **TPathData** = `unknown`

• **TNodeCtx** = `unknown`

• **TPath** *extends* [`Path`](../interfaces/Path.md)\<`T`, `TPathData`, `TNodeCtx`\> = [`Path`](../interfaces/Path.md)\<`T`, `TPathData`, `TNodeCtx`\>

• **TGraphPlugin** *extends* [`GraphPlugin`](../interfaces/GraphPlugin.md)\<`T`, `TPathData`, `TNodeCtx`, `TPath`\> = [`GraphPlugin`](../interfaces/GraphPlugin.md)\<`T`, `TPathData`, `TNodeCtx`, `TPath`\>

## Constructors

### new BaseGraphSolver()

> **new BaseGraphSolver**\<`T`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>(`getChildrenByNode`, `queueType`): [`BaseGraphSolver`](BaseGraphSolver.md)\<`T`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Parameters

##### getChildrenByNode

(`node`) => `T`[]

##### queueType

[`QueueType`](../enumerations/QueueType.md) = `QueueType.arrayQueue`

#### Returns

[`BaseGraphSolver`](BaseGraphSolver.md)\<`T`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:125](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/BaseGraphSolver/BaseGraphSolver.ts#L125)

## Properties

### orderOfPathPass

> **orderOfPathPass**: `ILinkedQueue`\<`T`, `TPath`\>

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:27](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/BaseGraphSolver/BaseGraphSolver.ts#L27)

***

### results

> **results**: `TPath`[] = `[]`

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:30](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/BaseGraphSolver/BaseGraphSolver.ts#L30)

## Methods

### calculateByNode()

> **calculateByNode**(`data`): `TPath`[]

#### Parameters

##### data

`T`

#### Returns

`TPath`[]

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:138](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/BaseGraphSolver/BaseGraphSolver.ts#L138)

***

### getResultsData()

> **getResultsData**(): `T`[]

#### Returns

`T`[]

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:132](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/BaseGraphSolver/BaseGraphSolver.ts#L132)

***

### getResultsPathData()

> **getResultsPathData**(): `TPathData`[]

#### Returns

`TPathData`[]

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:135](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/BaseGraphSolver/BaseGraphSolver.ts#L135)

***

### registerPlugin()

> **registerPlugin**(`plugin`): `void`

#### Parameters

##### plugin

`TGraphPlugin`

#### Returns

`void`

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:122](https://github.com/ahibis/grapthSolver/blob/4dd4240a4478c04a5ad76de712e4c7919f8a6717/src/BaseGraphSolver/BaseGraphSolver.ts#L122)
