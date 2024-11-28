[**graph_solver v0.0.1**](../README.md)

***

[graph_solver](../globals.md) / LinkedQueue

# Class: LinkedQueue\<T, T1\>

## Type Parameters

• **T**

• **T1** *extends* [`LinkedNode`](../interfaces/LinkedNode.md)\<`T`\> = [`LinkedNode`](../interfaces/LinkedNode.md)\<`T`\>

## Implements

- `default`\<`T`, `T1`\>

## Constructors

### new LinkedQueue()

> **new LinkedQueue**\<`T`, `T1`\>(): [`LinkedQueue`](LinkedQueue.md)\<`T`, `T1`\>

#### Returns

[`LinkedQueue`](LinkedQueue.md)\<`T`, `T1`\>

## Properties

### firstNode

> **firstNode**: `undefined` \| `T1`

#### Defined in

queue/LinkedQueue/LinkedQueue.ts:8

***

### lastNode

> **lastNode**: `undefined` \| `T1`

#### Defined in

queue/LinkedQueue/LinkedQueue.ts:9

## Accessors

### isEmpty

#### Get Signature

> **get** **isEmpty**(): `boolean`

##### Returns

`boolean`

#### Implementation of

`ILinkedQueue.isEmpty`

#### Defined in

queue/LinkedQueue/LinkedQueue.ts:40

***

### nodes

#### Get Signature

> **get** **nodes**(): `T1`[]

##### Returns

`T1`[]

#### Implementation of

`ILinkedQueue.nodes`

#### Defined in

queue/LinkedQueue/LinkedQueue.ts:72

## Methods

### filter()

> **filter**(`fn`): `void`

#### Parameters

##### fn

(`node`) => `boolean`

#### Returns

`void`

#### Implementation of

`ILinkedQueue.filter`

#### Defined in

queue/LinkedQueue/LinkedQueue.ts:52

***

### find()

> **find**(`fn`): `undefined` \| `T1`

#### Parameters

##### fn

(`node`) => `boolean`

#### Returns

`undefined` \| `T1`

#### Implementation of

`ILinkedQueue.find`

#### Defined in

queue/LinkedQueue/LinkedQueue.ts:43

***

### getNextNeighbor()

> **getNextNeighbor**(`node`): `undefined` \| `T1`

#### Parameters

##### node

`T1`

#### Returns

`undefined` \| `T1`

#### Implementation of

`ILinkedQueue.getNextNeighbor`

#### Defined in

queue/LinkedQueue/LinkedQueue.ts:69

***

### getPrevNeighbor()

> **getPrevNeighbor**(`node`): `undefined` \| `T1`

#### Parameters

##### node

`T1`

#### Returns

`undefined` \| `T1`

#### Implementation of

`ILinkedQueue.getPrevNeighbor`

#### Defined in

queue/LinkedQueue/LinkedQueue.ts:66

***

### pop()

> **pop**(): `undefined` \| `T1`

#### Returns

`undefined` \| `T1`

#### Implementation of

`ILinkedQueue.pop`

#### Defined in

queue/LinkedQueue/LinkedQueue.ts:20

***

### push()

> **push**(`node`): `void`

#### Parameters

##### node

`T1`

#### Returns

`void`

#### Implementation of

`ILinkedQueue.push`

#### Defined in

queue/LinkedQueue/LinkedQueue.ts:11

***

### shift()

> **shift**(): `undefined` \| `T1`

#### Returns

`undefined` \| `T1`

#### Implementation of

`ILinkedQueue.shift`

#### Defined in

queue/LinkedQueue/LinkedQueue.ts:30

***

### sort()

> **sort**(`compareFn`?): `void`

#### Parameters

##### compareFn?

(`a`, `b`) => `number`

#### Returns

`void`

#### Implementation of

`ILinkedQueue.sort`

#### Defined in

queue/LinkedQueue/LinkedQueue.ts:7
