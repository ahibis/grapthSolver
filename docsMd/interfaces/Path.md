[**graph_solver v0.0.1**](../README.md)

***

[graph_solver](../globals.md) / Path

# Interface: Path\<TNode, TPath, TNodeData\>

## Extends

- `default`\<`TNode`\>

## Type Parameters

• **TNode**

• **TPath** = `unknown`

• **TNodeData** = `unknown`

## Properties

### data

> **data**: `TPath`

#### Defined in

[BaseGraphSolver/Path.ts:9](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/BaseGraphSolver/Path.ts#L9)

***

### depth?

> `optional` **depth**: `number`

#### Defined in

[BaseGraphSolver/Path.ts:7](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/BaseGraphSolver/Path.ts#L7)

***

### nextNode?

> `optional` **nextNode**: [`Path`](Path.md)\<`TNode`, `TPath`, `TNodeData`\>

#### Overrides

`LinkedNode.nextNode`

#### Defined in

[BaseGraphSolver/Path.ts:11](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/BaseGraphSolver/Path.ts#L11)

***

### node

> **node**: `TNode`

#### Overrides

`LinkedNode.node`

#### Defined in

[BaseGraphSolver/Path.ts:5](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/BaseGraphSolver/Path.ts#L5)

***

### nodeData?

> `optional` **nodeData**: `TNodeData`

#### Defined in

[BaseGraphSolver/Path.ts:12](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/BaseGraphSolver/Path.ts#L12)

***

### parent?

> `optional` **parent**: [`Path`](Path.md)\<`TNode`, `TPath`, `TNodeData`\>

#### Defined in

[BaseGraphSolver/Path.ts:6](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/BaseGraphSolver/Path.ts#L6)

***

### prevNode?

> `optional` **prevNode**: [`Path`](Path.md)\<`TNode`, `TPath`, `TNodeData`\>

#### Overrides

`LinkedNode.prevNode`

#### Defined in

[BaseGraphSolver/Path.ts:10](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/BaseGraphSolver/Path.ts#L10)

***

### visitsCount?

> `optional` **visitsCount**: `number`

#### Defined in

[BaseGraphSolver/Path.ts:8](https://github.com/ahibis/grapthSolver/blob/0c6ad5227b2300e452a220efa1e98a9e3061f40c/src/BaseGraphSolver/Path.ts#L8)
