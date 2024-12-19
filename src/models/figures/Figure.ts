import { Colors } from '../Colors'
import logo from '../../assets/Black king.png'
import Cell from '../Cell'

export enum FigureNames {
  'FIGURE' = 'Фигура',
  'PAWN' = 'Пешка',
  'KNIGHT' = 'Конь',
  'BISHOP' = 'Слон',
  'ROOK' = 'Ладья',
  'QUEEN' = 'Ферзь',
  'KING' = 'Король'
}

export class Figure {
  color: Colors
  logo: typeof logo | null
  cell: Cell
  name: FigureNames
  id: number

  constructor(color: Colors, cell: Cell ) {
    this.cell = cell
    this.color = color
    this.cell.figure = this
    this.logo = null
    this.name = FigureNames.FIGURE
    this.id = Math.random()
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) {
      return false
    }
    return true
  }

  moveFigure(target: Cell) {
    
  }
}
