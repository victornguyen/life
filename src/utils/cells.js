import times from 'lodash/times'

export function createCells({ cols = 10, rows = 5, randomise = false } = {}) {
  // TODO: replace this with native loops to demonstrate i know how to do those?
  // TODO: implement randomise param
  // TODO: is creating a flat array of objects with x/y props easier to deal with?
  return times(rows, () => times(cols, () => {
    // TODO: add weight slider to generate more dead/alive cells?
    return Math.random() >= 0.9
  }))
}

export function toggleCell({ col, row, cells = [] } = {}) {
  try {
    cells[row][col] = !cells[row][col]
  } catch(e) {
    // TODO: throw a meaningful exception
  } finally {
    return cells
  }
}

