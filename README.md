# Life: The Game 👾

A Javascript-based implementation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life) with a UI available at [https://victornguyen.github.io/life](https://victornguyen.github.io/life)

## Quick start

To run the project locally:

```sh
$ npm i
$ npm start
// Then go to http://localhost:3000
```

There aren't many tests, but you can run them with:

```sh
$ npm test
```

## Development notes

- The bits you're probably most interested in are in `/src/utils/`
- Used React to demonstrate I can use React (given the role)
- Although using `<canvas>` to render the board might've been more suitable
- Used [Create React App](https://github.com/facebookincubator/reate-react-app) to bootstrap the project to minimise time spent on scaffolding
- As a result, the CSS implementation is pretty rudimentary (no pre-pocessing or CSS Modules), not that this needed anything more
- Used a 2D array to store cell data because traversing rows and columns seemed natural that way. But as an absolute representation of each cell, a flat array of objects `[ { x:0, y:0, live:true }, ... ]` might've been more explicit.
- Completely missed the _"Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction"_ part of the rules until this morning while I was doing the README 😅

## Roadmap / wishlist

- Adjustable the board size
- More tests
- A slider to adjust the ratio of live to dead cells when a new board is generated
- `<canvas>` to render the board
- A timer?


