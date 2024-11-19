import { describe, expect, it } from "vitest";
import { BaseGraphSolver, QueueType } from "./BaseGraphSolver";

it("GraphSolverIsWorked", () => {
  const solver = new BaseGraphSolver((node: number) =>
    node < 10 ? [node + 1] : []
  );
  expect(solver.calculateByNode(1)).toEqual([]);
});

// it("LinkedArray", () => {
//   const solver = new BaseGraphSolver((node: number) =>
//     node < 10 ? [node + 1] : [], QueueType.linkedQueue
//   );
//   expect(solver.calculateByNode(1)).toEqual([]);
// });
