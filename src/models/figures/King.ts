import Cell from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'
import blackKing from '../../assets/Black king.png'
import whiteKing from '../../assets/White king.png'

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackKing : whiteKing
    this.name = FigureNames.KING
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }

    const dx = Math.abs(target.x - this.cell.x)
    const dy = Math.abs(target.y - this.cell.y)

    if ((dx === 1 && dy === 0) 
        || (dx === 0 && dy === 1) 
        || (dx === 1 && dy === 1)) {
      return true
    }
    
    return false
  }

  isCornered(): boolean {
    return false
  }
}