import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx } from '@/(design)/(fx)/data';
import { DraftPanelHeader } from './header/main';
import { DraftConstellationList } from './list/main';

export function DraftPanel() {
  return (
    <GlassAreaContainer
      name={DraftPanel.name}
      sizeFx='w-[300px] h-full'
      className='flex flex-col'
      borderFx={borderFx['border-r']}
    >
      <DraftPanelHeader />
      <DraftConstellationList />
    </GlassAreaContainer>
  );
}
