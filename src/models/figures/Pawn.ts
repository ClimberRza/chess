import Cell from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'
import blackPawn  from '../../assets/Black pawn.png'
import whitePawn  from '../../assets/White pawn.png'

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackPawn : whitePawn
    this.name = FigureNames.PAWN
  }
}