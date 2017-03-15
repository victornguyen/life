// @flow
// TODO: try flow typechecking?

import flatten from 'lodash/flatten'

// TODO: relocate?
// Determine next set of cells
export function evolve(cells = []) {
  return cells.map((row, y) => {
    return row.map((cell, x) => isAlive({ x, y, cells }))
  })
}

function isAlive({ x, y, cells }) {
  return aliveNeighbours(
    meetTheNeighbours({ x, y, cells })
  ) === 2
}

// TODO: relocate?
function getCell({ x, y, cells = [] }) {
  try {
    if (cells[y][x] === undefined) {
      return null
    }
    return cells[y][x]
  } catch(e) {
    return null
  }
}

// Iterate through neighbours and count how many live ones there are
function aliveNeighbours(neighbours) {
  return neighbours.filter(isAlive => isAlive).length
}

export function meetTheNeighbours({ x, y, cells = [] }) {
  const yCoords = [y - 1, y, y + 1]
  const xCoords = [x - 1, x, x + 1]

  // TODO: (optional) avoid lodash flatten to demonstrate native skillzzzz?
  return flatten(
    yCoords.map((yPoint) => {
      return xCoords.map((xPoint) => {
        const isTargetCell = yPoint === x && xPoint === y
        if (isTargetCell) {
          return null
        }
        return getCell({ x: xPoint, y: yPoint, cells })
      })
    })
  )
}

