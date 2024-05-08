import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';
import { DraftChapterList } from './list/main';

export function DraftPanel() {
  return (
    <GlassAreaContainer
      name={DraftPanel.name}
      sizeFx='w-[240px] h-full'
      className='flex flex-col'
      borderFx={borderFx['border-r']}
    >
      <DraftChapterList />
    </GlassAreaContainer>
  );
}
