import React, { FC } from 'react';
import Board from '../models/Board'
import CellComponent from './CellComponent'
import Cell from '../models/Cell'
import Player from '../models/Player'
import { FigureNames } from '../models/figures/Figure'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
  currentPlayer: Player | null
  swapPlayer: () => void
  isShah: boolean
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer, isShah}) => {
  const [selectedCell, setSelectedCell] = React.useState<Cell | null>(null)
  

  React.useEffect(() => {
    document.addEventListener('contextmenu', event => {
      event.preventDefault()
    })
    document.addEventListener('mouseup', event => {
      if (event.button === 2) {
        setSelectedCell(null)
      }
    })
    
  }, [])

  React.useEffect(() => {
    highlightCells()
  }, [selectedCell])

  function click(cell: Cell) {
    if (selectedCell) {
      if (selectedCell === cell) {
        setSelectedCell(null)
      } else if (selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
        selectedCell.moveFigure(cell)
        swapPlayer()
        setSelectedCell(null)
      }
    } else {
      if (isShah) {
        if (currentPlayer?.color === cell.figure?.color 
          && cell.figure?.name === FigureNames.KING) {
            setSelectedCell(cell)
        }
      } else {
        if (cell.figure && currentPlayer?.color === cell.figure.color) {
          setSelectedCell(cell)
        }
      }
    }
  }
  
  function highlightCells() {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const boardCopy = board.getCopyBoard()
    setBoard(boardCopy)
  }

  return (
    <div>
      <h3 className='turn'>Ход игрока: {currentPlayer?.color}</h3>
      <div className='board'>
      {board.cells.map((row, index) => 
        <React.Fragment key={index}>
          {row.map(cell => 
            <CellComponent
              key={cell.id}
              cell={cell}
              isSelected={selectedCell?.x === cell.x && selectedCell?.y === cell.y}
              click={click}
            />
          )}
        </React.Fragment>
      )}
    </div>
  </div>
  );
};

export default BoardComponent;