# Graph api
## algorithm DFS | BFS
private params:
nodeList: Node<T>

Params:
rootNode: Node<T>
showPath: bool
method: "DFS"| "BFS"
countResults: Number | "first" | "all"
context: T1
Methods:
getChildren(node: Node) : Node[]
checkSolutionReached(node: Node) : bool
changeContext(context: T1, nodeCurrent: Node, nodePrev: Node ) : T1
RunForRootNode(rootNode: Node) : void

## algorithm Dijkstra
Params:
rootNode: Node<T>
showPath: bool
method: "BFS"
countResults: Number | "first" | "all"
context: T1
Methods:
getChildren(node: Node) : Node[]
checkSolutionReached(node: Node) : bool
changeContext(context: T1, nodeCurrent: Node, nodePrev: Node ) : T1
RunForRootNode(rootNode: Node) : void
