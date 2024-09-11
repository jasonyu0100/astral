import { borderFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { SpacesMapStatusBody } from './body/main';

export function SpacesMapStatus() {
  return (
    <>
      <div className='flex h-[6rem] w-full flex-shrink-0 flex-col items-center justify-center'>
        <GlassWindowFrame
          className='h-full w-[900px] items-center justify-center'
          borderFx={borderFx['border-b']}
        >
          <GlassWindowContents className='flex h-full w-full flex-row items-center'>
            <SpacesMapStatusBody />
          </GlassWindowContents>
        </GlassWindowFrame>
      </div>
    </>
  );
}
