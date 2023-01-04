import * as React from 'react'

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
    return winner
      ? `Winner: ${winner}`
      : squares.every(Boolean)
      ? `Scratch: Cat's game`
      : `Next player: ${nextValue}`
  }
  
  // eslint-disable-next-line no-unused-vars
  function calculateNextValue(squares) {
    return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
  }
  
  // eslint-disable-next-line no-unused-vars
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

const Board =()=>{

      // 🐨 squares is the state for this component. Add useState for squares
  const squares = Array(9).fill(null)

  // 🐨 We'll need the following bits of derived state:
  // - nextValue ('X' or 'O')
  // - winner ('X', 'O', or null)
  // - status (`Winner: ${winner}`, `Scratch: Cat's game`, or `Next player: ${nextValue}`)
  // 💰 I've written the calculations for you! So you can use my utilities
  // below to create these variables

  // This is the function your square click handler will call. `square` should
  // be an index. So if they click the center square, this will be `4`.
  function selectSquare(square) {
    // 🐨 first, if there's already winner or there's already a value at the
    // given square index (like someone clicked a square that's already been
    // clicked), then return early so we don't make any state changes
    //
    // 🦉 It's typically a bad idea to mutate or directly change state in React.
    // Doing so can lead to subtle bugs that can easily slip into production.
    //
    // 🐨 make a copy of the squares array
    // 💰 `[...squares]` will do it!)
    //
    // 🐨 set the value of the square that was selected
    // 💰 `squaresCopy[square] = nextValue`
    //
    // 🐨 set the squares to your copy
  }

  function restart() {
    // 🐨 reset the squares
    // 💰 `Array(9).fill(null)` will do it!
  }

  function renderSquare(i) {
    return (
      <button className="game__board--square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    )
  }

  return (
    <div>
      {/* 🐨 put the status in the div below */}
    <div className="game__status">Next player X</div>
    <div className="game__board"> 
        <div className="game__board--rowsContainer">
            <div className="game__board--row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="game__board--row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="game__board--row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <button className="game__restart" onClick={restart}>
                restart
            </button>
        </div>
    </div>
    </div>
  )

}


const Game =()=>{

    return (

        <section className="game">
            <Board />

        {/* <div className="game__history--title">Game history</div>
        <div className="game__history">
            <ol className="game__history--orderedList">
                <li > <button className="game__history--btn" >Go to game start</button> </li>
                <li > <button className="game__history--btn" >Go to move #1</button> </li>
                <li > <button className="game__history--btn" >Go to move #2</button> </li>
                <li > <button className="game__history--btn" >Go to move #3</button> </li>
                <li > <button className="game__history--btn" >Go to move #4</button> </li>
                <li > <button className="game__history--btn" >Go to move #5</button> </li>
                <li > <button className="game__history--btn" >Go to move #6</button> </li>
                <li > <button className="game__history--btn" >Go to move #7</button> </li>
                <li > <button className="game__history--btn" >Go to move #8</button> </li>
                <li > <button className="game__history--btn" >Go to move #9</button> </li>
            </ol>
        </div> */}
    </section>

    )


}

export default Game