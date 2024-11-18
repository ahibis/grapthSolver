import { describe, expect, it } from "vitest";
import { BaseGraphSolver, QueueType } from "./BaseGraphSolver";
import { GetResultPlugin, LimitResultsPlugin } from "./plugins/";
describe("BaseGraphSolver", () => {
  const solver = new BaseGraphSolver((node: number) =>
    node < 10 ? [node + 1] : []
  );
  const resultPlugin = new GetResultPlugin<number>(({ data }) => data % 2 == 0);
  const limitResultsPlugin = new LimitResultsPlugin<number>();
  const getDataResult = <T>(nodes: { data: T }[]) =>
    nodes.map(({ data }) => data);

  it("baseTest", () => {
    expect(solver.calculateByNode(1)).toEqual([]);
  });
  it("resultPlugin", () => {
    solver.registerPlugin(resultPlugin);
    expect(getDataResult(solver.calculateByNode(2))).toEqual([2, 4, 6, 8, 10]);
  });
  it("limitResultPlugin", () => {
    solver.registerPlugin(limitResultsPlugin);
    expect(getDataResult(solver.calculateByNode(2))).toEqual([2]);
  });
  
});
