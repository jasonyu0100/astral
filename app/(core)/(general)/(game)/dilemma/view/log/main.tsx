import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx } from '@/style/data';
import { GameDescription } from '../../description/main';
import { PhaseDraw } from '../../phase/draw/main';
import { PhaseOne } from '../../phase/one/main';
import { PhaseReveal } from '../../phase/reveal/main';
import { PhaseThree } from '../../phase/three/main';
import { PhaseTwo } from '../../phase/two/main';

export function GameLog() {
  return (
    <div className='flex h-[40rem] w-[60rem] flex-col'>
      <p className='mb-[3rem] font-extraBold text-3xl text-slate-300 '>
        P1 vs P2
      </p>
      <GlassWindowFrame className='h-full w-full p-[2rem]'>
        <GlassWindowContents className='flex  flex-col space-y-[3rem] overflow-auto'>
          <GameDescription />
          <PhaseDraw />
          <PhaseOne cards={['A', 'K', 'Q', 'P']} />
          <PhaseTwo />
          <PhaseThree />
          <PhaseReveal />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
