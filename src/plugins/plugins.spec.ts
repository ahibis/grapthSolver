import { expect, it } from 'vitest'
import { BaseGraphSolver } from '../BaseGraphSolver/BaseGraphSolver'
import {
  ResultPlugin,
  LimitResultsPlugin,
  PathValidatePlugin,
  PathPlugin,
  ValidateNodePlugin,
  PathDataPlugin,
  NodeDataPlugin,
  PathTransformPlugin,
} from './'

const createSolver = <TCtx = unknown, TNodeCtx = unknown>() => {
  const solver = new BaseGraphSolver<number, TCtx, TNodeCtx>((node: number) =>
    node < 10 ? [node + 1] : []
  )
  const resultPlugin = new ResultPlugin<number>(({ data }) => data % 2 === 0)
  solver.registerPlugin(resultPlugin)
  return solver
}

it('resultPlugin', () => {
  const solver = createSolver()

  solver.calculateByNode(2)
  expect(solver.getResultsData()).toEqual([2, 4, 6, 8, 10])
})
it('limitResultPlugin', () => {
  const solver = createSolver()
  const limitResultsPlugin = new LimitResultsPlugin<number>(solver)
  solver.registerPlugin(limitResultsPlugin)
  solver.calculateByNode(2)
  expect(solver.getResultsData()).toEqual([2])
})
it('addPathPlugin', () => {
  const solver = createSolver()
  const addPathPlugin = new PathPlugin<number>()
  solver.registerPlugin(addPathPlugin)
  expect(solver.calculateByNode(1).every(({ parent }) => parent)).toBe(true)
})
it('AddConstrainPlugin', () => {
  const solver = createSolver()
  const constrainPlugin = new PathValidatePlugin<number>(solver, (node) => {
    return node.data < 7
  })

  solver.registerPlugin(constrainPlugin)
  solver.calculateByNode(0)
  expect(solver.getResultsData()).toEqual([0, 2, 4, 6])

  const constrainPlugin1 = new PathValidatePlugin<number>(solver, (node) => {
    return node.data < 5
  })
  solver.registerPlugin(constrainPlugin1)
  solver.calculateByNode(0)
  expect(solver.getResultsData()).toEqual([0, 2, 4])
})

it('validateNodePlugin', () => {
  const solver = createSolver()
  const validateNodePlugin = new ValidateNodePlugin<number>((node) => {
    return node.data % 4 === 0
  })
  solver.registerPlugin(validateNodePlugin)
  solver.calculateByNode(0)
  expect(solver.getResultsData()).toEqual([0])
})
it('PathDataPlugin', () => {
  const solver = createSolver()
  const pathDataPlugin = new PathDataPlugin<number, number>(
    ({ data }) => data,
    ({ data }, { pathData }) => {
      return data + pathData
    }
  )
  solver.registerPlugin(pathDataPlugin)
  solver.calculateByNode(0)
  expect(solver.getResultsData()).toEqual([0, 2, 4, 6, 8, 10])
  expect(solver.getResultsPathData()).toEqual([0, 3, 10, 21, 36, 55])
})
it('NodeDataPlugin', () => {
  const solver = createSolver<unknown, number>()
  const nodeDataPlugin = new NodeDataPlugin<number, unknown, number>(() => 0)
  solver.registerPlugin(nodeDataPlugin)
})
