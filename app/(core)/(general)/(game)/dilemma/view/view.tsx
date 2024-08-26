import { GameBoard } from './board/main';
import { GameLog } from './log/main';

export function DilemmaUi() {
  return (
    <div className='flex h-full flex-grow flex-col p-[3rem]'>
      <div className='flex h-4/5 flex-row space-x-[5rem]'>
        <GameBoard />
        <GameLog />
      </div>
      {/* <ActionBar/> */}
    </div>
  );
}
