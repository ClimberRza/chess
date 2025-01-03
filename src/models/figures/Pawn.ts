import Cell from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'
import blackPawn  from '../../assets/Black pawn.png'
import whitePawn  from '../../assets/White pawn.png'

export class Pawn extends Figure {
  isFirstStep: boolean = true

  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackPawn : whitePawn
    this.name = FigureNames.PAWN
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }

    const direction = this.color === Colors.BLACK ? 1 : -1
    const firstStepDirection = this.color === Colors.BLACK ? 2 : -2
    
    if ((target.y === this.cell.y + direction || 
        (this.isFirstStep && (target.y === this.cell.y + firstStepDirection)))
        && this.cell.isEmptyVertical(target)
        && target.x === this.cell.x
        && this.cell.board.getCell(target.x, target.y).isEmpty()) {
      return true
    }

    if (target.y === this.cell.y + direction
        && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
        && this.cell.isEnemy(target)) {
      return true
    }

    return false
  }

  moveFigure(target: Cell) {
    super.moveFigure(target)
    this.isFirstStep = false
  }
}