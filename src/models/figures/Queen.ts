import Cell from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'
import  blackQueen  from '../../assets/Black queen.png'
import  whiteQueen  from '../../assets/White queen.png'

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackQueen : whiteQueen
    this.name = FigureNames.QUEEN
  }
}