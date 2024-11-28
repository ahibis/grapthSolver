[**graph_solver v0.0.1**](../README.md)

***

[graph_solver](../globals.md) / IQueue

# Interface: IQueue\<T\>

## Type Parameters

• **T**

## Accessors

### isEmpty

#### Get Signature

> **get** **isEmpty**(): `boolean`

##### Returns

`boolean`

#### Defined in

queue/IQueue.ts:12

***

### nodes

#### Get Signature

> **get** **nodes**(): `T`[]

##### Returns

`T`[]

#### Defined in

queue/IQueue.ts:13

## Methods

### filter()

> **filter**(`fn`): `void`

#### Parameters

##### fn

(`node`) => `boolean`

#### Returns

`void`

#### Defined in

queue/IQueue.ts:9

***

### find()

> **find**(`fn`): `void`

#### Parameters

##### fn

(`node`) => `boolean`

#### Returns

`void`

#### Defined in

queue/IQueue.ts:8

***

### getNextNeighbor()

> **getNextNeighbor**(`node`): `undefined` \| `T`

#### Parameters

##### node

`T`

#### Returns

`undefined` \| `T`

#### Defined in

queue/IQueue.ts:11

***

### getPrevNeighbor()

> **getPrevNeighbor**(`node`): `undefined` \| `T`

#### Parameters

##### node

`T`

#### Returns

`undefined` \| `T`

#### Defined in

queue/IQueue.ts:10

***

### pop()

> **pop**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

queue/IQueue.ts:4

***

### push()

> **push**(`node`): `void`

#### Parameters

##### node

`T`

#### Returns

`void`

#### Defined in

queue/IQueue.ts:3

***

### shift()

> **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

queue/IQueue.ts:5

***

### sort()

> **sort**(`compareFn`?): `void`

#### Parameters

##### compareFn?

(`a`, `b`) => `number`

#### Returns

`void`

#### Defined in

queue/IQueue.ts:7
