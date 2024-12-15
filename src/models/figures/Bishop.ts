import Cell from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'
import blackBishop from '../../assets/Black bishop.png'
import whiteBishop from '../../assets/White bishop.png'

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackBishop : whiteBishop
    this.name = FigureNames.BISHOP
  }
}