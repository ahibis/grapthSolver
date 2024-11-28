[**graph_solver v0.0.1**](../README.md)

***

[graph_solver](../globals.md) / GraphPlugin

# Interface: GraphPlugin\<T, TCtx, TNodeCtx, TPath\>

## Type Parameters

• **T**

• **TCtx** = `unknown`

• **TNodeCtx** = `unknown`

• **TPath** *extends* [`Path`](Path.md)\<`T`, `TCtx`, `TNodeCtx`\> = [`Path`](Path.md)\<`T`, `TCtx`, `TNodeCtx`\>

## Properties

### onGetResults()?

> `optional` **onGetResults**: \<`TResult`\>(`results`) => `TResult`

#### Type Parameters

• **TResult** = `TPath`

#### Parameters

##### results

`TPath`

#### Returns

`TResult`

#### Defined in

[plugins/GraphPlugin.ts:14](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/plugins/GraphPlugin.ts#L14)

***

### priority?

> `optional` **priority**: `number`

#### Defined in

[plugins/GraphPlugin.ts:8](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/plugins/GraphPlugin.ts#L8)

## Methods

### onCheckIsResult()?

> `optional` **onCheckIsResult**(`path`): `boolean`

#### Parameters

##### path

`TPath`

#### Returns

`boolean`

#### Defined in

[plugins/GraphPlugin.ts:12](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/plugins/GraphPlugin.ts#L12)

***

### onCheckStopCalculate()?

> `optional` **onCheckStopCalculate**(`path`): `boolean`

#### Parameters

##### path

`TPath`

#### Returns

`boolean`

#### Defined in

[plugins/GraphPlugin.ts:13](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/plugins/GraphPlugin.ts#L13)

***

### onFirstPath()?

> `optional` **onFirstPath**(`path`): `TPath`

#### Parameters

##### path

`TPath`

#### Returns

`TPath`

#### Defined in

[plugins/GraphPlugin.ts:9](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/plugins/GraphPlugin.ts#L9)

***

### onPathTransform()?

> `optional` **onPathTransform**(`path`, `parent`): `TPath`

#### Parameters

##### path

`TPath`

##### parent

`TPath`

#### Returns

`TPath`

#### Defined in

[plugins/GraphPlugin.ts:10](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/plugins/GraphPlugin.ts#L10)

***

### onPathValidate()?

> `optional` **onPathValidate**(`path`, `parent`): `boolean`

#### Parameters

##### path

`TPath`

##### parent

`TPath`

#### Returns

`boolean`

#### Defined in

[plugins/GraphPlugin.ts:11](https://github.com/ahibis/grapthSolver/blob/29d33a7088c3740c5f86a9fb08a8a2bfd8a007fb/src/plugins/GraphPlugin.ts#L11)
