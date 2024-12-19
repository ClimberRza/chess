import React, { FC } from 'react';
import Board from '../models/Board'

interface ILostFiguresPanel {
  board: Board
}

const LostFiguresPanel: FC<ILostFiguresPanel> = ({board}) => {
  return (
    <div className='lostFiguresPanel'>
      <div className='playerDiv'>
        <h3>Игрок Black:</h3>
        <ul>
          {board.lostWhiteFigures.map(lostFigure => (
            <li key={lostFigure.id}>
              <span>{lostFigure.name}</span>
              <img src={lostFigure.logo} alt='figure'/>
            </li>
          ))}
        </ul>
      </div>
      <div className='playerDiv'>
        <h3>Игрок White:</h3>
        <ul>
        {board.lostBlackFigures.map(lostFigure => (
            <li key={lostFigure.id}>
              <span>{lostFigure.name}</span>
              <img src={lostFigure.logo} alt='figure'/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface ILostFiguresPanel {

}

export default LostFiguresPanel