import Board from './Board'
import { Colors } from './Colors'
import { Figure } from './figures/Figure'

class Cell {
  readonly x: number
  readonly y: number
  readonly color: Colors
  figure: Figure | null
  board: Board
  available: boolean
  id: string

  constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
    this.board = board
    this.x = x
    this.y = y
    this.color = color
    this.figure = figure
    this.available = false
    this.id = String(x) + String(y)
  }
}

export default Cell