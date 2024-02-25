import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles } from '@/(design)/(styles)/data';
import { DraftChaptersLeftButton } from './left/main';
import { DraftChaptersRightButton } from './right/main';
import { DraftChaptersRow } from './row/main';

export function DraftChapters() {
  return (
    <GlassContainer
      displayName={DraftChapters.name}
      sizeStyle='w-full h-[80px]'
      glassStyle={backgroundStyles['glass-5']}
      className='flex h-full w-full flex-row items-center justify-center space-x-[1rem] px-[1rem]'
    >
      <DraftChaptersLeftButton />
      <DraftChaptersRow />
      <DraftChaptersRightButton />
    </GlassContainer>
  );
}
