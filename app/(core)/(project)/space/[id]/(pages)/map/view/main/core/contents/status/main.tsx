import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { SpaceMapStatusBody } from './body/main';
import { SpaceMapStatusSceneNavigation } from './navigation/main';

export function SpaceMapCoreContentsStatus() {
  return (
    <div className='flex h-[14rem] w-full flex-shrink-0 flex-col items-center justify-center p-[2rem] pt-[4rem]'>
      <HorizontalDivider />
      <GlassWindowFrame className='h-full w-full items-center justify-center p-[2rem]'>
        <GlassWindowContents className='flex h-full w-full flex-row items-center'>
          <SpaceMapStatusBody />
          <SpaceMapStatusSceneNavigation />
        </GlassWindowContents>
      </GlassWindowFrame>
      <HorizontalDivider />
    </div>
  );
}
