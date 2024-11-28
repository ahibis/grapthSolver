[**graph_solver v0.0.1**](../README.md)

***

[graph_solver](../globals.md) / ArrayQueue

# Class: ArrayQueue\<T\>

## Type Parameters

• **T**

## Implements

- [`IQueue`](../interfaces/IQueue.md)\<`T`\>

## Constructors

### new ArrayQueue()

> **new ArrayQueue**\<`T`\>(): [`ArrayQueue`](ArrayQueue.md)\<`T`\>

#### Returns

[`ArrayQueue`](ArrayQueue.md)\<`T`\>

## Accessors

### isEmpty

#### Get Signature

> **get** **isEmpty**(): `boolean`

##### Returns

`boolean`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`isEmpty`](../interfaces/IQueue.md#isempty)

#### Defined in

queue/ArrayQueue/ArrayQueue.ts:14

***

### nodes

#### Get Signature

> **get** **nodes**(): `T`[]

##### Returns

`T`[]

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`nodes`](../interfaces/IQueue.md#nodes)

#### Defined in

queue/ArrayQueue/ArrayQueue.ts:34

## Methods

### filter()

> **filter**(`fn`): `void`

#### Parameters

##### fn

(`node`) => `boolean`

#### Returns

`void`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`filter`](../interfaces/IQueue.md#filter)

#### Defined in

queue/ArrayQueue/ArrayQueue.ts:23

***

### find()

> **find**(`fn`): `undefined` \| `T`

#### Parameters

##### fn

(`node`) => `boolean`

#### Returns

`undefined` \| `T`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`find`](../interfaces/IQueue.md#find)

#### Defined in

queue/ArrayQueue/ArrayQueue.ts:20

***

### getNextNeighbor()

> **getNextNeighbor**(`node`): `undefined` \| `T`

#### Parameters

##### node

`T`

#### Returns

`undefined` \| `T`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`getNextNeighbor`](../interfaces/IQueue.md#getnextneighbor)

#### Defined in

queue/ArrayQueue/ArrayQueue.ts:30

***

### getPrevNeighbor()

> **getPrevNeighbor**(`node`): `undefined` \| `T`

#### Parameters

##### node

`T`

#### Returns

`undefined` \| `T`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`getPrevNeighbor`](../interfaces/IQueue.md#getprevneighbor)

#### Defined in

queue/ArrayQueue/ArrayQueue.ts:26

***

### pop()

> **pop**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`pop`](../interfaces/IQueue.md#pop)

#### Defined in

queue/ArrayQueue/ArrayQueue.ts:8

***

### push()

> **push**(`node`): `void`

#### Parameters

##### node

`T`

#### Returns

`void`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`push`](../interfaces/IQueue.md#push)

#### Defined in

queue/ArrayQueue/ArrayQueue.ts:5

***

### shift()

> **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`shift`](../interfaces/IQueue.md#shift)

#### Defined in

queue/ArrayQueue/ArrayQueue.ts:11

***

### sort()

> **sort**(`compareFn`?): `void`

#### Parameters

##### compareFn?

(`a`, `b`) => `number`

#### Returns

`void`

#### Implementation of

[`IQueue`](../interfaces/IQueue.md).[`sort`](../interfaces/IQueue.md#sort)

#### Defined in

queue/ArrayQueue/ArrayQueue.ts:17
