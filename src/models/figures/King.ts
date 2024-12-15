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
}