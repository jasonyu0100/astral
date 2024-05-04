import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { borderFx, glassFx } from '@/(fx)/data';
import { FlowChapterList } from './list/main';

export function FlowPanel() {
  return (
    <GlassAreaContainer
      name={FlowPanel.name}
      sizeFx='w-[240px] h-full'
      className='flex flex-col'
      borderFx={borderFx['border-r']}
    >
      <FlowChapterList />
    </GlassAreaContainer>
  );
}
