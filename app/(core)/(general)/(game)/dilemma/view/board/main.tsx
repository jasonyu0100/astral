import { QuadrantA } from '../../quadrant/a/main';
import { QuadrantB } from '../../quadrant/b/main';
import { QuadrantP1 } from '../../quadrant/p1/main';
import { QuadrantP2 } from '../../quadrant/p2/main';

export function GameBoard() {
  return (
    <div className='flex flex-col'>
      <p className='mb-[3rem] font-extraBold text-3xl text-slate-300 '>
        Dilemma
      </p>
      <div className='flex flex-col'>
        <div className='flex flex-row'>
          <QuadrantA />
          <QuadrantP1 />
        </div>
        <div className='flex flex-row'>
          <QuadrantP2 />
          <QuadrantB />
        </div>
        <p className='mt-[2rem] font-bold text-slate-500'>
          Anti=1, Hero=2, H=B
        </p>
      </div>
    </div>
  );
}
