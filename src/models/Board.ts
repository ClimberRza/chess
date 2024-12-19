import Cell from './Cell'
import { Colors } from './Colors'
import { Bishop } from './figures/Bishop'
import { Figure, FigureNames } from './figures/Figure'
import { King } from './figures/King'
import { Knight } from './figures/Knight'
import { Pawn } from './figures/Pawn'
import { Queen } from './figures/Queen'
import { Rook } from './figures/Rook'

class Board {
  cells: Cell[][] = []
  lostWhiteFigures: Figure[] = []
  lostBlackFigures: Figure[] = []

  initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 1) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)) // чёрные ячейки
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)) // белые ячейки
        }
      }
      this.cells.push(row)
    }
  }

  highlightCells(selectedCell: Cell | null) {
    for (let i = 0; i < 8; i++) {
      const row = this.cells[i]
      for (let j = 0; j < 8; j++) {
        const target = row[j]
        target.available = !!selectedCell?.figure?.canMove(target)
      }
    }
  }

  addLostFigure(figure: Figure) {
    if (figure.color === Colors.BLACK) {
      this.lostBlackFigures.push(figure)
    } else {
      this.lostWhiteFigures.push(figure)
    }
  }

  getCopyBoard(): Board {
    const copyBoard = new Board()
    copyBoard.cells = this.cells
    copyBoard.lostBlackFigures = this.lostBlackFigures
    copyBoard.lostWhiteFigures = this.lostWhiteFigures
    return copyBoard
  }

  getCell(x: number, y: number): Cell {
    return this.cells[y][x]
  }

  getEnemies(enemyColor: Colors) {
    const rowsWithEnemies = this.cells.filter(row => {
      for (let cell of row) {
        if (cell.figure?.color === enemyColor) {
          return true
        }
      }
    })
    const rowsWithFigures = rowsWithEnemies.map(row => {
      const res = []
      for (let cell of row) {
        if (cell.figure?.color === enemyColor) {
          res.push(cell.figure)
        }
      }
      return res
    })
    const enemyFigures = rowsWithFigures.reduce((acc, row) => {
      acc.push(...row)
      return acc
    }, [])
    return enemyFigures
  }

  getKingCell(color: Colors): Cell | undefined {
    for (let row of this.cells) {
      for (let cell of row) {
        if (cell.figure?.name === FigureNames.KING && cell.figure.color === color) {
          return cell
        }
      }
    }
  }

  isKingInDanger(currentColor: Colors | undefined): {isShah: boolean, isMat: boolean} {
    if (!currentColor) {
      return {isShah: false, isMat: false}
    }
    const currentKingCell = this.getKingCell(currentColor)!
    const currentKing = currentKingCell.figure as King
    const enemyColor = currentColor === Colors.WHITE ? Colors.BLACK : Colors.WHITE
    const enemyFigures = this.getEnemies(enemyColor)
    for (let enemy of enemyFigures) {
      if (enemy.canMove(currentKingCell)) {
        if (currentKing.isCornered()) {
          return {isShah: true, isMat: true}
        } 
        return {isShah: true, isMat: false}
      }
    }
    return {isShah: false, isMat: false}
  }

  addFigures() {
    this.addPawns()
    this.addKings()
    this.addQueens()
    this.addBishops()
    this.addKnights()
    this.addRooks()
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getCell(i, 1))
      new Pawn(Colors.WHITE, this.getCell(i, 6))
    }
  }

  private addKings() {
    new King(Colors.BLACK, this.getCell(4, 0))
    new King(Colors.WHITE, this.getCell(4, 7))
  }

  private addQueens() {
    new Queen(Colors.BLACK, this.getCell(3, 0))
    new Queen(Colors.WHITE, this.getCell(3, 7))
  }

  private addKnights() {
    new Knight(Colors.BLACK, this.getCell(1, 0))
    new Knight(Colors.BLACK, this.getCell(6, 0))
    new Knight(Colors.WHITE, this.getCell(1, 7))
    new Knight(Colors.WHITE, this.getCell(6, 7))
  }

  private addBishops() {
    new Bishop(Colors.BLACK, this.getCell(2, 0))
    new Bishop(Colors.BLACK, this.getCell(5, 0))
    new Bishop(Colors.WHITE, this.getCell(2, 7))
    new Bishop(Colors.WHITE, this.getCell(5, 7))
  }

  private addRooks() {
    new Rook(Colors.BLACK, this.getCell(0, 0))
    new Rook(Colors.BLACK, this.getCell(7, 0))
    new Rook(Colors.WHITE, this.getCell(0, 7))
    new Rook(Colors.WHITE, this.getCell(7, 7))
  }
}

export default Board