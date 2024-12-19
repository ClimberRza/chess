import React from 'react';
import './App.scss';
import BoardComponent from './components/BoardComponent'
import Board from './models/Board'
import Player from './models/Player'
import { Colors } from './models/Colors'
import LostFiguresPanel from './components/LostFiguresPanel'
import Timer from './components/Timer'

function App() {
  const [board, setBoard] = React.useState<Board>(new Board())
  const [whitePlayer, setWhitePlayer] = React.useState<Player>(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = React.useState<Player>(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = React.useState<Player | null>(null)
  const [winner, setWinner] = React.useState<Player | null>(null)
  const {isShah, isMat} = board.isKingInDanger(currentPlayer?.color)

  React.useEffect(() => {
    restart()
  }, [])

  React.useEffect(() => {
    if (isShah) {
      console.log('Шах')
    } else {
      console.log('Шаха нет')
    }
  }, [currentPlayer])
 
  function swapPlayer() {
    if (currentPlayer === whitePlayer) {
      setCurrentPlayer(blackPlayer)
    } else {
      setCurrentPlayer(whitePlayer)
    }
    
  }
  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
    setCurrentPlayer(whitePlayer)
  }
  
  return (
    <div className="App">
      <Timer 
        currentPlayer={currentPlayer}
        restart={restart}
      />
      {!!board.cells.length && (
        <BoardComponent
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
          isShah={isShah}
        />
      )}
      <LostFiguresPanel 
        board={board}
      />
    </div>
  );
}

export default App;
