import cloneDeep from 'lodash/cloneDeep'
import times from 'lodash/times'
import { shouldCellLive } from './neighbours'

export function createCells({ cols = 10, rows = 5, random = false } = {}) {
  return times(rows, () => times(cols, () => {
    return random
      // TODO: add weight slider to generate more dead/alive cells?
      ? Math.random() >= 0.5
      : false
  }))
}

export function getCell({ x, y, cells = [] }) {
  try {
    if (cells[y][x] === undefined) {
      return null
    }
    return cells[y][x]
  } catch(e) {
    return null
  }
}

export function toggleCell({ x, y, cells = [] } = {}) {
  const newCells = cloneDeep(cells)
  const cell = getCell({ x, y, cells: newCells })
  if (cell !== null) {
    newCells[y][x] = !cell
  }
  return newCells
}

export function evolve(cells = []) {
  return cells.map((row, y) => {
    return row.map((cell, x) => shouldCellLive({ x, y, cells }))
  })
}

