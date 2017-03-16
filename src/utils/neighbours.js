import flatten from 'lodash/flatten'
import { getCell } from './cells'

export function shouldCellLive({ x, y, cells }) {
  const alive = liveNeighbourCount(
    getNeighbours({ x, y, cells })
  )
  return alive === 2 || alive === 3
}

function getNeighbours({ x, y, cells = [] }) {
  // possible x and y coords for neighbouring cells
  const rows = [y - 1, y, y + 1]
  const cols = [x - 1, x, x + 1]

  return flatten(
    rows.map((yPoint) => {
      return cols.map((xPoint) => {
        const isTargetCell = yPoint === x && xPoint === y
        if (isTargetCell) {
          return null
        }
        return getCell({ x: xPoint, y: yPoint, cells })
      })
    })
  )
}

function liveNeighbourCount(neighbours) {
  return neighbours.filter(isAlive => isAlive).length
}

