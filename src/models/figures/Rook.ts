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
}