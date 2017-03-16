// @flow
// TODO: try flow typechecking?

import flatten from 'lodash/flatten'
import { getCell } from './cells'

// TODO: relocate?
// Determine next set of cells
export function evolve(cells = []) {
  return cells.map((row, y) => {
    return row.map((cell, x) => isAlive({ x, y, cells }))
  })
}

function isAlive({ x, y, cells }) {
  const alive = aliveNeighbours(
    meetTheNeighbours({ x, y, cells })
  )
  return alive === 2 || alive === 3
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

