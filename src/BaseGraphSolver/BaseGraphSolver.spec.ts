import { expect, it } from 'vitest'
import { BaseGraphSolver } from './BaseGraphSolver'

it('GraphSolverIsWorked', () => {
  const solver = new BaseGraphSolver((node: number) =>
    node < 10 ? [node + 1] : []
  )
  expect(solver.calculate(1)).toEqual([])
})

// it("LinkedArray", () => {
//   const solver = new BaseGraphSolver((node: number) =>
//     node < 10 ? [node + 1] : [], QueueType.linkedQueue
//   );
//   expect(solver.calculateByNode(1)).toEqual([]);
// });
