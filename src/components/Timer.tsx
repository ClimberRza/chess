import React, { FC } from 'react';
import Player from '../models/Player'
import { Colors } from '../models/Colors'

interface TimerProps {
  currentPlayer: Player | null
  restart: () => void
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
  const [whiteTime, setWhiteTime] = React.useState<number>(300)
  const [blackTime, setBlackTime] = React.useState<number>(300)
  const timer = React.useRef<ReturnType<typeof setInterval> | null>(null)

  React.useEffect(() => {
    if (timer.current) {
      clearInterval(timer.current)
    }
    timer.current = setInterval(() => {
      if (currentPlayer?.color === Colors.WHITE) {
        setWhiteTime(prev => prev - 1)
      } else {
        setBlackTime(prev => prev - 1)
      }
    }, 1000)
  }, [currentPlayer])

  function handleRestart() {
    restart()
    setBlackTime(300)
    setWhiteTime(300)
  }

  return (
    <div className='timer'>
      <div>
        <button onClick={handleRestart}>Restart game</button>
      </div>
      <h2>Чёрные - {blackTime}</h2>
      <h2>Белые - {whiteTime}</h2>
    </div>
  );
};

export default Timer;