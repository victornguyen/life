import { toggleCell } from './cells';

describe('createCells', () => {
  
})

describe('toggleCell', () => {
  it('toggles the correct dead cell', () => {
    const cells = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ]
    expect(
      toggleCell({ col: 1, row: 0, cells })
    ).toEqual([
      [false, true, false],
      [false, false, false],
      [false, false, false],
    ])
  });

  it('toggles the correct alive cell', () => {
    const cells = [
      [false, false, false],
      [false, true, false],
      [false, false, false],
    ]
    expect(
      toggleCell({ col: 1, row: 1, cells })
    ).toEqual([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ])
  });

  it('returns the same cells when given invalid coords', () => {
    const cells = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ]
    expect(
      toggleCell({ col: 5, row: 5, cells })
    ).toEqual([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ])
  })
})
