import { beforeAll, describe, expect, it } from "vitest";
import { BaseGraphSolver, QueueType } from "../BaseGraphSolver/BaseGraphSolver";
import {
  GetResultPlugin,
  LimitResultsPlugin,
  AddConstrainPlugin,
  AddPathPlugin,
  ValidateNodePlugin
} from "./";

describe("PluginTests", () => {
  const createSolver = () => {
    const solver = new BaseGraphSolver((node: number) =>
      node < 10 ? [node + 1] : []
    );
    const resultPlugin = new GetResultPlugin<number>(
      ({ data }) => data % 2 == 0
    );
    solver.registerPlugin(resultPlugin);
    return solver;
  };

  it("resultPlugin", () => {
    const solver = createSolver();

    solver.calculateByNode(2);
    expect(solver.getResultsData()).toEqual([2, 4, 6, 8, 10]);
  });
  it("limitResultPlugin", () => {
    const solver = createSolver();
    const limitResultsPlugin = new LimitResultsPlugin<number>();
    solver.registerPlugin(limitResultsPlugin);
    solver.calculateByNode(2);
    expect(solver.getResultsData()).toEqual([2]);
  });
  it("addPathPlugin", () => {
    const solver = createSolver();
    const addPathPlugin = new AddPathPlugin<number>();
    solver.registerPlugin(addPathPlugin);
    expect(solver.calculateByNode(1).every(({parent})=>parent)).toBe(true);
  });
  it("AddConstrainPlugin",()=>{
    const solver = createSolver();
    const constrainPlugin = new AddConstrainPlugin<number>((node)=>{
      return node.data < 7
    })
    
    solver.registerPlugin(constrainPlugin);
    solver.calculateByNode(0);
    expect(solver.getResultsData()).toEqual([0,2,4,6]);

    const constrainPlugin1 = new AddConstrainPlugin<number>((node)=>{
      return node.data < 5
    })
    solver.registerPlugin(constrainPlugin1);
    solver.calculateByNode(0);
    expect(solver.getResultsData()).toEqual([0,2,4]);
  })

  it("validateNodePlugin",()=>{
    const solver = createSolver();
    const validateNodePlugin = new ValidateNodePlugin<number>((node)=>{
      return node.data % 4 == 0
    })
    solver.registerPlugin(validateNodePlugin);
    solver.calculateByNode(0);
    expect(solver.getResultsData()).toEqual([0]);
  })
});
