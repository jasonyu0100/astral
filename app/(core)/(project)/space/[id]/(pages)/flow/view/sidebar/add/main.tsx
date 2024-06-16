import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';

export function SpaceFlowSidebarAdd({ onClick }: { onClick: () => void }) {
  return (
    <GlassWindowFrame
      name='temp'
      roundedFx={roundedFx.rounded}
      className='aspect-[13/9] w-full flex-shrink-0'
    >
      <GlassWindowContents
        onClick={onClick}
        className='flex h-full w-full cursor-pointer flex-col items-center justify-center overflow-auto p-[1rem]'
      >
        <p className='font-permanentMarker  text-5xl text-slate-300'>+</p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
