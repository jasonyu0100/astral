import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';
import { VerseChapterList } from './list/main';

export function VersePanel() {
  return (
    <GlassAreaContainer
      name={VersePanel.name}
      sizeFx='w-[240px] h-full'
      className='flex flex-col'
    >
      <VerseChapterList />
    </GlassAreaContainer>
  );
}
