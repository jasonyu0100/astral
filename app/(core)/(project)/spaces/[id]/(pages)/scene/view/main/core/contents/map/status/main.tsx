import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesSceneStatusBody } from './body/main';

export function SpacesSceneStatus() {
  return (
    <div className='absolute top-[1rem] flex h-[8rem] w-full flex-shrink-0 flex-col items-center justify-center px-[1rem]'>
      <GlassWindowFrame className='h-full w-full items-center justify-center'>
        <GlassWindowContents className='flex h-full w-full flex-row items-center'>
          <SpacesSceneStatusBody />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
