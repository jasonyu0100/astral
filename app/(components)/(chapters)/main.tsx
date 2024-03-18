import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles } from '@/(design)/(styles)/data';
import { ChaptersLeftButton } from '../../(cx)/(process)/space/[id]/(process-stages)/(common)/chapters/left/main';
import { ChaptersRightButton } from '../../(cx)/(process)/space/[id]/(process-stages)/(common)/chapters/right/main';
import { ChaptersRow } from './row/main';

export function DraftChapters() {
  return (
    <GlassContainer
      displayName={DraftChapters.name}
      sizeStyle='w-full h-[80px]'
      glassStyle={backgroundStyles['glass-5']}
      className='flex h-full w-full flex-row items-center justify-center space-x-[1rem] px-[1rem]'
    >
      <ChaptersLeftButton />
      <ChaptersRow />
      <ChaptersRightButton />
    </GlassContainer>
  );
}
