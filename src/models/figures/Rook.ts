import Cell from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'
import blackRook from '../../assets/Black rook.png'
import whiteRook from '../../assets/White rook.png'

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackRook : whiteRook
    this.name = FigureNames.ROOK
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    if (this.cell.isEmptyVertical(target)) {
      return true
    }
    if (this.cell.isEmptyHorizontal(target)) {
      return true
    }
    return false
  }
}