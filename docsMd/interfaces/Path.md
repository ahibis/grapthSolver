[**graph_solver v0.0.1**](../README.md)

***

[graph_solver](../globals.md) / Path

# Interface: Path\<TNode, TPath, TNodeData\>

Interface Path describes the path created during the graph pass

 Path

## Extends

- `default`\<`TNode`\>

## Type Parameters

• **TNode**

Type of node

• **TPath** = `unknown`

This type describes the data required to calculate values during a pass

• **TNodeData** = `unknown`

This type describes additional mutable node data. Such as the number of visits, the maximum length to the node, and others

## Properties

### children?

> `optional` **children**: [`Path`](Path.md)\<`TNode`, `TPath`, `TNodeData`\>[]

#### Defined in

[BaseGraphSolver/Path.ts:20](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/Path.ts#L20)

***

### childrenNode?

> `optional` **childrenNode**: `TNode`[]

#### Defined in

[BaseGraphSolver/Path.ts:21](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/Path.ts#L21)

***

### data

> **data**: `TPath`

#### Defined in

[BaseGraphSolver/Path.ts:15](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/Path.ts#L15)

***

### depth?

> `optional` **depth**: `number`

#### Defined in

[BaseGraphSolver/Path.ts:23](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/Path.ts#L23)

***

### nextNode?

> `optional` **nextNode**: [`Path`](Path.md)\<`TNode`, `TPath`, `TNodeData`\>

#### Overrides

`LinkedNode.nextNode`

#### Defined in

[BaseGraphSolver/Path.ts:25](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/Path.ts#L25)

***

### node

> **node**: `TNode`

#### Overrides

`LinkedNode.node`

#### Defined in

[BaseGraphSolver/Path.ts:13](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/Path.ts#L13)

***

### nodeData?

> `optional` **nodeData**: `TNodeData`

#### Defined in

[BaseGraphSolver/Path.ts:17](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/Path.ts#L17)

***

### parent?

> `optional` **parent**: [`Path`](Path.md)\<`TNode`, `TPath`, `TNodeData`\>

#### Defined in

[BaseGraphSolver/Path.ts:18](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/Path.ts#L18)

***

### parentNode?

> `optional` **parentNode**: `TNode`

#### Defined in

[BaseGraphSolver/Path.ts:19](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/Path.ts#L19)

***

### prevNode?

> `optional` **prevNode**: [`Path`](Path.md)\<`TNode`, `TPath`, `TNodeData`\>

#### Overrides

`LinkedNode.prevNode`

#### Defined in

[BaseGraphSolver/Path.ts:24](https://github.com/ahibis/grapthSolver/blob/8193d141248faba7f0f1404b97be6f37b74018dc/src/BaseGraphSolver/Path.ts#L24)
