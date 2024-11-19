import { describe, expect, it } from "vitest";
import { BaseGraphSolver, QueueType } from "./BaseGraphSolver";
describe("BaseGraphSolver", () => {
  const solver = new BaseGraphSolver((node: number) =>
    node < 10 ? [node + 1] : []
  );
  const getDataResult = <T>(nodes: { data: T }[]) =>
    nodes.map(({ data }) => data);

  it("baseTest", () => {
    expect(solver.calculateByNode(1)).toEqual([]);
  });
});
