import React, { FC } from 'react';
import Cell from '../models/Cell'

interface CellProps {
  cell: Cell
  isSelected: boolean
  click: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({cell, isSelected, click}) => {
  const classes = ['cell', cell.color]
  const isPawn = cell.figure?.name === 'Пешка'
  const isAvailableForFigure = !!(cell.available && cell.figure)

  if (isSelected) {
    classes.push('selected')
  }
  if (isAvailableForFigure) {
    classes.push('ableForFigure')
  }


  return (
    <div 
      className={classes.join(' ')}
      onClick={() => click(cell)}
    >
      {cell.available && !cell.figure && <div className="available" />}
      {cell.figure?.logo && (
        <img
          draggable={false}
          className={isPawn ? 'pawn' : ''}
          src={cell.figure.logo} alt='figure'
        />
      )}
    </div>
  );
};

export default CellComponent;