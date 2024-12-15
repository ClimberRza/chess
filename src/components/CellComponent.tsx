import React, { FC } from 'react';
import Cell from '../models/Cell'

interface CellProps {
  cell: Cell
  selectedCell: null | Cell
  setSelectedCell: (cell: null | Cell) => void
}

const CellComponent: FC<CellProps> = ({cell}) => {
  const classes = ['cell', cell.color]
  const isPawn = cell.figure?.name === 'Пешка'

  return (
    <div 
      className={classes.join(' ')}
    >
      {cell.figure?.logo && (
        <img 
          className={isPawn ? 'pawn' : ''}
          src={cell.figure.logo} alt='figure'
        />
      )}
    </div>
  );
};

export default CellComponent;