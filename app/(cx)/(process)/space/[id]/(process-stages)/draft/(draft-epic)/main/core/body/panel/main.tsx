import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(design)/(fx)/data';
import { DraftPanelHeader } from './header/main';
import { DraftConstellationList } from './list/main';

export function DraftPanel() {
  return (
    <GlassAreaContainer
      name={DraftPanel.name}
      sizeFx='w-[240px] h-full'
      className='flex flex-col'
      borderFx={borderFx['border-r']}
    >
      <DraftPanelHeader />
      <DraftConstellationList />
    </GlassAreaContainer>
  );
}
