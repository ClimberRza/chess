import Cell from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'
import  whiteKnight from '../../assets/White knight.png'
import  blackKnight from '../../assets/Black knight.png'

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackKnight : whiteKnight
    this.name = FigureNames.KNIGHT
  }
}