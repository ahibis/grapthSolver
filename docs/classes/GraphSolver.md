[**graph_solver v0.0.1**](../README.md)

***

[graph_solver](../globals.md) / GraphSolver

# Class: GraphSolver\<TNode, TPathData, TNodeCtx, TPath, TGraphPlugin\>

## Extends

- [`BaseGraphSolver`](BaseGraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

## Type Parameters

• **TNode**

• **TPathData** = `unknown`

• **TNodeCtx** = `unknown`

• **TPath** *extends* [`Path`](../interfaces/Path.md)\<`TNode`, `TPathData`, `TNodeCtx`\> = [`Path`](../interfaces/Path.md)\<`TNode`, `TPathData`, `TNodeCtx`\>

• **TGraphPlugin** *extends* [`GraphPlugin`](../interfaces/GraphPlugin.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`\> = [`GraphPlugin`](../interfaces/GraphPlugin.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`\>

## Constructors

### new GraphSolver()

> **new GraphSolver**\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>(`getChildrenByNode`, `options`?): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Parameters

##### getChildrenByNode

(`node`) => `TNode`[]

##### options?

`GraphOptions` & `Omit`\<[`Path`](../interfaces/Path.md)\<`undefined`, `TPathData`, `TNodeCtx`\>, `"node"`\>

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Overrides

[`BaseGraphSolver`](BaseGraphSolver.md).[`constructor`](BaseGraphSolver.md#constructors)

#### Defined in

[GraphSolver/GraphSolver.ts:24](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L24)

## Properties

### orderOfPathPass

> **orderOfPathPass**: `ILinkedQueue`\<`TNode`, `TPath`\>

#### Inherited from

[`BaseGraphSolver`](BaseGraphSolver.md).[`orderOfPathPass`](BaseGraphSolver.md#orderofpathpass)

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:27](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/BaseGraphSolver/BaseGraphSolver.ts#L27)

***

### results

> **results**: `TPath`[] = `[]`

#### Inherited from

[`BaseGraphSolver`](BaseGraphSolver.md).[`results`](BaseGraphSolver.md#results)

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:30](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/BaseGraphSolver/BaseGraphSolver.ts#L30)

## Methods

### calculate()

> **calculate**\<`TResult`\>(`firstNode`, `onGetResults`?): `void`

#### Type Parameters

• **TResult**

#### Parameters

##### firstNode

`TNode`

##### onGetResults?

(`results`) => `TResult`

#### Returns

`void`

#### Defined in

[GraphSolver/GraphSolver.ts:98](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L98)

***

### calculateByNode()

> **calculateByNode**(`data`): `TPath`[]

#### Parameters

##### data

`TNode`

#### Returns

`TPath`[]

#### Inherited from

[`BaseGraphSolver`](BaseGraphSolver.md).[`calculateByNode`](BaseGraphSolver.md#calculatebynode)

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:138](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/BaseGraphSolver/BaseGraphSolver.ts#L138)

***

### calculateDepth()

> **calculateDepth**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:52](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L52)

***

### checkPathIsResult()

> **checkPathIsResult**(`conditionPathIsResult`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Parameters

##### conditionPathIsResult

(`path`, `prevPath`) => `boolean`

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:86](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L86)

***

### disablePathPop()

> **disablePathPop**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:31](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L31)

***

### enableChildren()

> **enableChildren**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:49](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L49)

***

### enableNodeChildren()

> **enableNodeChildren**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:46](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L46)

***

### enableNodeParent()

> **enableNodeParent**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

Enables parant node for each path.
This function is part of a fluent API and returns the GraphSolver instance
to allow for method chaining.

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Example

```ts

```

#### Defined in

[GraphSolver/GraphSolver.ts:40](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L40)

***

### enableParent()

> **enableParent**(): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:43](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L43)

***

### getResultsData()

> **getResultsData**(): `TNode`[]

#### Returns

`TNode`[]

#### Inherited from

[`BaseGraphSolver`](BaseGraphSolver.md).[`getResultsData`](BaseGraphSolver.md#getresultsdata)

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:132](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/BaseGraphSolver/BaseGraphSolver.ts#L132)

***

### getResultsPathData()

> **getResultsPathData**(): `TPathData`[]

#### Returns

`TPathData`[]

#### Inherited from

[`BaseGraphSolver`](BaseGraphSolver.md).[`getResultsPathData`](BaseGraphSolver.md#getresultspathdata)

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:135](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/BaseGraphSolver/BaseGraphSolver.ts#L135)

***

### limitResults()

> **limitResults**(`limit`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Parameters

##### limit

`number`

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:94](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L94)

***

### makePathOrder()

> **makePathOrder**(`conditionMakePathOrderByScore`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Parameters

##### conditionMakePathOrderByScore

(`path`, `parent`) => `number`

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:55](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L55)

***

### makePathOrderByScore()

> **makePathOrderByScore**(`conditionMakePathOrderByScore`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Parameters

##### conditionMakePathOrderByScore

(`path`) => `number`

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:61](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L61)

***

### nodeDataInit()

> **nodeDataInit**(`nodeDataInit`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Parameters

##### nodeDataInit

(`path`, `prevPath`) => `number`

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:71](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L71)

***

### nodeDataKey()

> **nodeDataKey**(`nodeDataKey`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Parameters

##### nodeDataKey

(`node`) => `string`

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:68](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L68)

***

### pathDataInit()

> **pathDataInit**(`pathDataInit`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Parameters

##### pathDataInit

(`path`, `prevPath`) => `TPathData`

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:65](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L65)

***

### pathsDynamicReject()

> **pathsDynamicReject**(...`conditionsRejectPaths`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Parameters

##### conditionsRejectPaths

...(`path`, `prevPath`) => `boolean`[]

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:78](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L78)

***

### registerPlugin()

> **registerPlugin**(`plugin`): `void`

#### Parameters

##### plugin

`TGraphPlugin`

#### Returns

`void`

#### Inherited from

[`BaseGraphSolver`](BaseGraphSolver.md).[`registerPlugin`](BaseGraphSolver.md#registerplugin)

#### Defined in

[BaseGraphSolver/BaseGraphSolver.ts:122](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/BaseGraphSolver/BaseGraphSolver.ts#L122)

***

### rejectPath()

> **rejectPath**(`conditionRejectPath`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Parameters

##### conditionRejectPath

(`path`, `prevPath`) => `boolean`

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:75](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L75)

***

### rejectPathByNodeVisit()

> **rejectPathByNodeVisit**(`visitCount`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Parameters

##### visitCount

`number`

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:91](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L91)

***

### resultKey()

> **resultKey**(`resultKey`): [`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Parameters

##### resultKey

(`path`) => `string`

#### Returns

[`GraphSolver`](GraphSolver.md)\<`TNode`, `TPathData`, `TNodeCtx`, `TPath`, `TGraphPlugin`\>

#### Defined in

[GraphSolver/GraphSolver.ts:83](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/GraphSolver/GraphSolver.ts#L83)
