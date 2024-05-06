import { borderFx, glassFx } from '@/(fx)/data';
import { GlassWindowContents } from '@/(lib)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { GlassWindowPane } from '@/(lib)/(glass)/window/pane/main';
import { TwoByTwo } from '../../page';

export function QuadrantB({ gameState }: { gameState: TwoByTwo }) {
  return (
    <GlassWindowFrame
      className='aspect-square h-[20rem] w-[20rem]'
      borderFx={`${borderFx['border-l']} ${borderFx['border-t']}`}
    >
      <GlassWindowContents className='flex flex-col items-center justify-center font-extraBold text-xl text-slate-300'>
        <p>B</p>
        <p>
          {gameState.quadrantB.payoutA} / {gameState.quadrantB.payoutB}
        </p>
        <p>(2x , ??)</p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
