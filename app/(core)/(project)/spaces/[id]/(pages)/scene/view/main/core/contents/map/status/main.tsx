import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { borderFx } from '@/style/data';
import { SpacesSceneStatusBody } from './body/main';

export function SpacesSceneStatus() {
  return (
    <div className='absolute bottom-[2rem] flex h-[5rem] w-full flex-shrink-0 flex-col items-center justify-center'>
      <GlassWindowFrame
        className='h-full w-[900px] items-center justify-center'
        borderFx={borderFx['border-b']}
      >
        <GlassWindowContents className='flex h-full w-full flex-row items-center'>
          <SpacesSceneStatusBody />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
