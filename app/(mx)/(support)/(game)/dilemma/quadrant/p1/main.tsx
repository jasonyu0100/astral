import { borderFx, glassFx } from '@/(fx)/data';
import { GlassWindowContents } from '@/(lib)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { GlassWindowPane } from '@/(lib)/(glass)/window/pane/main';
import { TwoByTwo } from '../../page';

export function QuadrantP1({ gameState }: { gameState: TwoByTwo }) {
  return (
    <GlassWindowFrame
      className='aspect-square h-[20rem] w-[20rem]'
      borderFx={`${borderFx['border-l']} ${borderFx['border-b']}`}
    >
      <GlassWindowContents className='flex flex-col items-center justify-center font-extraBold text-xl text-slate-300'>
        <p>P1</p>
        <p>
          {gameState.quadrantP1.payoutA} / {gameState.quadrantP1.payoutB}
        </p>
        <p>(1x , +o)</p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
