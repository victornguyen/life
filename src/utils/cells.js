import times from 'lodash/times'
import { shouldCellLive } from './neighbours'

export function createCells({ cols = 10, rows = 5, randomise = false } = {}) {
  return times(rows, () => times(cols, () => {
    // TODO: add weight slider to generate more dead/alive cells?
    return Math.random() >= 0.9
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
  const cell = getCell({ x, y, cells })
  if (cell !== null) {
    cells[y][x] = !cell
  }
  return cells
}

export function evolve(cells = []) {
  return cells.map((row, y) => {
    return row.map((cell, x) => shouldCellLive({ x, y, cells }))
  })
}

