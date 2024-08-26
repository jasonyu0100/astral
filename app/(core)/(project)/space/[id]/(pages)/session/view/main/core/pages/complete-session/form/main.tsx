import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { GlassWindowPane } from '@/ui/(glass)/window/pane/main';
import { SpaceSessionSessionFormContents } from './contents/main';
import { SpaceSessionCompleteSessionHeader } from './header/main';

export function SpaceSessionCompleteSessionForm() {
  return (
    <GlassWindowFrame
      className='h-full max-h-[600px] max-w-[800px] flex-grow'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='flex h-full w-full flex-col'>
        <SpaceSessionCompleteSessionHeader />
        <SpaceSessionSessionFormContents />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
