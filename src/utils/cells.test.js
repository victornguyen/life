import { toggleCell } from './cells';

describe('createCells', () => {
  
})

describe('toggleCell', () => {
  it('toggles the correct dead cell', () => {
    const cells = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
    expect(
      toggleCell({ col: 1, row: 0, cells })
    ).toEqual([
      [0, 1, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])
  });

  it('toggles the correct alive cell', () => {
    const cells = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]
    expect(
      toggleCell({ col: 1, row: 1, cells })
    ).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])
  });

  it('returns the same cells when given invalid coords', () => {
    const cells = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
    expect(
      toggleCell({ col: 5, row: 5, cells })
    ).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])
  })
})
